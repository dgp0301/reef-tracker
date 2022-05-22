import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { ApolloServer } from "apollo-server";
import { UserResolver } from "./resolver/UserResolver";
import { TankResolver } from "./resolver/TankResolver";
import { TankTypeResolver } from "./resolver/TankTypeResolver";

createConnection()
	.then(async (connection) => {
		console.log(
			"Inserting a new user into the database..."
		);

		console.log("Loading users from the database...");
		const users = await connection.manager.find(User);
		console.log("Loaded users: ", users);

		console.log(
			"Here you can setup and run express/koa/any other framework."
		);
	})
	.catch((error) => console.log(error));

const main = async () => {
	await createConnection();
	const schema = await buildSchema({
		resolvers: [
			UserResolver,
			TankResolver,
			TankTypeResolver,
		],
	});
	const server = new ApolloServer({ schema });
	await server.listen(4000);
	console.log("server started");
};

main();
