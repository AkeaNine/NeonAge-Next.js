import { BsEnvelopeCheckFill } from 'react-icons/bs'

const ConfirmText = () => {
  return (
    <div className=" flex justify-center p-6">
      <div className="w-full max-w-[500px]">
        <h1 className=" text-lg lg:text-2xl flex justify-center">
          <span className="text-green-500 mx-2">
            <BsEnvelopeCheckFill size={26} />
          </span>
          <span>Password Reset Email Sent</span>
        </h1>
        <p className="text-center">
          An email has been sent to your registered email address with
          instructions on how to reset your password. Please check your inbox
          and follow the provided steps.
        </p>
        <p className="text-center">
          If you don't receive the email within a few minutes, please check your
          spam folder. If you still encounter any issues, please contact our
          support team for assistance.
        </p>
        <p className="text-center text-lg lg:text-xl">
          Thank you for using our services!
        </p>
      </div>
    </div>
  )
}

export default ConfirmText