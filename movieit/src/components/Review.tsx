import UnknowUser from "../assets/unknow-user-icon.png";

export function Review() {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-2">
      <div className="flex gap-2 items-center">
        <img className="w-12 h-12 rounded-full object-cover" src={UnknowUser} alt="director photo" />
        <div className="grid gap-1">
          <span className="text-base text-white font-bold">
            Peter89Spencer
          </span>
          <small className="text-sm text-gray-100 font-bold">
            12/24/2019
          </small>
        </div>
      </div>
      <p className="text-base text-white w-full">Wow! Just, wow!
The Mandalorian is not just a sci-fi, but a western as well. Pedro Pascal was awesome as the titular character. But Baby Yoda was the one who stole the show!
Great cast, great cast, great special effects. Just great!</p>
    </div>
  )
}