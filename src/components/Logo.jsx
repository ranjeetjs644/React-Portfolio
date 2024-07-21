import React from "react";
import logoImage from "../../public/Logo.png"; // Import your logo image

function Logo() {
  const lightGrayFilter = {
    filter: 'grayscale(100%) brightness(400%)',
  };

  return (
    <div>
      <img
        src={logoImage}
        alt="Logo"
        width={30}
        style={lightGrayFilter} // Apply the filter here
        className="drop-shadow-md"
      />
    </div>
  );
}

export default Logo;
