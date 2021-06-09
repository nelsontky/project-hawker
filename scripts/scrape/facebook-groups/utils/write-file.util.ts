import fs from "fs";
import path from "path";

export function writeFile(fileName: string, content: string) {
  const resultPath = path.join(__dirname, "..", "debug", fileName);
  fs.writeFileSync(resultPath, content);
}
