import React, { Component } from "react";
// import { useState, useEffect } from "react";

const Gallery = ({ galleryImage }) => (
    <div className="Gallery">
        <img src={galleryImage} alt="galleryImage" />
    </div>
);
export default Gallery;

// export default function Gallery({
//     firstName,
//     lastName,
//     profilePicUrl,
//     toggleUploader,
//     // size = "",
// }) {
//     return (
//         <div className="gallery-pic-container">
//             <div className="gallery-pic">
//                 <img
//                     // className={`${size} avatar`}
//                     className="img-gallery"
//                     onClick={toggleUploader}
//                     src={profilePicUrl || "default.jpg"}
//                     alt={`${firstName} ${lastName}`}
//                 />
//             </div>
//         </div>
//     );
// }
