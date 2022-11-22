export const typeDefs = `
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
