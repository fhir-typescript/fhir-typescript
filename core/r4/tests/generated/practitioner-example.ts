import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Practitioner",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Dr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n        2012</p>\n    </div>"
  },
  "identifier": [
    {
      "system": "http://www.acme.org/practitioners",
      "value": "23"
    }
  ],
  "active": true,
  "name": [
    {
      "family": "Careful",
      "given": [
        "Adam"
      ],
      "prefix": [
        "Dr"
      ]
    }
  ],
  "address": [
    {
      "use": "home",
      "line": [
        "534 Erewhon St"
      ],
      "city": "PleasantVille",
      "state": "Vic",
      "postalCode": "3999"
    }
  ],
  "qualification": [
    {
      "identifier": [
        {
          "system": "http://example.org/UniversityIdentifier",
          "value": "12345"
        }
      ],
      "code": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0360/2.7",
            "code": "BS",
            "display": "Bachelor of Science"
          }
        ],
        "text": "Bachelor of Science"
      },
      "period": {
        "start": "1995"
      },
      "issuer": {
        "display": "Example University"
      }
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Practitioner');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
