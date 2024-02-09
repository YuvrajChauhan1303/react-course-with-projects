import { motion } from "framer-motion"
import { Separator } from "../ui/separator"

const Marquee = () => {
  return (
    <div className='w-full py-10 bg-green-800 rounded-3xl'>
        <Separator className="mt-3"/>
        <div className="border-zinc-300 flex items-center justify-center pt-20 whitespace-nowrap">
            <motion.h1 
            initial={{x: 0}} 
            animate={{x: "-100%"}} 
            transition={
                {ease:"linear", 
                repeat:Infinity, 
                duration: 10}} 
                className="uppercase font-bold text-[24vw] leading-none font-secondary-font">we are ochi
            </motion.h1>
        </div>
        <Separator className="-mt-20"/>
    </div>
  )
}

export default Marquee
