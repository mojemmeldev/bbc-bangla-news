import Image from "next/image";
import Marquee from "./components/Marquee";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div>
      <Marquee></Marquee>
      <HomePage></HomePage>
      
    </div>
  );
}
