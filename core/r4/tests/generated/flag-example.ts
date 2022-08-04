import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Flag",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Large Dog warning for Peter Patient</div>"
  },
  "identifier": [
    {
      "value": "12345"
    }
  ],
  "status": "inactive",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/flag-category",
          "code": "safety",
          "display": "Safety"
        }
      ],
      "text": "Safety"
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://example.org/local",
        "code": "bigdog",
        "display": "Big dog"
      }
    ],
    "text": "Patient has a big dog at his home. Always always wear a suit of armor or take other active counter-measures"
  },
  "subject": {
    "reference": "Patient/example",
    "display": "Peter Patient"
  },
  "period": {
    "start": "2015-01-17",
    "end": "2016-12-01"
  },
  "author": {
    "reference": "Practitioner/example",
    "display": "Nancy Nurse"
  }
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Flag');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
