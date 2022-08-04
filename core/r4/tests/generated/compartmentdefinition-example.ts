import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "CompartmentDefinition",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>url</b>: <b>http://hl7.org/fhir/CompartmentDefinition/example</b></p><p><b>name</b>: EXAMPLE</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 24/02/2017</p><p><b>publisher</b>: Health Level Seven International (FHIR Infrastructure)</p><p><b>contact</b>: </p><p><b>description</b>: The set of resources associated with a particular Device (example with Communication and CommunicationRequest resourses only).</p><p><b>useContext</b>: </p><p><b>purpose</b>: Provides an example of a FHIR compartment definition based on the Device resource type.</p><p><b>code</b>: Device</p><p><b>search</b>: true</p><blockquote><p><b>resource</b></p><p><b>code</b>: Communication</p><p><b>param</b>: sender, recipient</p><p><b>documentation</b>: The device used as the message sender and recipient</p></blockquote><blockquote><p><b>resource</b></p><p><b>code</b>: CommunicationRequest</p><p><b>param</b>: sender, recipient</p><p><b>documentation</b>: The device used as the message sender and recipient</p></blockquote></div>"
  },
  "url": "http://hl7.org/fhir/CompartmentDefinition/example",
  "name": "EXAMPLE",
  "status": "draft",
  "experimental": true,
  "date": "2017-02-24",
  "publisher": "Health Level Seven International (FHIR Infrastructure)",
  "contact": [
    {
      "name": "[string]",
      "telecom": [
        {
          "system": "url",
          "value": "http://hl7.org/fhir"
        }
      ]
    }
  ],
  "description": "The set of resources associated with a particular Device (example with Communication and CommunicationRequest resourses only).",
  "useContext": [
    {
      "code": {
        "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
        "code": "focus"
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://hl7.org/fhir/resource-types",
            "code": "Device"
          }
        ]
      }
    }
  ],
  "purpose": "Provides an example of a FHIR compartment definition based on the Device resource type.",
  "code": "Device",
  "search": true,
  "resource": [
    {
      "code": "Communication",
      "param": [
        "sender",
        "recipient"
      ],
      "documentation": "The device used as the message sender and recipient"
    },
    {
      "code": "CommunicationRequest",
      "param": [
        "sender",
        "recipient"
      ],
      "documentation": "The device used as the message sender and recipient"
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('CompartmentDefinition');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
