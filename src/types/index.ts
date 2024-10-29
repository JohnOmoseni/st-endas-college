import { Dispatch, SetStateAction } from "react";

export type MenuProps = {
	openMenu?: boolean;
	setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export type NavLinkProps = {
	label: string;
	href: string;
	idx?: number;
	tag?: string;
	menu?: boolean;
	openMenu?: boolean;
	setOpenMenu?: Dispatch<SetStateAction<boolean>>;
};

export type FormProps = {
	step?: number;
	requestId?: string | null;
	nextStep?: () => void;
	prevStep?: () => void;
};
