import { fhir } from '../../src/index.js';

test('booleanWithValue', () => {
    let v:fhir.FhirBoolean = new fhir.FhirBoolean({value: true})
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(true);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(0);
});

test('booleanWithExtensionConstructor', () => {
    let v:fhir.FhirBoolean = new fhir.FhirBoolean({extension: [new fhir.Extension({url:'url', valueString:'123'})]});
    expect(v.value).toBeUndefined();
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
});

test('booleanWithAllProps', () => {
    let v:fhir.FhirBoolean = new fhir.FhirBoolean({value: false, id: 'id', extension: [new fhir.Extension({url:'url', valueString:'123'})]});
    expect(v.value).not.toBeNull();
    expect(v.valueOf()).toBe(false);
    expect(v.id).toBeDefined();
    expect(v.id?.valueOf()).toBe('id');
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
});

test('booleanAddExtended', () => {
    let v:fhir.FhirBoolean = new fhir.FhirBoolean({value: true});
    v.addExtendedProperties({id: 'id', extension: [{url:'url', valueString:'123'}]});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(true);
    expect(v.id).toBeDefined();
    expect(v.id?.valueOf()).toBe('id');
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
});

test('booleanAddExtension', () => {
    let v:fhir.FhirBoolean = new fhir.FhirBoolean({value: false});
    v.addExtension({url:'url', valueString:'123'});
    expect(v.value).not.toBeNull();
    expect(v.valueOf()).toBe(false);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(1);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
});

test('booleanTwoExtensions', () => {
    let v:fhir.FhirBoolean = new fhir.FhirBoolean({value: true});
    v.addExtension({url:'url', valueString:'123'});
    v.addExtension({url:'url2', valueString:'1234'});
    expect(v.value).toBeDefined();
    expect(v.valueOf()).toBe(true);
    expect(v.id).toBeUndefined();
    expect(v.extension).toBeDefined();
    expect(v.extension.length).toBe(2);
    expect(v.extension[0].url?.valueOf()).toBe('url');
    expect(v.extension[0].value?.valueOf()).toBe('123');
    expect(v.extension[1].url?.valueOf()).toBe('url2');
    expect(v.extension[1].value?.valueOf()).toBe('1234');
});

