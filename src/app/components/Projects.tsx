import Image from 'next/image'

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

        <a className="flex flex-col gap-2">
          <Image
            src="/portfolio/twitterPrint.png"
            alt=""
            width={500}
            height={200}
            className="rounded"
          />
          <p className="text-xs font-thin">
            I created a replica of Twitter layout with some functionalities
            like, post, and the option to hover over a username to display user
            information. The project was fun and challenging, but it was worth
            it.
          </p>
        </a>
      </div>
    </div>
  )
}
