import { Separator } from "../ui/separator"
import { Button } from "@/components/ui/button"


const Landing = () => {
  return (
    <div className="w-full h-screen">
      <div className="pt-48 px-20">
        {["we create", "eye-opening", "presentations"].map((item) =>{
          return(
            <div className="masker text-[7.5vw] uppercase font-secondary-font leading-[6vw] tracking-tighter ">
              {item}
            </div>
          )
        })}
      </div>
     <Separator className="mt-32 py-[0.1rem]"/>
     <div className="justify-between items-center flex w-full py-2 px-8">
      {["For public and private companies", "From the first pitch to IPO"].map((item) =>{
        return(
          <p className="text-md font-light font-primary-font tracking-tight leading-none ">
            {item}
          </p>
        )
      })}
        <Button variant="outline" className="text-md tracking-tight font-light leading-none font-primary-font border-xl">Start the Project!</Button>
     </div>
    </div>
  )
}

export default Landing
