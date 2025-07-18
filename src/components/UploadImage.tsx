"use client";

import { useState } from "react";

const CLOUD_NAME = "drfnqzkaa"; // 🔁 replace with yours
const UPLOAD_PRESET = "carsfinder"; // 🔁 replace with yours

export default function UploadImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setImageUrl(data.secure_url);
    } catch (err) {
      console.error("Upload failed", err);
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="text-sm"
      />

      {uploading && <p className="text-blue-500">Uploading...</p>}

      {imageUrl && (
        <div>
          <p className="text-green-600 font-semibold">Upload successful!</p>
          <img src={imageUrl} alt="Uploaded" className="w-48 h-auto rounded mt-2" />
        </div>
      )}
    </div>
  );
}
