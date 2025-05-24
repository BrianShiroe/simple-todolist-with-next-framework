// src/app/api/todos/[id]/route.ts
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, context: { params: Record<string, string | string[]> }) {
  const { params } = context;
  // Ensure id is string (if array, take first element)
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { completed } = await req.json();
  await db.query("UPDATE todos SET completed = ? WHERE id = ?", [completed, id]);
  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(req: NextRequest, context: { params: Record<string, string | string[]> }) {
  const { params } = context;
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  await db.query("DELETE FROM todos WHERE id = ?", [id]);
  return NextResponse.json({ message: "Deleted" });
}
