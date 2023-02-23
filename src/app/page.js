import User from "@/components/User";
import Image from "next/image";

import { MicrophoneIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <>
      <form className="flex flex-1 items-center flex-col mb-3 mt-24">
        <Image
          width={300}
          height={100}
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
        <div className="flex w-[90%] md:w-[40%] mt-5 justify-center border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center">
          <MagnifyingGlassIcon className="h-5 text-gray-500 mr-2" />
          <input type="text" className="flex-1 focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        <button className="btn">Google Search</button>
        <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
    </>
  );
}
