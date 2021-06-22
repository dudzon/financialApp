// https://javascript.plainenglish.io/setup-dotenv-to-access-environment-variables-in-angular-9-f06c6ffb86c0

const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.dev.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv

const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   API_KEY: "${process.env.GOOGLE__API_KEY}",
   OAUTH_CLIENT_ID: "${process.env.OAUTH_CLIENT_ID}"
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
