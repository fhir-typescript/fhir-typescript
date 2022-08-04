import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "BodyStructure",
  "id": "fetus",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fetus</p><p><b>identifier</b>: 12345</p><p><b>location</b>: Fetus <span>(Details : {SNOMED CT code '83418008' = 'Fetus', given as 'Entire fetus (body structure)'})</span></p><p><b>description</b>: EDD 1/1/2017 confirmation by LMP</p><p><b>patient</b>: <a>Patient/example</a></p></div>"
  },
  "identifier": [
    {
      "system": "http://goodhealth.org/bodystructure/identifiers",
      "value": "12345"
    }
  ],
  "location": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "83418008",
        "display": "Entire fetus (body structure)"
      }
    ],
    "text": "Fetus"
  },
  "description": "EDD 1/1/2017 confirmation by LMP",
  "patient": {
    "reference": "Patient/example"
  }
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('BodyStructure');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
