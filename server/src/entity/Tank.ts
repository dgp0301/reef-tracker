import { ObjectType, Field, ID } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	BaseEntity,
} from "typeorm";
import { TankType } from "./TankType";
import { User } from "./User";

@Entity()
@ObjectType()
export class Tank extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id: number;

	@Column()
	@Field()
	volume: number;

	@Column()
	@Field()
	height: number;

	@Column()
	@Field()
	length: number;

	@Column()
	@Field()
	width: number;

	@ManyToOne(() => TankType)
	@Field(() => TankType)
	tankType_id: TankType;

	@CreateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)",
	})
	createdAt: Date;

	@UpdateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)",
		onUpdate: "CURRENT_TIMESTAMP(6)",
	})
	updatedAt: Date;

	@ManyToOne(() => User, (user) => user.tanks)
	@Field(() => User)
	user: User;
}
