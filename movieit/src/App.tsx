import { Logo } from "./components/utils/Logo"
import { Compass, Heart, MagnifyingGlass, MonitorPlay } from "phosphor-react";
import { TrendingMovieCard } from "./components/TrendingMovieCard";
import { ContentCard } from "./components/ContentCard";
import { Slider } from "./components/Slider";

function App() {

  const sideBarOptions = [
    {
      icon: <Compass size={20} weight="fill" className="text-red-100 mr-1"/>,
      label: "Browse"
    },
    {
      icon: <MonitorPlay size={20} weight="fill" className="text-red-100 mr-1"/>,
      label: "Watchlist", 
    },
    {
      icon: <Heart size={20} weight="fill" className="text-red-100 mr-1"/>,
      label: "Favorites"
    }
  ]

  const navigationOptions = ["Home", "Movies", "TV shows/Series"]

  const movies = [
    {
      backgroundPath: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg",
      posterPath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
    },
    {
      backgroundPath: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg",
      posterPath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
    },
    {
      backgroundPath: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg",
      posterPath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
    },
    {
      backgroundPath: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg",
      posterPath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
    },
    {
      backgroundPath: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg",
      posterPath: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
    }
  ]

  return (
    <div className="grid grid-cols-4 min-h-screen max-h-full bg-black-200">
      <aside className="col-start-1 col-end-2 min-w-full h-full border-r-2 border-r-black-400">
        <div className=" p-4">
          <Logo/>
          <div className="w-full h-[2px] bg-black-400 mt-4 mb-4"></div>
        </div>
        <ul>
          {sideBarOptions.map(option => (
            <li className="group flex items-center pl-4 pr-4 mb-4 text-white font-bold relative group">
              <div className="w-0.5 h-5 bg-transparent absolute left-0 group-hover:bg-red-100 ease-in duration-100 cursor-pointer"></div>
              {option.icon}
              {option.label}
            </li>
          ))}
        </ul>
      </aside>
      <main  
        className="grid col-start-2 col-end-5 w-full max-h-screen pl-8 py-4 gap-y-9 overflow-y-auto overflow-x-hidden"
      >
        <div className="relative max-w-md">
          <MagnifyingGlass size={20} weight="fill" className="absolute top-2 left-3 text-gray-300" />
          <input className="w-full p-2 pl-9 text-white text-xs font-semibold rounded-2xl border-gray-300 border-x-2 border-y-2 bg-transparent" type="text" placeholder="Search everything" min={2} />
        </div>
        <nav className="max-w-[15.625rem]">
          <ul className="flex items-center justify-between gap-4">
            {navigationOptions.map(el => (
              <li className="text-white text-base font-bold">
                {el}
              </li>
            ))}
          </ul>
        </nav>
        <section className="relative flex flex-col items-start justify-center gap-4 overflow-x-hidden h-96">
          <h2 className="text-white text-4xl font-bold capitalize">
            Trending movies
          </h2>
          <Slider>
            <TrendingMovieCard 
              backgroundPath="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg"
              posterPath="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
            />
            <TrendingMovieCard 
              backgroundPath="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg"
              posterPath="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
            />
            <TrendingMovieCard 
              backgroundPath="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg"
              posterPath="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
            />
            <TrendingMovieCard 
              backgroundPath="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg"
              posterPath="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
            />
            <TrendingMovieCard 
              backgroundPath="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wgq2oA1aJiawBlRDIU8agXk7DQQ.jpg"
              posterPath="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lLeWJU33HgfWTnrOcaNBR5fUcF1.jpg"
            />
          </Slider>
        </section>
        <section className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-white text-4xl font-bold capitalize">
            Top rated
          </h2>
          <ul className="flex flex-wrap items-center gap-10 justify-center w-full">
            <li className="mr-8">
              <ContentCard/>
            </li>
            <li className="mr-8">
              <ContentCard/>
            </li>
            <li className="mr-8">
              <ContentCard/>
            </li>
            <li className="mr-8">
              <ContentCard/>
            </li>
            <li className="mr-8">
              <ContentCard/>
            </li>
            <li className="mr-8">
              <ContentCard/>
            </li>
          </ul>
        </section>
      </main >
    </div>
  )
}

export default App
