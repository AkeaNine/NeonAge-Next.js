import NavBar from "../components/navigation/NavBar";
import SecondaryNav from "../components/navigation/secondaryNav/SecondaryNav";

const Navigation = () => {
  return (
    <>
      <div className=" flex justify-center w-full bg-gray-300 dark:bg-gray-800">
        <div className="w-full max-w-[1399px]">
          <nav>
            <NavBar />
          </nav>
        </div>
      </div>
      <div className="full">
        <div className="flex justify-center w-full bg-[#232f3e]">
          <div className="w-full max-w-[1399px]">
            <nav>
              <SecondaryNav />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
