import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Group",
  "id": "101",
  "text": {
    "status": "additional",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Herd of 25 horses</p>\n      <p>Gender: mixed</p>\n      <p>Owner: John Smith</p>\n    </div>"
  },
  "identifier": [
    {
      "system": "http://someveterinarianclinic.org/fhir/NamingSystem/herds",
      "value": "12345"
    }
  ],
  "type": "animal",
  "actual": true,
  "code": {
    "text": "Horse"
  },
  "name": "John's herd",
  "quantity": 25,
  "characteristic": [
    {
      "code": {
        "text": "gender"
      },
      "valueCodeableConcept": {
        "text": "mixed"
      },
      "exclude": false
    },
    {
      "code": {
        "text": "owner"
      },
      "valueCodeableConcept": {
        "text": "John Smith"
      },
      "exclude": false
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Group');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
