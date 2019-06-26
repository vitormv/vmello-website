const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { google } = require('googleapis');

const targetFile = path.resolve(`${__dirname}/../static/resume.pdf`);

if (fs.existsSync(targetFile)) {
  fs.writeFileSync(targetFile, '');
}

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const TOKEN_PATH = 'token.json'; // The file token.json stores the user's access and refresh tokens

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0],
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
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);

  const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  prompt.question('Enter the code from that page here: ', (code) => {
    prompt.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        console.error('Error retrieving access token', err);
        return;
      }

      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (error) => {
        if (error) {
          console.error(error);
          return;
        }

        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

const pullResume = async (auth) => {
  const fileId = '1FTbBwPx7QxKFh6w2It1H4xjxxhNmK7QPT8QzI2DVaw0';
  const dest = fs.createWriteStream(targetFile);
  const drive = google.drive({ version: 'v3', auth });

  const response = await drive.files.export(
    { fileId, mimeType: 'application/pdf' },
    { responseType: 'stream' },
  );

  response.data
    .on('end', () => {
      console.log(`Done downloading document to: ${targetFile}`);
    })
    .on('error', (err) => {
      console.error('Error downloading document.');
    })
    .pipe(dest);
};

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), pullResume);
});
