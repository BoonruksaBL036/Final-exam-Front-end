import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import BookService from "../services/book.service";
import JournalService from "../services/journal.service";
import ComicService from "../services/comic.service";
import swal from "sweetalert2";

const ItemDetail = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (!(type == "book" || type == "journal" || type == "comic")) {
      navigate("/not-found");
    }
  });

  useEffect(() => {
    try {
      const fetchItemById = async () => {
        let response;
        if (type == "book") {
          response = await BookService.getBookById(id);
        }

        if (type == "journal") {
          response = await JournalService.getJournalById(id);
        }

        if (type == "comic") {
          response = await ComicService.getComicById(id);
        }

        setItem(response.data.data);

        return response;
      };
      fetchItemById();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }, [id]);

  const handleDelete = () => {
    swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        let response;
        if (type == "book") {
          response = BookService.deleteBookById(id);
        }
        if (type == "journal") {
          response = JournalService.deleteJournalById(id);
        }
        if (type == "comic") {
          response = ComicService.deleteComicById(id);
        }
        navigate(`/`);
        return response;
      }
    });
  };

  return (
    <div className="flex justify-center">
      {item && (
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={item.coverImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <p>PageCount : {item.pageCount}</p>
            <div className="card-actions">
              <Link
                to={`/update/${item.itemType}/${item.itemId}`}
                className="btn btn-warning"
              >
                Update
              </Link>
              <button onClick={handleDelete} className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
