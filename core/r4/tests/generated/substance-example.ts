import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Substance",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 1463</p><p><b>status</b>: active</p><p><b>category</b>: Allergen <span>(Details : {http://terminology.hl7.org/CodeSystem/substance-category code 'allergen' = 'Allergen', given as 'Allergen'})</span></p><p><b>code</b>: apitoxin (Honey Bee Venom) <span>(Details )</span></p></div>"
  },
  "identifier": [
    {
      "system": "http://acme.org/identifiers/substances",
      "value": "1463"
    }
  ],
  "status": "active",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/substance-category",
          "code": "allergen",
          "display": "Allergen"
        }
      ]
    }
  ],
  "code": {
    "text": "apitoxin (Honey Bee Venom)"
  }
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Substance');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
