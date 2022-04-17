import Image from "next/image";
import mainCard from "../public/maincard2.svg";

export default function MainCard() {
  return (
    <div className={"image-container"}>
      <Image src={mainCard} alt="main card" layout="fill" className={"image"} />
    </div>
  );
}

// <div id="nav-grid">
//   <div id="main-card"></div>
//   <div id="menu"></div>
//   <div id="section-grid">
//     <div className="section one">dd</div>
//     <div className="section two">About</div>
//     <div className="section three">Projects</div>
//     <div className="section four">Blog</div>
//   </div>
// </div>
