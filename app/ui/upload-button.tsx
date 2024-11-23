"use client";

import { UploadButton } from "../lib/uploadthing";

export default function Upload({ setImgURL }: { setImgURL: (url: string) => void }) {
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
                alert(`ERROR! ${error.message}`);
            }}
        />
    );
}