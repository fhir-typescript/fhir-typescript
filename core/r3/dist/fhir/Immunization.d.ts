import * as fhir from '../fhir.js';
import { ImmunizationStatusCodeType } from '../fhirValueSets/ImmunizationStatusCodes.js';
/**
 * Valid arguments for the ImmunizationPractitioner type.
 */
export interface ImmunizationPractitionerArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * The device, practitioner, etc. who performed the action.
     */
    actor: fhir.ReferenceArgs | null;
}
/**
 * Indicates who or what performed the event.
 */
export declare class ImmunizationPractitioner extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed the action.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for ImmunizationPractitioner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationPractitionerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImmunizationExplanation type.
 */
export interface ImmunizationExplanationArgs extends fhir.BackboneElementArgs {
    /**
     * Reasons why a vaccine was administered.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Reason why a vaccine was not administered.
     */
    reasonNotGiven?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Reasons why a vaccine was or was not administered.
 */
export declare class ImmunizationExplanation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Reasons why a vaccine was administered.
     */
    reason: fhir.CodeableConcept[];
    /**
     * Reason why a vaccine was not administered.
     */
    reasonNotGiven: fhir.CodeableConcept[];
    /**
     * Default constructor for ImmunizationExplanation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationExplanationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImmunizationReaction type.
 */
export interface ImmunizationReactionArgs extends fhir.BackboneElementArgs {
    /**
     * Date of reaction to the immunization.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Immunization.reaction.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Details of the reaction.
     */
    detail?: fhir.ReferenceArgs | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.reaction.reported
     */
    _reported?: fhir.FhirElementArgs;
}
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [AllergyIntolerance](allergyintolerance.html) resource instance as most systems will not query against  past Immunization.reaction elements.
 */
export declare class ImmunizationReaction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Date of reaction to the immunization.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Details of the reaction.
     */
    detail?: fhir.Reference | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for ImmunizationReaction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationReactionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImmunizationVaccinationProtocol type.
 */
export interface ImmunizationVaccinationProtocolArgs extends fhir.BackboneElementArgs {
    /**
     * Nominal position in a series.
     */
    doseSequence?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Immunization.vaccinationProtocol.doseSequence
     */
    _doseSequence?: fhir.FhirElementArgs;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Immunization.vaccinationProtocol.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Indicates the authority who published the protocol.  E.g. ACIP.
     */
    authority?: fhir.ReferenceArgs | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Immunization.vaccinationProtocol.series
     */
    _series?: fhir.FhirElementArgs;
    /**
     * The recommended number of doses to achieve immunity.
     */
    seriesDoses?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Immunization.vaccinationProtocol.seriesDoses
     */
    _seriesDoses?: fhir.FhirElementArgs;
    /**
     * The targeted disease.
     */
    targetDisease: fhir.CodeableConceptArgs[] | null;
    /**
     * May need to differentiate between status declarations by a provider vs. a CDS engine.
     */
    doseStatus: fhir.CodeableConceptArgs | null;
    /**
     * Provides an explanation as to why an immunization event should or should not count against the protocol.
     */
    doseStatusReason?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Contains information about the protocol(s) under which the vaccine was administered.
 */
export declare class ImmunizationVaccinationProtocol extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Nominal position in a series.
     */
    doseSequence?: fhir.FhirPositiveInt | undefined;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Indicates the authority who published the protocol.  E.g. ACIP.
     */
    authority?: fhir.Reference | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | undefined;
    /**
     * The recommended number of doses to achieve immunity.
     */
    seriesDoses?: fhir.FhirPositiveInt | undefined;
    /**
     * The targeted disease.
     */
    targetDisease: fhir.CodeableConcept[];
    /**
     * May need to differentiate between status declarations by a provider vs. a CDS engine.
     */
    doseStatus: fhir.CodeableConcept | null;
    /**
     * Provides an explanation as to why an immunization event should or should not count against the protocol.
     */
    doseStatusReason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ImmunizationVaccinationProtocol - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationVaccinationProtocolArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Immunization type.
 */
export interface ImmunizationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Immunization" | undefined;
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Will generally be set to show that the immunization has been completed.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ImmunizationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Immunization.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because it indicates that an immunization didn't happen.
     */
    notGiven: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.notGiven
     */
    _notGiven?: fhir.FhirElementArgs;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode: fhir.CodeableConceptArgs | null;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Immunization.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.primarySource
     */
    _primarySource?: fhir.FhirElementArgs;
    /**
     * Should not be populated if primarySource = True, will not be required even if primarySource = False.
     */
    reportOrigin?: fhir.CodeableConceptArgs | undefined;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: fhir.ReferenceArgs | undefined;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Immunization.lotNumber
     */
    _lotNumber?: fhir.FhirElementArgs;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Immunization.expirationDate
     */
    _expirationDate?: fhir.FhirElementArgs;
    /**
     * Body site where vaccine was administered.
     */
    site?: fhir.CodeableConceptArgs | undefined;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: fhir.CodeableConceptArgs | undefined;
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Indicates who or what performed the event.
     */
    practitioner?: fhir.ImmunizationPractitionerArgs[] | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Reasons why a vaccine was or was not administered.
     */
    explanation?: fhir.ImmunizationExplanationArgs | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [AllergyIntolerance](allergyintolerance.html) resource instance as most systems will not query against  past Immunization.reaction elements.
     */
    reaction?: fhir.ImmunizationReactionArgs[] | undefined;
    /**
     * Contains information about the protocol(s) under which the vaccine was administered.
     */
    vaccinationProtocol?: fhir.ImmunizationVaccinationProtocolArgs[] | undefined;
}
/**
 * Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.
 */
export declare class Immunization extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Immunization";
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier: fhir.Identifier[];
    /**
     * Will generally be set to show that the immunization has been completed.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ImmunizationStatusCodeType> | null;
    /**
     * This element is labeled as a modifier because it indicates that an immunization didn't happen.
     */
    notGiven: fhir.FhirBoolean | null;
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
    date?: fhir.FhirDateTime | undefined;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource: fhir.FhirBoolean | null;
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
    lotNumber?: fhir.FhirString | undefined;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: fhir.FhirDate | undefined;
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
    practitioner: fhir.ImmunizationPractitioner[];
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note: fhir.Annotation[];
    /**
     * Reasons why a vaccine was or was not administered.
     */
    explanation?: fhir.ImmunizationExplanation | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [AllergyIntolerance](allergyintolerance.html) resource instance as most systems will not query against  past Immunization.reaction elements.
     */
    reaction: fhir.ImmunizationReaction[];
    /**
     * Contains information about the protocol(s) under which the vaccine was administered.
     */
    vaccinationProtocol: fhir.ImmunizationVaccinationProtocol[];
    /**
     * Default constructor for Immunization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Immunization.d.ts.map