import { fhir } from '../../src/index.js';

const src = {
  "resourceType": "PaymentNotice",
  "id": "77654",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">A human-readable rendering of the PaymentNotice</div>"
  },
  "identifier": [
    {
      "system": "http://benefitsinc.com/paymentnotice",
      "value": "776543"
    }
  ],
  "status": "active",
  "request": {
    "reference": "http://benefitsinc.com/fhir/claim/12345"
  },
  "response": {
    "reference": "http://benefitsinc.com/fhir/claimresponse/CR12345"
  },
  "created": "2014-08-16",
  "provider": {
    "reference": "Organization/1"
  },
  "payment": {
    "reference": "PaymentReconciliation/ER2500"
  },
  "paymentDate": "2014-08-15",
  "payee": {
    "reference": "Organization/1"
  },
  "recipient": {
    "identifier": {
      "system": "http://regulators.gov",
      "value": "AB123"
    }
  },
  "amount": {
    "value": 12500.00,
    "currency": "USD"
  },
  "paymentStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/paymentstatus",
        "code": "paid"
      }
    ]
  }
};
test('generated', () => {
  let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});
  expect(v).toBeDefined();
  if (v === null) { return; }
  expect(v.resourceType).toBe('PaymentNotice');
  let s:any = JSON.stringify(v);
  let r:any = JSON.parse(s);
  expect(r).toEqual(src);
  let issues:fhir.FtsIssue[] = v.doModelValidation();
  if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }
  expect(issues.length).toBe(0);
});
