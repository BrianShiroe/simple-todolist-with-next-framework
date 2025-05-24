// src/app/api/todos/[id]/route.ts
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { completed } = await req.json();
  await db.query("UPDATE todos SET completed = ? WHERE id = ?", [
    completed,
    context.params.id,
  ]);
  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  await db.query("DELETE FROM todos WHERE id = ?", [context.params.id]);
  return NextResponse.json({ message: "Deleted" });
}
