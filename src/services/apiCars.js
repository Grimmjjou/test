import axios from "axios";

axios.defaults.baseURL = "https://6506e0bb3a38daf4803ece30.mockapi.io";

export const fetchCars = async (page) => {
  try {
    const response = await axios.get(`/car/?&page=${page}&limit=8`);
    return response.data;
  } catch (e) {
    throw e.message;
  }
};

export const getOneCar = async (id) => {
  try {
    const response = await axios.get(`/car/${id}`);
    return response.data;
  } catch (e) {
    throw e.message;
  }
};
