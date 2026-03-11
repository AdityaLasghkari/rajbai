import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(request, { params }) {
    try {
        await dbConnect();
        const product = await Product.findOne({ slug: params.slug });
        if (!product) {
            return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: product });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        await dbConnect();
        const body = await request.json();
        
        // Ensure slug is updated if necessary, but careful about uniqueness
        const product = await Product.findOneAndUpdate(
            { slug: params.slug },
            body,
            { new: true, runValidators: true }
        );
        if (!product) {
            return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: product });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    try {
        await dbConnect();
        const product = await Product.findOneAndDelete({ slug: params.slug });
        if (!product) {
            return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
