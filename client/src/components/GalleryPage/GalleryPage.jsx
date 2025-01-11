import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GalleryPage.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const GalleryPage = () => {
  // Array of image URLs (update these links later as needed)
  const images = [
    "https://i.postimg.cc/qNMSL0jh/IMG-0690.avif",
    "https://i.postimg.cc/ctS58NvJ/IMG-20240929-131941182-HDR-AE.jpg",
    "https://i.postimg.cc/CzwQhSyP/20240107-115011.avif",
    "https://i.postimg.cc/bGS6CvbJ/IMG-0453.jpg",
    "https://i.postimg.cc/14sktpwr/DSC06879.jpg",
    "https://i.postimg.cc/crsFdMgy/20231201-115747.jpg",
    "https://i.postimg.cc/MnHtQ6m9/20231201-125345.jpg",
    "https://i.postimg.cc/wR9QTgBc/20231201-171308-01.jpg",
    "https://i.postimg.cc/8jKmN8gM/20231201-182724-01-01.jpg",
    "https://i.postimg.cc/k2YK3W8c/chandra.jpg",
    "https://i.postimg.cc/Q9GqwpGz/IMG20231201184650.jpg",
    "https://i.postimg.cc/6Thhb2HH/IMG20231202070029.jpg",
    "https://i.postimg.cc/B88DqtBG/IMG20240929161704.jpg",
    "https://i.postimg.cc/xctt8JMk/IMG-0265.jpg",
    "https://i.postimg.cc/gxxq0MG5/IMG-0334.jpg",
    "https://i.postimg.cc/JsFx3fTM/IMG-0749.avif",
    "https://i.postimg.cc/Yhqz5rZt/IMG-0769.avif",
    "https://i.postimg.cc/RW21JcF0/IMG-0791.avif",
    "https://i.postimg.cc/JsFx3fTM/IMG-0749.avif",
    "https://i.postimg.cc/zyGKcxLv/IMG-1204.jpg",
    "https://i.postimg.cc/62nvvSPj/IMG-1443-1.jpg",
    "https://i.postimg.cc/G8Ckqdvw/IMG-2818.avif",
    "https://i.postimg.cc/3ypXXd4F/IMG-2985.avif",
    "https://i.postimg.cc/McjD994R/IMG-3094.avif",
    "https://i.postimg.cc/QVDbqkq9/IMG-3167.avif",
    "https://i.postimg.cc/xkWmqY6N/Whats-App-Image-2024-12-11-at-16-11-43-64ce6931.jpg",
    "https://i.postimg.cc/dZ9ZWCwG/Whats-App-Image-2024-12-11-at-16-11-43-cdcb164d.jpg",
    "https://i.postimg.cc/4nv8CF3Q/Whats-App-Image-2024-12-11-at-16-11-44-5850d0a7.jpg",
    "https://i.postimg.cc/4nR8STX3/Whats-App-Image-2024-12-11-at-16-11-45-b4d99d29.jpg",
    "https://i.postimg.cc/Sj9Bnrxn/GOPR2287.jpg",
    "https://i.postimg.cc/wyySc55b/IMG20231021160352.jpg",
    "https://i.postimg.cc/nXhSGYpY/IMG20231022073946-1.jpg",
    "https://i.postimg.cc/KRydBM1J/IMG-1053.avif",
    "https://i.postimg.cc/GTvV6c5F/IMG-20231021-064346930.jpg",
    "https://i.postimg.cc/qN1YPDj5/IMG-20231021-084354981.jpg",
    "https://i.postimg.cc/zy2ttbfm/IMG-20231021-194141324.jpg",
    "https://i.postimg.cc/ygM2fJv6/IMG-3434.avif"
  ];

  return (
<>
<Navbar></Navbar>
    <div
      className="gallery-page d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url('https://i.postimg.cc/2SFdRdps/Group.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div className="container">
        <div className="row g-3">
          {images.map((img, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="gallery-image-wrapper">
                <img
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  className="img-fluid gallery-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
<Footer></Footer>
    </>
  );
  
};

export default GalleryPage;
