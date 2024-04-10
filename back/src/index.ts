import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";

server.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});
