// src/app/api/todos/[id]/route.ts
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, context: { params: { id: string } }) {
  const { completed } = await req.json();
  const id = context.params.id;
  await db.query("UPDATE todos SET completed = ? WHERE id = ?", [completed, id]);
  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id;
  await db.query("DELETE FROM todos WHERE id = ?", [id]);
  return NextResponse.json({ message: "Deleted" });
}
