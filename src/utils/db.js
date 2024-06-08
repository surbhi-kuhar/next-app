import mongoose from "mongoose";

export default function connectionToDB() {
  try {
    const connection = mongoose.connect(
      "mongodb+srv://surbhikuhar:Us5casRCpGHEUt6j@cluster0.uttcitq.mongodb.net/Todo",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connected successfully");
    return connection; // Return the connection object
  } catch (error) {
    console.error("failed to connect:", error);
    throw error; // Throw an error to be caught by the caller
  }
}
