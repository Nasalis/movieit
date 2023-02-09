import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ReceptionIcon } from "../ReceptionIcon";

const dropIn = {
  hidden: {
    y: "2.25rem",
    opacity: 0
  },
  visible: {
    y: "2.5rem",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 0,
      stiffness: 500
    }
  },
  exit: {
    y: "2.25rem",
    opacity: 0
  }
}

export function PersonDetails() {
  const trailers = [
    "https://www.youtube.com/watch?v=yUp6d79WRVI",
    "https://www.youtube.com/watch?v=t433PEQGErc",
    "https://www.youtube.com/watch?v=T5IligQP7Fo",  
  ]
  const [currentTrailer, setCurrentTrailer] = useState(trailers[0]);

  const [currentChecked, setCurrentChecked] = useState({
    index: 0,
    datumIndex: 0
  });
  const [timeLineMovies, setTimeLineMovies] = useState([
    {
      year: 2023,
      data: [
        {
          id: 1,
          title: "Savage Salvation",
          sinopse: "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
          character: "Sheriff Church",
          year: 2023,
          checked: false,
        }
      ]
    },
    {
      year: 2022,
      data: [
        {
          id: 1,
          title: "Sergio Leone: The Italian Who Invented America",
          sinopse: "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
          character: "Sé stesso",
          year: 2022,
          checked: false,
        },
        {
          id: 2,
          title: "Amsterdam",
          sinopse: "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
          character: "General Gil Dillenbeck",
          year: 2022,
          checked: false,
        },
        {
          id: 3,
          title: "The Past Goes Fast",
          sinopse: "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
          character: "Self",
          year: 2022,
          checked: false,
        },
        {
          id: 4,
          title: "Becoming Al Pacino",
          sinopse: "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
          character: "Self (archive footage)",
          year: 2022,
          checked: false,
        },
      ]
    },
  ])

  function handleModalMovie(el: any, currIndex: number, value: boolean) {
    let index = timeLineMovies.findIndex(element => element.year === el.year);
    let temporaryArray = timeLineMovies.slice();
    temporaryArray[currentChecked.index]["data"][currentChecked.datumIndex].checked = false
    temporaryArray[index]["data"][currIndex].checked = value;
    setTimeLineMovies(temporaryArray)
    setCurrentChecked({
      index: index,
      datumIndex: currIndex
    })
  }

  console.log(timeLineMovies)

  return (
    <div className="display flex-col items-center min-h-screen max-h-full bg-black-100">
      <div className="relative flex flex-col items-end justify-between bg-[url('https://image.tmdb.org/t/p/original/tvNuhRlpRozDgsX1zR9gQ2aHv1X.jpg')] bg-cover h-full w-full">
        <div className="flex items-center justify-center w-full gap-x-8 p-8">
          <img className="rounded-lg" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg" alt="" />
          <div className="flex flex-col gap-8 w-full h-full max-h-[450px] rounded-lg bg-black-rgba p-8">
            <div>
              <h1 className="text-3xl text-white font-bold">
                Robert De Niro
              </h1>
              <h2 className="text-xl text-white font-normal">
                17/08/1943 (80 years)
              </h2>
              <small className="text-base text-white font-normal">
                New York, New York
              </small>
            </div>
            <ul className="flex items-center justify-start gap-4">
              <li className="grid justify-center gap-1">
                <span className="text-base text-white text-center font-semibold uppercase">
                  Movies
                </span>
                <hr className="h-1 border-none bg-red-100" />
                <span className="text-base text-white text-center font-semibold uppercase">
                  194
                </span>
              </li>
              <li className="grid justify-center gap-1">
                <span className="text-base text-white text-center font-semibold uppercase">
                  Tv
                </span>
                <hr className="h-1 border-none bg-red-100" />
                <span className="text-base text-white text-center font-semibold uppercase">
                  27
                </span>
              </li>
              <li className="grid justify-center gap-1">
                <span className="text-base text-white text-center font-semibold uppercase">
                  Director
                </span>
                <hr className="h-1 border-none bg-red-100" />
                <span className="text-base text-white text-center font-semibold uppercase">
                  2
                </span>
              </li>
            </ul>
            <p className="text-white text-base w-full max-h-[255px] h-full overflow-auto">
              Robert Anthony De Niro Jr. (born August 17, 1943) is an American actor, producer, and director. He is particularly known for his nine collaborations with filmmaker Martin Scorsese, and is the recipient of various accolades, including two Academy Awards, a Golden Globe Award, the Cecil B. DeMille Award, and a Screen Actors Guild Life Achievement Award. In 2009, De Niro received the Kennedy Center Honor, and received a Presidential Medal of Freedom from U.S. President Barack Obama in 2016.
Born in Manhattan in New York City, De Niro studied acting at HB Studio, Stella Adler Conservatory, and Lee Strasberg's Actors Studio. His first major role was in Greetings (1968), and gained recognition with his role as a baseball player in the sports drama Bang the Drum Slowly (1973). His first collaboration with Scorsese was Mean Streets (1973), where he played small-time criminal "Johnny Boy\. Stardom followed with his role as young Vito Corleone in Francis Ford Coppola's crime epic The Godfather Part II (1974), which won De Niro the Academy Award for Best Supporting Actor. For his portrayal of Travis Bickle in Taxi Driver (1976) and a soldier in the Vietnam War drama The Deer Hunter (1978), he earned two nominations for the Academy Award for Best Actor.
De Niro portrayed Jake LaMotta in Scorsese's biographical drama Raging Bull (1980), for which he won the Academy Award for Best Actor, his first in this category. He diversified to other roles, playing a stand-up comic in The King of Comedy (1982), and gained further recognition for his performances in Bernardo Bertolucci's epic 1900 (1976), Sergio Leone's crime epic Once Upon a Time in America (1984), Terry Gilliam's dystopian satire Brazil (1985), the religious epic The Mission (1986), and the comedy Midnight Run (1988). De Niro portrayed gangster Jimmy Conway in Goodfellas (1990), a catatonic patient in the drama Awakenings (1990), and a criminal in the psychological thriller Cape Fear (1991). All three films received praise for De Niro's performances. He then starred in This Boy's Life (1993), and directed his first feature film with 1993's A Bronx Tale. His other critical successes include the crime films Heat (1995) and Casino (1995).\n\nHe is also known for his comic roles in Wag the Dog (1997), Analyze This (1999), and Meet the Parents (2000). After appearing in several critically panned and commercially unsuccessful films, he earned an Academy Award nomination for Best Supporting Actor for his performance in David O. Russell's 2012 romantic comedy Silver Linings Playbook. In 2017, De Niro portrayed Bernie Madoff in The Wizard of Lies, earning a Primetime Emmy Award nomination. He then starred in the psychological thriller Joker (2019) and Scorsese's crime epic The Irishman (2019).\n\nDe Niro and producer Jane Rosenthal founded the film and television production company TriBeCa Productions in 1989, which has produced several films alongside his own. Also with Rosenthal, he founded the Tribeca Film Festival in 2002. Six of De Niro's films have been inducted into the United States National Film Registry by the Library of Congress as being \"culturally, historically, or aesthetically significant\".\n\nFrom Wikipedia, the free encyclopedia</p>
          </div>
        </div>
      </div>
      <section className="relative flex flex-col h-full p-10 py-52 after:content-[''] after:absolute after:w-1 after:h-full after:bg-white after:top-0 after:left-1/2 after:-ml-1 after:-z-0">
        {timeLineMovies.map(el => (
          el.year % 2 !== 0 ? (
            <div className="relative py-2 px-12 w-1/2">
              <small className="absolute w-10 -right-5 top-5 rounded z-10 text-base text-center font-bold bg-white">
                {el.year}
              </small>
              <div className="relative p-4 rounded-md bg-white left-0">
                <ul>
                  {el.data.map((curr, index) => (
                    <li className="relative text-black-rgba font-semibold">
                      <AnimatePresence
                        mode="wait"
                        onExitComplete={() => null}
                      >
                        {curr.checked && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            variants={dropIn}
                            className="absolute flex items-center justify-center h-44 w-96 gap-x-4 px-4 bottom-10 -left-20 rounded-lg bg-black-500 z-10"
                          >
                            <img className="w-24 h-36" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg" alt="" />
                            <div className="flex flex-col items-center gap-y-2">
                              <div className="flex items-start justify-start gap-x-2 w-full">
                                <h2 title={curr.title} className="text-xl text-white font-bold truncate max-w-[200px]">
                                  {curr.title}
                                </h2>
                                <ReceptionIcon symbol="M"/>
                              </div>
                              <p className="line-clamp-6 text-xs text-white font-normal">
                                {curr.sinopse}
                              </p>
                            </div>
                            <span className="absolute h-0 w-0 -bottom-5 left-20 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[15px] border-l-black-500 rotate-90 -z-0 "></span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <input 
                        onClick={() => handleModalMovie(el, index, !curr.checked)} 
                        type="checkbox"
                        checked={curr.checked} 
                        className="mr-2 cursor-pointer" 
                      />
                      <b className="text-black-100">{curr.title}</b> como {curr.character}
                    </li>
                  ))}
                </ul>
                <span className="absolute h-0 w-0 top-2 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[15px] border-l-white -right-3 -z-0 "></span>
              </div>
            </div>
          ) : (
            <div className="relative py-2 px-12 w-1/2 left-1/2">
              <small className="absolute w-10 -left-5 top-5 rounded z-10 text-base text-center font-bold bg-white">
                {el.year}
              </small>
              <div className="relative p-4 rounded-md bg-white">
                <ul className="grid gap-y-4">
                  {el.data.map((curr, index) => (
                    <li className="relative text-black-rgba font-semibold w-full h-full">
                      <AnimatePresence
                        mode="wait"
                        onExitComplete={() => null}
                      >
                        {curr.checked && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              variants={dropIn}
                              className="absolute flex items-center justify-center bottom-10 -left-20 h-44 w-96 gap-x-4 px-4 rounded-lg bg-black-500 z-10"
                            >
                              <img className="w-24 h-36" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg" alt="" />
                              <div className="flex flex-col items-center gap-y-2">
                                <div className="flex items-start justify-start gap-x-2 w-full">
                                  <h2 title={curr.title} className="text-xl text-white font-bold truncate max-w-[200px]">
                                    {curr.title}
                                  </h2>
                                  <ReceptionIcon symbol="M"/>
                                </div>
                                <p className="line-clamp-6 text-xs text-white font-normal">
                                  {curr.sinopse}
                                </p>
                              </div>
                              <span className="absolute h-0 w-0 -bottom-5 left-20 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[15px] border-l-black-500 rotate-90 -z-0 "></span>
                            </motion.div>
                        )}
                      </AnimatePresence>
                      <input 
                        onClick={() => handleModalMovie(el, index, !curr.checked)} 
                        type="checkbox"
                        checked={curr.checked} 
                        className="mr-2 cursor-pointer" 
                      />
                      <b className="text-black-100">{curr.title}</b> como {curr.character}
                    </li>
                  ))}
                </ul>
                <span className="absolute h-0 w-0 top-2 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] border-r-white -left-3 -z-0 "></span>
              </div>
            </div>
          )
        ))}
      </section>
    </div>
  )
}