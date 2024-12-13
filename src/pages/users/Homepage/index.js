import React, { memo, useState, useEffect } from "react";
import "./imgstyle.css";
import ProductList from "../../../component/ProductlistRandom/ProductList.jsx";


const HomePage = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const plusSlides = (n) => {
        showSlides(slideIndex + n);
    };
    const currentSlide = (n) => {
        showSlides(n);
    };
    const showSlides = (n) => {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) { setSlideIndex(1); }
        else if (n < 1) { setSlideIndex(slides.length); }
        else { setSlideIndex(n); }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        } if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += " active";
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prev) => (prev + 1 > 3 ? 1 : prev + 1)); // Nếu vượt quá số slide, quay lại slide đầu tiên
        }, 3000); // Thay đổi slide sau mỗi 3 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
    }, []);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);
    return (
        <div>
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <img src="./img/1.jpg"  className="imgcontainer" />
                </div> 
                <div className="mySlides fade">
                    <img src="./img/2.jpg" className="imgcontainer"  />                   
                </div> 
                <div className="mySlides fade"> 
                    <img src="./img/3.jpg" className="imgcontainer"  />                    
                </div> 
                <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                <a className="next" onClick={() => plusSlides(1)}>❯</a>

                <div style={{ textAlign: "center" }}> 
                    <span className="dot" onClick={() => currentSlide(1)}></span>
                    <span className="dot" onClick={() => currentSlide(2)}></span> 
                    <span className="dot" onClick={() => currentSlide(3)}></span> 
                </div>
            </div>
            <div>
        <ProductList/>
        </div>
        </div>
    );

};
export default memo(HomePage);