import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "Observation",
  "id": "decimal",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: decimal</p><p><b>status</b>: final</p><p><b>code</b>: Decimal Testing Observation <span>(Details )</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1.0 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1.00 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1.0 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1E-22 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1000000000000000000 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1.000000000000000000E-245 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: -1.000000000000000000E+245 g</p></blockquote></div>"
  },
  "status": "final",
  "code": {
    "text": "Decimal Testing Observation"
  },
  "component": [
    {
      "code": {
        "text": "Component"
      },
      "valueQuantity": {
        "value": 1.0,
        "unit": "g"
      }
    },
    {
      "code": {
        "text": "Component"
      },
      "valueQuantity": {
        "value": 1.00,
        "unit": "g"
      }
    },
    {
      "code": {
        "text": "Component"
      },
      "valueQuantity": {
        "value": 1.0,
        "unit": "g"
      }
    },
    {
      "code": {
        "text": "Component"
      },
      "valueQuantity": {
        "value": 1E-22,
        "unit": "g"
      }
    },
    {
      "code": {
        "text": "Component"
      },
      "valueQuantity": {
        "value": 1000000000000000000,
        "unit": "g"
      }
    },
    {
      "code": {
        "text": "Component"
      },
      "valueQuantity": {
        "value": 1.000000000000000000E-245,
        "unit": "g"
      }
    },
    {
      "code": {
        "text": "Component"
      },
      "valueQuantity": {
        "value": -1.000000000000000000E+245,
        "unit": "g"
      }
    }
  ]
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('Observation');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
