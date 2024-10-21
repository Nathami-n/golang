import os from "os";
const port = process.env.PORT || 3000;
import app from "./app.ts";

(function Start() {
  app.listen(port as string, function () {
    const operating_system = os.type();
    console.log(
      `server running on os: ${operating_system} using port: ${port}`
    );
  });
})();
