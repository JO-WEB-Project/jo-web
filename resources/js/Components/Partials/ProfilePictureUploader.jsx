// ProfilePictureUploader.jsx

import React, { useState } from 'react';

function ProfilePictureUploader({ onUploadSuccess, currentImage }) {
    const [imageSrc, setImageSrc] = useState(currentImage);
    const [uploading, setUploading] = useState(false);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (
            file &&
            (file.type === 'image/jpeg' ||
                file.type === 'image/jpg' ||
                file.type === 'image/png')
        ) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);

            const uploadData = new FormData();
            uploadData.append('file', file);
            uploadData.append('upload_preset', 'unsigned_upload');

            setUploading(true);

            try {
                const response = await fetch(
                    'https://api.cloudinary.com/v1_1/dzvzxvotk/image/upload',
                    {
                        method: 'POST',
                        body: uploadData,
                    }
                );
                const data = await response.json();
                if (data.secure_url) {
                    onUploadSuccess(data.secure_url);
                } else {
                    console.error('Cloudinary upload failed:', data);
                    alert('Failed to upload image. Please try again.');
                }
            } catch (error) {
                console.error('Error uploading to Cloudinary:', error);
                alert('An error occurred during the upload. Please try again.');
            } finally {
                setUploading(false);
            }
        }
    };

    return (
        <div className="flex flex-col gap-2 py-1">
            <label className="block text-sm font-bold text-gray-700" htmlFor="ProfilePicture">
                Profile Picture
            </label>
            <div className="border-2 border-dashed border-opacity-60 w-[300px] h-[200px] flex justify-center items-center border-gray-300 rounded-lg p-2 text-center relative">
                <input
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    type="file"
                    id="ProfilePicture"
                    accept="image/jpeg, image/jpg, image/png"
                    onChange={handleImageUpload}
                    disabled={uploading}
                />
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                    />
                ) : (
                    <span className="text-gray-500">Click here to upload</span>
                )}
                {uploading && (
                    <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                        <span className="text-gray-700">Uploading...</span>
                    </div>
                )}
            </div>
            <p className="text-sm text-opacity-60 text-black font-medium">
                You can change your profile picture by clicking here.
            </p>
        </div>
    );
}

export default ProfilePictureUploader;
