import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from "zod";
import prisma from "@/prisma/client";
export async function GET(request: NextRequest) {
    const title = request.nextUrl.searchParams.getAll('title').map(value => {
        // Başındaki ve sonundaki tırnakları kaldır
        return value.replace(/^'|'$/g, '');
    });;
    // const status = request.nextUrl.searchParams.getAll('status');
    const description = request.nextUrl.searchParams.getAll('description').map(value => {
        // Başındaki ve sonundaki tırnakları kaldır
        return value.replace(/^'|'$/g, '');
    });;

    // Filtreleme sorgusu
    const filteredIssues = await prisma.issue.findMany({
        where: {
            // Filtreleme kriterleri
            AND: [
                { title: { contains: title[0] || '' } }, // Başlık içerisinde title içerenler
                // { status: { equals: status[0] || '' } }, // Belirli bir duruma sahip olanlar
                { description: { contains: description[0] || '' } } // Açıklama içerisinde description içerenler
            ]
        }
    });

    return NextResponse.json(filteredIssues, { status: 200 });
}