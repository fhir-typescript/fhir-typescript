import { fhir, valueSetCodes } from '../../src/index.js';

test('patientConstructorEmpty', () => {
    let v:fhir.Patient = new fhir.Patient();
    expect(v).toBeDefined();
    expect(v.resourceType).toBe('Patient');

    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('patientGenderConstructorLiteral', () => {
    let v:fhir.Patient = new fhir.Patient({gender: 'other'});
    expect(v).toBeDefined();
    expect(v.resourceType).toBe('Patient');
    expect(v.gender).toBeDefined();
    expect(v.gender?.value).toBe('other');

    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('patientGenderConstructorFhirCode', () => {
    let v:fhir.Patient = new fhir.Patient({gender: new fhir.FhirCode({value: 'other'})});
    expect(v).toBeDefined();
    expect(v.resourceType).toBe('Patient');
    expect(v.gender).toBeDefined();
    expect(v.gender?.value).toBe('other');

    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('patientGenderConstructorCodeFromPatient', () => {
    let v:fhir.Patient = new fhir.Patient({gender: fhir.Patient.genderRequiredCodes.Other});
    expect(v).toBeDefined();
    expect(v.resourceType).toBe('Patient');
    expect(v.gender).toBeDefined();
    expect(v.gender?.value).toBe('other');

    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('patientGenderConstructorCodeFromVs', () => {
    let v:fhir.Patient = new fhir.Patient({gender: valueSetCodes.AdministrativeGenderCodes.Other});
    expect(v).toBeDefined();
    expect(v.resourceType).toBe('Patient');
    expect(v.gender).toBeDefined();
    expect(v.gender?.value).toBe('other');

    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('patientGenderConstructorNumber', () => {
    let v:fhir.Patient = new fhir.Patient({gender: 1} as any);
    expect(v).toBeDefined();
    expect(v.resourceType).toBe('Patient');

    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(2);  // invalid primitive & invalid against required binding
});

test('patientActiveConstructorNumber', () => {
    let v:fhir.Patient = new fhir.Patient({active: 1} as any);
    expect(v).toBeDefined();
    expect(v.resourceType).toBe('Patient');

    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(1);  // invalid primitive
});

test('patientActiveConstructorString', () => {
    let v:fhir.Patient = new fhir.Patient({active: 'value'} as any);
    expect(v).toBeDefined();
    expect(v.resourceType).toBe('Patient');

    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(1);  // invalid primitive
});

