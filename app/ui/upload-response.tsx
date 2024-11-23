"use client";

import Upload from "./upload-button";
import { useState, useEffect } from "react";
import { fetchImgAnalysis } from "../lib/api";


export default function UploadAndResponse() {
    const [imgURL, setImgURL] = useState<string>('');

    useEffect(() => {
        const fetchAnalysis = async () => {
            if (imgURL) {
                // Function to be triggered after imgURL is updated
                console.log("Image URL updated:", imgURL);
                // You can add more logic here, such as making an API call or updating other state
                const res = await fetchImgAnalysis(imgURL)
                console.log(res)
            }
        }

        fetchAnalysis();


    }, [imgURL]); // Dependency array to watch for changes to imgURL

    return (
        <div>
            <Upload setImgURL={setImgURL}></Upload>
        </div>
    );
}