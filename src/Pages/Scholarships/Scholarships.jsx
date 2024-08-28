import React, { useState, useEffect } from "react";
import { main } from "./crawler.js";
import { Navbar, ScDetails, Dropdown, ScItem } from "../../Components/index";
import {
  faCircleArrowUp,
  faCircleArrowDown,
  faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GPA, SAT, ACT, Race, Major, State } from "./filters.js";
import "./Scholarships.css";

export const Scholarships = ({ scholarships, favorites, onToggleFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSorted, setIsSorted] = useState(false);
  const [isAmounttSorted, setIsAmountSorted] = useState(false);
  const [sortedScholarships, setSortedScholarships] = useState([]);
  const [gpaFilter, setGpaFilter] = useState(4);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [satFilter, setSatFilter] = useState(1600);
  const [actFilter, setActFilter] = useState(34);
  const [stateFilter, setStateFilter] = useState("");
  const [isViewFavorites, setIsViewFavorites] = useState(false);
  const [scholarshipData, setScholarshipData] = useState([{}]);

  useEffect(() => {
    let filteredScholarships = [...scholarships];

    const fetchScholarships = async () => {
      const data = await main();
      setScholarshipData(data);
    };

    if (actFilter !== "") {
      const filterValue = parseFloat(actFilter);
      filteredScholarships = filteredScholarships.filter(
        (scholarship) => scholarship.act <= filterValue
      );
    }

    if (satFilter !== "") {
      const filterValue = parseFloat(satFilter);
      filteredScholarships = filteredScholarships.filter(
        (scholarship) => scholarship.sat <= filterValue
      );
    }
    // Apply GPA filter if gpaFilter is set
    if (gpaFilter !== "") {
      const filterValue = parseFloat(gpaFilter);
      filteredScholarships = filteredScholarships.filter(
        (scholarship) => scholarship.gpa <= filterValue
      );
    }

    if (satFilter !== "") {
      const filterValue = parseFloat(gpaFilter);
      filteredScholarships = filteredScholarships.filter(
        (scholarship) => scholarship.gpa <= filterValue
      );
    }

    // if (stateFilter !== "") {
    //   const filterValue = stateFilter;
    //   filteredState = filteredState.filter(

    //   )
    // }

    // Apply sorting if isSorted is true
    if (isSorted) {
      filteredScholarships.sort((a, b) => (a.title > b.title ? 1 : -1));
    }

    if (isAmounttSorted) {
      filteredScholarships.sort((a, b) => (a.amount < b.amount ? 1 : -1));
    }

    if (isViewFavorites) {
    }

    // Update sortedScholarships state
    setSortedScholarships(filteredScholarships);
    fetchScholarships();
  }, [
    scholarships,
    gpaFilter,
    isSorted,
    isAmounttSorted,
    satFilter,
    actFilter,
  ]);

  useEffect(() => {
    console.log(sortedScholarships);
  }, [sortedScholarships]);

  const handleDropOpen = () => {
    setIsDropOpen(!isDropOpen);
  };

  const alphaSort = () => {
    setIsSorted(!isSorted);
  };

  const amountSort = () => {
    setIsAmountSorted(!isAmounttSorted);
  };

  const handleItemClick = (sc) => {
    setIsModalOpen(true);
    setSelectedItem(sc);
  };

  const handleViewFavorites = () => {
    setIsViewFavorites(!isViewFavorites);
  };

  return (
    <div>
      <Navbar />
      <main>
        {scholarshipData.map((sc) => {
          <div id={sc.id}>{sc.title}</div>;
        })}
        <div className="text-4xl text-blue-900 ">Scholarships</div>

        <div className="filters_container flex justify-between ">
          <Dropdown title="GPA" data={GPA} setFilter={setGpaFilter} />
          <Dropdown title="SAT" data={SAT} setFilter={setSatFilter} />
          <Dropdown title="ACT" data={ACT} setFilter={setActFilter} />
          <Dropdown title="Race" data={Race} />
          <Dropdown title="Major" data={Major} />
          <Dropdown title="State" data={State} />
          <button
            onClick={handleViewFavorites}
            className={
              isViewFavorites
                ? "h-8 bg-blue-200 flex items-center"
                : "h-8  flex items-center"
            }
          >
            View favorites
          </button>
        </div>

        <div className="scholarships_sort-container">
          <div>
            <button
              className={
                isSorted || isAmounttSorted
                  ? "h-8 flex items-center justify-between w-40 bg-blue-300"
                  : "h-8 flex items-center justify-between w-40"
              }
              onClick={handleDropOpen}
            >
              Sort
              <FontAwesomeIcon
                className="flex justify-end"
                icon={faArrowUpWideShort}
              />{" "}
            </button>
            {isDropOpen && (
              <div className="bg-blue-100 border border-black w-40 rounded-lg absolute z-50">
                <p
                  className={
                    isSorted
                      ? "p-2 hover:outline hover:rounded-lg hover:outline-blue-800 hover:cursor-pointer bg-blue-300"
                      : "p-2 hover:outline hover:rounded-lg hover:outline-blue-800 hover:cursor-pointer "
                  }
                  onClick={alphaSort}
                >
                  A - Z
                </p>
                <p
                  className={
                    isAmounttSorted
                      ? "p-2 hover:outline hover:rounded-lg hover:outline-blue-800 hover:cursor-pointer bg-blue-300 "
                      : "p-2 hover:outline hover:rounded-lg hover:outline-blue-800 hover:cursor-pointer "
                  }
                  onClick={amountSort}
                >
                  Amount
                </p>
              </div>
            )}
          </div>

          <p className=" col-span-1 text-lg">Due Date</p>
          <p className=" col-span-3 text-lg">Scolarship Name</p>
          <p className="text-lg">Amount</p>
        </div>

        <hr className="border-t-2 border-gray-300 w-full mb-5" />

        <div className="w-full h-200 overflow-y-scroll hide_scrollbar">
          {isViewFavorites
            ? favorites.map((sc, i) => (
                <ScDetails
                  isFav={favorites.some((fav) => fav.id === sc.id)}
                  onToggleFavorite={() => onToggleFavorite(sc)}
                  sch={sc}
                  key={i}
                  onClick={() => handleItemClick(sc)}
                />
              ))
            : sortedScholarships.map((sc, i) => (
                <ScDetails
                  isFav={favorites.some((fav) => fav.id === sc.id)}
                  onToggleFavorite={() => onToggleFavorite(sc)}
                  sch={sc}
                  key={i}
                  onClick={() => handleItemClick(sc)}
                />
              ))}
        </div>

        {selectedItem && isModalOpen && (
          <ScItem sch={selectedItem} onClose={() => setIsModalOpen(false)} />
        )}
      </main>
    </div>
  );
};
