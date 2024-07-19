// db/connect.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'products',
  password: 'Al!h@ss@n',
  port: 5432,
});

const connectdb = async () => {
  try {
    await pool.connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
};

export { connectdb, pool };
