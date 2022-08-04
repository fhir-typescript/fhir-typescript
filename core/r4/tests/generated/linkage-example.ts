import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Linkage",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p><b>Source:</b> Condition/example - <i>Severe burn of left ear (Date: 24-May 2012)</i></p>\n      <p><b>Alternate:</b> Condition/condition-example - <i>Severe burn of left ear (Date: 24-May 2012)</i></p>\n    </div>"
  },
  "author": {
    "reference": "Practitioner/f201"
  },
  "item": [
    {
      "type": "source",
      "resource": {
        "reference": "Condition/example",
        "display": "Severe burn of left ear (Date: 24-May 2012)"
      }
    },
    {
      "type": "alternate",
      "resource": {
        "reference": "Condition/condition-example",
        "display": "Severe burn of left ear (Date: 24-May 2012)"
      }
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Linkage');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
