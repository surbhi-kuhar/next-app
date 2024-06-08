import connectionToDB from "@/utils/db";
import People from "../../models/people";

export default async function (req, res) {
  try {
    // Connect to the database
    const db = await connectionToDB();
    console.log(db);

    const { email, password } = req.body;
    console.log(req.body);a

    // Create a new People instance using the imported People model
    const newUser = new People({ email, password });

    // Save the user to the database
    await newUser.save();

    // Send success response
    res
      .status(200)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
  }
}
