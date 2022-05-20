import * as fhir from '../fhir.js';
import { ImmunizationFunctionCodingType } from '../fhirValueSets/ImmunizationFunctionCodings.js';
import { ImmunizationStatusCodingType } from '../fhirValueSets/ImmunizationStatusCodings.js';
import { ImmunizationStatusCodeType } from '../fhirValueSets/ImmunizationStatusCodes.js';
/**
 * Valid arguments for the ImmunizationPerformer type.
 */
export interface ImmunizationPerformerArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: fhir.CodeableConceptArgs | undefined;
    /**
     * When the individual practitioner who performed the action is known, it is best to send.
     */
    actor: fhir.ReferenceArgs | null;
}
/**
 * Indicates who performed the immunization event.
 */
export declare class ImmunizationPerformer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * When the individual practitioner who performed the action is known, it is best to send.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for ImmunizationPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationPerformerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for function (Immunization.performer.function)
     */
    static functionExtensibleCoding(): ImmunizationFunctionCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImmunizationEducation type.
 */
export interface ImmunizationEducationArgs extends fhir.BackboneElementArgs {
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: fhir.FhirString | string | undefined;
    /**
     * Reference pointer to the educational material given to the patient if the information was on line.
     */
    reference?: fhir.FhirUri | string | undefined;
    /**
     * Date the educational material was published.
     */
    publicationDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Date the educational material was given to the patient.
     */
    presentationDate?: fhir.FhirDateTime | string | undefined;
}
/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export declare class ImmunizationEducation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: fhir.FhirString | undefined;
    /**
     * Reference pointer to the educational material given to the patient if the information was on line.
     */
    reference?: fhir.FhirUri | undefined;
    /**
     * Date the educational material was published.
     */
    publicationDate?: fhir.FhirDateTime | undefined;
    /**
     * Date the educational material was given to the patient.
     */
    presentationDate?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for ImmunizationEducation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationEducationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * Details of the reaction.
     */
    detail?: fhir.ReferenceArgs | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
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
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImmunizationProtocolApplied type.
 */
export interface ImmunizationProtocolAppliedArgs extends fhir.BackboneElementArgs {
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | string | undefined;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: fhir.ReferenceArgs | undefined;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumber?: fhir.FhirPositiveInt | fhir.FhirString | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: fhir.FhirString | string | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDoses?: fhir.FhirPositiveInt | fhir.FhirString | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: fhir.FhirString | string | undefined;
}
/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export declare class ImmunizationProtocolApplied extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | undefined;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: fhir.Reference | undefined;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: fhir.CodeableConcept[];
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumber: (fhir.FhirPositiveInt | fhir.FhirString) | null;
    /**
     * Internal flag to properly serialize choice-type element Immunization.protocolApplied.doseNumber[x]
     */
    protected static readonly _fts_doseNumberIsChoice: true;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDoses?: (fhir.FhirPositiveInt | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Immunization.protocolApplied.seriesDoses[x]
     */
    protected static readonly _fts_seriesDosesIsChoice: true;
    /**
     * Default constructor for ImmunizationProtocolApplied - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationProtocolAppliedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ImmunizationStatusCodeType | null;
    /**
     * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
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
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrence?: fhir.FhirDateTime | fhir.FhirString | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceString?: fhir.FhirString | string | undefined;
    /**
     * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
     */
    recorded?: fhir.FhirDateTime | string | undefined;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Should not be populated if primarySource = True, not required even if primarySource = False.
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
     * Date vaccine batch expires.
     */
    expirationDate?: fhir.FhirDate | string | undefined;
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
     * Indicates who performed the immunization event.
     */
    performer?: fhir.ImmunizationPerformerArgs[] | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
     */
    isSubpotent?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine administration.
     */
    education?: fhir.ImmunizationEducationArgs[] | undefined;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
     */
    fundingSource?: fhir.CodeableConceptArgs | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
     */
    reaction?: fhir.ImmunizationReactionArgs[] | undefined;
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the dose.
     */
    protocolApplied?: fhir.ImmunizationProtocolAppliedArgs[] | undefined;
}
/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
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
    identifier?: fhir.Identifier[];
    /**
     * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ImmunizationStatusCodeType | null;
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
    occurrence: (fhir.FhirDateTime | fhir.FhirString) | null;
    /**
     * Internal flag to properly serialize choice-type element Immunization.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
     */
    recorded?: fhir.FhirDateTime | undefined;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource?: fhir.FhirBoolean | undefined;
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
     * Indicates who performed the immunization event.
     */
    performer?: fhir.ImmunizationPerformer[];
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: fhir.Annotation[];
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: fhir.CodeableConcept[];
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
     */
    reasonReference?: fhir.Reference[];
    /**
     * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
     */
    isSubpotent?: fhir.FhirBoolean | undefined;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: fhir.CodeableConcept[];
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine administration.
     */
    education?: fhir.ImmunizationEducation[];
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: fhir.CodeableConcept[];
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
     */
    fundingSource?: fhir.CodeableConcept | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
     */
    reaction?: fhir.ImmunizationReaction[];
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the dose.
     */
    protocolApplied?: fhir.ImmunizationProtocolApplied[];
    /**
     * Default constructor for Immunization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Immunization.status)
     */
    static statusRequiredCoding(): ImmunizationStatusCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Immunization.d.ts.map