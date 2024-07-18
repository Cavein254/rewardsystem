import { AuthContext } from "@/Auth";
import PostList from "@/components/post/PostList";
import { GET_ALL_POSTS } from "@/graphql/operations/query/posts";
import { useQuery } from "@apollo/client";
import { useContext } from "react";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const { data } = useQuery(GET_ALL_POSTS);
  if (!data) {
    return <h1>There are Currently no posts</h1>;
  }

  const allPosts = data?.getAllPosts.map((post) => (
    <PostList key={post.id} post={post} />
  ));
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl">Current Posts</h1>
        <div>{allPosts}</div>
      </div>
    </div>
  );
};

export default HomePage;
