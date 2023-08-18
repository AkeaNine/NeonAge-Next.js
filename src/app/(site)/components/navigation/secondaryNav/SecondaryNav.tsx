import NavLink from "./components/NavLink";
import GetSecondaryNavLinks from "@/hooks/SecondaryNavLinks";
import ClientScrollWrapper from "./components/ClientScrollWrapper";

const SecondaryNav = async () => {
  const categories = await GetSecondaryNavLinks();

  return (
    <div className="flex justify-center w-full h-10 md:h-12 text-white overflow-hidden">
      <ClientScrollWrapper>
        <div className="w-fit h-full flex items-center space-x-2 px-2">
          <NavLink links={categories} />
        </div>
      </ClientScrollWrapper>
    </div>
  );
};

export default SecondaryNav;
