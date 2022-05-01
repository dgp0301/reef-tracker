import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class TankType {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	type: string;
}
