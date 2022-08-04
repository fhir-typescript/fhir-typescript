import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "FamilyMemberHistory",
  "id": "father",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Father died of a heart attack aged 74</div>"
  },
  "identifier": [
    {
      "value": "12345"
    }
  ],
  "instantiatesUri": [
    "http://example.org/family-member-history-questionnaire"
  ],
  "status": "completed",
  "patient": {
    "reference": "Patient/example",
    "display": "Peter Patient"
  },
  "date": "2011-03-18",
  "relationship": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
        "code": "FTH",
        "display": "father"
      }
    ]
  },
  "sex": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/administrative-gender",
        "code": "male",
        "display": "Male"
      }
    ]
  },
  "condition": [
    {
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "315619001",
            "display": "Myocardial Infarction"
          }
        ],
        "text": "Heart Attack"
      },
      "contributedToDeath": true,
      "onsetAge": {
        "value": 74,
        "unit": "yr",
        "system": "http://unitsofmeasure.org",
        "code": "a"
      },
      "note": [
        {
          "text": "Was fishing at the time. At least he went doing someting he loved."
        }
      ]
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('FamilyMemberHistory');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
