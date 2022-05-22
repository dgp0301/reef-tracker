import { TankType } from "../entity/TankType";
import { Arg, ID, Query, Resolver } from "type-graphql";

@Resolver()
export class TankTypeResolver {
	@Query(() => [TankType])
	async getTypes() {
		return await TankType.find();
	}

	@Query(() => TankType)
	async getTypeByID(@Arg("id") id: number) {
		return await TankType.findOne(id);
	}
}
