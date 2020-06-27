import StartServer from "./server/server";

async function StartUp() {
  console.log("Starting application");

  try {
    console.log("Initializing server module.");

    await StartServer();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
}

StartUp();
