import { useRef } from "react";

const WriteRoom = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null); // ✅ FIX

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6">
        
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Write Room
        </h1>

        <input
          placeholder="Title..."
          className="w-full text-2xl font-medium mb-4 outline-none border-b pb-2 focus:border-red-400"
        />

        <div className="flex gap-4 text-gray-500 text-sm mb-2">
          <button className="font-bold hover:text-black">B</button>
          <button className="italic hover:text-black">I</button>
          <button className="underline hover:text-black">U</button>
        </div>

        <textarea
          ref={textareaRef}
          onInput={handleInput}
          placeholder="Start writing your story..."
          rows={1}
          className="w-full outline-none resize-none text-gray-700 mb-4 overflow-hidden"
        />

        <div className="flex items-center justify-between mb-4">
          <button className="text-sm border px-3 py-1 rounded-md hover:bg-gray-100">
            ⬆ Upload Image
          </button>

          <select className="text-sm border px-3 py-1 rounded-md outline-none">
            <option value="">Category</option>
            <option value="anime">Anime</option>
            <option value="movies">Movies</option>
            <option value="series">Series</option>
          </select>
        </div>

        <div className="flex justify-end gap-3">
          <button className="text-sm px-4 py-2 border rounded-md hover:bg-gray-100">
            Discard
          </button>

          <button className="text-sm px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Publish
          </button>
        </div>

      </div>
    </div>
  );
};

export default WriteRoom;
