import Header from "../header/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex p-[5%] flex-col">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p>
          This project provides rewards to users of a website based on the
          actions they perform within the website. These may include posting,
          commenting, like or disliking among others. Based on the number of
          points a user has, the website will allow Role-Based Access Control
          (RBAC) to the user automatically assigning users moderator access.
          This access will allow a moderator to edit posts and delete comments.
        </p>
      </div>
    </div>
  );
};

export default About;
