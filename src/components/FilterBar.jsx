import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearchChange,
  showSearch = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearchChange) {
      onSearchChange(query);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Filter - Mobile */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-deep-blue text-white px-4 py-2 rounded-md"
          >
            <span>{selectedCategory === "All" ? "All Categories" : categories.find(c => c.id === selectedCategory)?.name || "All Categories"}</span>
            <ChevronDown size={20} />
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 py-1">
              <button
                onClick={() => {
                  onCategoryChange("All");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                  selectedCategory === "All"
                    ? "text-gold font-medium"
                    : "text-dark-gray"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryChange(category.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    selectedCategory === category.id
                      ? "text-gold font-medium"
                      : "text-dark-gray"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Filter - Desktop */}
        <div className="hidden md:flex items-center space-x-2 overflow-x-auto pb-2">
          <button
            onClick={() => onCategoryChange("All")}
            className={`px-4 py-1.5 rounded-full transition-colors duration-300 whitespace-nowrap ${
              selectedCategory === "All"
                ? "bg-deep-blue text-white"
                : "bg-gray-100 text-dark-gray hover:bg-gray-200"
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-1.5 rounded-full transition-colors duration-300 whitespace-nowrap ${
                selectedCategory === category.id
                  ? "bg-deep-blue text-white"
                  : "bg-gray-100 text-dark-gray hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search Filter */}
        {showSearch && (
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full md:w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-deep-blue"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar; 