import PostList from "@/components/post/PostList";

const HomePage = () => {
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
