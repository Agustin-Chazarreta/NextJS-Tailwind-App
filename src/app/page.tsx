import Image from "next/image";
import { Button } from "./components/Button";
import { inter } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around p-24 max-lg:flex-col max-lg:p-5 max-lg:justify-normal">
      <div className="flex flex-col justify-center w-2/5 max-lg:w-full max-lg:text-center max-lg:relative order-2 max-lg:order-1">
        <div className="text-sm leading-5 mb-6 max-lg:mt-9">ABOUT--PERSONAL</div>
        <div className="text-5xl leading-none mb-6 max-lg:text-3xl">!Hello! I´m Angela Smith</div>
        <div className="text-sm leading-6 mb-6 max-lg:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
       <div className="order-3 max-lg:w-full max-lg:hidden">
          <Button className="order-2">
            Get started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="flex order-3 max-lg:order-1 max-lg:w-4/5 max-lg:justify-center max-lg:m-7">
        <Image src="/avatar.png" alt="avatar" width={700} height={820} style={{  order: 2}} />
      </div>
      <div className="hidden max-lg:w-full max-lg:block max-lg:order-3">
          <Button className="">
            Get started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Button>
        </div>
    </main>
  );
}

