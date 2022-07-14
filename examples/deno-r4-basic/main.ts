// import { fhir, valueSetCodes, valueSetCodings } from "r4-core/dist/index.js";
import { fhir, valueSetCodes, valueSetCodings } from "r4-core/dist/index.js";

// create a new patient object
let patient:fhir.Patient = new fhir.Patient({
  name: [ { 
    // you can use the native TS/JS types for values
    given: ['givenName'], 
    // or your can use FHIR primitives to add extended properties inline
    family: new fhir.FhirString({extension: [new fhir.Extension({url:'http://example.org/ext-1', valueString:'test'})]}),
  }],
  // can use the JSON-style choice types
  deceasedBoolean: true,
  // or you can use FHIR primitives on the root elements
  multipleBirth: new fhir.FhirBoolean({value: true}),
});

// all array-type elements are non-nullable to simplify your code
patient.identifier.push(new fhir.Identifier({value: 'abc-123'}));

// Codes are exposed as constants based on their names:
patient.contact.push(new fhir.PatientContact({gender: valueSetCodes.AdministrativeGenderCodes.Female}));
// and exposed based on the element and binding strength
patient.contact.push(new fhir.PatientContact({gender: valueSetCodes.Patient_Gender_Required_Codes.Other}));
// and have type hinting
patient.gender = new fhir.FhirCode<valueSetCodes.AdministrativeGenderCodeType>({value: 'other'});

// Codings are also available
patient.maritalStatus = new fhir.CodeableConcept({ coding: [valueSetCodings.Patient_MaritalStatus_Extensible_Codings.Unknown]});
// and can be used fluently
patient.maritalStatus = new fhir.CodeableConcept()
  .addCoding(valueSetCodings.Patient_MaritalStatus_Extensible_Codings.Unmarried)
  .addCoding(valueSetCodings.Patient_MaritalStatus_Extensible_Codings.NeverMarried);

// Extensions are also fluent
patient
  .addExtension({url: 'http://example.org/ext-1', value: new fhir.FhirString({value: 'test-again'})})
  .addExtension({url: 'http://example.org/ext-2', value: new fhir.FhirString({value: 'test-2'})})
  .addExtension({url: 'http://example.org/ext-3', extension: [
    {url: 'part1', valueString: 'value1'}, 
    {url: 'part2', valueString: 'value2'},
    {url: 'nested', extension: [{url: 'part3', valueString: 'value3'}]}]
  });
// and can be removed easily
patient.removeExtensions('http://example.org/ext-2');
// or searched
console.log('ext-3', JSON.stringify(patient.findExtension('http://example.org/ext-3')));
// even nested parts
console.log('part2', patient.findExtension('part2', true));
console.log('part3', patient.findExtension('part3', true));
// or repeating extensions
console.log('ext-1', JSON.stringify(patient.filterExtensions('http://example.org/ext-1')));

// serialization uses the standard JSON calls
console.log('Serialied:', JSON.stringify(patient, null, 2));

// The SDK can check *basic* conformance to the specs (see docs for details)
let p2:fhir.Patient = new fhir.Patient();
p2.communication.push(new fhir.PatientCommunication({preferred: false}));
// TODO: deno is not detecting the fhir.FtsIssue export (suspect it is due to local include)
// let issues:fhir.FtsIssue[] = p2.doModelValidation();
let issues:any[] = p2.doModelValidation();
/*
  outputs:
Found issue: {
  severity: 'error',
  code: 'required',
  details: { text: 'Missing required property language fhir: Patient.communication.language:CodeableConcept' },
}
*/
if (issues && (issues.length > 0)) {
  issues.forEach((i) => console.log('Found issue:', i));
}
// FtsIssue is compatible with OperationOutcomeIssue (OperationOutcome.issue), but contains no extensions
// TODO: deno is not detecting the fhir.OperationOutcomeIssueArgs export (suspect it is due to local include)
// let outcome:fhir.OperationOutcome = new fhir.OperationOutcome({issue: issues as fhir.OperationOutcomeIssueArgs[]});
let outcome:fhir.OperationOutcome = new fhir.OperationOutcome({issue: issues});
console.log('Outcome:', JSON.stringify(outcome));

// // // and parsing works out of the box too
// let jp:string = '{"resourceType":"Patient","id":"example","text":{"status":"generated","div":"<div xmlns=\\"http://www.w3.org/1999/xhtml\\">\\n\\t\\t\\t<table>\\n\\t\\t\\t\\t<tbody>\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td>Name</td>\\n\\t\\t\\t\\t\\t\\t<td>Peter James \\n              <b>Chalmers</b> (&quot;Jim&quot;)\\n            </td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td>Address</td>\\n\\t\\t\\t\\t\\t\\t<td>534 Erewhon, Pleasantville, Vic, 3999</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td>Contacts</td>\\n\\t\\t\\t\\t\\t\\t<td>Home: unknown. Work: (03) 5555 6473</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td>Id</td>\\n\\t\\t\\t\\t\\t\\t<td>MRN: 12345 (Acme Healthcare)</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t</tbody>\\n\\t\\t\\t</table>\\n\\t\\t</div>"},"identifier":[{"use":"usual","type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/v2-0203","code":"MR"}]},"system":"urn:oid:1.2.36.146.595.217.0.1","value":"12345","period":{"start":"2001-05-06"},"assigner":{"display":"Acme Healthcare"}}],"active":true,"name":[{"use":"official","family":"Chalmers","given":["Peter","James"]},{"use":"usual","given":["Jim"]},{"use":"maiden","family":"Windsor","given":["Peter","James"],"period":{"end":"2002"}}],"telecom":[{"use":"home"},{"system":"phone","value":"(03) 5555 6473","use":"work","rank":1},{"system":"phone","value":"(03) 3410 5613","use":"mobile","rank":2},{"system":"phone","value":"(03) 5555 8834","use":"old","period":{"end":"2014"}}],"gender":"male","birthDate":"1974-12-25","_birthDate":{"extension":[{"url":"http://hl7.org/fhir/StructureDefinition/patient-birthTime","valueDateTime":"1974-12-25T14:35:45-05:00"}]},"deceasedBoolean":false,"address":[{"use":"home","type":"both","text":"534 Erewhon St PeasantVille, Rainbow, Vic  3999","line":["534 Erewhon St"],"city":"PleasantVille","district":"Rainbow","state":"Vic","postalCode":"3999","period":{"start":"1974-12-25"}}],"contact":[{"relationship":[{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/v2-0131","code":"N"}]}],"name":{"family":"du Marché","_family":{"extension":[{"url":"http://hl7.org/fhir/StructureDefinition/humanname-own-prefix","valueString":"VV"}]},"given":["Bénédicte"]},"telecom":[{"system":"phone","value":"+33 (237) 998327"}],"address":{"use":"home","type":"both","line":["534 Erewhon St"],"city":"PleasantVille","district":"Rainbow","state":"Vic","postalCode":"3999","period":{"start":"1974-12-25"}},"gender":"female","period":{"start":"2012"}}],"managingOrganization":{"reference":"Organization/1"}}';
// let parsed:fhir.Patient = new fhir.Patient(JSON.parse(jp));
