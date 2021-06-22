import { useDispatch, useSelector, useStore } from "react-redux";
import axios from "axios";
import { search } from "../nasa-events/action";

const Searchbar = () => {
    const dispatch = useDispatch();
    const selectedValue = useSelector((state) => state.searchString);

    const handleSearch = async (e) => {
        const value = e.target.value;
        console.log(e.target);
        // const response = await axios.get(
        //     "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
        // );
        // console.log(response.data);
        // console.log(value);
        dispatch(search(value));
    };

    return (
        <div
            style={{
                display: "flex",
                position: "sticky",
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: "white",
                boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
            }}>
            <input
                type="text"
                style={{
                    margin: 20,
                    flex: 1,
                    borderRadius: 5,
                    borderColor: "grey",
                    borderWidth: 1,
                }}
                placeholder="Search event..."
                name="event-search"
                onInput={handleSearch}
                value={selectedValue}
            />
        </div>
    );
};

export default Searchbar;
