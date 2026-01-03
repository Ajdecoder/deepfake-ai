import axios from "axios";


const API = axios.create({
    baseURL: import.meta.env.VITE_SERVER_PORT || "https://tally-hedgeless-stephen.ngrok-free.dev",
    withCredentials: true
});


API.interceptors.request.use(async (req) => {
    return req;
});

// export const VideoDetectAPI = (data) => API.post("/detect-video", data);
export const DetectApi = async (file, ep) => {
    console.log('mila file ep', file, ep);

    // 1. FormData create karo
    const formData = new FormData();

    // 2. Dynamic Key assignment based on endpoint or file type
    // Agar endpoint '/image' hai toh key 'upload_image' rakho, warna 'upload_audio'
    const fileKey = ep === "/image" ? "upload_image" : "upload_audio";
    
    formData.append(fileKey, file); 

    const baseURL = import.meta.env.VITE_SERVER_URL || "https://tally-hedgeless-stephen.ngrok-free.dev";

    return API.post(
        `${baseURL}${ep}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                // Ngrok use kar rahe ho toh ye header life saver hai (warning page bypass karne ke liye)
                "ngrok-skip-browser-warning": "69420"
            }
        }
    );
};