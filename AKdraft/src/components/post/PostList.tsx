import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://akatsukis-draft-backend.onrender.com/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  }, []);

  return (
    <div className="relative bg-[#09090b] min-h-screen p-6 overflow-hidden">

      {/* Gradient Blobs */}
      <div className="absolute w-72 h-72 bg-red-800 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-red-700 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>
      <div className="absolute w-60 h-60 bg-red-900 rounded-full blur-3xl opacity-10 top-1/2 left-1/3"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {posts.map((post: any) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

    </div>
  );
};

export default PostList;