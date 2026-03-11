import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: ".env.local" });

const ProductSchema = new mongoose.Schema({}, { strict: false });

const setup = async () => {
    try {
        console.log("Connecting to local DB...");
        const localConn = await mongoose.createConnection("mongodb://localhost:27017/rajbai_catalog");
        const LocalProduct = localConn.model("Product", ProductSchema);
        
        const localProducts = await LocalProduct.find({}).lean();
        console.log(`Found ${localProducts.length} products in local DB.`);

        console.log("Connecting to remote Atlas DB...");
        const remoteConn = await mongoose.createConnection(process.env.MONGODB_URI);
        const RemoteProduct = remoteConn.model("Product", ProductSchema, "products");

        if (localProducts.length > 0) {
            console.log("Clearing existing products in remote DB...");
            await RemoteProduct.deleteMany({});
            
            console.log("Inserting products into remote DB...");
            // remove _id to let mongoose create new ones or keep them? Keep them is fine.
            await RemoteProduct.insertMany(localProducts);
            console.log("Successfully migrated products to Atlas!");
        } else {
            console.log("No products to transfer.");
        }

        localConn.close();
        remoteConn.close();
        process.exit(0);
    } catch (e) {
        console.error("Migration failed:", e);
        process.exit(1);
    }
};

setup();
