import Head from "next/head";

import { ThemeSwitcher } from "components";
import { Calculator } from "components/calculator";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sheeran Calc</title>
        <meta name="description" content="ED SHEERAN CALCULATOR GO BRRRRR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/FaceSmall.png" />
        <link rel="apple-touch-icon" href="/FaceSmall.png" />
      </Head>
      <main className="w-full min-h-[inherit] flex justify-center items-center font-spartan bg-skin-main transition-all duration-200 ease-in-out">
        <div className="flex flex-col w-11/12 sm:min-w-[350px] sm:w-[65vh] max-w-[550px] z-10">
          <CalculatorHeader />
          <Calculator />
        </div>
        <Image
          src="/Face.jpeg"
          fill
          alt="background"
          className="z-0 absolute"
        />
      </main>
    </>
  );
}

const CalculatorHeader = () => (
  <div className="flex justify-between items-center w-full mb-8">
    <h1 className="text-3xl text-skin-switcher font-spartan text-black">
      Sheeran Calc
    </h1>
    {false && <ThemeSwitcher />}
  </div>
);
