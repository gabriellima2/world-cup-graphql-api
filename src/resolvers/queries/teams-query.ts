import { teamsModel } from "../../models/teams-model";

interface TeamArgs {
	id: string;
	name: string | undefined;
	group: string | undefined;
}

export const teamsQuery = {
	teams: (_: unknown, args: Omit<TeamArgs, "id">) => {
		const { group, name } = args;

		if (name) return teamsModel.getByKey("name", name);

		if (group) return teamsModel.getByKey("group", group);

		return teamsModel.data;
	},
	team: (_: unknown, { id }: Pick<TeamArgs, "id">) => teamsModel.getById(id),
};
