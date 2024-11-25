"use client";

import { UploadButton } from "../lib/uploadthing";
//upload button imported from uploadThing API

export default function Upload({
    setImgURL,
    setUploadErr 
}: {
    setImgURL: (url: string) => void
    setUploadErr: (error: string) => void
}) {
    return (
        <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                if (res) {
                    setImgURL(res[0].url)
                    console.log("Files: ", res);
                    // console.log(res[0].url)
                }
                
                // alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
                // Do something with the error.
                setUploadErr(error.message);
                alert(`ERROR! ${error.message}`);
            }}
            className="p-4 ut-button:bg-dhPurple ut-button:ut-readying:bg-dhOrange"
        />
    );
}