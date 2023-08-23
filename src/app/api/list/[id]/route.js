import { NextResponse } from "next/server";
import { executeQuery } from "../../../../../utilis/db";

export async function DELETE(req, { params }) {
    try {
        const query = 'DELETE FROM todos WHERE id = ?';
        const values = [params?.id || null];
        await executeQuery(query, values);
        return NextResponse.json({ message: `Task deleted` }, { status: 200 })
    } catch (e) {
        return NextResponse.json(
            { message: `Server error, please try again! ${e}` },
            { status: 500 }
        )
    }
}

export async function PUT(req, { params }) {
    try {
      const value = await req.json();
      const query = 'UPDATE todos SET title = ?, completed = ? WHERE id = ?';
      const values = [value?.title, value?.completed, params?.id || null];
      await executeQuery(query, values);
      return NextResponse.json({ message: `Task updated` }, { status: 200 });
    } catch (e) {
      return NextResponse.json(
        { message: `Server error, please try again! ${e}` },
        { status: 500 }
      );
    }
  }