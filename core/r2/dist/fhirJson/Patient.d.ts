import * as fhir from '../fhirJson.js';
/**
 * Need to track people you can contact about the patient.
 */
export interface PatientContact extends fhir.BackboneElement {
    /**
     * Used to determine which contact person is the most relevant to approach, depending on circumstances.
     */
    relationship?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Contact persons need to be identified by name, but it is uncommon to need details about multiple other names for that contact person.
     */
    name?: fhir.HumanName | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * Need to keep track where the contact person can be contacted per postal mail or visited.
     */
    address?: fhir.Address | undefined;
    /**
     * Needed to address the person correctly.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: Patient.contact.gender
     */
    _gender?: fhir.FhirElement;
    /**
     * For guardians or business related contacts, the organization is relevant.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The period during which this contact person or organization is valid to be contacted relating to this patient.
     */
    period?: fhir.Period | undefined;
}
/**
 * Many clinical systems are extended to care for animal patients as well as human.
 */
export interface PatientAnimal extends fhir.BackboneElement {
    /**
     * Need to know what kind of animal.
     */
    species: fhir.CodeableConcept | null;
    /**
     * May need to know the specific kind within the species.
     */
    breed?: fhir.CodeableConcept | undefined;
    /**
     * Gender status can affect housing and animal behavior.
     */
    genderStatus?: fhir.CodeableConcept | undefined;
}
/**
 * If a patient does not speak the local language, interpreters may be required, so languages spoken and proficiency is an important things to keep track of both for patient and other persons of interest.
 */
export interface PatientCommunication extends fhir.BackboneElement {
    /**
     * Most systems in multilingual countries will want to convey language. Not all systems actually need the regional dialect.
     */
    language: fhir.CodeableConcept | null;
    /**
     * People that master multiple languages up to certain level may prefer one or more, i.e. feel more confident in communicating in a particular language making other languages sort of a fall back method.
     */
    preferred?: boolean | undefined;
    /**
     * Extended properties for primitive element: Patient.communication.preferred
     */
    _preferred?: fhir.FhirElement;
}
/**
 * There are multiple usecases:   * Duplicate patient records due to the clerical errors associated with the difficulties of identifying humans consistently, and * Distribution of patient information across multiple servers.
 */
export interface PatientLink extends fhir.BackboneElement {
    /**
     * The other patient resource that the link refers to.
     */
    other: fhir.Reference | null;
    /**
     * The type of link between this patient resource and another patient resource.
     */
    type: 'refer' | 'replace' | 'seealso' | null;
    /**
     * Extended properties for primitive element: Patient.link.type
     */
    _type?: fhir.FhirElement;
}
/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
export interface Patient extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Patient" | null;
    /**
     * Patients are almost always assigned specific numerical identifiers.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Need to be able to mark a patient record as not to be used because it was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Patient.active
     */
    _active?: fhir.FhirElement;
    /**
     * Need to be able to track the patient by multiple names. Examples are your official name and a partner name.
     */
    name?: (fhir.HumanName | null)[] | undefined;
    /**
     * People have (primary) ways to contact them in some way such as phone, email.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * Needed for identification of the individual, in combination with (at least) name and birth date. Gender of individual drives many clinical processes.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: Patient.gender
     */
    _gender?: fhir.FhirElement;
    /**
     * Age of the individual drives many clinical processes.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: Patient.birthDate
     */
    _birthDate?: fhir.FhirElement;
    /**
     * The fact that a patient is deceased influences the clinical process. Also, in human communication and relation management it is necessary to know whether the person is alive.
     */
    deceasedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Patient.deceased[x]
     */
    _deceasedBoolean?: fhir.FhirElement;
    /**
     * The fact that a patient is deceased influences the clinical process. Also, in human communication and relation management it is necessary to know whether the person is alive.
     */
    deceasedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Patient.deceased[x]
     */
    _deceasedDateTime?: fhir.FhirElement;
    /**
     * May need to keep track of patient addresses for contacting, billing or reporting requirements and also to help with identification.
     */
    address?: (fhir.Address | null)[] | undefined;
    /**
     * Most, if not all systems capture it.
     */
    maritalStatus?: fhir.CodeableConcept | undefined;
    /**
     * For disambiguation of multiple-birth children, especially relevant where the care provider doesn't meet the patient, such as labs.
     */
    multipleBirthBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Patient.multipleBirth[x]
     */
    _multipleBirthBoolean?: fhir.FhirElement;
    /**
     * For disambiguation of multiple-birth children, especially relevant where the care provider doesn't meet the patient, such as labs.
     */
    multipleBirthInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Patient.multipleBirth[x]
     */
    _multipleBirthInteger?: fhir.FhirElement;
    /**
     * Many EHR systems have the capability to capture an image of the patient. Fits with newer social media usage too.
     */
    photo?: (fhir.Attachment | null)[] | undefined;
    /**
     * Need to track people you can contact about the patient.
     */
    contact?: (fhir.PatientContact | null)[] | undefined;
    /**
     * Many clinical systems are extended to care for animal patients as well as human.
     */
    animal?: fhir.PatientAnimal | undefined;
    /**
     * If a patient does not speak the local language, interpreters may be required, so languages spoken and proficiency is an important things to keep track of both for patient and other persons of interest.
     */
    communication?: (fhir.PatientCommunication | null)[] | undefined;
    /**
     * Patient's nominated care provider.
     */
    careProvider?: (fhir.Reference | null)[] | undefined;
    /**
     * Need to know who recognizes this patient record, manages and updates it.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * There are multiple usecases:   * Duplicate patient records due to the clerical errors associated with the difficulties of identifying humans consistently, and * Distribution of patient information across multiple servers.
     */
    link?: (fhir.PatientLink | null)[] | undefined;
}
//# sourceMappingURL=Patient.d.ts.map