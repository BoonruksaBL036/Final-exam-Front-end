import React, { useState } from "react";
import BookService from "../services/book.service";

const Add = () => {
  const [Book, setBook] = useState({
    title: "",
    author: "",
    coverImage: "",
    description: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setBook({ ...Book, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await BookService.createNewBook(Book);
      if (response.status === 200) {
        alert("Book added successfully!!");
        setBook({
          title: "",
          author: "",
          coverImage: "",
          description: "",
        });
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-1/4 border p-4 shadow-xl h-auto gap-3">
          <legend className="fieldset-legend text-2xl ">Add Book</legend>

          <label className="label">Book Title : </label>
          <input
            type="text"
            name="title"
            value={Book.title}
            className="input w-full"
            placeholder="Book Title"
            onChange={handlechange}
          />

          <label className="label">Author </label>
          <input
            type="text"
            name="type"
            value={Book.type}
            className="input w-full"
            placeholder="Book Type"
            onChange={handlechange}
          />

          <label className="label"> Image : </label>
          <input
            type="text"
            value={Book.img}
            className="input w-full"
            onChange={handlechange}
            placeholder="Book Img"
            name="img"
          />
          {Book.img && (
            <div className="flex items-center gap-2">
              <img className="h-32 " src={Book.img} />
            </div>
          )}

          <label className="label">description </label>
          <input
            type="text"
            name="type"
            value={Book.type}
            className="input w-full"
            placeholder="Book Type"
            onChange={handlechange}
          />

          <div className="grid grid-cols-2 gap-2">
            <button className="btn btn-success" onClick={handleSubmit}>
              Add
            </button>
            <button className="btn btn-error">Cancel</button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Add;
