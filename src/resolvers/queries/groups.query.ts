import { ApolloServerErrorCode } from "@apollo/server/errors";
import { GraphQLError } from "graphql";

import { getDataFromFile } from "@modules/getDataFromFile";
import { getById } from "@modules/getById";

import type { IGroup } from "@interfaces/IGroup";

interface GroupArgs {
	id: string;
}

const groupsData = getDataFromFile<IGroup[]>("groups");

export const groupsQuery = {
	groups: () => groupsData,
	group: (_: unknown, { id }: Pick<GroupArgs, "id">) => {
		const hasTheSpecifiedGroup = getById(groupsData, id);

		if (!hasTheSpecifiedGroup)
			throw new GraphQLError("O grupo especificado não foi encontrado!", {
				extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
			});

		return hasTheSpecifiedGroup;
	},
};
