import { NextResponse } from "next/server";

export function GET() {
  // return Response.json({ ok: true })
  return NextResponse.json({ ok: process.env.NEXT_PUBLIC_API_BASE_URL }, { status: 200 })

}