export const typeDefs = `
	type Query {
		teams(name: String, group: String, region: String): [Team]!
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
