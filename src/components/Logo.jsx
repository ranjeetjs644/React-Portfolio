import React from "react";
import logoImage from "../../public/Logo.png"; // Import your logo image

function Logo() {
  return (
    <div>
      <img src={logoImage} alt="Logo" width={30} className="drop-shadow-md" />
    </div>
  );
}

export default Logo;
