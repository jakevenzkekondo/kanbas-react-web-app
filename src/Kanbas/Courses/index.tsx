import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <h2 className="red"><HiMiniBars3 className="three-bars" /> {course?.number} {course?.name}</h2>
            <hr className="solid"></hr>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0 page"
                    style={{ left: "320px", top: "50px" }} >
                    <Routes>
                        {/* <Route path="Home" element={<h1>Home</h1>} /> */}
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;