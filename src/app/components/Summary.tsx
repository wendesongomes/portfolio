export default function Summary() {
  return (
    <div
      className="flex flex-col xl:order-none order-1 relative z-10 justify-center items-center w-96 gap-4 bg-[#ffffff] p-2 rounded-xl border border-[#e7e5e5] shadow-inherit
    dark:bg-[#222222] dark:border-[#3b3b3b] dark:text-white"
    >
      <div className="flex justify-between items-center w-full border-b border-dashed dark:border-[#f7f1f10e] pb-1">
        <h1 className="font-medium text-sm">A little about myself</h1>
        <p className="bg-[#e0dddd36] text-[#585858] border border-[#6e6e6e5d] py-1 px-2 rounded-full uppercase text-xs dark:text-white dark:bg-[#20202080] ">
          About Me
        </p>
      </div>

      <p className="text-xs font-light">
        Hello! I am Wendeson Gomes, a passionate student of technology and
        programming. My programming journey began with the game Minecraft, where
        I learned Java to create custom modifications. Currently, my focus is on
        front-end development, striving to improve my skills in HTML, CSS, and
        JavaScript, as well as exploring popular libraries and frameworks like
        React. I am particularly excited about the React frameworks: Next.js and
        Vite. Besides programming, I have various hobbies, including playing
        video games, cycling, exploring graphic design, and photography. In the
        future, I aim to become an experienced front-end developer, creating
        engaging user experiences using React, Next.js, and Vite. Contributing
        to the developer community is another important goal for me, sharing
        knowledge and participating in open-source projects.
      </p>
    </div>
  )
}
