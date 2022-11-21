import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { teams } from "./mocks/teams";

const getTeamByName = (name: string) => {
	return teams.find((team) => team.name === name);
};

const typeDefs = `
	type Query {
		teams: [Team]!
		team(name: String!): Team
	}

	type Team {
		name: String
		region: String
		logo: String
	}
`;

const resolvers = {
	Query: {
		teams: () => teams,
		team: (_: unknown, { name }: { name: string }) => getTeamByName(name),
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

(async function () {
	const { url } = await startStandaloneServer(server, {
		listen: { port: 3000 },
	});

	console.log(`🚀  Server ready at: ${url}`);
})();
