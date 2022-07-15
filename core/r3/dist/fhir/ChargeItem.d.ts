import * as fhir from '../fhir.js';
import { ChargeitemStatusCodeType } from '../fhirValueSets/ChargeitemStatusCodes.js';
/**
 * Valid arguments for the ChargeItemParticipant type.
 */
export interface ChargeItemParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anaesthesiologiest, etc.).
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.ReferenceArgs | null;
}
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare class ChargeItemParticipant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anaesthesiologiest, etc.).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for ChargeItemParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ChargeItemParticipantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ChargeItem type.
 */
export interface ChargeItemArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ChargeItem" | undefined;
    /**
     * Identifiers assigned to this event performer or other systems.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Target Resource is yet to be defined as a container that holds information about list prices and rules applicable to the charge item code. Once defined, change type back to Reference(Definition Type).
     */
    definition?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.definition
     */
    _definition?: (fhir.FhirElementArgs | null)[];
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status: fhir.FhirCode<ChargeitemStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * A code that identifies the charge, like a billing code.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The individual or set of individuals the action is being or was performed on.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceTiming?: fhir.TimingArgs | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: fhir.ChargeItemParticipantArgs[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * The rendered Service may not be associated with a Request. It has to be made clear, ob which Organization's Request, the services have been rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overriden.
     */
    factorOverride?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.factorOverride
     */
    _factorOverride?: fhir.FhirElementArgs;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overriden.
     */
    priceOverride?: fhir.MoneyArgs | undefined;
    /**
     * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.overrideReason
     */
    _overrideReason?: fhir.FhirElementArgs;
    /**
     * The enterer is also te person considered responsible for factor/priceOverrides if applicable.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.enteredDate
     */
    _enteredDate?: fhir.FhirElementArgs;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: fhir.ReferenceArgs[] | undefined;
    /**
     * Systems posting the ChargeItems may not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.ReferenceArgs[] | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Further information supporting the this charge.
     */
    supportingInformation?: fhir.ReferenceArgs[] | undefined;
}
/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export declare class ChargeItem extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ChargeItem";
    /**
     * Identifiers assigned to this event performer or other systems.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Target Resource is yet to be defined as a container that holds information about list prices and rules applicable to the charge item code. Once defined, change type back to Reference(Definition Type).
     */
    definition: fhir.FhirUri[];
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status: fhir.FhirCode<ChargeitemStatusCodeType> | null;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf: fhir.Reference[];
    /**
     * A code that identifies the charge, like a billing code.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The individual or set of individuals the action is being or was performed on.
     */
    subject: fhir.Reference | null;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.Reference | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ChargeItem.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant: fhir.ChargeItemParticipant[];
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhir.Reference | undefined;
    /**
     * The rendered Service may not be associated with a Request. It has to be made clear, ob which Organization's Request, the services have been rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhir.Reference | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite: fhir.CodeableConcept[];
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overriden.
     */
    factorOverride?: fhir.FhirDecimal | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overriden.
     */
    priceOverride?: fhir.Money | undefined;
    /**
     * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: fhir.FhirString | undefined;
    /**
     * The enterer is also te person considered responsible for factor/priceOverrides if applicable.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: fhir.FhirDateTime | undefined;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason: fhir.CodeableConcept[];
    /**
     * Indicated the rendered service that caused this charge.
     */
    service: fhir.Reference[];
    /**
     * Systems posting the ChargeItems may not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account: fhir.Reference[];
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note: fhir.Annotation[];
    /**
     * Further information supporting the this charge.
     */
    supportingInformation: fhir.Reference[];
    /**
     * Default constructor for ChargeItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ChargeItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ChargeItem.d.ts.map