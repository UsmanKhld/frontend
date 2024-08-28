import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./ScDetails.css";

export const ScDetails = (props) => {
  const { sch, isFav, onToggleFavorite, onClick } = props;

  return (
    <div>
      <ol>
        <li className="sc_item text-lg">
          <FontAwesomeIcon
            onClick={onToggleFavorite}
            icon={isFav ? faHeartCircleCheck : faHeart}
            className="col-span-1 fa-2x heart-icon hover:scale-125 transition-all hover:cursor-pointer"
          />
          <span className=" ">{sch.due}</span>
          <span className="col-span-3">{sch.title}</span>
          <span className=" ">${sch.amount}</span>
          <span
            className=" text-base hover:underline hover:text-blue-700 hover:cursor-pointer transition-all"
            onClick={onClick}
          >
            Details...
          </span>
          <a href={sch.apply}>
            <button className=" bg-blue-200 hover:bg-blue-400 transition-all">
              Apply
            </button>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default ScDetails;
