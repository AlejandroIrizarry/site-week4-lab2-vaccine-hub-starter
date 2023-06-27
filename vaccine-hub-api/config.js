require("dotenv").config(); //Load the environment variables from .env file

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

function getDatabaseURI() {
  const dbUser = process.env.DATABASE_USER || "postgres";
  const dbPass = process.env.DATABASE_PASS
    ? encodeURI(process.env.DATABASE_PASS)
    : "postgres";
  const dbHost = process.env.DATABASE_HOST || "localhost";
  const dbPort = process.env.DATABASE_PORT || 5432;
  const dbName = process.env.DATABASE_NAME || "wedding_registration";

  // if the DATABASE_URL environment variable, user that,
  // otherwise create the db connectio string ourselves
  return (
    process.env.DATABASE_URL ||
    `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  );
}

console.log("Vaccine Hub Config: ");
console.log("Port:", PORT);
console.log("Database URl:", getDatabaseURI());
console.log("---");

module.exports = {
  PORT,
  getDatabaseURI,
};
