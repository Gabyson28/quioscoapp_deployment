import { PrismaClient } from "@prisma/client";
import { TransformStreamDefaultController } from "stream/web";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const categorias = await prisma.categoria.findMany({
    include: {
      productos: true,
    },
  });

  res.status(200).json(categorias);
}
