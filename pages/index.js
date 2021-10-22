import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Moogle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">
            <a href="https://vanshajcoder.web.app" target="_blank">
              About
            </a>
          </p>
          <p className="link">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEMQkixmFRF-7EbivkHADXQ9kfbpazop6B3zh1YyK8hXLKDQ/viewform?usp=sf_link"
              target="_blank"
            >
              Contact
            </a>
          </p>
          <p className="link">
            <a href="https://hammr.pages.dev" target="_blank">
              Hammr
            </a>
          </p>
          <p className="link">
            <a href="https://bhhatsapp.vercel.app/" target="_blank">
              Bhhatsapp
            </a>
          </p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">
            <a href="https://mooglemaps.pages.dev" target="_blank">
              Maps
            </a>
          </p>
          <p className="link">
            <a href="https://ggl-drive-1029.web.app" target="_blank">
              Drive
            </a>
          </p>
          <p className="link">
            <a href="https://mewtube-op.web.app/" target="_blank">
              Mewtube
            </a>
          </p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://i.pinimg.com/280x280_RS/6e/b4/85/6eb485ea9b6e63e186c659f0ac8be188.jpg" />
          {/* <Avatar url="https://res.cloudinary.com/dthcbsgjy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1619081473/Profile%20Pic/Screenshot_20210123-230914_v5r9jl.png" /> */}
        </div>
      </header>

      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://cdn.drawception.com/drawings/HQ9pOotH0O.png"
          // src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full 
          border border-gray-500  px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Moogle Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
