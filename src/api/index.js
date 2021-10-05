import axios from "axios";

const url = "https://cse416-training.herokuapp.com/interests";

export const fetchInterests = () => axios.get(url);
export const addInterest = (newInterest) => axios.post(url, newInterest);
