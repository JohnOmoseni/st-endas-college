import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { animateFn, linksAni } from "@/lib/animate";
import { useLocation } from "react-router-dom";
import { NavLinkProps } from "@/types";
import { Link } from "react-router-dom";

function NavLinks({ label, href, openMenu, setOpenMenu, idx }: NavLinkProps) {
	const { pathname } = useLocation();
	const isActive = pathname === href || pathname === `${href}/`;

	const handleClick = () => {
		if (openMenu && setOpenMenu) setOpenMenu(false);

		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="nav-link relative w-full">
			<Link
				to={href}
				{...animateFn(linksAni, idx)}
				onClick={() => handleClick()}
				className="row-flex-start gap-3 p-1 transition-all hover:scale-105"
			>
				<motion.span
					className={cn(
						"tracking-snug font-semibold capitalize xl:whitespace-nowrap leading-4 text-center",
						isActive && "text-foreground-variant"
					)}
				>
					{label}
				</motion.span>
			</Link>
		</div>
	);
}

export default NavLinks;
