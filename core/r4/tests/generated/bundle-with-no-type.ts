import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Bundle",
  "entry": [
    {
      "fullUrl": "http://localhost:5555/phr/baseDstu3/Person/PERSON1",
      "resource": {
        "resourceType": "Person",
        "id": "PERSON1",
			"text": {
				"status": "generated",
				"div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> </div>"
			},
			"meta": {
          "versionId": "1",
          "lastUpdated": "2017-08-17T16:19:40.109+03:00"
        },
        "identifier": [
          {
            "value": "081181-9984"
          }
        ],
        "name": [
          {
            "text": "Anna Testi",
            "family": "Testi",
            "given": [
              "Anna"
            ]
          },
          {
            "family": "asdfas"
          }
        ],
        "telecom": [
          {
            "use": "home"
          },
          {
            "system": "phone",
            "value": "(044) 1234567",
            "use": "work"
          }
        ],
        "gender": "female",
        "birthDate": "1981-11-08",
        "address": [
          {
            "line": [
              "Osuuspankkitie 2"
            ],
            "city": "Helsinki",
            "postalCode": "00120",
            "country": "Suomi"
          },
          {
            "city": "Blo-49847020"
          }
        ],
        "active": true,
        "link": [
          {
            "target": {
              "reference": "Patient/PATIENT1",
              "display": "Anna Testi"
            }
          }
        ]
      },
      "request": {
        "method": "PUT",
        "url": "Person/PERSON1",
        "ifMatch": "1"
      }
    }
  ]
}

;
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Bundle');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
});
