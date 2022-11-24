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
			throw new GraphQLError("O time especificado não foi encontrado!", {
				extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
			});

		return hasTheSpecifiedTeam;
	},
	teams: (_: unknown, args: Omit<TeamArgs, "id">) => {
		const { group, name, region } = args;

		if (group && region && name) {
			return applyFilter(
				applyFilter(applyFilter(teamsData, "region", region), "group", group),
				"name",
				name
			);
		}

		if (group && region) {
			return applyFilter(
				applyFilter(teamsData, "group", group),
				"region",
				region
			);
		}

		if (name && region) {
			return applyFilter(
				applyFilter(teamsData, "name", name),
				"region",
				region
			);
		}

		if (name && group) {
			return applyFilter(applyFilter(teamsData, "name", name), "group", group);
		}

		if (region) return applyFilter(teamsData, "region", region);

		if (group) return applyFilter(teamsData, "group", group);

		if (name) return applyFilter(teamsData, "name", name);

		return teamsData;
	},
};
