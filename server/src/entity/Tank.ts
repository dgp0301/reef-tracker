import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
} from "typeorm";
import { TankType } from "./TankType";
import { User } from "./User";

@Entity()
export class Tank {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	volume: number;

	@Column()
	height: number;

	@Column()
	length: number;

	@Column()
	width: number;

	@ManyToOne(() => TankType)
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
	user: User;
}
