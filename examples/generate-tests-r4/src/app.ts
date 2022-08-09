import { 
  accessSync,
  readdirSync,
  opendirSync, 
  readFileSync,
  writeFileSync,
  constants as fsConstants,
  existsSync,
  mkdirSync
 } from 'node:fs';
import { execSync } from 'node:child_process';
import * as https from 'node:https';

import { fhir } from '@fhir-typescript/r4-core';
import { FtsIssue } from '@fhir-typescript/r4-core/dist/fhir';

const argUpdateTestCases:string = '--update-test-cases';

const fhirVersionKey:string = 'r4';
const publicationKey:string = 'R4';
const fhirVersionMajor:string = '4.0';

// test cases are normally mapped in {project-root}/generated/fhir-test-cases
const testCasePath:string = 'fhir-test-cases';
const testCaseGitRepo:string = 'https://github.com/FHIR/fhir-test-cases.git';
const edgeCasesFilename:string = `json-edge-cases.json`;

interface manifestRecord {
  name:string;
  file:string;
  version:string;
  tssdk:{
    version:number;
    issueCount:number;
    issues:FtsIssue[];
  };
};

//console.log('cwd', process.cwd());

// check for command-line arguments
if (process.argv.includes(argUpdateTestCases)) {
  updateTestCaseSource();
}

let manifest:manifestRecord[] = [];
manifest.push(...processExamples());

writeFileSync('./output/manifest.json', JSON.stringify({
  "test-cases": manifest
}));

console.log('done');

/**
 * Process example test cases
 */
function processExamples():manifestRecord[] {
  const examplePath:string = testCasePath + '/' + fhirVersionKey + '/examples';

  try {
    mkdirSync('./output/examples', {recursive: true});
  } catch (err) {
    console.log('Error creating ./output/examples', err);
  }

  let records:manifestRecord[] = [];

  let files:string[] = readdirSync(examplePath);
  files.forEach((file => {
    if (!file.endsWith('.json')) {
      return;
    }

    try {
      let contents:string = readFileSync(examplePath + '/' + file).toString();
      let obj:any = JSON.parse(contents);

      let resource:fhir.Resource|null = fhir.resourceFactory(obj, {allowUnknownElements: true});
      if (resource === null) {
        console.log('Unparseable file: ' + file + ', skipping.');
      }

      let issues:fhir.FtsIssue[]|undefined = resource?.doModelValidation();

      let rec:manifestRecord = {
        name: 'example_' + file.substring(0, file.length - 5),
        file: 'examples/' + file,
        version: fhirVersionMajor,
        tssdk:{
          issueCount:issues?.length ?? 0,
          issues:(issues) ? issues : [],
        }
      };
      records.push(rec);

      const outPath:string = './output/examples/' + file;
      writeFileSync(outPath, contents);

    } catch (err) {
      console.log('Error in file: ' + file, err);
    }

  }));

  return records;
}

function processValidator():manifestRecord[] {
  const examplePath:string = testCasePath + '/validator';

  try {
    mkdirSync('./output/examples', {recursive: true});
  } catch (err) {
    console.log('Error creating ./output/examples', err);
  }

  let records:manifestRecord[] = [];

  let files:string[] = readdirSync(examplePath);
  files.forEach((file => {
    if ((!file.endsWith('.json')) || (file === 'manifest.json')) {
      return;
    }

    try {
      let contents:string = readFileSync(examplePath + '/' + file).toString();
      let obj:any = JSON.parse(contents);

      let resource:fhir.Resource|null = fhir.resourceFactory(obj, {allowUnknownElements: true});
      if (resource === null) {
        console.log('Unparseable file: ' + file + ', skipping.');
      }

      let issues:fhir.FtsIssue[]|undefined = resource?.doModelValidation();

      let rec:manifestRecord = {
        name: 'example_' + file.substring(0, file.length - 5),
        file: 'examples/' + file,
        version: fhirVersionMajor,
        tssdk:{
          issueCount:issues?.length ?? 0,
          issues:(issues) ? issues : [],
        }
      };
      records.push(rec);

      const outPath:string = './output/examples/' + file;
      writeFileSync(outPath, contents);

    } catch (err) {
      console.log('Error in file: ' + file, err);
    }

  }));

  return records;
}

/**
 * Creates or updates the test cases
 * @returns 
 */
function updateTestCaseSource() {
  try {
    accessSync(edgeCasesFilename, fsConstants.R_OK | fsConstants.W_OK);
  } catch (err) {
    console.log('Downloading json-edge-cases via https get...');
    https.get(
      `https://hl7.org/fhir/${publicationKey}/json-edge-cases.json`,
      (res) => {
        let data = '';

        // called when a data chunk is received.
        res.on('data', (chunk) => {
            data += chunk;
        });
    
        // called when the complete response is received.
        res.on('end', () => {
          writeFileSync(edgeCasesFilename, data);
          console.log(' << json-edge-cases updated!');
        });
    
    }).on('error', (err) => {
        console.log('Error: ', err.message);
    });
  }

  try {
    accessSync(testCasePath, fsConstants.R_OK | fsConstants.W_OK);

    console.log('Downloading json-edge-cases via https get...');
    console.log('Updating test cases via git pull...');
    process.chdir(testCasePath);
    execSync(`git pull`);
    process.chdir('..');
    console.log(' << test cases updated!');
  } catch (err) {
    console.log('Downloading test cases via git clone...');
    execSync(`git clone ${testCaseGitRepo}`);
    console.log(' << test cases downloaded!');
  }
}