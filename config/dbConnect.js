import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        mongoose.set("strictQuery", false);
        const connected = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb connected ${connected.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnect;
//WzRpqWTonsMR7bU2
//mongodb+srv://khoitk14033:<WzRpqWTonsMR7bU2>@nodejs-ecommerce-api.8yciwqe.mongodb.net/nodejs-ecommerce-api?retryWrites=true&w=majority
//SAcFQD4ArJc8kcIu
//mongodb+srv://khoitk14033:<SAcFQD4ArJc8kcIu>@nodejs-ecommerce.fznrdfn.mongodb.net/nodejs-ecommerce?retryWrites=true&w=majority