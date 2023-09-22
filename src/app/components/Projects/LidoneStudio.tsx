import Image from 'next/image'

export default function LidoneStudio() {
  return (
    <div
      className="flex flex-col relative z-10 h-3/6 items-center w-80 sm:w-96 gap-2 bg-[#ffffff] p-2 rounded-xl border border-[#e7e5e5] shadow-inherit
dark:bg-[#222222] dark:border-[#3b3b3b] dark:text-white"
    >
      <div className="flex justify-between items-center w-full border-b border-dashed dark:border-[#f7f1f10e] pb-1 ">
        <a
          href="https://proposta.lidonestudio.com"
          target="_blank"
          className=" hover:underline cursor-pointer"
        >
          Lidone Studio
        </a>
        <div className="flex gap-2 font-thin text-xs">
          <p className="dark:bg-[#1a1a1a] p-1 rounded dark:text-[#ffffff77] dark:hover:text-[#ffffff] bg-[#e0dddd36] text-[#0202026b] hover:text-[#000000] cursor-defaul font-medium">
            Nextjs
          </p>
          <p className="dark:bg-[#1a1a1a] p-1 rounded dark:text-[#ffffff77] dark:hover:text-[#ffffff] bg-[#e0dddd36] text-[#0202026b] hover:text-[#000000] cursor-default font-medium">
            Tailwindcss
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Image
          src="/portfolio/lidoneStudio.png"
          alt=""
          width={1920}
          height={1080}
          className="rounded-lg"
        />
        <div className="flex justify-between  w-full border-b border-dashed dark:border-[#f7f1f10e] pb-1 ">
          <h1 className="text-sm">Customer feedback</h1>
          <div className="flex">
            <p className="text-sm font-bold">Vitor L</p>
          </div>
        </div>
        <p className="text-xs font-thin">
          Excellent work, I was pleasantly surprised by the final result of the
          website, and the quality of the structure is excellent, a
          well-organized and lightweight site, easy to load for my potential
          clients.
        </p>
        <div className="flex justify-between items-center text-sm font-bold">
          <p className="text-sm font-bold">CEO LidoneStudio</p>
          <p>2023</p>
        </div>
      </div>
    </div>
  )
}
