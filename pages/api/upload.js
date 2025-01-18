import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disable bodyParser to handle file uploads manually
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Ensure the upload directory exists
    const uploadDir = path.join(process.cwd(), "public/resumes");
    fs.mkdirSync(uploadDir, { recursive: true });

    const form = formidable({
      uploadDir: uploadDir,
      keepExtensions: true, // Keep file extensions
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Formidable parse error:", err);
        return res
          .status(500)
          .json({ success: false, message: "Error parsing the form." });
      }

      // Log files object for debugging
      console.log("Files object:", files);

      // Access uploaded file (handle files.file as an array)
      const uploadedFile = Array.isArray(files.file) ? files.file[0] : files.file;

      if (!uploadedFile) {
        console.error("No file was uploaded:", files);
        return res
          .status(400)
          .json({ success: false, message: "No file was uploaded." });
      }

      // Get the file details
      const filePath = uploadedFile.filepath;
      const originalFileName = uploadedFile.originalFilename;
      const newFilePath = path.join(uploadDir, originalFileName);

      if (!filePath) {
        console.error("File path is undefined:", uploadedFile);
        return res
          .status(400)
          .json({ success: false, message: "Invalid file path." });
      }

      // Rename the file to its original name
      fs.rename(filePath, newFilePath, (renameErr) => {
        if (renameErr) {
          console.error("File rename error:", renameErr);
          return res
            .status(500)
            .json({ success: false, message: "Error saving the file." });
        }

        // Respond with success
        res.status(200).json({
          success: true,
          message: "File uploaded successfully.",
          filePath: `/resumes/${originalFileName}`, // Public file path
        });
      });
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
