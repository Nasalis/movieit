interface ReceptionIconProps {
  symbol: string;
}

export function ReceptionIcon({ symbol }: ReceptionIconProps) {
  return (
    <div className="w-full h-full flex justify-end">
      <b className="w-8 h-8 text-white font-bold flex items-center justify-center rounded-md bg-yellow-100">
        {symbol}
      </b>
    </div>
  )
}