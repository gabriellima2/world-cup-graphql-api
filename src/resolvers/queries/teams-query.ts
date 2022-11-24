import { getDataFromFile } from "../../modules/getDataFromFile";
import { applyFilter } from "../../modules/applyFilter";
import { getById } from "../../modules/getById";

import type { ITeam } from "../../interfaces/ITeam";

interface TeamArgs {
	id: string;
	name: string | undefined;
	group: string | undefined;
}

const teamsData = getDataFromFile<ITeam[]>("teams");

export const teamsQuery = {
	teams: (_: unknown, args: Omit<TeamArgs, "id">) => {
		const { group, name } = args;

		if (name) return applyFilter<ITeam>(teamsData, "name", name);

		if (group) return applyFilter<ITeam>(teamsData, "group", group);

		return teamsData;
	},
	team: (_: unknown, { id }: Pick<TeamArgs, "id">) => getById(teamsData, id),
};
