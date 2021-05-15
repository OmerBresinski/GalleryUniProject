import axios from "axios";

export const getLocations = async () => {
    const response = await axios.get("http://localhost:4000/locations");
    return response.data;
};

export const deleteLocation = async (id) => {
    await axios.post("http://localhost:4000/locations/delete", { id });
    return true;
};
