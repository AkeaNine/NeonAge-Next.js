import Link from "next/link"
import { BsCheckCircleFill } from "react-icons/bs"

const page = () => {
  return (
    <div className="w-full flex justify-center p-6">
        <div className="w-full max-w-[500px]">
            <h3 className="text-lg lg:text-2xl flex justify-center"><span className="text-green-500 mx-2"><BsCheckCircleFill size={26}/></span>Password change successful</h3>
            <p className="text-center">Your password was changed successfully. Go back to <Link href={"/account/signin"} className="text-blue-500 underline">SignIn page</Link> to log into your account.</p>
        </div>
    </div>
  )
}

export default page