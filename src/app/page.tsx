import Contact from './components/Contact'
import Project from './components/Projects'
import Stack from './components/Stack'
import Summary from './components/Summary'
import UserInfo from './components/UserInfo'

export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-20 gap-4">
      <UserInfo />

      <span className="xl:w-[460px] w-[1300px] xl:top-36 top-[600px] relative -z-1 border-b border-[#0000004f] dark:border-[#f7f1f12d] rotate-90"></span>

      <div className="flex flex-col justify-center items-center xl:flex-row xl:gap-0 gap-3">
        <Stack />
        <span className=" w-[30px] xl:order-none order-2 relative -z-1 border-b border-[#0000004f] dark:border-[#f7f1f12d] xl:rotate-0 rotate-90"></span>
        <Summary />
        <span className=" w-[30px] xl:order-none order-4 relative -z-1 border-b border-[#0000004f] dark:border-[#f7f1f12d] xl:rotate-0 rotate-90"></span>
        <Contact />
      </div>
      <Project />
    </div>
  )
}
