import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as pg from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

export const db = drizzle(pool);