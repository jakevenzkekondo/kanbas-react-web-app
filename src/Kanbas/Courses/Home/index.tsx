import ModuleList from "../Modules/List";
import "./index.css";


function Home() {
    return (
        <div>
            <h2 className="home">Home</h2>
            <div className="d-flex">
                <div className="d-flex flex-column flex-fill">
                    <ModuleList />
                </div>
                <div className="flex-grow-0 me-2 d-none d-lg-block status">
                    <h3>Course Status</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <button className="course-status-button">Unpublish</button>
                                </td>
                                <td>
                                    <button className="course-status-button">Published</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="course-status-button"><i className="fa-solid fa-arrow-right-from-bracket"></i> Import Existing
                        Content</button>
                    <button className="course-status-button"><i className="fa-solid fa-arrow-right-from-bracket"></i> Import From
                        Commons</button>
                    <button className="course-status-button"><i className="fa-solid fa-crosshairs"></i> Choose Home Page</button>
                    <button className="course-status-button"><i className="fa-solid fa-chart-simple"></i> View Course Stream</button>
                    <button className="course-status-button"><i className="fa-solid fa-bullhorn"></i> New Announcement</button>
                    <button className="course-status-button"><i className="fa-solid fa-chart-simple"></i> New Analytics</button>
                    <button className="course-status-button"><i className="fa-regular fa-bell"></i> View Course Notifications</button>
                    <br />
                    <br />
                    <h4>To Do</h4>
                    <hr className="solid" />
                    <h5>Grade A1 ENV + HTML</h5>
                    <br />
                    <br />
                    <h4>Coming Up</h4>
                    <hr className="solid" />
                    <h5>Lecture</h5>
                    <h5>CS 5610 Lecture</h5>
                    <h5>Web Development Summer 1 Lecture</h5>
                </div>
            </div>
        </div>
    );
}
export default Home;