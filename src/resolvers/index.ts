import { teamsQuery } from "@queries/teams-query";

export const resolvers = {
	Query: {
		...teamsQuery,
	},
};
