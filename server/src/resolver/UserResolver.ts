import { Resolver, Query } from "type-graphql";
import { User } from "../entity/User";

@Resolver()
export class UserResolver {
	@Query(() => [User])
	getUsers() {
		return User.find();
	}
}
