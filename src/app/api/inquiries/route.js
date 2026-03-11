import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const inquiry = await Inquiry.create(body);
        return NextResponse.json({ success: true, data: inquiry }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const inquiries = await Inquiry.find({}).sort({ createdAt: -1 }).limit(50);
        return NextResponse.json({ success: true, data: inquiries });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
