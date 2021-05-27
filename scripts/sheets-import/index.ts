// npx ts-node -r tsconfig-paths/register --project tsconfig.json   scripts/sheets-import/index.ts

import { v4 as uuidv4 } from "uuid";
import { readCsv } from "./read-csv";
import { addToDatabase } from "./add-to-database";

const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const parentId = "1uRqsn4gXZ9u71Xu68CvN74WEyE3NW7-3";

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/drive"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

// Load client secrets from a local file.
fs.readFile("scripts/sheets-import/credentials.json", async (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  // Authorize a client with credentials, then call the Google Drive API.
  const rows = await readCsv(4, 15);

  authorize(JSON.parse(content), (auth) => downloadAndAdd(auth, 0, rows));
});

function downloadAndAdd(auth, i: number, rows: any[]) {
  if (i === rows.length) {
    return;
  }

  const drive = google.drive({ version: "v3", auth });

  function downloadFiles(i: number, files: any[], cb: any, result: any[] = []) {
    if (i === files.length) {
      return cb(result);
    }

    const file = files[i];
    const fileName = `${uuidv4()}.${file.fileExtension}`;
    const dest = fs.createWriteStream(`public/images/submissions/${fileName}`);
    drive.files
      .get(
        {
          fileId: file.id,
          alt: "media",
        },
        { responseType: "stream" }
      )
      .then((res) => {
        res.data
          .on("end", function () {
            downloadFiles(i + 1, files, cb, [
              ...result,
              { fileName, format: file.fileExtension },
            ]);
          })
          .on("error", function (err) {
            console.log("Error during download", err);
          })
          .pipe(dest);
      });
  }

  drive.files.list(
    {
      pageSize: 99,
      fields: "nextPageToken, files(id, name, webViewLink, fileExtension)",
      q: `'${rows[i].folderId}' in parents`,
    },
    async (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const files = res.data.files;
      if (files.length) {
        downloadFiles(0, files, async (result: any[]) => {
          await addToDatabase(rows[i], result);
          downloadAndAdd(auth, i + 1, rows);
        });
      } else {
        console.log("No files found.");
        await addToDatabase(rows[i]);
        downloadAndAdd(auth, i + 1, rows);
      }
    }
  );
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the code from that page here: ", (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error("Error retrieving access token", err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function createImageFolders(auth) {
  const drive = google.drive({ version: "v3", auth });

  function create(i) {
    if (i === 100) {
      return;
    }

    const fileMetadata = {
      name: "" + i,
      mimeType: "application/vnd.google-apps.folder",
      parents: [parentId],
    };
    drive.files.create(
      {
        resource: fileMetadata,
        fields: "id",
      },
      function (err, file) {
        if (err) {
          // Handle error
          console.error(err);
        } else {
          console.log("Folder Id: ", file.id);
          create(i + 1);
        }
      }
    );
  }

  create(1);
}

function listFiles(auth) {
  const drive = google.drive({ version: "v3", auth });
  drive.files.list(
    {
      pageSize: 99,
      fields: "nextPageToken, files(id, name, webViewLink)",
      q: `'${parentId}' in parents`,
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const files = res.data.files;
      if (files.length) {
        console.log("Files:");
        files.reverse().map((file) => {
          // console.log(`${file.name} (${file.id})`);
          console.log(file.webViewLink);
        });
      } else {
        console.log("No files found.");
      }
    }
  );
}

export {};
