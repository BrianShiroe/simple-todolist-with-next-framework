import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM todos ORDER BY created_at DESC");
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  const id = Date.now();
  await db.query("INSERT INTO todos (id, text, completed) VALUES (?, ?, false)", [id, text]);
  return NextResponse.json({ id, text, completed: false });
}
