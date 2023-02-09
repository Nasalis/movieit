import { Button } from "../Button";
import { CastCard } from "../CastCard";
import { RecommendationCard } from "../RecommendationCard";
import { Review } from "../Review";
import { Slider } from "../Slider";
import ReactPlayer from "react-player/youtube";

export function TvShow() {
  return (
    <div className="display flex-col items-center min-h-screen max-h-full bg-black-100">
      <div className="relative flex items-end justify-between bg-[url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/9ijMGlJKqcslswWUzTEwScm82Gs.jpg')] bg-cover max-h-[calc(100vh-2rem)] w-full">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-l from-black-100 to-transparent" ></div>
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black-100 to-transparent" ></div>
        <div className="flex items-center justify-start w-full gap-x-8 ml-8 flex-1 z-10">
          <Button content="Watch on official site"/>
          <Button content="Watch the trailer" border/>
        </div>
        <aside className="w-4/12 flex flex-col h-screen gap-3 py-14 px-8 text-white z-10">
          <h1 className="text-5xl text-red-100 font-bold uppercase">
            The Mandalorian
          </h1>
          <div className="flex items-center justify-start gap-2">
            <img className="w-12 h-12 rounded-full object-cover" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9U9Y5GQuWX3EZy39B8nkk4NY01S.jpg" alt="director photo" />
            <div className="grid gap-1">
              <span className="text-base text-white font-semibold uppercase tracking-widest">
                Martin Scorsese
              </span>
              <small className="text-sm text-gray-100 font-normal">
                Director
              </small>
            </div>
          </div>
          <i className="text-sm text-white">
            "Bounty hunting is a complicated profession."
          </i>
          <div className="h-full">
            <span className="text-xl text-gray-100">
              <b>Total of Seasons</b> - 3
            </span>
            <ul className="grid place-items-center gap-8 py-5 min-h-48 max-h-64 overflow-y-auto">
              <li className="">
                <ReactPlayer 
                  url={"https://www.youtube.com/watch?v=aOC8E8z_ifw"} 
                  height={150} 
                  width={270} 
                  controls
                />
              </li>
              <li className="">
                <ReactPlayer 
                  url={"https://www.youtube.com/watch?v=eW7Twd85m2g"} 
                  height={150} 
                  width={270} 
                  controls
                />
              </li>
              <li className="">
                <ReactPlayer 
                  url={"https://www.youtube.com/watch?v=2WHgnoVKgLI"} 
                  height={150} 
                  width={270} 
                  controls
                />
              </li>
            </ul>
          </div>
          <div className="grid gap-2">
            <span className="text-xl text-gray-100">
              <b>Sinopse</b>
            </span>
            <p className="text-base text-white font-normal">
              The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.
            </p>
          </div>
          <hr className="h-[2px] bg-white brightness-50" />
          <div className="grid">
            <span className="text-xl text-gray-100">
              <b>Genres</b>
            </span>
            <span className="text-base text-gray-100">
              Drama | History
            </span>
          </div>
        </aside>
      </div>
      <section className="flex flex-col h-full p-10">
        <h3 className="text-3xl text-white font-bold mb-4">
          Cast
        </h3>
        <Slider>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
        </Slider>
      </section>
      <section className="flex flex-col h-full p-10">
        <h3 className="text-3xl text-white font-bold mb-4">
          Crew
        </h3>
        <Slider>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
          <CastCard/>
        </Slider>
      </section>
      <div className="px-10">
        <hr className="h-[2px] bg-white brightness-50" />
      </div>
      <main className="grid grid-cols-4 grid-rows-1 h-full mt-8 mx-10">
        <div className="grid col-start-1 col-end-4 gap-8 p-4">
          <Review/>
          <Review/>
          <Review/>
          <button className="text-2xl font-bold uppercase transition-all duration-300 bg-white hover:bg-black-200 hover:text-red-100">
            See more
          </button>
        </div>
        <aside className="col-start-4 col-end-5 row-start-1 row-end-2 px-4 py-5  bg-white">
          <h4 className="text-xl text-black-100 font-bold mb-8">
            Informations
          </h4>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div className="grid place-items-start">
                <b className="text-base text-black-100">
                  Status
                </b>
                <span className="text-sm text-black-100 font-bold opacity-70">
                  Return Series
                </span>
              </div>
              <div className="grid place-items-end">
                <b className="text-base text-black-100">
                  Network
                </b>
                <span className="text-sm text-black-100 font-bold opacity-70">
                  Disney
                </span>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <div className="grid place-items-start">
                <b className="text-base text-black-100">
                  Type
                </b>
                <span className="text-sm text-black-100 font-bold opacity-70">
                  Scripted
                </span>
              </div>
              <div className="grid place-items-end">
                <b className="text-base text-black-100">
                  Language
                </b>
                <span className="text-sm text-black-100 font-bold opacity-70">
                  English
                </span>
              </div>
            </div>
          </div>
          <footer className="mt-8">
            <h4 className="text-xl text-black-100 font-bold">
              Production companies
            </h4>
            <ul className="flex flex-col mt-4 gap-3">
              <li className="text-sm text-black-100 font-bold opacity-70">
                Lucasfilm Ltd
              </li>
              <li className="text-sm text-black-100 font-bold opacity-70">
                Fairview Entertainment
              </li>
              <li className="text-sm text-black-100 font-bold opacity-70">
                Golem Creations
              </li>
            </ul>
          </footer>
        </aside>
      </main>
      <footer className="flex flex-col h-full p-10">
        <h3 className="text-3xl text-white font-bold mb-4">
          Recommendations
        </h3>
        <Slider>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
          <RecommendationCard/>
        </Slider>
      </footer>
    </div>
  )
}