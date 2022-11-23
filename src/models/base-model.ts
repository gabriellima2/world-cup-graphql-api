import { ReadFile } from "../utils/ReadFile";

export abstract class BaseModel<TAllData> extends ReadFile<TAllData[]> {
	private allData: TAllData[];

	constructor(fileName: string) {
		super(fileName);
		this.allData = this.getDataFromFile();
	}

	public get data() {
		return this.allData;
	}

	public getById(id: string): TAllData | undefined {
		return undefined;
	}

	public getByName(name: string): TAllData | undefined {
		return undefined;
	}
}
