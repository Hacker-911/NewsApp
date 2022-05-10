import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0px" }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/img/2022/04/26/1600x900/cbse-class-10-12-exams-begin_9806f424-62e7-11e8-a998-12ee0acfa260_1650961102038.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>

          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
