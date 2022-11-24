import { readFileSync } from "fs";

const groupsSchema = readFileSync(
	"./src/graphql/schemas/groups-schema.graphql",
	{
		encoding: "utf-8",
	}
);

const teamsSchema = readFileSync("./src/graphql/schemas/teams-schema.graphql", {
	encoding: "utf-8",
});

const querySchema = readFileSync("./src/graphql/schemas/query-schema.graphql", {
	encoding: "utf-8",
});

export const schemas = `
	${querySchema}
	${teamsSchema}
	${groupsSchema}
`;
