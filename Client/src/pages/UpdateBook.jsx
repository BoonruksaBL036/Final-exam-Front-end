import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import BookService from "../services/book.service";
import { useNavigate, useParams } from "react-router";

const UpdateBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const { id } = useParams();
  
  const handlechange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  useEffect(() => {
    try {
      const fetchItemById = async () => {
        const response = await BookService.getBookById(id);
        setBook(response.data.data);
        return response;
      };
      fetchItemById();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }, [id]);

  const handleSubmit = async () => {
    try {
      const response = await BookService.updateBookById(id, book);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Book added successfully!!",
        });
        setBook({
          title: "",
          author: "",
          category: "",
          publishYear: 0,
          isbn: "",
          status: "AVAILABLE",
          coverImage: "",
          description: "",
          location: "",
          addedDate: Date().now,
          itemType: "",
          publisher: "",
          edition: "",
          pageCount: 0,
          language: "",
          genre: "",
        });
        navigate("/books");
      }
    } catch (error) {
      console.log("ERROR: ", error);
      Swal.fire({
        icon: "error",
        title: "Added failed!",
        text: "Invalid data",
      });
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-1/4 border p-4 shadow-xl h-auto gap-3">
          <legend className="fieldset-legend text-2xl ">Update Book</legend>

          <label className="label">Book Title : </label>
          <input
            type="text"
            name="title"
            value={book.title}
            className="input w-full"
            placeholder="Book Title"
            onChange={handlechange}
            required
          />

          <label className="label">Author </label>
          <input
            type="text"
            name="author"
            value={book.author}
            className="input w-full"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">category</label>
          <input
            type="text"
            value={book.category}
            name="category"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">PublishYear</label>
          <input
            type="number"
            value={book.publishYear}
            name="publishYear"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">isbn</label>
          <input
            type="text"
            value={book.isbn}
            name="isbn"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">description </label>
          <input
            type="text"
            name="type"
            value={book.type}
            className="input w-full"
            placeholder="Book Type"
            onChange={handlechange}
          />

          <label className="label">location</label>
          <input
            type="text"
            value={book.location}
            name="location"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">itemType</label>
          <input
            type="text"
            value={book.itemType}
            name="itemType"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">publisher</label>
          <input
            type="text"
            value={book.publisher}
            name="publisher"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">edition</label>
          <input
            type="text"
            value={book.edition}
            name="edition"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">pageCount</label>
          <input
            type="number"
            value={book.pageCount}
            name="pageCount"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">language</label>
          <input
            type="text"
            value={book.language}
            name="language"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">genre</label>
          <input
            type="text"
            value={book.genre}
            name="genre"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label"> Image : </label>
          <input
            type="text"
            value={book.coverImage}
            className="input w-full"
            onChange={handlechange}
            placeholder="Book Img"
            name="coverImage"
          />
          {book.coverImage && (
            <div className="flex items-center gap-2">
              <img className="h-32 " src={book.coverImage} />
            </div>
          )}

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

export default UpdateBook;
