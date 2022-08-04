import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Subscription",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">[Put rendering here]</div>"
  },
  "status": "requested",
  "contact": [
    {
      "system": "phone",
      "value": "ext 4123"
    }
  ],
  "end": "2021-01-01T00:00:00Z",
  "reason": "Monitor new neonatal function",
  "criteria": "Observation?code=http://loinc.org|1975-2",
  "channel": {
    "type": "rest-hook",
    "endpoint": "https://biliwatch.com/customers/mount-auburn-miu/on-result",
    "payload": "application/fhir+json",
    "header": [
      "Authorization: Bearer secret-token-abc-123"
    ]
  }
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Subscription');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
