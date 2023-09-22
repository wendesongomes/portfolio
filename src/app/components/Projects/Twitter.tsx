import Image from 'next/image'

export default function Twitter() {
  return (
    <div
      className="flex flex-col relative z-10 h-3/6 items-center w-80 sm:w-96 gap-2 bg-[#ffffff] p-2 rounded-xl border border-[#e7e5e5] shadow-inherit
dark:bg-[#222222] dark:border-[#3b3b3b] dark:text-white"
    >
      <div className="flex justify-between items-center w-full border-b border-dashed dark:border-[#f7f1f10e] pb-1 ">
        <a
          href="https://wendesongomes.github.io/twitter/"
          target="_blank"
          className=" hover:underline cursor-pointer"
        >
          Twitter
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
          src="/portfolio/twitterPrint.png"
          alt=""
          width={1920}
          height={1080}
          className="rounded-lg"
        />
        <p className="text-xs font-thin">
          I created a replica of Twitter layout with some functionalities like,
          post, and the option to hover over a username to display user
          information. The project was fun and challenging, but it was worth it.
        </p>
      </div>
    </div>
  )
}
