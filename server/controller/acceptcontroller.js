import Book from "../models/Book.js";

export const acceptcontroller = async (req, res) => {
  try {
    const { _id } = req.body;

    // Check if the book with the given _id exists
    const user = await Book.findById(_id);

    if (!user) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Update the status to 'accept'
    user.status = 'accept';
    

    // Save the updated book
    await user.save();

    return res.json({ message: 'Updated', result: user.status });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
