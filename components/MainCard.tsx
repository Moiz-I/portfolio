import Image from "next/image";
import mainCard from "../public/maincard2.svg";

export default function MainCard() {
  return (
    <div className={"image-container"}>
      <Image
        draggable="false"
        src={mainCard}
        alt="main card"
        layout="fill"
        className={"image"}
      />
    </div>
  );
}
