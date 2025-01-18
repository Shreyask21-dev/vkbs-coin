import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle file uploads manually
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const uploadDir = "/tmp"; // Vercel's temporary storage directory

      // Create a formidable instance with custom settings
      const form = formidable({
        uploadDir, // Directory to save temporary files
        keepExtensions: true, // Keep file extensions
      });

      // Ensure the upload directory exists
      fs.mkdirSync(uploadDir, { recursive: true });

      // Parse the incoming form data
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Formidable parse error:", err);
          return res
            .status(500)
            .json({ success: false, message: "Error parsing the form." });
        }

        const uploadedFile = Array.isArray(files.file) ? files.file[0] : files.file;

        if (!uploadedFile) {
          return res
            .status(400)
            .json({ success: false, message: "No file was uploaded." });
        }

        const filePath = uploadedFile.filepath;
        const originalFileName = uploadedFile.originalFilename;
        const newFilePath = path.join(uploadDir, originalFileName);

        // Rename the file to its original name
        fs.rename(filePath, newFilePath, (renameErr) => {
          if (renameErr) {
            console.error("File rename error:", renameErr);
            return res
              .status(500)
              .json({ success: false, message: "Error saving the file." });
          }

          res.status(200).json({
            success: true,
            message: "File uploaded successfully.",
            filePath: newFilePath, // Provide the file path for subsequent APIs
          });
        });
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      res.status(500).json({
        success: false,
        message: "An unexpected error occurred while uploading the file.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
