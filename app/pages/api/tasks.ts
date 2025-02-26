import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const { text } = req.body;
    const task = await prisma.task.create({ data: { text } });
    res.status(201).json(task);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.task.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}