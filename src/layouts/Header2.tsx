import { Logo, LogoMobile } from "@/constants/icons2";
import { MenuIcon } from "@/constants/icons";
import { Button } from "@/components/CustomButton";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { navLinks } from "@/constants/dashboard-index";
import NavLinks from "./NavLinks";

type HeaderProps = {
  setOpenMenu?: Dispatch<SetStateAction<boolean>>;
};

function Header2({ setOpenMenu }: HeaderProps) {
  return (
    <div className="sticky top-0 z-[99] bg-background-100 flex min-h-[62px] sm:min-h-[72px] max-h-[75px] w-full px-3 py-1 shadow">
      <div className="row-flex-btwn mx-auto gap-4 w-full">
        <div
          className="icon group -mt-[0.15rem] sm:!hidden"
          onClick={() => setOpenMenu && setOpenMenu(true)}
        >
          <MenuIcon className="size-6 transition-all group-hover:scale-95" color="#333" />
        </div>

        <Link to="/" className="max-sm:w-full">
          <LogoMobile className="block sm:hidden h-fit w-44 max-md:mx-auto " />

          <Logo className="hidden sm:block h-fit w-fit max-md:mx-auto " />
        </Link>

        <div className="lg:row-flex hidden gap-8 px-3">
          {navLinks?.map((link, idx) => (
            <NavLinks key={idx} {...link} />
          ))}
        </div>

        <a
          href="https://futurebridge.ng/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn("sm:row-flex hidden mr-[2%]")}
        >
          <Button title="Portal" className="!min-w-[180px] rounded-lg px-5 sm:px-7" />
        </a>
      </div>
    </div>
  );
}

export default Header2;
