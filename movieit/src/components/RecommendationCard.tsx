import { ReceptionIcon } from "./ReceptionIcon";

export function RecommendationCard() {
  return (
    <div className="group w-[200px] h-full mr-8 scale-100 transition-all hover:scale-105">
      <div className="relative">
        <img className="rounded-t-2xl grayscale duration-500 hover:grayscale-0" draggable={false} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wOi8s0WQZYlTDkWB46Z6p3ji5Fq.jpg" alt="" />
      </div>
      <footer className="flex items-center justify-between p-2 bg-blue-100">
        <span className="col-start-1 col-end-3 row-start-1 row-end-1 text-white text-base font-bold">
          Taxi Driver
        </span>
        <span className="col-start-2 col-end-3 row-start-2 row-end-2">
          <ReceptionIcon symbol="M"/>
        </span>
      </footer>
    </div>
  )
}