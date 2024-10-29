import { motion } from "framer-motion";
import { Close } from "@/constants/icons";
import { animateFn, revealMenu, slideinVariant } from "@/lib/animate";
import { MenuProps } from "@/types";
import { Button } from "../components/CustomButton";
import { navLinks } from "@/constants/dashboard-index";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

function Menu({ openMenu, setOpenMenu }: MenuProps) {
  return (
    <motion.div
      style={{ zIndex: 9999 }}
      className="fixed inset-0 block h-dvh w-full overflow-hidden bg-black/30 backdrop-blur-sm md:hidden"
      {...animateFn(revealMenu)}
      onClick={() => setOpenMenu(false)}
    >
      <motion.div
        {...animateFn(slideinVariant)}
        className="menu remove-scrollbar flex-column absolute right-0 top-0 isolate h-full w-[80%] max-w-[500px] overflow-hidden bg-background-100 px-[4%] pb-6 pt-4 backdrop-blur-sm"
        // onClick={(e) => e.stopPropagation()}
      >
        <span
          className="icon absolute right-4 top-4 p-1 transition-colors active:scale-95"
          onClick={() => setOpenMenu(false)}
          title="close-menu"
        >
          <Close size="22" className="z-100 cursor-pointer text-foreground" />
        </span>

        <div className="flex-column size-full gap-6">
          <nav className="flex-column size-full flex-1 !justify-center gap-8 px-6 pt-[10%] text-xl">
            {navLinks.map((link, idx) => (
              <NavLinks
                key={idx}
                {...link}
                idx={idx}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            ))}
          </nav>

          <Link to="/admission" className="mx-auto row-flex mt-auto">
            <Button title="Get Started" className="!min-w-[100px] rounded-lg px-5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Menu;
