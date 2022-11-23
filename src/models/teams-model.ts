import { BaseModel } from "./base-model";

import type { ITeam } from "../interfaces/ITeam";

class TeamsModel extends BaseModel<ITeam> {
	constructor() {
		super("teams");
	}

	public getById(id: string): ITeam | undefined {
		return this.data.find((item) => item.id === id);
	}

	public getByKey(key: keyof ITeam, value: string): ITeam[] | [] {
		const valueFormatted = value.trim().toLowerCase();

		return this.data.filter((item) => item[key] === valueFormatted);
	}
}

export const teamsModel = new TeamsModel();
