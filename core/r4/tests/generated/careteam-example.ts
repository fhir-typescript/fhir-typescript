import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "CareTeam",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Care Team</div>"
  },
  "contained": [
    {
      "resourceType": "Practitioner",
      "id": "pr1",
      "name": [
        {
          "family": "Dietician",
          "given": [
            "Dorothy"
          ]
        }
      ]
    }
  ],
  "identifier": [
    {
      "value": "12345"
    }
  ],
  "status": "active",
  "category": [
    {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "LA27976-2",
          "display": "Encounter-focused care team"
        }
      ]
    }
  ],
  "name": "Peter James Charlmers Care Plan for Inpatient Encounter",
  "subject": {
    "reference": "Patient/example",
    "display": "Peter James Chalmers"
  },
  "encounter": {
    "reference": "Encounter/example"
  },
  "period": {
    "end": "2013-01-01"
  },
  "participant": [
    {
      "role": [
        {
          "text": "responsiblePerson"
        }
      ],
      "member": {
        "reference": "Patient/example",
        "display": "Peter James Chalmers"
      }
    },
    {
      "role": [
        {
          "text": "adviser"
        }
      ],
      "member": {
        "reference": "#pr1",
        "display": "Dorothy Dietition"
      },
      "onBehalfOf": {
        "reference": "Organization/f001"
      },
      "period": {
        "end": "2013-01-01"
      }
    }
  ],
  "managingOrganization": [
    {
      "reference": "Organization/f001"
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('CareTeam');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
