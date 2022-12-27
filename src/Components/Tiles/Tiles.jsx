import React from "react";
import { MdArrowForward } from "react-icons/md";
import './tiles.scss'
export const Tiles = () => {
  return (
   <div className="cardWrapper">
     <div className="card">
    <div className=" card-header"> <h4 className="card-title">Title</h4></div>
    <div className="card-body">
     
      <p className="card-text">Body</p>
    </div>
    
    <div className="card-footer">
      <a className="cardlink" href="/">
        View Details
      </a>
      <div className="small text-white"><MdArrowForward></MdArrowForward></div>
    </div>
  </div>
   </div>
  );
};
