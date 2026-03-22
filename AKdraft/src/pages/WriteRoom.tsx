const WriteRoom = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-4xl mt-1 bg-white rounded-2xl shadow-md p-7">
        
        
        <h1 className="text-7xl font-semibold mb-4 text-gray-800">
          Write Room
        </h1>

        <hr className="mb-4" />

       
        <h2 className="text-3xl font-medium mb-3 text-gray-700">
          Create a New Post
        </h2>

       
        <div className="mb-3">
          
          <input
          placeholder="Title"
            id="title"
            type="text"
            className="w-full border text-3xl rounded-md px-5 py-5 outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        
        <div className="flex items-center gap-3 border rounded-t-md px-3 py-2 text-gray-600 text-sm bg-gray-50">
          <span className="font-bold">B</span>
          <span className="italic">I</span>
          <span className="underline">U</span>
        </div>

        
        <div className="mb-4">
          <textarea
            aria-label="content"
            rows={6}
            className="w-full border h-100 border-t-0 rounded-b-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Upload */}
        <button className="flex items-center text-2xl gap-2 border px-8 py-3 rounded-md mb-3 hover:bg-gray-100 transition">
          ⬆ Upload Image
        </button>

        {/* Category */}
        <div className="mb-6">
          <select
            aria-label="Category"
            id="category"
            className="w-full border text-2xl h-20 px-5 py-3 rounded-md outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="">Select Category</option>
            <option value="anime">Anime</option>
            <option value="movies">Movies</option>
            <option value="series">Series</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button className="px-7 py-4 text-2xl border rounded-md hover:bg-gray-100 transition">
            Discard
          </button>

          <button className="px-7 py-4 text-2xl bg-red-600 text-white rounded-md hover:bg-red-700 transition">
            Post
          </button>
        </div>

      </div>
    </div>
  );
};

export default WriteRoom;