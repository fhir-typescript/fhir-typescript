import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Endpoint",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\tHealth Intersections CarePlan Hub<br/>\n\t\t\tCarePlans can be uploaded to/from this loccation\n\t\t</div>"
  },
  "identifier": [
    {
      "system": "http://example.org/enpoint-identifier",
      "value": "epcp12"
    }
  ],
  "status": "active",
  "connectionType": {
    "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
    "code": "hl7-fhir-rest"
  },
  "name": "Health Intersections CarePlan Hub",
  "managingOrganization": {
    "reference": "Organization/hl7"
  },
  "contact": [
    {
      "system": "email",
      "value": "endpointmanager@example.org",
      "use": "work"
    }
  ],
  "period": {
    "start": "2014-09-01"
  },
  "payloadType": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/resource-types",
          "code": "CarePlan"
        }
      ]
    }
  ],
  "payloadMimeType": [
    "application/fhir+xml"
  ],
  "address": "http://fhir3.healthintersections.com.au/open/CarePlan",
  "header": [
    "bearer-code BASGS534s4"
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Endpoint');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
