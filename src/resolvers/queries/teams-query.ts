import { teamsModel } from "../../models/teams-model";

interface TeamArgs {
	id: string;
}

export const teamsQuery = {
	teams: () => teamsModel.data,
	team: async (_: unknown, { id }: TeamArgs) => teamsModel.getById(id),
};
