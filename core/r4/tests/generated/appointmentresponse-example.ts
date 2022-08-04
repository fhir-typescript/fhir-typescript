import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "AppointmentResponse",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Accept Brian MRI results discussion</div>"
  },
  "appointment": {
    "reference": "Appointment/example",
    "display": "Brian MRI results discussion"
  },
  "actor": {
    "reference": "Patient/example",
    "display": "Peter James Chalmers"
  },
  "participantStatus": "accepted"
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('AppointmentResponse');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
