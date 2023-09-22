import Image from 'next/image'

export default function UserInfo() {
  return (
    <div
      className="flex justify-between items-center gap-4 bg-[#ffffff] w-80 sm:w-96 p-2 rounded-full border border-[#e7e5e5] shadow-inherit relative z-10
      dark:bg-[#222222] dark:border-[#3b3b3b] dark:text-white"
    >
      <div className="flex justify-between items-center sm:pl-0 w-full gap-2">
        <Image
          src="/portfolio/photoPerfil.jpg"
          alt=""
          width={56}
          height={56}
          className="rounded-full"
        />
        <div className="flex flex-col sm:gap-0">
          <h1 className="font-bold sm:text-sm text-xs">Wendeson Gomes</h1>
          <p className="font-mono text-xs sm:block hidden">
            Developer Front-End
          </p>

          <p className="font-mono text-xs sm:hidden block">Dev. Front-End</p>
        </div>
        <p className="bg-[#99eb8e36] sm:text-xs text-[10px] text-[#29911b] dark:bg-[#5083499a] dark:text-[#53f13e] dark:border-[#99eb8e36] border border-[#8eeb8e5d] p-1.5 rounded-full uppercase font-bold ">
          Available for Hire
        </p>
      </div>
    </div>
  )
}
