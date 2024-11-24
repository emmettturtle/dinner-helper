"use client";

import Upload from "./upload-button";
import { useState, useEffect } from "react";
import { fetchImgAnalysis } from "../lib/api";
import LoadingSpinner from "./loading-spinner";
 

export default function UploadAndResponse() {
    const [imgURL, setImgURL] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [resObj, setResObj] = useState<{ name: string; quantity: number }[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showRes, setShowRes] = useState<boolean>(false);
    const [uploadErr, setUploadErr] = useState<string>(''); 

    useEffect(() => {
        const fetchAnalysis = async () => {
            if (imgURL && !uploadErr) {
                setShowRes(true);
                setLoading(true);
                setResObj([]); // Reset resObj to an empty array
                setError(''); // Reset error state
                // Function to be triggered after imgURL is updated
                console.log("Image URL updated:", imgURL);
                try {
                    const res = await fetchImgAnalysis(imgURL)
                    if (res && res.items) {
                        setResObj(res.items);
                    } else if (res.error) {
                        setError(res.error)
                    }
                } catch (error) {
                    setShowRes(false);
                    if(error instanceof Error){
                        setUploadErr(error.message)
                    }
                }
                
                console.log(resObj)

                setLoading(false);

            } 
        }


        fetchAnalysis();
        setImgURL('');
        setUploadErr('');
    }, [imgURL]); // Dependency array to watch for changes to imgURL

    return (
        <div >
            {showRes && (
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
                                error ? (
                                    <p className="text-sm ">
                                        No items were detected in this image. <br />
                                        Please try to upload a different photo or <br />
                                        a higher quality version of the photo uploaded.
                                    </p>
                                ) : (
                                    <p> {error} </p>
                                )
                            )}
                        </div>
                    )}
                </div>
            )}

            {uploadErr && <p>{uploadErr}</p>}
            <Upload setImgURL={setImgURL} setUploadErr={setUploadErr}></Upload>
        </div>
    );
}