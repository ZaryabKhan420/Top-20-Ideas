/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./Config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:lBE2X6mZzRVO@ep-purple-fog-a5z2yda5.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
