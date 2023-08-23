import { NextResponse } from "next/server";
import { executeQuery } from "../../../../utilis/db";

export async function GET(req, res) {
    try {
        const query = 'SELECT * FROM todos'
        const [rows, field] = await executeQuery(query)
        return NextResponse.json(rows)
    } catch (e) {
        return NextResponse.json(
            { message: `Server error, please try again! ${e}` },
            { status: 500 }
        )
    }
}


export async function POST(req, res) {
    try {
        const value = await req.json();
        const query = 'INSERT INTO todos (title, completed) VALUES (?, ?)';
        const values = [value?.title || null, value?.completed || null];
        await executeQuery(query, values);
        return NextResponse.json({ data: value, message: `Task added` }, { status: 200 })
    } catch (e) {
        return NextResponse.json(
            { message: `Server error, please try again! ${e}` },
            { status: 500 }
        )
    }
}



