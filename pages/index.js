import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <header className="flex w-full p-4 justify-between text-sm text-gray-700 ">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Image</p>
          <ViewGridIcon className="h-10 w-10 animation transition duration-150 transform hover:scale-110 rounded-full p-2 hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://avatars.githubusercontent.com/u/75438046?s=400&u=4ad31515204e1d0d63e7940b107a25b85382a77c&v=4" />
        </div>
      </header>

      <form className="flex flex-col items-center pt-44 flex-grow ">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-lg rounded-full border px-5 py-3 items-center border-gray-200 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-4 mr-4 text-gray-500 " />
          <input type="text" className="focus:outline-none flex-grow  " />
          <MicrophoneIcon className="h-5" />
        </div> 
        <div className="flex">

          <button className="btn"> Google Search</button>
          <button className="btn"> I'm Felling Lucky</button>
        </div>
      </form>
    </div>
  );
}
