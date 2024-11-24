"use client";

import Upload from "./upload-button";
import { useState, useEffect } from "react";
import { fetchImgAnalysis } from "../lib/api";
import LoadingSpinner from "./loading-spinner";
 

export default function UploadAndResponse() {
    const [imgURL, setImgURL] = useState<string>('');
    const [resObj, setResObj] = useState<{ name: string; quantity: number }[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchAnalysis = async () => {
            if (imgURL) {
                setLoading(true);
                // Function to be triggered after imgURL is updated
                console.log("Image URL updated:", imgURL);
                // You can add more logic here, such as making an API call or updating other state
                const res = await fetchImgAnalysis(imgURL)
                console.log(resObj)
                if (res && res.items) {
                    setResObj(res.items);
                }
                setLoading(false);
            }
        }

        fetchAnalysis();


    }, [imgURL]); // Dependency array to watch for changes to imgURL

    return (
        <div >
            <div className="border-2 border-dhOrange">
                <div className="bg-dhOrange text-dhYellow flex justify-center text-xl font-bold p-2">
                    <p>Food items we found</p>

                </div>
                {loading && <LoadingSpinner/>}
                {!loading && (
                    <div className="text-dhOrange text-xl p-3">

                        {resObj.length > 0 ? (
                            <ul>
                                {resObj.map((item, index) => (
                                    <li key={index}>
                                        {item.name}: {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No items detected</p>
                        )}
                    </div>
                )}
            </div>


            <Upload setImgURL={setImgURL}></Upload>
        </div>
    );
}