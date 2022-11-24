import { groupsQuery } from "@queries/groups.query";
import { teamsQuery } from "@queries/teams-query";

export const resolvers = {
	Query: {
		...teamsQuery,
		...groupsQuery,
	},
};
