import { Separator } from "../ui/separator";
import { IoIosArrowRoundUp } from "react-icons/io";

const Landing = () => {
  return (
    <div className="w-full h-screen">
      <div className="pt-48 px-20">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <div className="w-[9vw] h-[7vw] relative top-[-1.1vw] bg-red-500 mr-4 rounded-xl">

                  </div>
                )}
                <h1 className="font-bold text-[9vw] uppercase font-secondary-font leading-[8.2vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <Separator className="mt-20 py-[0.1rem]" />
      <div className="justify-between items-center flex w-full py-2 px-8">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item) => {
          return (
            <p className="text-md font-light font-primary-font tracking-tight leading-none ">
              {item}
            </p>
          );
        })}

        <div className="flex items-center justify-center gap-2 ">
          <button className="hover:text-black duration-500 uppercase text-md hover:bg-white border-2 rounded-[2rem] px-4 py-2">
            Start the Project
          </button>
          <button className="hover:text-black duration-500 uppercase hover:bg-white text-3xl rotate-45 border-2 rounded-[50%] p-1.5">
            <IoIosArrowRoundUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
