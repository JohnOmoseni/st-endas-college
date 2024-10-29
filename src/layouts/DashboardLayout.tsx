import { Suspense, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import Menu from "@/layouts/DashboardMenu";
import FallbackLoader from "@/components/fallback/FallbackLoader";
import ScrollToTop from "@/components/ScrollToTop";
import Header2 from "@/layouts/Header2";
import DashboardFooter from "./DashboardFooter";

const DashboardLayout = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const scrollRef = useRef(null);

	return (
		<>
			<ScrollToTop scrollRef={scrollRef} />
			<AnimatePresence>
				{openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
			</AnimatePresence>
			<div ref={scrollRef} className="wrapper">
				<Header2 setOpenMenu={setOpenMenu} />

				<Suspense fallback={<FallbackLoader />}>
					<Outlet />
				</Suspense>

				<DashboardFooter />
			</div>
		</>
	);
};

export default DashboardLayout;
