export const typeDefs = `
	type Query {
		team(id: ID!): Team
		teams(name: String, group: String, region: String): [Team]!

		group(id: ID!): Group
		groups: [Group]!
	}

	interface IBase {
		id: ID!
	}

	type Team implements IBase {
		id: ID!
		name: String!
		flag_url: String!
		group: String!
	}

	type Group implements IBase {
		id: ID!
		teams: [Team]!
	}
`;
