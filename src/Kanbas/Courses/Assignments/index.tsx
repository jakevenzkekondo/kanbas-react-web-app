import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            {/* {< !--Add buttons and other fields here -->} */}
            <ul className="list-group wd-modules">
                <div className="mb-3 wd-assignment-btn-grp mt-3">
                    <div className="wd-ass-search-input">
                        <input className="form-control wd-ass-search" placeholder="Search for Assignment" />
                    </div>
                    <div>
                        <button className="top-button wide-button"> + Group </button>
                        <button className="top-button wide-button red-button"> + Assignment </button>
                        <button className="top-button">
                            <FaEllipsisV className="wd-color-black ms-0" />
                        </button>
                    </div>
                </div>
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;