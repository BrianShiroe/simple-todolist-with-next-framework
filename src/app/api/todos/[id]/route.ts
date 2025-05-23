import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { completed } = await req.json();
  await db.query("UPDATE todos SET completed = ? WHERE id = ?", [completed, params.id]);
  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  await db.query("DELETE FROM todos WHERE id = ?", [params.id]);
  return NextResponse.json({ message: "Deleted" });
}
