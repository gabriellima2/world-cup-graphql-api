import { teams } from "../../mocks/teams";

interface TeamArgs {
	id: string;
}

export const teamsQuery = {
	teams: () => teams,

	team: (_: unknown, { id }: TeamArgs) => {
		return teams.find((team) => team.id === id);
	},
};
