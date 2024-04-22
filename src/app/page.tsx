import Image from "next/image";
import { Button } from "./components/Button";
import { interSemiBold, interLight, interNormal } from "./fonts";

export default function Home() {
  return (
    <div className="h-full mb-24 mt-9">
      <div className="flex items-center justify-around h-full p-24 max-lg:flex-col max-lg:p-5">
        <div className="flex flex-col justify-center w-2/5 max-lg:w-full max-lg:text-center max-lg:relative order-2 max-lg:order-1">
          <div className={`text-sm mb-6 max-lg:mt-9${interNormal.className} `}>A B O U T — P E R S O N A L</div>
          <div className={`text-5xl mb-6 max-lg:text-3xl${interNormal.className}`}>¡Hello!<strong className={`${interSemiBold.className}`}> I´m Angela Smith</strong> </div>
          <div className={`text-base mb-6 max-lg:mb-0${interLight.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <Button className="order-3 max-lg:w-full max-lg:hidden">
            Get started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Button>
        </div>
        <div className="flex order-3 max-lg:order-1 max-lg:w-4/5 max-lg:justify-center max-lg:m-7">
          <Image src="/avatar.png" alt="avatar" width={700} height={820} style={{ order: 2 }} />
        </div>
        <Button className="hidden max-lg:w-full max-lg:block max-lg:order-3">
          Get started
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Button>
      </div>
      <div className="flex items-center justify-center align-middle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 bottom-0 cursor-pointer" >
          <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
    </div>
  );
}



