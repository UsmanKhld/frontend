import React from "react";
import "./Scitem.css";

export const ScItem = ({ sch, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <p className="modal-title text-2xl font-bold">{sch.title}</p>
        <button
          onClick={onClose}
          className="close-button hover:bg-blue-200 transition-all"
        >
          X
        </button>
        <div className="modal-amount">
          <p className="text-2xl mb-3">Award Amount:</p>
          <p className="text-5xl font-bold text-blue-900">${sch.amount}</p>
        </div>

        <p className="text-xl font-semibold modal-details">Details:</p>
        <p className="text-lg modal-description">{sch.description}</p>
        <a href={sch.apply} className="modal-apply">
          <button className="apply-button bg-blue-500 hover:bg-blue-700 hover:scale-110 transition-all">
            Apply now!
          </button>
        </a>

        <div className="modal-requirements">
          <h2>Requirements:</h2>
          <p>GPA: {sch.gpa}</p>
          <p>SAT: {sch.sat}</p>
          <p>ACT: {sch.act}</p>
        </div>
      </div>
    </div>
  );
};

export default ScItem;
