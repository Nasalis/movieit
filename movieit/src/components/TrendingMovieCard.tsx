interface TrendingMovieCardProps {
  backgroundPath: string;
  posterPath: string;
}

export function TrendingMovieCard({ backgroundPath, posterPath }: TrendingMovieCardProps) {
  return (
    <div className={`group relative w-[640px] h-80 rounded-2xl bg-[url('${backgroundPath}')] bg-cover scale-100 transition-all hover:scale-105`}>
      <div className="absolute left-0 top-0 w-full h-full rounded-2xl bg-gradient-to-r from-black-100 to-transparent" ></div>
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-evenly ">
        <div className="overflow-hidden relative before:content-[''] before:absolute before:h-[350px] before:w-5 before:bg-white before:shadow-m before:blur-sm before:opacity-90 before:-bottom-[208px] before:-rotate-[45deg] before:-translate-x-[0px group-hover:before:animate-shining">
          <img className="z-10 w-[184px] h-[255px] rounded-xl" draggable={false} src={posterPath} alt="" />
        </div>
        <div className="p-3 rounded-2xl max-w-xs flex flex-col items-start justify-center gap-2 bg-black-rgba">
          <h2 className="text-white text-3xl font-bold">
            Raging Bull
          </h2>
          <span className="text-white text-base font-normal">
            01/01/1981 | Drama, História | 2h 9m
          </span>
          <h3 className="text-white text-sm font-bold">
            Sinopse
          </h3>
          <p className="line-clamp-6 text-white text-sm w-full max-h-[255px] h-full">
            O pugilista peso-médio Jake LaMotta (Robert De Niro), chamado de "o touro do Bronx", sobe na carreira com a mesma rapidez com que sua vida particular se degrada, graças ao seu temperamento violento e possessivo. Todos ao seu redor são afetados por seu comportamento auto-destrutivo, como seu irmão e empresário Joey LaMotta (Joe Pesci) e sua esposa Vickie (Cathy Moriarty).</p>
        </div>
      </div>
    </div>
  )
}