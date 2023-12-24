import { NextResponse } from "next/server";

export function GET() {
  // return Response.json({ ok: true })
  return NextResponse.json({ ok: true }, { status: 200 })

}