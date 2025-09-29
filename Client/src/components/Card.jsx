import React from 'react'

const Card = (props) => {
    const { title, author, coverImage, description } = props;
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={coverImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <p>{author}</p>
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card
