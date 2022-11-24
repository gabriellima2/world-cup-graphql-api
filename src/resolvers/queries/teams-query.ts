import { getDataFromFile } from "@modules/getDataFromFile";
import { applyFilter } from "@modules/applyFilter";
import { getById } from "@modules/getById";

import type { ITeam } from "@interfaces/ITeam";

interface TeamArgs {
	id: string;
	name: string | undefined;
	group: string | undefined;
	region: string | undefined;
}

const teamsData = getDataFromFile<ITeam[]>("teams");

export const teamsQuery = {
	teams: (_: unknown, args: Omit<TeamArgs, "id">) => {
		const { group, name, region } = args;

		if (group && region) {
			return applyFilter(
				applyFilter(teamsData, "group", group),
				"region",
				region
			);
		}

		if (region) return applyFilter<ITeam>(teamsData, "region", region);

		if (group) return applyFilter<ITeam>(teamsData, "group", group);

		if (name) return applyFilter<ITeam>(teamsData, "name", name);

		return teamsData;
	},
	team: (_: unknown, { id }: Pick<TeamArgs, "id">) => getById(teamsData, id),
};
