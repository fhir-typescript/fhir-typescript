import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Immunization",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234</p><p><b>status</b>: completed</p><p><b>vaccineCode</b>: Fluvax (Influenza) <span>(Details : {urn:oid:1.2.36.1.2001.1005.17 code 'FLUVAX' = 'Fluvax)</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>occurrence</b>: 10/01/2013</p><p><b>primarySource</b>: true</p><p><b>location</b>: <a>Location/1</a></p><p><b>manufacturer</b>: <a>Organization/hl7</a></p><p><b>lotNumber</b>: AAJN11K</p><p><b>expirationDate</b>: 15/02/2015</p><p><b>site</b>: left arm <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActSite code 'LA' = 'left arm', given as 'left arm'})</span></p><p><b>route</b>: Injection, intramuscular <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'IM' = 'Injection, intramuscular', given as 'Injection, intramuscular'})</span></p><p><b>doseQuantity</b>: 5 mg<span> (Details: UCUM code mg = 'mg')</span></p><blockquote><p><b>performer</b></p><p><b>function</b>: Ordering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'OP' = 'Ordering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><blockquote><p><b>performer</b></p><p><b>function</b>: Administering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'AP' = 'Administering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><p><b>note</b>: Notes on adminstration of vaccine</p><p><b>reasonCode</b>: Procedure to meet occupational requirement <span>(Details : {SNOMED CT code '429060002' = 'Procedure to meet occupational requirement)</span></p><p><b>isSubpotent</b>: true</p><h3>Educations</h3><table><tr><td>-</td><td><b>DocumentType</b></td><td><b>PublicationDate</b></td><td><b>PresentationDate</b></td></tr><tr><td>*</td><td>253088698300010311120702</td><td>02/07/2012</td><td>10/01/2013</td></tr></table><p><b>programEligibility</b>: Not Eligible <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-program-eligibility code 'ineligible' = 'Not Eligible)</span></p><p><b>fundingSource</b>: Private <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-funding-source code 'private' = 'Private)</span></p></div>"
  },
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
    }
  ],
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "urn:oid:1.2.36.1.2001.1005.17",
        "code": "FLUVAX"
      }
    ],
    "text": "Fluvax (Influenza)"
  },
  "patient": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/example"
  },
  "occurrenceDateTime": "2013-01-10",
  "primarySource": true,
  "location": {
    "reference": "Location/1"
  },
  "manufacturer": {
    "reference": "Organization/hl7"
  },
  "lotNumber": "AAJN11K",
  "expirationDate": "2015-02-15",
  "site": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
        "code": "LA",
        "display": "left arm"
      }
    ]
  },
  "route": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
        "code": "IM",
        "display": "Injection, intramuscular"
      }
    ]
  },
  "doseQuantity": {
    "value": 5,
    "system": "http://unitsofmeasure.org",
    "code": "mg"
  },
  "performer": [
    {
      "function": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
            "code": "OP"
          }
        ]
      },
      "actor": {
        "reference": "Practitioner/example"
      }
    },
    {
      "function": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
            "code": "AP"
          }
        ]
      },
      "actor": {
        "reference": "Practitioner/example"
      }
    }
  ],
  "note": [
    {
      "text": "Notes on adminstration of vaccine"
    }
  ],
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "429060002"
        }
      ]
    }
  ],
  "isSubpotent": true,
  "education": [
    {
      "documentType": "253088698300010311120702",
      "publicationDate": "2012-07-02",
      "presentationDate": "2013-01-10"
    }
  ],
  "programEligibility": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
          "code": "ineligible"
        }
      ]
    }
  ],
  "fundingSource": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
        "code": "private"
      }
    ]
  }
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Immunization');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
