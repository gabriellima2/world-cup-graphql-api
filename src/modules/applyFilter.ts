export function applyFilter<TData>(
	data: TData[],
	key: keyof TData,
	value: string
): TData[] | [] {
	const valueFormatted = value.trim().toLowerCase();

	return data.filter((item) => item[key] === valueFormatted);
}
