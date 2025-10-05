import React, { useEffect, useState } from "react";
import JournalService from "../services/journal.service.js";
import Card from "../components/Card";
import swal from "sweetalert2";
import ItemService from "../services/item.service.js";
import { Link } from "react-router";

const Journals = () => {
  const [items, setItem] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

  const handleSearch = async (keyword) => {
    if (keyword === "") {
      setFilterItems(items);
      return;
    }
    const result = await ItemService.search(keyword);
    setFilterItems(result.data.data);
  };
  const getAllJournals = async () => {
    try {
      const response = await JournalService.getAllJournals();

      if (response.status === 200) {
        setItem(response.data.data);
        setFilterItems(response.data.data);
      }
    } catch (error) {
      swal.fire({
        title: "Get All Items",
        text: error?.response?.data?.message || error.message,
      });
    }
  };
  useEffect(() => {
    getAllJournals();
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-center gap-5">
        <label className="input flex item-center gap-2 w-5xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="keyword"
            onChange={(e) => handleSearch(e.target.value)}
            required
            placeholder="Search"
          />
        </label>
        <Link to={"/add-journal"} className="btn btn-primary">Add </Link>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {filterItems &&
          filterItems.map((item) => (
            <Card
              key={item.itemId}
              itemId={item.itemId}
              title={item.author}
              author={item.author}
              coverImage={item.coverImage}
              description={item.description}
              itemType={item.itemType}
            />
          ))}
      </div>
    </div>
  );
};

export default Journals;
