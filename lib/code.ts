export const prismadrizzlecomparison = {
  schemaDefinition: {
    prisma: `// schema.prisma
  model User {
    id    Int     @id @default(autoincrement())
    name  String
    email String  @unique
  }`,
    drizzle: `// schema.js
  const { Table, column, types } = require('drizzle-orm');
  
  const User = Table('users', {
    id: column(types.INTEGER, { primaryKey: true, autoIncrement: true }),
    name: column(types.STRING),
    email: column(types.STRING, { unique: true })
  });`,
  },
  databaseQueries: {
    prisma: `import { PrismaClient } from '@prisma/client';
  
  const prisma = new PrismaClient();
  
  // Fetch all users
  const users = await prisma.user.findMany();
  
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });`,
    drizzle: `const { Database } = require('drizzle-orm');
  const db = new Database();
  
  // Fetch all users
  const users = await db.select().from(User).execute();
  
  // Create a new user
  const newUser = await db.insert(User).values({ name: 'Alice', email: 'alice@example.com' }).execute();`,
  },
  migrations: {
    prisma: `npx prisma migrate dev --name init`,
    drizzle: `const migration = {
    up: async (db) => {
      await db.query('CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE)');
    },
    down: async (db) => {
      await db.query('DROP TABLE users');
    }
  };`,
  },
  usageNextJs: {
    prisma: `// pages/api/users.js
  import { PrismaClient } from '@prisma/client';
  
  const prisma = new PrismaClient();
  
  export default async function handler(req, res) {
    if (req.method === 'GET') {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      const { name, email } = req.body;
      const newUser = await prisma.user.create({ data: { name, email } });
      res.status(201).json(newUser);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }`,
    drizzle: `// pages/api/users.js
  const { Database } = require('drizzle-orm');
  const { User } = require('../../schema');
  
  const db = new Database();
  
  export default async function handler(req, res) {
    if (req.method === 'GET') {
      const users = await db.select().from(User).execute();
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      const { name, email } = req.body;
      const newUser = await db.insert(User).values({ name, email }).execute();
      res.status(201).json(newUser);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }`,
  },
};
