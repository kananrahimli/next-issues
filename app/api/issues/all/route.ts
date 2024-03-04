import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";


export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
   const issues=await  prisma.issue.findMany()
  return  NextResponse.json(issues,{status:200})
}
