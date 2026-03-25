import Card from "../common/Card";
import { Heart, Calendar, MessageSquare } from "lucide-react"; // install lucide-react or use SVGs

const PostCard = ({ post }: any) => {
  return (
    <div className="bg-[#18181b] rounded-xl overflow-hidden shadow-xl border border-zinc-800 transition-transform hover:scale-[1.01]">
      {/* Image & Badge Section */}
      <div className="relative">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-44 object-cover"
          />
        ) : (
          <div className="w-full h-44 bg-zinc-800 flex items-center justify-center text-zinc-500">No Image</div>
        )}
        
        {/* Category Badge - Positioned like the UI */}
        <div className="absolute bottom-3 left-3 bg-[#b91c1c] text-white text-[10px] font-bold px-3 py-1 rounded shadow-md uppercase">
          {post.category || "Story"}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-white font-bold text-lg leading-tight truncate w-[85%]">
            {post.title || "No Title"}
          </h2>
          <Heart className="w-5 h-5 text-red-600 fill-current" />
        </div>

        {/* Footer Meta */}
        <div className="flex items-center justify-between mt-4 text-zinc-400 text-xs">
          <div className="flex items-center gap-1 italic">
            <Calendar className="w-3 h-3" />
            <span>22 Mar ago</span> {/* Replace with dynamic date if available */}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>1</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              <span>{post.comments?.length || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;