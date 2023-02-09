interface ButtonProps {
  content: string;
  border?: boolean;
}

export function Button({ content, border}: ButtonProps) {
  return (
    <button className={`max-w-max h-full py-9 px-8 text-2xl text-white uppercase ${border ? "border-2 border-white" : ""} bg-black-500 transition-all hover:brightness-90`}>
      <b>{content}</b>
    </button>
  )
}