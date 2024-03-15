import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaPhotoVideo, FaArrowCircleRight, FaQuestion } from "react-icons/fa";
import List from "../Courses/Modules/List";
function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2 account" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2" /> },
        { label: "History", icon: <FaHistory className="fs-2" /> },
        { label: "Studio", icon: <FaPhotoVideo className="fs-2" /> },
        { label: "Commons", icon: <FaArrowCircleRight className="fs-2" /> },
        { label: "Help", icon: <FaQuestion className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <img src={require('./northeastern_n.png')} className="wd-northeastern_n" alt="northeastern_n" />
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                    <Routes>
                        <Route path="/Kanbas/:courseId" element={<List />} />
                    </Routes>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;