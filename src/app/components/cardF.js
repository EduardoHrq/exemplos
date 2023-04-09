export default function CardB() {
  return (
    <div className="bg-indigo-800 w-[450px] h-[250px] rounded-xl relative overflow-hidden">
      <div className="w-full h-[25%] bg-indigo-950 "></div>

      <div className="w-[75%] h-[25px] bg-indigo-950 rounded-full absolute translate-y-[-50%] bottom-[25%] left-[4%] "></div>
      <div className="w-full absolute translate-y-[-30%] bottom-[0] flex items-center justify-between px-5 ">
        <div className="w-[60%] flex items-center justify-between">
          <div className="w-[45%] h-[25px] bg-indigo-950 rounded-full "></div>
          <div className="w-[45%] h-[25px] bg-indigo-950 rounded-full "></div>
        </div>
        <div className="w-[50px] h-[50px] bg-indigo-950 rounded-full   "></div>
      </div>

      <h2 className=" absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] text-3xl text-opacity-50 text-indigo-300  ">Parte de tras</h2>
    </div>
  )
}