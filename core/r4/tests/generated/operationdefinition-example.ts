import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "OperationDefinition",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>url</b>: <b>http://h7.org/fhir/OperationDefinition/example</b></p><p><b>version</b>: B</p><p><b>name</b>: Populate Questionnaire</p><p><b>status</b>: draft</p><p><b>kind</b>: operation</p><p><b>date</b>: 04/08/2015</p><p><b>publisher</b>: Acme Healthcare Services</p><p><b>contact</b>: </p><p><b>description</b>: Limited implementation of the Populate Questionnaire implementation</p><p><b>useContext</b>: </p><p><b>jurisdiction</b>: United Kingdom of Great Britain and Northern Ireland (the) <span>(Details : {urn:iso:std:iso:3166 code 'GB' = 'United Kingdom of Great Britain and Northern Ireland', given as 'United Kingdom of Great Britain and Northern Ireland (the)'})</span></p><p><b>code</b>: populate</p><p><b>comment</b>: Only implemented for Labs and Medications so far</p><p><b>base</b>: <a>OperationDefinition/Questionnaire-populate</a></p><p><b>resource</b>: Questionnaire</p><p><b>system</b>: false</p><p><b>type</b>: false</p><p><b>instance</b>: true</p><blockquote><p><b>parameter</b></p><p><b>name</b>: subject</p><p><b>use</b>: in</p><p><b>min</b>: 1</p><p><b>max</b>: 1</p><p><b>documentation</b>: The resource that is to be the *QuestionnaireResponse.subject*. The [[[QuestionnaireResponse]]]      instance will reference the provided subject.  In addition, if the *local* parameter is      set to true, server information about the specified subject will be used to populate the      instance.</p><p><b>type</b>: Reference</p></blockquote><blockquote><p><b>parameter</b></p><p><b>name</b>: local</p><p><b>use</b>: in</p><p><b>min</b>: 0</p><p><b>max</b>: 1</p><p><b>documentation</b>: If the *local* parameter is set to true, server information about the specified subject will be used to populate the instance.</p><p><b>type</b>: Reference</p></blockquote><blockquote><p><b>parameter</b></p><p><b>name</b>: return</p><p><b>use</b>: out</p><p><b>min</b>: 1</p><p><b>max</b>: 1</p><p><b>documentation</b>: The partially (or fully)-populated set of answers for the specified Questionnaire</p><p><b>type</b>: QuestionnaireResponse</p></blockquote><blockquote><p><b>overload</b></p><p><b>parameterName</b>: subject, local</p></blockquote><blockquote><p><b>overload</b></p><p><b>parameterName</b>: subject</p><p><b>comment</b>: local defaults to false when not passed as a parameter</p></blockquote></div>"
  },
  "url": "http://h7.org/fhir/OperationDefinition/example",
  "version": "B",
  "name": "Populate Questionnaire",
  "status": "draft",
  "kind": "operation",
  "date": "2015-08-04",
  "publisher": "Acme Healthcare Services",
  "contact": [
    {
      "name": "System Administrator",
      "telecom": [
        {
          "system": "email",
          "value": "beep@coyote.acme.com"
        }
      ]
    }
  ],
  "description": "Limited implementation of the Populate Questionnaire implementation",
  "useContext": [
    {
      "code": {
        "system": "http://build.fhir.org/codesystem-usage-context-type",
        "code": "venue",
        "display": "Clinical Venue"
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "IMP",
            "display": "inpatient encounter"
          }
        ]
      }
    }
  ],
  "jurisdiction": [
    {
      "coding": [
        {
          "system": "urn:iso:std:iso:3166",
          "code": "GB",
          "display": "United Kingdom of Great Britain and Northern Ireland (the)"
        }
      ]
    }
  ],
  "code": "populate",
  "comment": "Only implemented for Labs and Medications so far",
  "base": "OperationDefinition/Questionnaire-populate",
  "resource": [
    "Questionnaire"
  ],
  "system": false,
  "type": false,
  "instance": true,
  "parameter": [
    {
      "name": "subject",
      "use": "in",
      "min": 1,
      "max": "1",
      "documentation": "The resource that is to be the *QuestionnaireResponse.subject*. The [[[QuestionnaireResponse]]]      instance will reference the provided subject.  In addition, if the *local* parameter is      set to true, server information about the specified subject will be used to populate the      instance.",
      "type": "Reference"
    },
    {
      "name": "local",
      "use": "in",
      "min": 0,
      "max": "1",
      "documentation": "If the *local* parameter is set to true, server information about the specified subject will be used to populate the instance.",
      "type": "Reference"
    },
    {
      "name": "return",
      "use": "out",
      "min": 1,
      "max": "1",
      "documentation": "The partially (or fully)-populated set of answers for the specified Questionnaire",
      "type": "QuestionnaireResponse"
    }
  ],
  "overload": [
    {
      "parameterName": [
        "subject",
        "local"
      ]
    },
    {
      "parameterName": [
        "subject"
      ],
      "comment": "local defaults to false when not passed as a parameter"
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('OperationDefinition');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
