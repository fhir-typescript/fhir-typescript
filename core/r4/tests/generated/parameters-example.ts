import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "exact",
      "valueBoolean": true
    },
    {
      "name": "property",
      "part": [
        {
          "name": "code",
          "valueCode": "focus"
        },
        {
          "name": "value",
          "valueCode": "top"
        }
      ]
    },
    {
      "name": "patient",
      "resource": {
        "resourceType": "Patient",
        "id": "example",
        "name": [
          {
            "use": "official",
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          }
        ]
      }
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Parameters');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
