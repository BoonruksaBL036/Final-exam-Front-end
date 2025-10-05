import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import ComicService from "../services/comic.service";

const AddComic = () => {
  const navigate = useNavigate();
  const [comic, setComics] = useState({
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
  const handlechange = (e) => {
    const { name, value } = e.target;
    setComics({ ...comic, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await ComicService.createComics(comic);
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Comics added successfully!!",
        });
        setComics({
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
        navigate("/comics");
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
          <legend className="fieldset-legend text-2xl ">Add Comics</legend>

          <label className="label"> Title : </label>
          <input
            type="text"
            name="title"
            value={comic.title}
            className="input w-full"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">Author </label>
          <input
            type="text"
            name="author"
            value={comic.author}
            className="input w-full"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">category</label>
          <input
            type="text"
            value={comic.category}
            name="category"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">PublishYear</label>
          <input
            type="number"
            value={comic.publishYear}
            name="publishYear"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">isbn</label>
          <input
            type="text"
            value={comic.isbn}
            name="isbn"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

            <label className="label">series</label>
          <input
            type="text"
            name="series"
            value={comic.series}
            className="input w-full"
            placeholder=""
            onChange={handlechange}
          />

          <label className="label">VolumeNumber</label>
          <input
            type="text"
            value={comic.volume}
            name="volume"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">illustrator</label>
          <input
            type="text"
            value={comic.illustrator}
            name="illustrator"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">ColorType</label>
          <input
            type="text"
            value={comic.colorType}
            name="colorType"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">targetAge</label>
          <input
            type="text"
            value={comic.targetAge}
            name="targetAge"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">description </label>
          <input
            type="text"
            name="type"
            value={comic.type}
            className="input w-full"
            placeholder="Book Type"
            onChange={handlechange}
          />

          <label className="label"> Image : </label>
          <input
            type="text"
            value={comic.coverImage}
            className="input w-full"
            onChange={handlechange}
            placeholder="Comics Img"
            name="coverImage"
          />
          {comic.coverImage && (
            <div className="flex items-center gap-2">
              <img className="h-32 " src={comic.coverImage} />
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

export default AddComic;
