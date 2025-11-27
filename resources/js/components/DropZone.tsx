import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface CustomDropZoneProps {
    callback: (Files: File[]) => void;
    multiple?: boolean;
}

export default function CustomDropZone({
    callback,
    multiple = false,
}: CustomDropZoneProps) {
    const onDrop = useCallback((files: any) => {
        if (!multiple)
            callback(files[0])
        else
            callback(files);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple,
        accept: {
            "image": ['.jpeg', '.jpg', '.png']
        }
    });

    return (
        <div {...getRootProps()} className="dropbox">
            <input {...getInputProps()}/>
            {isDragActive ? (
                <p>Переместите сюда ваши фото ...</p>
            ) : (
                <p>Переместите сюда фото или кликните сюда...</p>
            )}
        </div>
    );
}
