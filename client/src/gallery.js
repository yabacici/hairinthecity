import React, { Component } from "react";

// const Gallery = ({ number }) => <div className="gallery">{number}</div>;
const Gallery = ({ galleryImage }) => (
    <div className="Gallery">
        <img src={galleryImage} alt="galleryImage" />
    </div>
);
export default Gallery;

// { id: 1, corn: "hairwork/corn.jpg" },
// { id: 2, bun: "hairwork/bun.jpg" },

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

// import React, { Component } from "react";
// import Carousel from "react-elastic-carousel";

// export default function Gallery() {
//     state = {
//         pics: [{ corn: "hairwork/corn.jpg" }, { bun: "hairwork/bun.jpg" }],
//     };

//     render();
//     {
//         const { pics } = this.state;
//         return (
//             <Carousel>
//                 {pics.map((pic) => (
//                     <div key={pic.id}>{pic.title}</div>
//                 ))}
//             </Carousel>
//         );
//     }
// }
