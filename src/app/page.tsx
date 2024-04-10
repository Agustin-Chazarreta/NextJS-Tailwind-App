import Image from "next/image";
import { Button } from "./components/Button";
import { inter } from "./fonts";


export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-around p-24 max-lg:bg-black">
       <div className={`flex-col ${inter.className} w-2/5 `} >
        <h3 className="text-sm leading-5 ">ABOUT--PERSONAL</h3>
        <h1 className="text-5xl leading-none my-1">!Hello! I´m Angela Smith</h1>
        <p className="text-sm leading-6 my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       <Button>
          Get started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
        </Button>
        </div>
<Image src="/avatar.png" alt="avatar" width={700} height={820}></Image>
    </main>
  );
}
