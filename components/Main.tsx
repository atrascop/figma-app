import Image from "next/image";
function Main() {
  return (
    <div>
      <p className="absolute font-NOKA w-[150px] opacity-[90%] h-[14px] font-normal left-[20px] top-[19px] leading-[13.90px] text-[12px]">
        New Release
      </p>
      <p className=" absolute font-Nike text-[15px] font-normal w-[200px] h-[17px] left-[20px] top-[60px] leading-[19px] ">
        Pegasus Nike
      </p>

      {/* <div>
        <Image className="" width={20} height={20} src="Photo1.jpeg/" />
      </div> */}
      <div className=" absolute left-[120px] top-[-63px] -rotate-2 ">
        <Image
          className="overflow-hidden "
          src="/../public/Phot1.png"
          layout="fixed"
          alt="me"
          width="300px"
          height="300px"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Main;
