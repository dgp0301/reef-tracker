import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	BaseEntity,
} from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { Tank } from "./Tank";

@Entity()
@ObjectType()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id: number;

	@Column()
	@Field()
	firstName: string;

	@Column()
	@Field()
	lastName: string;

	@Column()
	@Field()
	userName: string;

	@Column()
	@Field()
	password: string;

	@Column()
	@Field()
	age: number;

	@CreateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)",
	})
	@Field()
	createdAt: Date;

	@UpdateDateColumn({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP(6)",
		onUpdate: "CURRENT_TIMESTAMP(6)",
	})
	@Field()
	updatedAt: Date;

	@OneToMany(() => Tank, (tank) => tank.user)
	@Field(() => Tank, { nullable: true })
	tanks: Tank[];
}
