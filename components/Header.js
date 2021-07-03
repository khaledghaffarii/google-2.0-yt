import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "../components/Avatar";
import HeaderOptions from "../components/HeaderOptions";
function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    console.log(term);
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex p-6 w-full items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={33}
          width={92}
          className="cursor-pointer ml-4"
          onClick={() => router.push("/")}
        />
      
        <form className=" flex flex-grow w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-lg rounded-full border border-gray-500  px-4 py-3  pl-10 items-center sm:max-w-xl lg:max-w-2xl">
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow  "
          />
          {/* <MicrophoneIcon className="h-4 mr-4 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer" /> */}
          <XIcon
            className="h-5 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 "
            onClick={() => (searchInputRef.current.value = "")}
          />
          {/* <SearchIcon className="h-4 mr-4 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer " /> */}
          <button hidden className="btn " onClick={search}>
            {" "}
            Google Search
          </button>
        </form>
        <Avatar className="ml-auto" url="https://avatars.githubusercontent.com/u/75438046?s=400&u=4ad31515204e1d0d63e7940b107a25b85382a77c&v=4" />
      </div>
      {/* Header option component */}
      <HeaderOptions/>
    </header>
  );
}

export default Header;
