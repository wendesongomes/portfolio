import Image from 'next/image'
import Twitter from './Projects/Twitter'
import LidoneStudio from './Projects/LidoneStudio'

export default function Project() {
  return (
    <div className="flex flex-col justify-center items-center xl:order-none order-5 gap-5">
      <div
        className="flex flex-col relative z-10 h-3/6 items-center w-80 sm:w-96 gap-2 bg-[#ffffff] p-2 rounded-xl border border-[#e7e5e5] shadow-inherit
    dark:bg-[#222222] dark:border-[#3b3b3b] dark:text-white"
      >
        <div className="flex justify-between items-center w-full border-b border-dashed dark:border-[#f7f1f10e] pb-1">
          <h1 className="font-medium text-sm">Some Projects</h1>
          <p className="bg-[#e0dddd36] text-[#585858] border border-[#6e6e6e5d] py-1 px-2 rounded-full uppercase text-xs dark:text-white dark:bg-[#20202080] ">
            Projects
          </p>
        </div>

        <div className="flex justify-start w-full">
          <p className="text-xs font-thin">
            Click on the project name to view it on the website.
          </p>
        </div>
      </div>

      <span className="w-20 relative xl:block hidden left-40 -z-1 border-b border-[#0000004f] dark:border-[#f7f1f12d] rotate-90" />
      <span className="w-32 relative xl:block hidden right-40 -z-1 border-b border-[#0000004f] dark:border-[#f7f1f12d] rotate-90" />

      <div className="flex xl:flex-row flex-col justify-center gap-5 items-center">
        <Twitter />
        <LidoneStudio />
      </div>
    </div>
  )
}
