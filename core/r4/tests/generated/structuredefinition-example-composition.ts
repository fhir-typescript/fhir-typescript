import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "StructureDefinition",
  "id": "example-composition",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-composition</p><p><b>url</b>: <b>http://hl7.org/fhir/StructureDefinition/example-composition</b></p><p><b>name</b>: DocumentStructure</p><p><b>title</b>: Document Structure (For testing section templates)</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>date</b>: 05/11/2018 5:47:00 PM</p><p><b>kind</b>: complex-type</p><p><b>abstract</b>: false</p><p><b>type</b>: <a>Composition</a></p><p><b>baseDefinition</b>: <a>http://hl7.org/fhir/StructureDefinition/Composition</a></p><p><b>derivation</b>: constraint</p><h3>Differentials</h3><table><tr><td>-</td><td><b>Element</b></td></tr><tr><td>*</td><td>todo-bundle</td></tr></table></div>"
  },
  "url": "http://hl7.org/fhir/StructureDefinition/example-composition",
  "name": "DocumentStructure",
  "title": "Document Structure (For testing section templates)",
  "status": "active",
  "experimental": false,
  "date": "2018-11-05T17:47:00+11:00",
  "kind": "complex-type",
  "abstract": false,
  "type": "Composition",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Composition",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "Composition",
        "path": "Composition"
      },
      {
        "id": "Composition.section",
        "path": "Composition.section",
        "slicing": {
          "discriminator": [
            {
              "type": "pattern",
              "path": "code"
            }
          ],
          "description": "Slice by .section.code",
          "ordered": true,
          "rules": "closed"
        }
      },
      {
        "id": "Composition.section:procedure",
        "path": "Composition.section",
        "sliceName": "procedure",
        "min": 1,
        "type": [
          {
            "code": "BackboneElement",
            "profile": [
              "http://hl7.org/fhir/StructureDefinition/document-section-library"
            ],
            "_profile": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-profile-element",
                    "valueString": "Composition.section:procedure"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "Composition.section:medications",
        "path": "Composition.section",
        "sliceName": "medications",
        "min": 1,
        "type": [
          {
            "code": "BackboneElement",
            "profile": [
              "http://hl7.org/fhir/StructureDefinition/document-section-library"
            ],
            "_profile": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-profile-element",
                    "valueString": "Composition.section:medications"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "Composition.section:plan",
        "path": "Composition.section",
        "sliceName": "plan",
        "min": 0,
        "type": [
          {
            "code": "BackboneElement",
            "profile": [
              "http://hl7.org/fhir/StructureDefinition/document-section-library"
            ],
            "_profile": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-profile-element",
                    "valueString": "Composition.section:plan"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('StructureDefinition');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
