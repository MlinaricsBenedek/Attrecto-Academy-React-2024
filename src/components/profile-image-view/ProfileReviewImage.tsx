//components/profile-image-preview/ProfileImagePreview.tsx
import React, { FC } from "react";

interface ProfileImageViewProps{
imageUrl:string;
}
export const ProfileImagePreview=({imageUrl}:ProfileImageViewProps) => {
  return (
    <div>
     
        <img
          src={imageUrl}
          alt="Profile Preview"
          style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }}
        />
      
    </div>
  );
};

export default ProfileImagePreview;
