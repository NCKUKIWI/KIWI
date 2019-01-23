const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const mailcomposer = require('mailcomposer').MailComposer

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.send', 'https://mail.google.com/' , 'https://www.googleapis.com/auth/gmail.modify', 'https://www.googleapis.com/auth/gmail.compose'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = __dirname+'/token.json';
// Load client secrets from a local file.
function sendMail(to, txt){
  fs.readFile(__dirname+'/credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Gmail API.
    authorize(JSON.parse(content), to, txt, sendMessage);
  });
}


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, to, txt, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    // oAuth2Client.refreshToken("1/tIP2hIUg7FVc_s24dGsGdpGYpSZdUB89a2sQOhsb-883n2dE6kBimQKCZS-3VsTh")
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, to, txt);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, to, txt, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client, to, txt);
    });
  });
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth) {
  const gmail = google.gmail({version: 'v1', auth});
  gmail.users.labels.list({
    userId: 'me',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const labels = res.data.labels;
    if (labels.length) {
      console.log('Labels:');
      labels.forEach((label) => {
        console.log(`- ${label.name}`);
      });
    } else {
      console.log('No labels found.');
    }
  });
}
function sendMessage(auth, to, txt)
{
  const gmail = google.gmail({version: 'v1', auth});
  let mail = new mailcomposer(
    {
      to: to,
      text: txt,
      subject: "NCKU HUB 關心您 愛護您 守護著您",
      textEncoding: "base64",
    });
    console.log(mail)
  mail.compile().build( (error, msg) => {
    if (error) return console.log('Error compiling email ' + error);
    const encodedMessage = Buffer.from(msg)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
      gmail.users.messages.send({
        auth:auth,
         userId: 'me',
         resource: {
           'raw': encodedMessage
         }
       }).catch(error => console.log('error: ', error));
  })
}
module.exports = {sendMail};