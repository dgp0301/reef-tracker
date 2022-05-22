import { TankType } from "../entity/TankType";
import { InputType, Field, Int } from "type-graphql";
import { Tank } from "../entity/Tank";

@InputType()
export class addTankArgs implements Partial<Tank> {
	@Field(() => Int)
	tankType_id: TankType;

	@Field(() => Int, { nullable: true })
	volume: number;

	@Field(() => Int, { nullable: true })
	height?: number;

	@Field(() => Int, { nullable: true })
	width?: number;

	@Field(() => Int, { nullable: true })
	length?: number;
}
