import express from "express";
import passport from "../auth/passport";
import prisma from "../lib/prisma";

const authRouter = express.Router();

authRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

authRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    const email = (await req?.user) ? req?.user?.email : undefined;
    if (!email) {
      return res.redirect("/login");
    }
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    res.cookie("credentials", user, { httpOnly: true });
    res.redirect(process.env.FRONTEND_PROFILE_REDIRECT_URL as string);
    res.end();
  }
);

authRouter.get("/api/user", async (req, res) => {
  const userData = req?.cookies?.credentials;
  if (!userData) {
    res.status(200).send(null);
  } else {
    try {
      const data = await prisma.user.findUnique({
        where: {
          id: userData.id,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

authRouter.get("/api/status", async (req, res) => {
  return res.json({
    status: "ok",
  });
});

authRouter.get("/logout", (req, res) => {
  res.clearCookie("credentials");
  req.session?.destroy((err) => {
    if (err) {
      throw new Error(err);
    }
    res.redirect(process.env.FRONTEND_REDIRECT_URL as string);
  });
});
export default authRouter;
