import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "NamingSystem",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>\n        <b>SNOMED CT</b>\n      </p>\n      \n      <p> oid: 2.16.840.1.113883.6.96</p>\n      \n      <p> uri: http://snomed.info/sct</p>\n    \n    </div>"
  },
  "name": "SNOMED CT",
  "status": "active",
  "kind": "codesystem",
  "date": "2014-12-13",
  "publisher": "HL7 International on behalf of IHTSDO",
  "contact": [
    {
      "name": "FHIR project team",
      "telecom": [
        {
          "system": "url",
          "value": "http://hl7.org/fhir"
        }
      ]
    }
  ],
  "responsible": "IHTSDO & affiliates",
  "description": "SNOMED CT is a concept-based, scientifically validated terminology that provides a unique and permanent concept identifier that can be included in multiple HL7 data types including CD and CE.  The concepts are managed to avoid \"semantic drift\" so the meaning remains constant.  If the concept is found to be ambiguous or the meaning changes, the concept is inactivated but still retained and the identifier is never reused.    SNOMED CT's concepts are interrelated hierarchically and using description logic.    SNOMED CT concepts have a unique \"fully-specified name\", a preferred term, and, optionally, synonyms.  The description languages include English and Spanish.",
  "uniqueId": [
    {
      "type": "oid",
      "value": "2.16.840.1.113883.6.96"
    },
    {
      "type": "uri",
      "value": "http://snomed.info/sct",
      "preferred": true
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('NamingSystem');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
