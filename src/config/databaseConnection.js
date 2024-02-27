import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017';

async function connect() {
    mongoose.connect(url);
    return mongoose.connection;
}

export default connect;