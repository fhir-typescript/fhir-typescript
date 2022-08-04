import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Organization",
  "id": "hl7",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Health Level Seven International\n      <br/>\n\t\t\t\t3300 Washtenaw Avenue, Suite 227\n      <br/>\n\t\t\t\tAnn Arbor, MI 48104\n      <br/>\n\t\t\t\tUSA\n      <br/>\n\t\t\t\t(+1) 734-677-7777 (phone)\n      <br/>\n\t\t\t\t(+1) 734-677-6622 (fax)\n      <br/>\n\t\t\t\tE-mail:  \n      <a href=\"mailto:hq@HL7.org\">hq@HL7.org</a>\n    \n    </div>"
  },
  "name": "Health Level Seven International",
  "alias": [
    "HL7 International"
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "(+1) 734-677-7777"
    },
    {
      "system": "fax",
      "value": "(+1) 734-677-6622"
    },
    {
      "system": "email",
      "value": "hq@HL7.org"
    }
  ],
  "address": [
    {
      "line": [
        "3300 Washtenaw Avenue, Suite 227"
      ],
      "city": "Ann Arbor",
      "state": "MI",
      "postalCode": "48104",
      "country": "USA"
    }
  ],
  "endpoint": [
    {
      "reference": "Endpoint/example"
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Organization');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
