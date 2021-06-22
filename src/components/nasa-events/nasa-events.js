import React, { useEffect } from "react";
import DisplayTable from "../display-table/display-table";
import Searchbar from "../searchbar/searchbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEvents } from "./action";
import { ReactComponent as Loader } from "../../assets/loader.svg";

export const NasaEvents = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios
            .get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
            .then((res) => {
                dispatch(setEvents(res.data.events));
            });
    }, []);
    return (
        <React.Fragment>
            <Searchbar />
            <DisplayTable />
        </React.Fragment>
    );
};
