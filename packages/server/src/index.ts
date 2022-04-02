import * as path from "path";
import { ApplicationFactory } from "@nocobase/server";

const configurationDir = path.join(__dirname, "./config");

(async () => {
  const app = await ApplicationFactory.buildWithConfiguration(configurationDir);

  await app.start({
    listen: {
      port: 3000,
    },
  });
})();
