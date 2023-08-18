import Link from "next/link";

interface NavLinkProps {
  links: [];
}

type link = {
  _createdAt: Date;
  _id: number;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  link: string;
  name: string;
  specialcategory: boolean;
  hide: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ links }) => {

  return (
    <>
      {links.map((link: link, index) => (
        <>
          {!link.hide && (
            <>
              {link.specialcategory ? (
                <div className="" key={index}>
                  <Link href={`/categories/${link.link}`}>
                    <p className=" text-yellow-400 uppercase text-sm md:text-base whitespace-nowrap">
                      {link.name}
                    </p>
                  </Link>
                </div>
              ) : (
                <div className="" key={index}>
                  <Link href={`/categories/${link.link}`}>
                    <p className=" uppercase text-sm md:text-base whitespace-nowrap">
                      {link.name}
                    </p>
                  </Link>
                </div>
              )}
              {index < links.length - 1 && (
                <span className="h-2/5 w-[3px] rounded-full bg-white"></span>
              )}
            </>
          )}
        </>
      ))}
    </>
  );
};

export default NavLink;
