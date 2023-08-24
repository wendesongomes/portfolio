import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiVitest, SiJavascript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export default function Languagens() {
  return (
    <div className="flex flex-col justify-center items-center xl:order-none order-3">
      <div
        className="flex flex-col relative z-10 h-3/6 items-center w-80 sm:w-96 gap-2 bg-[#ffffff] p-2 rounded-xl border border-[#e7e5e5] shadow-inherit
    dark:bg-[#222222] dark:border-[#3b3b3b] dark:text-white"
      >
        <div className="flex justify-between items-center w-full border-b border-dashed dark:border-[#f7f1f10e] pb-1">
          <h1 className="font-medium text-sm">Some of my knowledge</h1>
          <p className="bg-[#e0dddd36] text-[#585858] border border-[#6e6e6e5d] py-1 px-2 rounded-full uppercase text-xs dark:text-white dark:bg-[#20202080] ">
            Stack
          </p>
        </div>
        <div className="dark:bg-[#1a1a1a] bg-[#F0EEFC] w-full flex flex-col justify-center items-center rounded-lg p-2 gap-3 ">
          <div className="flex justify-center items-center gap-5 sm:text-3xl text-xl">
            <FaHtml5 className=" dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded" />
            <FaCss3Alt className="dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded" />
            <SiJavascript className="dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded" />
            <SiTypescript className="dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded" />
            <FaReact className="dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded" />
            <TbBrandNextjs className="dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded" />
            <SiVitest className="dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
