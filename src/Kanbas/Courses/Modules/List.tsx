import React, { useState } from "react";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import "./index.css";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    return (
        <>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div className="buttons-div">
                        <button className="large-button" id="update-button"
                            onClick={() => dispatch(updateModule(module))}>
                            Update</button>
                        <button className="large-button" id="add-button"
                            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                            Add</button>
                    </div>
                    <div>
                        <input id="modules-input" placeholder={module.name}
                            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                        />
                    </div>
                    <div>
                        <textarea id="modules-input" placeholder={module.description}
                            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                        />
                    </div>
                </li>
                <div>
                    <button className="modules-button red-background">+ Module</button>
                    <button className="modules-button">Publish All</button>
                    <button className="modules-button">View Progress</button>
                    <button className="modules-button">Collapse All</button>
                    <hr className="solid" />
                </div>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module) => (
                        <li
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}
                        >
                            <button
                                className="small-button" id="edit-button"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button
                                className="small-button" id="delete-button"
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                                        <li className="list-group-item">
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul >
        </>
    );
}
export default ModuleList;