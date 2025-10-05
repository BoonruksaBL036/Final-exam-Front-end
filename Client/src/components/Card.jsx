import React from 'react'
import { Link } from 'react-router';

const Card = (props) => {
    const { title, author, coverImage, description,itemType,itemId } = props;
  return (
    <>
      <div className="card lg:card-side bg-base-100 w-full shadow-sm ">
        <figure className=" w-[150px]">
          <img src={coverImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="truncate text-ellipsis w-[200px] card-title">{title}</h2>
          <p className='truncate text-ellipsis w-[200px]'>{description}</p>
          <div className="card-actions justify-end">
            <p>{author}</p>
            <Link to={`/${itemType.toLowerCase()}/${itemId}`} className="btn btn-primary">Read</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card
