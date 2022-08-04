import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "OperationOutcome",
  "id": "101",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>The code &quot;W&quot; is not known and not legal Patient.gender.</p>\n    </div>"
  },
  "issue": [
    {
      "severity": "error",
      "code": "code-invalid",
      "details": {
        "text": "The code \"W\" is not known and not legal in this context"
      },
      "diagnostics": "Acme.Interop.FHIRProcessors.Patient.processGender line 2453",
      "location": [
        "/f:Patient/f:gender"
      ],
      "expression": [
        "Patient.gender"
      ]
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('OperationOutcome');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
