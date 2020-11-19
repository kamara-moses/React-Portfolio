import React from "react";
import "./footer.css";

{/* Footer Component */}
const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© Moses Kamara &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;