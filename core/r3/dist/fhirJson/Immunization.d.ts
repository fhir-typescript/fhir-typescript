import * as fhir from '../fhirJson.js';
/**
 * Indicates who or what performed the event.
 */
export interface ImmunizationPractitioner extends fhir.BackboneElement {
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed the action.
     */
    actor: fhir.Reference | null;
}
/**
 * Reasons why a vaccine was or was not administered.
 */
export interface ImmunizationExplanation extends fhir.BackboneElement {
    /**
     * Reasons why a vaccine was administered.
     */
    reason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Reason why a vaccine was not administered.
     */
    reasonNotGiven?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [AllergyIntolerance](allergyintolerance.html) resource instance as most systems will not query against  past Immunization.reaction elements.
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
 * Contains information about the protocol(s) under which the vaccine was administered.
 */
export interface ImmunizationVaccinationProtocol extends fhir.BackboneElement {
    /**
     * Nominal position in a series.
     */
    doseSequence?: number | undefined;
    /**
     * Extended properties for primitive element: Immunization.vaccinationProtocol.doseSequence
     */
    _doseSequence?: fhir.FhirElement;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.vaccinationProtocol.description
     */
    _description?: fhir.FhirElement;
    /**
     * Indicates the authority who published the protocol.  E.g. ACIP.
     */
    authority?: fhir.Reference | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.vaccinationProtocol.series
     */
    _series?: fhir.FhirElement;
    /**
     * The recommended number of doses to achieve immunity.
     */
    seriesDoses?: number | undefined;
    /**
     * Extended properties for primitive element: Immunization.vaccinationProtocol.seriesDoses
     */
    _seriesDoses?: fhir.FhirElement;
    /**
     * The targeted disease.
     */
    targetDisease: (fhir.CodeableConcept | null)[] | null;
    /**
     * May need to differentiate between status declarations by a provider vs. a CDS engine.
     */
    doseStatus: fhir.CodeableConcept | null;
    /**
     * Provides an explanation as to why an immunization event should or should not count against the protocol.
     */
    doseStatusReason?: fhir.CodeableConcept | undefined;
}
/**
 * Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.
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
     * Will generally be set to show that the immunization has been completed.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'completed' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: Immunization.status
     */
    _status?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because it indicates that an immunization didn't happen.
     */
    notGiven: boolean | null;
    /**
     * Extended properties for primitive element: Immunization.notGiven
     */
    _notGiven?: fhir.FhirElement;
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
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.date
     */
    _date?: fhir.FhirElement;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource: boolean | null;
    /**
     * Extended properties for primitive element: Immunization.primarySource
     */
    _primarySource?: fhir.FhirElement;
    /**
     * Should not be populated if primarySource = True, will not be required even if primarySource = False.
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
     * Indicates who or what performed the event.
     */
    practitioner?: (fhir.ImmunizationPractitioner | null)[] | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Reasons why a vaccine was or was not administered.
     */
    explanation?: fhir.ImmunizationExplanation | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [AllergyIntolerance](allergyintolerance.html) resource instance as most systems will not query against  past Immunization.reaction elements.
     */
    reaction?: (fhir.ImmunizationReaction | null)[] | undefined;
    /**
     * Contains information about the protocol(s) under which the vaccine was administered.
     */
    vaccinationProtocol?: (fhir.ImmunizationVaccinationProtocol | null)[] | undefined;
}
//# sourceMappingURL=Immunization.d.ts.map