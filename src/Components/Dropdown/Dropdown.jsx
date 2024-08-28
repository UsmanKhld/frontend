import React, { useState } from "react";
import {
  faCircleArrowUp,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dropdown.css";

export const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const { data, setFilter } = props;

  const handleFClick = (filter) => {
    console.log("handleFClick called with filter:", filter);
    const parsedFilter = parseFloat(filter, 10); // Convert the string filter to a float
    setFilter(parsedFilter);
    setSelectedFilter(parsedFilter);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative ">
      <div
        className="dropdown_container hover:cursor-pointer hover:shadow-lg hover:shadow-blue-300 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.title}: {selectedFilter}
        <FontAwesomeIcon
          className="flex justify-end mr-2 mt-1"
          icon={isOpen ? faCircleArrowUp : faCircleArrowDown}
        />
      </div>
      {isOpen && (
        <div className="dropdown_menu absolute scrollbar-thin overflow-y-auto">
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => handleFClick(item.filter)}
              className=" px-1 py-1 hover:cursor-pointer hover:border hover:border-black hover:rounded-md hover:bg-white"
            >
              <div>{item.filter}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
