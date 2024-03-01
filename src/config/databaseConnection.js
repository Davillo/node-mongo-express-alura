import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.MONGO_URL;

async function connect() {
  mongoose.connect(url);
  return mongoose.connection;
}

export default connect;