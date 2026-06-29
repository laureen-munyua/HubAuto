import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const cars = await prisma.car.findMany();
    return Response.json({ cars }, { status: 200 });
  } catch (error) {
    console.error("Cars error full:", error.message);
    return Response.json({ message: error.message }, { status: 500 });
  }
}