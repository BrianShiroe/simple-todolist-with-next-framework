// src/app/api/todos/[id]/route.ts
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  await db.query("DELETE FROM todos WHERE id = ?", [id]);
  return NextResponse.json({ message: "Deleted" });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { completed } = await req.json();
  const id = params.id;
  await db.query("UPDATE todos SET completed = ? WHERE id = ?", [completed, id]);
  return NextResponse.json({ message: "Updated" });
}
