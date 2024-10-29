import { ReactNode } from "react";

type ListComponentProps = {
	data: any[];
	renderItem: (item: any, idx: number) => ReactNode;
};

export default function ListComponent({
	data,
	renderItem,
}: ListComponentProps) {
	<div>{data?.map((item, idx) => renderItem(item, idx))}</div>;
}
