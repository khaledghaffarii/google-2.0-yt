import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  return (
    <div>
      <header>
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={33}
          width={92}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <from className="flex  w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-lg rounded-full border border-gray-500  px-5 py-3 mr-5 pl-10 items-center sm:max-w-xl lg:max-w-2xl">
          <input
            ref={searchInputRef}
            type="text"
            className=" flex-grow w-full focus:outline-none"
          />

          <XIcon
            className="h-5 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 "
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className=" h-4 mr-4 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer" />
          <SearchIcon className="h-5 text-blue-500 border-l-2 pl-4 hidden cursor-pointer" />
        </from>
      </header>
    </div>
  );
}

export default Header;
