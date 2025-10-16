import app from "./app.ts";
import AppDataSource from "./db/data-source.ts";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Conexion exitosa");
    app.listen(3306, () => {
      console.log("Server activo");
    });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}

main();
