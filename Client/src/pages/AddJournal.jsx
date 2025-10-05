import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import JournalService from "../services/journal.service";

const AddJournal = () => {
  const navigate = useNavigate();
  const [journal, setJournal] = useState({
    title: "",
    author: "",
    category: "",
    publishYear: 0,
    issn: "",
    volume: "",
    issue: "",
    publicationFrequency: "",
    publisher: "",
    description: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setJournal({ ...journal, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await JournalService.createNewJournals(journal);
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Journal added successfully!!",
        });
        setJournal({
          title: "",
          author: "",
          category: "",
          publishYear: 0,
          issn: "",
          volume: "",
          issue: "",
          publicationFrequency: "",
          publisher: "",
          description: "",
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
          <legend className="fieldset-legend text-2xl ">Add Journal</legend>

          <label className="label">Journal Title : </label>
          <input
            type="text"
            name="title"
            value={journal.title}
            className="input w-full"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">Author </label>
          <input
            type="text"
            name="author"
            value={journal.author}
            className="input w-full"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">category</label>
          <input
            type="text"
            value={journal.category}
            name="category"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">PublishYear</label>
          <input
            type="number"
            value={journal.publishYear}
            name="publishYear"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">issn</label>
          <input
            type="text"
            value={journal.issn}
            name="issn"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">volume </label>
          <input
            type="text"
            name="volume"
            value={journal.volume}
            className="input w-full"
            placeholder=" Type"
            onChange={handlechange}
          />

             <label className="label">issue</label>
          <input
            type="text"
            value={journal.issue}
            name="issue"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">publicationFrequency</label>
          <input
            type="text"
            value={journal.publicationFrequency}
            name="publicationFrequency"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">publisher</label>
          <input
            type="text"
            value={journal.publisher}
            name="publisher"
            className="input"
            placeholder=""
            onChange={handlechange}
            required
          />

          <label className="label">description </label>
          <input
            type="text"
            name="type"
            value={journal.type}
            className="input w-full"
            placeholder="Journal Type"
            onChange={handlechange}
          />

          <label className="label"> Image : </label>
          <input
            type="text"
            value={journal.coverImage}
            className="input w-full"
            onChange={handlechange}
            placeholder="Book Img"
            name="coverImage"
          />
          {journal.coverImage && (
            <div className="flex items-center gap-2">
              <img className="h-32 " src={journal.coverImage} />
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

export default AddJournal;
