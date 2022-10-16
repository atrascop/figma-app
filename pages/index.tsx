import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Bar from "./../components/Bar";
import { SiNike } from "react-icons/si";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" felx justify-between  w-[360px] h-[640px] top-[6px] bottom-[10px] left-[500px] relative bg-[#e9ebf2] overflow-hidden">
        <header>
          <Header />
        </header>
        <SiNike className="absolute w-[110px] h-[110px] left-[130px] top-5" />
        <main className=" absolute w-[318px] h-[179px] top-[130px] left-[21px] rounded-[20px] bg-black text-white flex justify-between overflow-hidden ">
          <Main />
        </main>
        <Bar />
        <footer className="w-[360px] h-[47px] top-[593px] absolute text-white bg-black flex items-center justify-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Home;
