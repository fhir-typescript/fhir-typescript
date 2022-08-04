import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Slot",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t25 Dec 2013 9:15am - 9:30am: <b>Busy</b> Physiotherapy\n\t\t</div>"
  },
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
  "appointmentType": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
        "code": "WALKIN",
        "display": "A previously unscheduled walk-in visit"
      }
    ]
  },
  "schedule": {
    "reference": "Schedule/example"
  },
  "status": "free",
  "start": "2013-12-25T09:15:00Z",
  "end": "2013-12-25T09:30:00Z",
  "comment": "Assessments should be performed before requesting appointments in this slot."
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Slot');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
