import React from "react";

function Pins({ pinSize, imgSrc, name, link }) {
  return (
    <div className={`pin ${pinSize}`}>
      <img src={imgSrc} alt="" className="mainPic" />

      <div className="content">
        <h3>{name}</h3>
        <div className="search">
          <a href={link}>
            <img
              src=""
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pins;