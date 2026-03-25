import Navbar from "../components/common/Navbar";

const WriteRoom = () => {
  return (
    <div className="bg-[#09090b] min-h-screen relative overflow-hidden text-white">
      
      <Navbar />

      {/* Background Glow */}
      <div className="absolute w-60 h-60 bg-red-800 blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-60 h-60 bg-red-700 blur-3xl opacity-20 bottom-10 right-10"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center px-4 py-6">
        
        <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-md p-5">
          
          {/* Heading */}
          <h1 className="text-3xl font-semibold mb-3">
            Write Room
          </h1>

          <hr className="mb-3 border-zinc-700" />

          {/* Subheading */}
          <h2 className="text-lg font-medium mb-2 text-zinc-300">
            Create a New Post
          </h2>

          {/* Title */}
          <div className="mb-2">
            <input
              placeholder="Title"
              id="title"
              type="text"
              className="w-full bg-zinc-800 border border-zinc-700 text-lg rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-3 border border-zinc-700 rounded-t-md px-3 py-2 text-zinc-400 text-sm bg-zinc-800">
            <span className="font-bold cursor-pointer hover:text-white">B</span>
            <span className="italic cursor-pointer hover:text-white">I</span>
            <span className="underline cursor-pointer hover:text-white">U</span>
          </div>

          {/* Content */}
          <div className="mb-3">
            <textarea
              aria-label="content"
              rows={5}
              className="w-full bg-zinc-800 border border-zinc-700 border-t-0 rounded-b-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Upload */}
          <button className="flex items-center text-base gap-2 border border-zinc-700 px-5 py-2 rounded-md mb-3 hover:bg-zinc-800 transition">
            ⬆ Upload Image
          </button>

          {/* Category */}
          <div className="mb-4">
            <select
              aria-label="Category"
              id="category"
              className="w-full bg-zinc-800 border border-zinc-700 text-base px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Category</option>
              <option value="anime">Anime</option>
              <option value="movies">Movies</option>
              <option value="series">Series</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 text-sm border border-zinc-600 rounded-md hover:bg-zinc-800 transition">
              Discard
            </button>

            <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              Post
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WriteRoom;