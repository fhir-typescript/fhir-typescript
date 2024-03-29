import { fhir } from '../../src/index.js';

const src = {
	"resourceType": "Consent",
	"id": "consent-example-basic",
	"text": {
		"status": "generated",
		"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n    <p>\n\tAuthorize Normal access for Treatment\n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; wishes to have all of the PHI collected at the Good Health Psychiatric Hospital \n   available for normal treatment use.\n   </p>\n   </div>"
	},
	"status": "active",
	"patient": {
		"reference": "Patient/f001",
		"display": "P. van de Heuvel"
	},
	"period": {
		"start": "1964-01-01",
		"end": "2016-01-01"
	},
	"dateTime": "2016-05-11",
	"organization": [
		{
			"reference": "Organization/Infoway",
			"display": "Canada Infoway"
		}
	],
	"sourceAttachment": {
		"title": "The terms of the consent in lawyer speak."
	},
	"identifier": [
		{
			"use": "usual",
			"type": {
				"coding": [
					{
						"system": "http://terminology.hl7.org/CodeSystem/v2-0203",
						"code": "MR"
					}
				]
			},
			"system": "urn:oid:1.2.36.146.595.217.0.1",
			"value": "12345",
			"period": {
				"start": "2001-05-06"
			},
			"assigner": {
				"display": "Acme Healthcare"
			}
		}
	],
	"extension":[
		{
			"url" : "http://hl7.org/fhir/StructureDefinition/PruebaExtension",
			"valueString" : "123456789"
		}
	]
};

test('generated', () => {
  //let v:fhir.FhirResource|null = fhir.resourceFactory(src);
  let v:fhir.Consent = new fhir.Consent(src as any, {allowUnknownElements: true});
  expect(v).toBeDefined();

  if (v === null) {
    return;
  }

  expect(v.resourceType).toBe('Consent');

  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);

  expect(r).toEqual(src);

  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) {
    issues.forEach((i) => console.log('Found issue:', i));
  }
  //expect(issues.length).toBe(0);
});

let sourceValues:string[] = [];
sourceValues.push('a');
sourceValues.push('b');
sourceValues.push('c');

test.each(sourceValues)('testdyn %s', (val:string) => {
  expect(val).toBe('b');
})

// test.each([['a', 0], ['b', 1], ['c', 2], ['d', 1], ['e', 1]])('test value %s', (letter:string, val:number) => {
//   expect(val).toBe(1);
// });