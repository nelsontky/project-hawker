import * as fs from "fs";
import * as path from "path";
import * as csv from "@fast-csv/parse";

export async function readCsv(
  startRow: number,
  endRow: number
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(path.resolve("scripts", "sheets-import", "sheet.csv"))
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => console.error(error))
      .on("data", (row) => {
        rows.push(row);
      })
      .on("end", () => {
        const result = rows.slice(startRow - 2, endRow - 1);
        resolve(
          result.map((row) => ({
            ...row,
            folderId: row.images.split(
              "https://drive.google.com/drive/folders/"
            )[1],
          }))
        );
      });
  });
}

// readCsv(3, 5).then((res) => {
//   console.log(res);
// });
