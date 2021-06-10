import fs from "fs";
import path from "path";
import axios from "axios";

export async function downloadImage(fileName: string, imageLink: string) {
  const resultPath = path.join("public", "images", "facebook", fileName);

  return axios({
    method: "get",
    url: imageLink,
    responseType: "stream",
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(resultPath));
  });
}
