import axios from "axios";

export const getLocation = async (id) => {
    const response = await axios.get(`http://localhost:4000/locations/${id}`);
    return response.data;
};

export const getLocations = async () => {
    const response = await axios.get("http://localhost:4000/locations");
    return response.data;
};

export const deleteLocation = async (id) => {
    await axios.post("http://localhost:4000/locations/delete", { id });
    return true;
};

export const addLocation = async ({ title, imgSrc, description }) => {
    await axios.post("http://localhost:4000/locations/", { title, imgSrc, description });
    return true;
};
