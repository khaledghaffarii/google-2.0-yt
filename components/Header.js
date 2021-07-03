import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from "next/router";
import { useRef } from "react";
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
              className=" flex-grow w-full focus:outline-none   "
            />
           
              <XIcon
                className=" h-5 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                onClick={() => (searchInputRef.current.value = "")}
              />
       
          </from>
        </header>
      </div>
    );
}

export default Header
