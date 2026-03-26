import { useEffect, useState } from "react";
import { getPosts } from "../utils/localStorage";
import type { Post } from "../types/post";
import Navbar from "../components/common/Navbar";

const Vault = () => {
  const [activeTab, setActiveTab] = useState<"saved" | "liked" | "mine">(
    "saved",
  );
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedPosts = getPosts();
    setPosts(storedPosts);
  }, []);

  // ⚠️ Since you don't have saved/liked fields yet
  // For now all tabs show same data (you can change later)
  const filteredPosts = posts;

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-6">
       {/* Background Glow */}
      <div className="absolute w-60 h-60 bg-red-800 blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-60 h-60 bg-red-700 blur-3xl opacity-20 bottom-10 right-10"></div>
      <div className="max-w-3xl mx-auto bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 shadow-xl">
        {/* Title */}
        <h1 className="text-xl font-semibold mb-4">Personal Vault</h1>

        {/* Tabs */}
        <div className="flex bg-zinc-800 rounded-lg p-1 mb-5">
          {[
            { key: "mine", label: "My Posts" },
            { key: "liked", label: "Liked Posts" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex-1 py-2 rounded-md text-sm transition ${
                activeTab === tab.key
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {filteredPosts.length === 0 && (
            <p className="text-gray-500 text-sm text-center py-6">
              No posts found
            </p>
          )}

          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-3 hover:bg-zinc-800/60 transition cursor-pointer"
            >
              {/* Image */}
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ) : (
                <div className="w-20 h-20 bg-zinc-800 rounded-lg flex items-center justify-center text-xs text-gray-500">
                  No Image
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-sm font-semibold">{post.title}</h2>

                <p className="text-xs text-gray-400 line-clamp-2">
                  {post.content}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span>{post.createdAt}</span>

                  <span className="bg-red-600/20 text-red-400 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Right Icon (UI only for now) */}
              <div className="text-red-500 text-lg">♥</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Vault;