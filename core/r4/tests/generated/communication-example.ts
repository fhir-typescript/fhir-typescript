import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Communication",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Patient has very high serum potassium</div>"
  },
  "identifier": [
    {
      "type": {
        "text": "Paging System"
      },
      "system": "urn:oid:1.3.4.5.6.7",
      "value": "2345678901"
    }
  ],
  "instantiatesUri": [
    "http://example.org/hyperkalemia"
  ],
  "partOf": [
    {
      "display": "Serum Potassium Observation"
    }
  ],
  "status": "completed",
  "category": [
    {
      "coding": [
        {
          "system": "http://acme.org/messagetypes",
          "code": "Alert"
        }
      ],
      "text": "Alert"
    }
  ],
  "medium": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
          "code": "WRITTEN",
          "display": "written"
        }
      ],
      "text": "written"
    }
  ],
  "subject": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/example"
  },
  "sent": "2014-12-12T18:01:10-08:00",
  "received": "2014-12-12T18:01:11-08:00",
  "recipient": [
    {
      "reference": "Practitioner/example"
    }
  ],
  "sender": {
    "reference": "Device/f001"
  },
  "payload": [
    {
      "contentString": "Patient 1 has a very high serum potassium value (7.2 mmol/L on 2014-Dec-12 at 5:55 pm)"
    },
    {
      "contentReference": {
        "display": "Serum Potassium Observation"
      }
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Communication');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
