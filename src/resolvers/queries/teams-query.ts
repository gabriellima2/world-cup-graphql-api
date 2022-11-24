import { ApolloServerErrorCode } from "@apollo/server/errors";
import { GraphQLError } from "graphql";

import { getDataFromFile } from "@modules/getDataFromFile";
import { applyFilter } from "@modules/applyFilter";
import { getById } from "@modules/getById";

import type { ITeam } from "@interfaces/ITeam";

interface TeamArgs {
	id: string;
	name: string | undefined;
	group: string | undefined;
	region: string | undefined;
}

const teamsData = getDataFromFile<ITeam[]>("teams");

export const teamsQuery = {
	team: (_: unknown, { id }: Pick<TeamArgs, "id">) => {
		const hasTheSpecifiedTeam = getById(teamsData, id);

		if (!hasTheSpecifiedTeam)
			throw new GraphQLError("A seleção especificada não foi encontrada!", {
				extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
			});

		return hasTheSpecifiedTeam;
	},
	teams: (_: unknown, args: Omit<TeamArgs, "id">) => {
		const { group, name, region } = args;
		let teamsFiltered = teamsData;

		if (region) {
			teamsFiltered = applyFilter(teamsFiltered, "region", region);
		}

		if (group) {
			teamsFiltered = applyFilter(teamsFiltered, "group", group);
		}

		if (name) {
			teamsFiltered = applyFilter(teamsFiltered, "name", name);
		}

		return teamsFiltered;
	},
};
