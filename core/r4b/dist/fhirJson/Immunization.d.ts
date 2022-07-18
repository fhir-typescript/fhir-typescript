import * as fhir from '../fhirJson.js';
/**
 * Indicates who performed the immunization event.
 */
export interface ImmunizationPerformer extends fhir.BackboneElement {
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * When the individual practitioner who performed the action is known, it is best to send.
     */
    actor: fhir.Reference | null;
}
/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export interface ImmunizationEducation extends fhir.BackboneElement {
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.documentType
     */
    _documentType?: fhir.FhirElement;
    /**
     * Reference pointer to the educational material given to the patient if the information was on line.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.reference
     */
    _reference?: fhir.FhirElement;
    /**
     * Date the educational material was published.
     */
    publicationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.publicationDate
     */
    _publicationDate?: fhir.FhirElement;
    /**
     * Date the educational material was given to the patient.
     */
    presentationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.presentationDate
     */
    _presentationDate?: fhir.FhirElement;
}
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
export interface ImmunizationReaction extends fhir.BackboneElement {
    /**
     * Date of reaction to the immunization.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.reaction.date
     */
    _date?: fhir.FhirElement;
    /**
     * Details of the reaction.
     */
    detail?: fhir.Reference | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.reaction.reported
     */
    _reported?: fhir.FhirElement;
}
/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export interface ImmunizationProtocolApplied extends fhir.BackboneElement {
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.series
     */
    _series?: fhir.FhirElement;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: fhir.Reference | undefined;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.doseNumber[x]
     */
    _doseNumberPositiveInt?: fhir.FhirElement;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.doseNumber[x]
     */
    _doseNumberString?: fhir.FhirElement;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.seriesDoses[x]
     */
    _seriesDosesPositiveInt?: fhir.FhirElement;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.seriesDoses[x]
     */
    _seriesDosesString?: fhir.FhirElement;
}
/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export interface Immunization extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Immunization" | null;
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'completed' | 'entered-in-error' | 'not-done' | null;
    /**
     * Extended properties for primitive element: Immunization.status
     */
    _status?: fhir.FhirElement;
    /**
     * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode: fhir.CodeableConcept | null;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient: fhir.Reference | null;
    /**
     * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceString?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.occurrence[x]
     */
    _occurrenceString?: fhir.FhirElement;
    /**
     * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
     */
    recorded?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.recorded
     */
    _recorded?: fhir.FhirElement;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource?: boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.primarySource
     */
    _primarySource?: fhir.FhirElement;
    /**
     * Should not be populated if primarySource = True, not required even if primarySource = False.
     */
    reportOrigin?: fhir.CodeableConcept | undefined;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: fhir.Reference | undefined;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.lotNumber
     */
    _lotNumber?: fhir.FhirElement;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.expirationDate
     */
    _expirationDate?: fhir.FhirElement;
    /**
     * Body site where vaccine was administered.
     */
    site?: fhir.CodeableConcept | undefined;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: fhir.Quantity | undefined;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: (fhir.ImmunizationPerformer | null)[] | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
     */
    isSubpotent?: boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.isSubpotent
     */
    _isSubpotent?: fhir.FhirElement;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine administration.
     */
    education?: (fhir.ImmunizationEducation | null)[] | undefined;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
     */
    fundingSource?: fhir.CodeableConcept | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
     */
    reaction?: (fhir.ImmunizationReaction | null)[] | undefined;
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the dose.
     */
    protocolApplied?: (fhir.ImmunizationProtocolApplied | null)[] | undefined;
}
//# sourceMappingURL=Immunization.d.ts.map