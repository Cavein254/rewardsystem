import express from "express";
import passport from "../auth/passport";
import prisma from "../lib/prisma";

const authRouter = express.Router();

authRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
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
      include: {
        profile: true,
      },
    });
    if (user.profile?.[0]?.id) {
      const credentials = {
        userId: user.id,
        profileId: user.profile[0].id,
      };
      res.cookie("credentials", credentials, { httpOnly: true });
      res.writeHead(302, {
        location: process.env.FRONTEND_REDIRECT_URL as string,
      });
      res.end();
    } else {
      //user has no profile. User needs to be forced to create one
      const credentials = {
        userId: user.id,
      };
      res.cookie("credentials", credentials, { httpOnly: true });
      res.redirect(process.env.FRONTEND_PROFILE_REDIRECT_URL as string);
      res.end();
    }
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
