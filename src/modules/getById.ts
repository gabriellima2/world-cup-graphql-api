interface Item {
	id: string;
}

export function getById<TData extends Item>(
	data: TData[],
	id: string
): TData | undefined {
	return data.find((item) => item.id === id);
}
