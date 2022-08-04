import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "DeviceUseStatement",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 51ebb7a9-4e3a-4360-9a05-0cc2d869086f</p><p><b>status</b>: active</p><p><b>subject</b>: <a>Patient/example</a></p><p><b>device</b>: <a>Device/example</a></p><p><b>reasonReference</b>: <a>Appendectomy (surgery)</a></p></div>"
  },
  "identifier": [
    {
      "system": "http:goodhealth.org/identifiers",
      "value": "51ebb7a9-4e3a-4360-9a05-0cc2d869086f"
    }
  ],
  "status": "active",
  "subject": {
    "reference": "Patient/example"
  },
  "device": {
    "reference": "Device/example"
  },
  "reasonReference": [
    {
      "reference": "Procedure/example",
      "display": "Appendectomy (surgery)"
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('DeviceUseStatement');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
