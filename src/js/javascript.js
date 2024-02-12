import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const header = document.querySelector("[data-header]");

    const handleNavToggle = () => {
      header.classList.toggle("active");
    };

    navToggleBtn.addEventListener("click", handleNavToggle);

    return () => {
      navToggleBtn.removeEventListener("click", handleNavToggle);
    };
  }, []); // Empty dependency array means the effect runs once when the component mounts

  return (
    <div>
      <button data-nav-toggle-btn></button>
      <header data-header></header>
    </div>
  );
};

export default Navbar;
