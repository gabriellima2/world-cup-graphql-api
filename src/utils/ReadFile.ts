import { readFileSync } from "fs";
import { resolve } from "path";

export class ReadFile<TFileData> {
	protected fileName: string;

	constructor(fileName: string) {
		this.fileName = fileName;
	}

	protected getDataFromFile() {
		const source = resolve(__dirname, "..");
		const file = readFileSync(`${source}/mocks/${this.fileName}.json`, "utf-8");
		const data: TFileData = JSON.parse(file);

		return data;
	}
}
