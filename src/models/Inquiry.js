import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        company: { type: String },
        country: { type: String },
        phone: { type: String },
        inquiryType: {
            type: String,
            enum: ["quote", "sample", "general", "partnership"],
            default: "general",
        },
        products: [{ type: String }],
        message: { type: String, required: true },
        status: {
            type: String,
            enum: ["new", "in-progress", "responded", "closed"],
            default: "new",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);
