import axios from "axios"

let mainURL = "https://json-api.uz/api/project/mytestapp";


export const axiosClient = axios.create({
    baseURL: mainURL,
});

axios.interceptors.request.use(
    () => {},
    () => {}
);

axios.interceptors.request.use(
    () => {},
    () => {}
)