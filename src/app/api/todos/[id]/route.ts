// src/app/api/todos/[id]/route.ts
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const { completed } = await req.json();
  await db.query("UPDATE todos SET completed = ? WHERE id = ?", [completed, params.id]);
  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(req: NextRequest, { params }: Params) {
  await db.query("DELETE FROM todos WHERE id = ?", [params.id]);
  return NextResponse.json({ message: "Deleted" });
}
