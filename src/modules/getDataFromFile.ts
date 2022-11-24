import { readFileSync } from "fs";
import { resolve } from "path";

export function getDataFromFile<TFileData>(fileName: string) {
	const source = resolve(__dirname, "..");
	const file = readFileSync(`${source}/mocks/${fileName}.json`, "utf-8");
	const data: TFileData = JSON.parse(file);

	return data;
}
