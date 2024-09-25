import { useState } from "react";

function ProfilePictureUploader() {
    const [imageSrc, setImageSrc] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (
            file &&
            (file.type === "image/jpeg" ||
                file.type === "image/jpg" ||
                file.type === "image/png")
        ) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col gap-2 py-1">
            <label
                className="block text-sm font-bold text-gray-700"
                htmlFor="ProfilePicture"
            >
                Profile Picture
            </label>
            <div className="border-2 border-dashed border-opacity-60 w-[300px] h-[200px] flex justify-center items-center border-gray-300 rounded-lg p-2 text-center relative">
                <input
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    type="file"
                    id="ProfilePicture"
                    accept="image/jpeg, image/jpg, image/png"
                    onChange={handleImageUpload}
                />
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                    />
                ) : (
                    <span className="text-gray-500">Right click here</span>
                )}
            </div>
            <p className="text-sm text-opacity-60 text-black font-medium">
                You can change profile picture with right click.
            </p>
        </div>
    );
}

export default ProfilePictureUploader;
