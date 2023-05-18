import {NextResponse} from "next/server";
import { list } from "../../../../utilis/list";

export async function GET(req, res) {
    try {
    return NextResponse.json(list)
    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}


export async function POST(req, res) {
    try {
    const value= await req.json();
    return NextResponse.json({data:value, message:'Task added'}, {status:200})
    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}