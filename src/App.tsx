import { useState } from "react";
import { SiteList } from "./siteList";

function App() {
  const [category, setCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "design", name: "Design" },
    { id: "writing", name: "Writing" },
    { id: "development", name: "Development" },
  ];

  return (
    <div className="w-96 bg-black p-4">
      <h1 className="text-2xl font-bold text-white/90 mb-4">Freelance hubs</h1>

      <div
        className="flex gap-2 mb-4 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              category === cat.id
                ? "bg-primary text-white"
                : "text-white/70 hover:bg-gray-200 hover:text-primary"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <SiteList category={category} />
    </div>
  );
}

export default App;
