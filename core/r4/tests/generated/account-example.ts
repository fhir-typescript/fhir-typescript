import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Account",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">HACC Funded Billing for Peter James Chalmers</div>"
  },
  "identifier": [
    {
      "system": "urn:oid:0.1.2.3.4.5.6.7",
      "value": "654321"
    }
  ],
  "status": "active",
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        "code": "PBILLACCT",
        "display": "patient billing account"
      }
    ],
    "text": "patient"
  },
  "name": "HACC Funded Billing for Peter James Chalmers",
  "subject": [
    {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    }
  ],
  "servicePeriod": {
    "start": "2016-01-01",
    "end": "2016-06-30"
  },
  "coverage": [
    {
      "coverage": {
        "reference": "Coverage/7546D"
      },
      "priority": 1
    }
  ],
  "owner": {
    "reference": "Organization/hl7"
  },
  "description": "Hospital charges"
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Account');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
