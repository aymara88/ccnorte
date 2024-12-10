import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Example icon from react-icons

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            className={`scroll-to-top ${isVisible ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to Top"
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTop;
