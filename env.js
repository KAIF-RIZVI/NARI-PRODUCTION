module.exports = {
  dbConfig: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    max: 20,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0
  },

  COOKIE_SECRET: process.env.COOKIE_SECRET,
  SESSION_SECRET: process.env.SESSION_SECRET,

  PORT: process.env.PORT || 3000,

  USER: process.env.USER_NAME
};
