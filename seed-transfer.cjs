const mongoose = require("mongoose");
const fs = require("fs");

const envVars = fs.readFileSync(".env.local", "utf8").split('\n');
let mongoUri = "";
envVars.forEach(line => {
    if (line.startsWith("MONGODB_URI=")) {
        mongoUri = line.split("MONGODB_URI=")[1].trim();
    }
});

const ProductSchema = new mongoose.Schema({}, { strict: false });

const setup = async () => {
    try {
        console.log("Connecting to local DB...");
        const localConn = await mongoose.createConnection("mongodb://localhost:27017/rajbai_catalog").asPromise();
        
        // Ensure "products" collection
        const LocalProduct = localConn.model("Product", ProductSchema, "products");
        
        const localProducts = await LocalProduct.find({}).lean();
        console.log(`Found ${localProducts.length} products in local DB.`);

        if (localProducts.length === 0) {
            console.log("No products to transfer.");
            localConn.close();
            process.exit(0);
        }

        console.log("Connecting to remote Atlas DB...");
        const remoteConn = await mongoose.createConnection(mongoUri).asPromise();
        const RemoteProduct = remoteConn.model("Product", ProductSchema, "products");

        console.log("Clearing existing products in remote DB...");
        await RemoteProduct.deleteMany({});
        
        console.log("Inserting products into remote DB...");
        await RemoteProduct.insertMany(localProducts);
        console.log("Successfully migrated products to Atlas!");

        await localConn.close();
        await remoteConn.close();
        process.exit(0);
    } catch (e) {
        console.error("Migration failed:", e);
        process.exit(1);
    }
};

setup();
