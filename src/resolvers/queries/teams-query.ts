import { teams } from "../../mocks/teams";

export const teamsQuery = {
	teams: () => teams,

	team: (_: unknown, { name }: { name: string }) => {
		return teams.find((team) => team.name === name);
	},
};
