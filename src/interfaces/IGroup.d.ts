import type { ITeam } from "./ITeam";

export interface IGroup {
	id: string;
	teams: ITeam[];
}
