import { ObjectType, Field, ID } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class TankType extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id: number;

	@Column()
	@Field()
	type: string;
}
