import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");
        const featured = searchParams.get("featured");
        const limit = parseInt(searchParams.get("limit")) || 50;

        let filter = {};
        if (category) filter.category = category;
        if (featured === "true") filter.isFeatured = true;

        const products = await Product.find(filter).limit(limit).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: products });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const product = await Product.create(body);
        return NextResponse.json({ success: true, data: product }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
