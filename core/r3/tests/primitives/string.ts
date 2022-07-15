import { fhir } from '../../src/index.js';

test('stringWithValue', () => {
    let v:fhir.FhirString = new fhir.FhirString({value: 'abc'})
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe('abc');
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(0);
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('stringWithEmptyValue', () => {
    let v:fhir.FhirString = new fhir.FhirString({value: ''})
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe('');
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(0);
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(1);
});

test('stringWithExtensionConstructor', () => {
    let v:fhir.FhirString = new fhir.FhirString({extension: [new fhir.Extension({url:'url', valueString:'123'})]});
    expect(v.value).toBeUndefined();
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('stringWithAllProps', () => {
    let v:fhir.FhirString = new fhir.FhirString({value: 'abc', id: 'id', extension: [new fhir.Extension({url:'url', valueString:'123'})]});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe('abc');
    expect(v.id).toBeDefined();
    expect(v.id?.valueOf()).toBe('id');
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('stringAddExtended', () => {
    let v:fhir.FhirString = new fhir.FhirString({value: 'abc'});
    v.addExtendedProperties({id: 'id', extension: [{url:'url', valueString:'123'}]});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe('abc');
    expect(v.id).toBeDefined();
    expect(v.id?.valueOf()).toBe('id');
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('stringAddExtension', () => {
    let v:fhir.FhirString = new fhir.FhirString({value: 'abc'});
    v.addExtension({url:'url', valueString:'123'});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe('abc');
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('stringTwoExtensions', () => {
    let v:fhir.FhirString = new fhir.FhirString({value: 'abc'});
    v.addExtension({url:'url', valueString:'123'});
    v.addExtension({url:'url2', valueString:'1234'});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe('abc');
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

