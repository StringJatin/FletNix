// import Data from '../models/MovieData.js';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export const uploadCSV = async (req, res) => {
//   try {
//     const filePath = path.join('uploads', req.file.filename); // Path to the uploaded file
//     const results = [];
    
//     // Parse CSV file
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (data) => results.push(data))
//       .on('end', async () => {
//         try {
//           await Data.insertMany(results); // It inserts the data into MongoDB
//           fs.unlinkSync(filePath); // It removes the file after processing
//           res.status(201).json({ message: 'Data successfully imported' });
//         } catch (err) {
//           res.status(500).json({ message: 'Error importing data' });
//         }
//       });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
