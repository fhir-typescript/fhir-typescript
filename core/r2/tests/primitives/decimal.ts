import { fhir } from '../../src/index.js';

test('decimalWithValue', () => {
    let v:fhir.FhirDecimal = new fhir.FhirDecimal({value: 1.5})
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(1.5);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(0);
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('decimalWithZero', () => {
    let v:fhir.FhirDecimal = new fhir.FhirDecimal({value: 0})
    expect(v.value).not.toBeNull();
    expect(v.value).not.toBeNaN();
    expect(v.valueOf()).toBe(0);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(0);
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('decimalWithExtensionConstructor', () => {
    let v:fhir.FhirDecimal = new fhir.FhirDecimal({extension: [new fhir.Extension({url:'url', valueString:'123'})]});
    expect(v.value).toBeUndefined();
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('decimalWithAllProps', () => {
    let v:fhir.FhirDecimal = new fhir.FhirDecimal({value: 1, id: 'id', extension: [new fhir.Extension({url:'url', valueString:'123'})]});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(1);
    expect(v.id).toBeDefined();
    expect(v.id?.valueOf()).toBe('id');
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('decimalAddExtended', () => {
    let v:fhir.FhirDecimal = new fhir.FhirDecimal({value: 1.2});
    v.addExtendedProperties({id: 'id', extension: [{url:'url', valueString:'123'}]});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(1.2);
    expect(v.id).toBeDefined();
    expect(v.id?.valueOf()).toBe('id');
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('decimalAddExtension', () => {
    let v:fhir.FhirDecimal = new fhir.FhirDecimal({value: 1.2});
    v.addExtension({url:'url', valueString:'123'});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(1.2);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('decimalTwoExtensions', () => {
    let v:fhir.FhirDecimal = new fhir.FhirDecimal({value: 1.2});
    v.addExtension({url:'url', valueString:'123'});
    v.addExtension({url:'url2', valueString:'1234'});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(1.2);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(2);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    expect(v.extension[1].url?.valueOf()).toBe('url2');
    expect(v.extension[1].value?.valueOf()).toBe('1234');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

