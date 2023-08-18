import Link from "next/link";

const FooterCredit = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center text-xs md:text-sm">
        <div className="p-2">
          <Link href={""}>
            <p className="hover:underline">Terms & Conditions</p>
          </Link>
        </div>
        <div className="p-2">
          <Link href={""}>
            <p className="hover:underline">Privacy Policy</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-center text-xs md:text-sm">
        <p>Copyright &copy;NeonAge. All rights reserved</p>
      </div>
    </div>
  );
};

export default FooterCredit;
