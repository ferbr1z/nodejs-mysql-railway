import { createPool } from "mysql2/promise";
import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER } from "./config.js";

export const pool = createPool({
    user:DB_USER,
    database:DB_NAME,
    host:DB_HOST,
    password:DB_PASSWORD,
    port:DB_PORT,
    user:DB_USER
})

