import React, { useState, useEffect } from "react";
import { Dropdown, Navbar } from "../../Components/index";
import "./Majors.css";
import Papa from "papaparse";
import { categories } from "./categories";

export const Majors = () => {
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  useEffect(() => {
    // Function to fetch and parse the CSV file
    const fetchAndParseCSV = async () => {
      try {
        const response = await fetch("/majors-list.csv");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            const rowsArray = [];
            const valuesArray = [];

            // Iterating data to get column name and their values
            results.data.forEach((d) => {
              rowsArray.push(Object.keys(d));
              valuesArray.push(Object.values(d));
            });

            // Parsed Data Response in array format
            setParsedData(results.data);

            // Filtered Column Names
            setTableRows(rowsArray[0]);

            // Filtered Values
            setValues(valuesArray);
          },
        });
      } catch (error) {
        console.error("Error fetching and parsing CSV file:", error);
      }
    };

    // Call the function to fetch and parse the CSV
    fetchAndParseCSV();
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <div className="w-full flex justify-center items-center space-x-32 mb-10">
          <a href="/careers">
            <p className="text-4xl text-blue-200 hover:cursor-pointer hover:text-blue-500 transition-all">
              Careers
            </p>
          </a>
          <p className="text-4xl text-blue-900 hover:cursor-pointer ">Majors</p>
        </div>
        <div className="majors-content">
          <div className="filters-favorites">
            <div className="major-filters relative">
              <p className="text-xl font-bold">Pick a majors category</p>
              <div className="">
                <Dropdown title="Category" data={categories} />
              </div>
            </div>
          </div>
          <div className="majors-list p-5">
            <div className="major-category">
              <p className="text-2xl col-span-2">Major</p>
              <p className="text-2xl col-span-2">Category</p>
            </div>
            <hr className="border-t-2 border-gray-300 w-full mb-5" />
            <div className="major-data overflow-y-auto">
              {parsedData.length > 0 && (
                <table>
                  {/* <thead>
                    <tr>
                      {tableRows.map((row, index) => (
                        <th key={index}>{row}</th>
                      ))}
                    </tr>
                  </thead> */}
                  <tbody>
                    {values.map((value, index) => (
                      <tr key={index}>
                        {value.map((val, i) => (
                          <td className="p-2" key={i}>
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Majors;
