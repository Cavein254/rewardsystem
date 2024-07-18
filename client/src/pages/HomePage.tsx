import PostItem from "@/components/post/PostItem";
import { GET_ALL_POSTS } from "@/graphql/operations/query/posts";
import { useQuery } from "@apollo/client";

const HomePage = () => {
  const { data } = useQuery(GET_ALL_POSTS);
  if (!data) {
    return <h1>There are Currently no posts</h1>;
  }

  const allPosts = data?.getAllPosts.map((post) => (
    <PostItem key={post.id} post={post} />
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
