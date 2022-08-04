import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "MessageDefinition",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Message definition base example</div>"
  },
  "url": "http://hl7.org/fhir/MessageDefinition/example",
  "name": "EXAMPLE",
  "title": "Message definition base example",
  "status": "draft",
  "experimental": true,
  "date": "2016-11-09",
  "publisher": "Health Level Seven, Int'l",
  "contact": [
    {
      "telecom": [
        {
          "system": "url",
          "value": "http://hl7.org"
        }
      ]
    }
  ],
  "purpose": "Defines a base example for other MessageDefinition instances.",
  "eventCoding": {
    "system": "http://example.org/fhir/message-events",
    "code": "admin-notify"
  },
  "category": "notification"
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('MessageDefinition');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
