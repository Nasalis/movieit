export function CastCard() {
  return (
    <div className="w-52 h-36 grid place-items-center gap-2">
      <img className="w-20 h-20 rounded-full object-cover" draggable={false} src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9U9Y5GQuWX3EZy39B8nkk4NY01S.jpg" alt="" />
      <span className="text-base text-white font-semibold capitalize">
        Martin Scorsese
      </span>
      <small className="text-sm text-gray-100 font-normal uppercase">
        Director
      </small>
    </div>
  )
}