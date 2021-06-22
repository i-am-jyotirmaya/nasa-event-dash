import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { ReactComponent as Loader } from "../../assets/loader.svg";

const DisplayTable = () => {
    const events = useSelector((state) => state.filteredEvents);
    console.log(events);
    return (
        <div>
            {events.length ? (
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Categories</th>
                            <th>Coordinates</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((e) => {
                            return (
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.categories[0].title}</td>
                                    <td>
                                        {e.geometries.map((g, i) => (
                                            <>
                                                ({g.coordinates[0]},{" "}
                                                {g.coordinates[1]})<br />
                                            </>
                                        ))}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default DisplayTable;
