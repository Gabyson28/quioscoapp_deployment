import { PrismaClient } from "@prisma/client";

export default async function handler(request, response) {
  const prisma = new PrismaClient();

  // Obtener Ordenes
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false,
    },
  });

  response.status(200).json(ordenes);

  // Crear Orden
  if (request.method === "POST") {
    const order = await prisma.orden.create({
      data: {
        nombre: request.body.nombre,
        total: request.body.totalPedido,
        pedido: request.body.pedido,
        fecha: request.body.fecha,
      },
    });
    response.status(200).json(order);
  }
}
