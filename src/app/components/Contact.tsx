'use client'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Contact() {
  return (
    <div
      className="flex flex-col xl:order-none order-4 elative z-10 items-center w-80 sm:w-96 gap-5 bg-[#ffffff] p-2 rounded-xl border border-[#e7e5e5] shadow-inherit
    dark:bg-[#222222] dark:border-[#3b3b3b] dark:text-white"
    >
      <div className="flex justify-between items-center w-full border-b border-dashed dark:border-[#f7f1f10e] pb-1">
        <h1 className="font-medium text-sm wei">Lets talk?</h1>
        <p className="bg-[#e0dddd36] text-[#585858] border border-[#6e6e6e5d] py-1 px-2 rounded-full uppercase text-xs dark:text-white dark:bg-[#20202080] ">
          Contact Me
        </p>
      </div>

      <div className="dark:bg-[#1a1a1a] bg-[#F0EEFC] w-full flex flex-col justify-center items-center rounded-lg p-3 gap-3">
        <p className="font-light text-xs">Business contact</p>
        <div className="flex justify-center items-center gap-5">
          <a
            href="mailto:wendeson.gomes@live.com"
            className="bg-[#4361e7] text-xs p-2 rounded-lg hover:bg-[#2e44a7] text-white"
          >
            Send me email &gt;{' '}
          </a>
        </div>
      </div>

      <span className="w-full border-b border-dashed dark:border-[#f7f1f10e]"></span>

      <div className="dark:bg-[#1a1a1a] bg-[#F0EEFC] w-full flex flex-col justify-center items-center rounded-lg p-2 gap-3 ">
        <p className="font-light text-xs">Lets be friends?</p>
        <div className="flex justify-center items-center gap-5">
          <a
            href="https://www.linkedin.com/in/wendeson-gomes-70a9ab18b/"
            className="text-3xl dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/WendesonJS"
            className="text-3xl dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded"
            target="_blank"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/wendesongomes"
            className="text-3xl dark:text-[#414141] text-[#c0c0c0] hover:text-black hover:dark:text-white rounded"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
