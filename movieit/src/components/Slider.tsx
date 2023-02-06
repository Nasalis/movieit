import { motion } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react"

interface SliderProps {
  children: ReactNode;
}

export function Slider({ children }: SliderProps) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(window.innerWidth, carousel.current?.offsetWidth!)
    // setWidth(1.12 * carousel.current?.offsetWidth! - window.innerWidth);
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
  }, [])


  return (
    <motion.div 
      className="overflow-hidden  cursor-grab"
      ref={carousel}
      whileTap={{cursor: "grabbing"}}
    >
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        <motion.div className="flex">
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}