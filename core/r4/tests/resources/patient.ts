import { fhir } from '../../src/index.js';

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
