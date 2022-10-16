import Image from "next/image";
import { RiAddCircleLine } from "react-icons/ri";
function Bar() {
  return (
    <div className="absolute ">
      <div className=" absolute flex font-bold font-NAko text-[11px] leading-[14.98px] items-center justify-evenly px-2  w-[369px] h-[44px] top-[310px]">
        <p className="pro">Poducts 1</p>
        <p className="pro">Poducts 2</p>
        <p className="pro">Poducts 3</p>
        <p className="pro">Poducts 4</p>
        <p className="pro">Poducts 5</p>
      </div>
      <div className="flex absolute justify-between ">
        <div className=" bg-[#8396f6]   -rotate-[30] rounded-[20px] w-[140px] h-[150px] top-[390px] left-[50px] absolute ">
          <div className="absolute top-[-45px] -rotate-[25deg] scale-x-[-1] hover:oppa ">
            <Image
              className="overflow-hidden "
              src="/../public/Phot2.png"
              layout="fixed"
              alt="me"
              width="140px"
              height="140px"
              objectFit="contain"
            />
          </div>
          <div className="absolute top-[80px] text-[15px] left-2">
            <h1 className="font-Nike ">Nike air 21</h1>
            <p className="font-NAko text-[12px] font-bold"> to runn</p>
          </div>
          <RiAddCircleLine className=" absolute w-[25px] h-[25px] top-[119px] text-[#ffbdbd] left-[109px] hover:text-[#473a3a] " />
        </div>
        <div className="bg-[#3d954d] -rotate-[30] rounded-[20px] w-[140px] h-[150px] top-[390px] left-[200px] absolute ">
          <div className="absolute top-[-50px] -rotate-[25deg] hover:oppa ">
            <Image
              className="overflow-hidden "
              src="/../public/Phot4.png"
              layout="fixed"
              alt="me"
              width="140px"
              height="140px"
              objectFit="contain"
            />
          </div>
          <div className="absolute top-[80px] text-[14px] left-2">
            <h1 className="font-Nike">Nike force 36</h1>
            <p className="font-NAko text-[12px] font-bold"> to runn</p>
          </div>
          <RiAddCircleLine className=" absolute w-[25px] h-[25px] top-[119px] text-[#ffbdbd] left-[109px] hover:text-[#473a3a]" />
        </div>
        <div className="bg-[#c6f683]   -rotate-[30] rounded-[20px] w-[140px] h-[150px] top-[390px] left-[350px] absolute ">
          <div className="absolute top-[-45px] -rotate-[25deg] scale-x-[-1]  hover:oppa">
            <Image
              className="overflow-hidden "
              src="/../public/Phot5.png"
              layout="fixed"
              alt="me"
              width="140px"
              height="140px"
              objectFit="contain"
            />
          </div>
          <div className="absolute top-[80px] text-[15px] left-2">
            <h1 className="font-Nike ">Nike air 21</h1>
            <p className="font-NAko text-[12px] font-bold"> to runn</p>
          </div>
          <RiAddCircleLine className=" absolute w-[25px] h-[25px] top-[119px] text-[#ffbdbd] left-[109px] hover:text-[#473a3a]" />
        </div>
        <div className="bg-[#ff2727]   -rotate-[30] rounded-[20px] w-[140px] h-[150px] top-[390px] left-[-100px] absolute ">
          <div className="absolute top-[-45px] -rotate-[25deg] scale-x-[-1] hover:oppa ">
            <Image
              className="overflow-hidden "
              src="/../public/Phot3.png"
              layout="fixed"
              alt="me"
              width="140px"
              height="140px"
              objectFit="contain"
            />
          </div>
          <RiAddCircleLine className=" absolute w-[25px] h-[25px] top-[119px] text-[#ffbdbd] left-[109px] hover:text-[#473a3a]" />
        </div>
      </div>
    </div>
  );
}

export default Bar;
