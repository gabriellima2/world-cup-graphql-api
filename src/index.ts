import { startStandaloneServer } from "@apollo/server/standalone";

import { PORT } from "./constants";
import { server } from "./server";

(async function () {
	const { url } = await startStandaloneServer(server, {
		listen: { port: PORT },
	});

	console.log(`🚀 Server ready at: ${url}`);
})();
