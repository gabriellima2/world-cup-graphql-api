export const typeDefs = `
	type Query {
		teams: [Team]!
		team(id: ID!): Team
	}

	interface Common {
		id: ID!
		name: String!
	}

	type Team implements Common {
		id: ID!
		name: String!
		flag_url: String!
		group: String!
	}
`;
