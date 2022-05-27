import { fhir } from '../../src/index.js';

test('integerWithValue', () => {
    let v:fhir.FhirInteger = new fhir.FhirInteger({value: 1})
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(1);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(0);
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('integerWithZero', () => {
    let v:fhir.FhirInteger = new fhir.FhirInteger({value: 0})
    expect(v.value).not.toBeNull();
    expect(v.value).not.toBeNaN();
    expect(v.valueOf()).toBe(0);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(0);
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('integerWithNegative', () => {
    let v:fhir.FhirInteger = new fhir.FhirInteger({value: -1})
    expect(v.value).not.toBeNull();
    expect(v.value).not.toBeNaN();
    expect(v.valueOf()).toBe(-1);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(0);
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('integerWithDecimal', () => {
    let v:fhir.FhirInteger = new fhir.FhirInteger({value: 1.5})
    expect(v.value).not.toBeNull();
    expect(v.value).not.toBeNaN();
    expect(v.valueOf()).toBe(1.5);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(0);
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(1);
});

test('integerWithExtensionConstructor', () => {
    let v:fhir.FhirInteger = new fhir.FhirInteger({extension: [new fhir.Extension({url:'url', valueString:'123'})]});
    expect(v.value).toBeUndefined();
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('integerWithAllProps', () => {
    let v:fhir.FhirInteger = new fhir.FhirInteger({value: 1, id: 'id', extension: [new fhir.Extension({url:'url', valueString:'123'})]});
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

test('integerAddExtended', () => {
    let v:fhir.FhirInteger = new fhir.FhirInteger({value: 2});
    v.addExtendedProperties({id: 'id', extension: [{url:'url', valueString:'123'}]});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(2);
    expect(v.id).toBeDefined();
    expect(v.id?.valueOf()).toBe('id');
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('integerAddExtension', () => {
    let v:fhir.FhirInteger = new fhir.FhirInteger({value: 2});
    v.addExtension({url:'url', valueString:'123'});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(2);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    let issues:fhir.FtsIssue[] = v.doModelValidation();
    expect(issues.length).toBe(0);
});

test('integerTwoExtensions', () => {
    let v:fhir.FhirInteger = new fhir.FhirInteger({value: 2});
    v.addExtension({url:'url', valueString:'123'});
    v.addExtension({url:'url2', valueString:'1234'});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(2);
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

