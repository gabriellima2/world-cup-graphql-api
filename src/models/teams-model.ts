import { BaseModel } from "./base-model";

import type { ITeam } from "../interfaces/ITeam";

class TeamsModel extends BaseModel<ITeam> {
	constructor() {
		super("teams");
	}

	public getById(id: string): ITeam | undefined {
		return this.data.find((item) => {
			return item.id === id;
		});
	}
}

export const teamsModel = new TeamsModel();
