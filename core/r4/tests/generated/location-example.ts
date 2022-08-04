import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Location",
  "id": "1",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Burgers UMC, South Wing, second floor</div>"
  },
  "identifier": [
    {
      "value": "B1-S.F2"
    }
  ],
  "status": "active",
  "name": "South Wing, second floor",
  "alias": [
    "BU MC, SW, F2",
    "Burgers University Medical Center, South Wing, second floor"
  ],
  "description": "Second floor of the Old South Wing, formerly in use by Psychiatry",
  "mode": "instance",
  "telecom": [
    {
      "system": "phone",
      "value": "2328",
      "use": "work"
    },
    {
      "system": "fax",
      "value": "2329",
      "use": "work"
    },
    {
      "system": "email",
      "value": "second wing admissions"
    },
    {
      "system": "url",
      "value": "http://sampleorg.com/southwing",
      "use": "work"
    }
  ],
  "address": {
    "use": "work",
    "line": [
      "Galapagosweg 91, Building A"
    ],
    "city": "Den Burg",
    "postalCode": "9105 PZ",
    "country": "NLD"
  },
  "physicalType": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
        "code": "wi",
        "display": "Wing"
      }
    ]
  },
  "position": {
    "longitude": -83.6945691,
    "latitude": 42.25475478,
    "altitude": 0
  },
  "managingOrganization": {
    "reference": "Organization/f001"
  },
  "endpoint": [
    {
      "reference": "Endpoint/example"
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Location');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
