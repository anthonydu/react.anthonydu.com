import React, { useState } from "react";
import "./footer.scss";

const Footer = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleMouseOver = (event) => {
    setLeft(event.clientX);
    setTop(event.clientY - 25);
  }

  return (
    <footer className="Footer">
      <a href="https://gitfront.io/r/anthonydu/PdAUKDJP67rb/www.anthonydu.com/" onMouseOver={handleMouseOver}>Est.&nbsp;July&nbsp;2021&nbsp;&middot;&nbsp;&copy;&nbsp;2022&nbsp;Anthony&nbsp;Du&nbsp;&middot; Built&nbsp;from&nbsp;the&nbsp;ground&nbsp;up&nbsp;with&nbsp;love&nbsp;&hearts;</a>
      <div id="tooltip" style={{ top: `${top}px`, left: `${left}px` }}>View source code</div>
    </footer>
  );
}

export default Footer;