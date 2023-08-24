import Image from 'next/image'

export default function UserInfo() {
  return (
    <div
      className="flex justify-between items-center gap-4 bg-[#ffffff] w-80 sm:w-96 p-2 rounded-full border border-[#e7e5e5] shadow-inherit relative z-10
      dark:bg-[#222222] dark:border-[#3b3b3b] dark:text-white"
    >
      <div className="flex justify-center items-center gap-2">
        <Image
          src="/docs/photoPerfil.jpg"
          alt=""
          width={56}
          height={56}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-sm">Wendeson Gomes</h1>
          <p className="font-mono text-xs">Developer Front-End</p>
        </div>
      </div>
      <p className="bg-[#99eb8e36] text-xs text-[#29911b] dark:bg-[#5083499a] dark:text-[#53f13e] dark:border-[#99eb8e36] border border-[#8eeb8e5d] p-1.5 rounded-full uppercase font-bold">
        Available for Hire
      </p>
    </div>
  )
}
