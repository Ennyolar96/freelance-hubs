import { useMemo, useState, type ChangeEvent } from "react";
import { sites } from "./data";
import { filter, orderBy } from "lodash";
import type { Site } from "./interface/site";

export const SiteList = ({ category }: { category: string }) => {
  const [data, setData] = useState<Site[]>([]);

  const orderValue = (value: Site[]) => {
    return orderBy(value, ["name"], ["asc"]);
  };

  useMemo(() => {
    if (category === "all") {
      const newData = orderValue(sites);
      return setData(newData);
    }
    const categories = sites.filter((site) =>
      site.categories.includes(category)
    );
    const newData = orderValue(categories);
    return setData(newData);
  }, [category]);

  const openSite = (url: string) => {
    if (window.chrome && chrome.tabs) {
      chrome.tabs.create({ url, active: true });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = filter(sites, (list) =>
      list.name.toLowerCase().includes(value.toLowerCase())
    );

    const sorted = orderValue(filtered);
    setData(sorted);
  };

  return (
    <div
      className="space-y-4 h-96 overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div>
        <input
          type="search"
          name=""
          id=""
          onChange={onChange}
          placeholder="Search your freelance website"
          className="w-full h-12 border outline-none border-white/20 rounded-lg text-white placeholder:text-white/60 p-3"
        />
      </div>
      <div className="space-y-3">
        {data.map((site) => (
          <button
            key={site.id}
            onClick={() => openSite(site.url)}
            className="w-full flex items-center p-3 bg-dark border rounded-lg hover:bg-primary transition-colors duration-200 shadow-sm"
          >
            <img
              src={site.image}
              alt={site.name}
              className="bg-gray-200 border-2 rounded w-10 h-10 mr-3"
            />
            <div className="text-left">
              <h5 className="font-medium text-base text-white/80">
                {site.name}
              </h5>
              <p className="line-clamp-1 text-sm text-gray-600">
                {site.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
