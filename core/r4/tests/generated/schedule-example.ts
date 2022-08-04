import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Schedule",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Burgers UMC, South Wing, second floor Physiotherapy Schedule\n    </div>"
  },
  "identifier": [
    {
      "use": "usual",
      "system": "http://example.org/scheduleid",
      "value": "45"
    }
  ],
  "active": true,
  "serviceCategory": [
    {
      "coding": [
        {
          "code": "17",
          "display": "General Practice"
        }
      ]
    }
  ],
  "serviceType": [
    {
      "coding": [
        {
          "code": "57",
          "display": "Immunization"
        }
      ]
    }
  ],
  "specialty": [
    {
      "coding": [
        {
          "code": "408480009",
          "display": "Clinical immunology"
        }
      ]
    }
  ],
  "actor": [
    {
      "reference": "Location/1",
      "display": "Burgers UMC, South Wing, second floor"
    }
  ],
  "planningHorizon": {
    "start": "2013-12-25T09:15:00Z",
    "end": "2013-12-25T09:30:00Z"
  },
  "comment": "The slots attached to this schedule should be specialized to cover immunizations within the clinic"
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Schedule');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
