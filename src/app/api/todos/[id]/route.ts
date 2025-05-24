// src/app/api/todos/[id]/route.ts
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function PATCH(req: NextRequest, context: unknown) {
  const { completed } = await req.json();

  // Assert context is the expected shape
  const ctx = context as Params;
  const id = ctx.params.id;

  await db.query("UPDATE todos SET completed = ? WHERE id = ?", [completed, id]);
  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(req: NextRequest, context: unknown) {
  const ctx = context as Params;
  const id = ctx.params.id;

  await db.query("DELETE FROM todos WHERE id = ?", [id]);
  return NextResponse.json({ message: "Deleted" });
}
