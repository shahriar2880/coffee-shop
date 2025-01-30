import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";

export default function Home() {
  return (
      <div className="px-6">
        <Header/>
        <Banner/>
      </div>
  );
}
