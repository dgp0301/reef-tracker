import { addTankArgs } from "../args/TankArgs";
import { Tank } from "../entity/Tank";
import {
	Resolver,
	Query,
	Mutation,
	Arg,
} from "type-graphql";

@Resolver()
export class TankResolver {
	@Query(() => [Tank])
	async getTanks() {
		return await Tank.find();
	}

	@Mutation(() => Tank)
	async addTank(
		@Arg("data") data: addTankArgs
	): Promise<Tank> {
		const tank = Tank.create(data);
		await tank.save();
		return tank;
	}
}
