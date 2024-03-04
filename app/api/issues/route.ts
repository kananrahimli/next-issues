
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const CreateIssueSchema=z.object({
    title:z.string().min(1).max(255),
    description:z.string().min(1),
})
export async function POST(requset: NextRequest){
    
    const body=await requset.json();
    const validation= CreateIssueSchema.safeParse(body);
    if(!validation.success){
         return NextResponse.json(validation.error.errors,{status:400})
    }

    const newIssue=await prisma.issue.create({
        data:{title:body.title,description:body.description}
    })

    return NextResponse.json(newIssue,{status:201})
}


// export async function GET(request: NextRequest) {
//     console.log(request);
    
//     const issues=await  prisma.issue.findMany()
//    return  NextResponse.json(issues,{status:200})
//  }

// export async function GET(request: NextRequest) {
//     // const { title, status, description } = request.query;


//     // Filtreleme sorgusu
//     // const filteredIssues = await prisma.issue.findMany({
//     //     where: {
//     //         // Filtreleme kriterleri
//     //         AND: [
//     //             { title: { contains: title || '' } }, // Başlık içerisinde title içerenler
//     //             { status: { equals: status || '' } }, // Belirli bir duruma sahip olanlar
//     //             { description: { contains: description || '' } } // Açıklama içerisinde description içerenler
//     //         ]
//     //     }
//     // });

//     // return NextResponse.json(filteredIssues, { status: 200 });
// }

