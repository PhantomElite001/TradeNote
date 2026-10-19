import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const pool = await mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'tradenote',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 5
})

const email = process.env.SEED_EMAIL || 'test@example.com'
const name = process.env.SEED_NAME || 'Test User'
const password = process.env.SEED_PASSWORD || 'password'

try {
  const [rows] = await pool.query('SELECT id FROM Users WHERE email=?', [email])
  if (rows.length > 0) {
    console.log('Seed user already exists:', email)
  } else {
    await pool.query('INSERT INTO Users (name,email,password) VALUES (?,?,?)', [name, email, password])
    console.log('Inserted seed user:', email)
  }
} catch (err) {
  console.error('Error seeding user:', err.message || err)
} finally {
  await pool.end()
}
