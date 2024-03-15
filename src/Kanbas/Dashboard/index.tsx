import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }
) {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses (6)</h2> <hr />
            <h5>Course</h5>
            <input value={course.name} className="form-control" id="course-input"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control" id="course-input"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" id="course-input" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" id="course-input" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button className="large-button" onClick={addNewCourse} >
                Add
            </button>
            <button className="large-button" onClick={updateCourse} >
                Update
            </button>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name}
                                        <div>
                                            <button className="small-button" onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}>
                                                Edit
                                            </button>
                                            <button className="small-button" onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                                Delete
                                            </button>
                                        </div>
                                    </Link>
                                    <p className="card-text">{course.number}</p>
                                    <p className="card-text wd-secondary-card-text">{course.startDate} to {course.endDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;