import { AuthContext } from "@/Auth";
import PostList from "@/components/post/PostList";
import { useContext } from "react";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  console.log("The current user");

  console.log(user);
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl">Current Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
