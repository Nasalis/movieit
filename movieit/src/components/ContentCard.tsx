import { useMotionValue, useTransform, motion } from "framer-motion";
import { ReceptionIcon } from "./ReceptionIcon";

export function ContentCard() {
  const xAxis = useMotionValue(0);
  const yAxis = useMotionValue(0);
  const rotateX = useTransform(yAxis, [-100, 100], [30, -30]);
  const rotateY = useTransform(xAxis, [-100, 100], [-30, 30]);

  return (
    <motion.div 
      style={{
        perspective: 2000,
        x: xAxis,
        y: yAxis,
        rotateX,
        rotateY
      }}
      whileHover={"hover"}
      drag
      dragElastic={0.18}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      whileTap={{cursor: "grabbing"}}
      className="w-[220px] h-[400px]"
    >
      <div className="relative">
        <div className="absolute left-0 top-0 w-full h-full rounded-t-2xl bg-gradient-to-t from-black-100 to-transparent" ></div>
        <img className="rounded-t-2xl " src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" alt="" />
      </div>
      <footer className="grid grid-cols-2 gap-y-2 grid-rows-2 p-2 bg-blue-100">
        <span className="col-start-1 col-end-3 row-start-1 row-end-1 text-white text-base font-bold">
          The Mandalorian
        </span>
        <small className="col-start-1 col-end-1 row-start-2 row-end-2 text-gray-200 text-xs">
          Sci-fi / Adventure / Action
        </small>
        <span className="col-start-2 col-end-3 row-start-2 row-end-2">
          <ReceptionIcon symbol="M"/>
        </span>
      </footer>
    </motion.div>
  )
}