import * as fhir from '../fhir.js';
import { ChargeitemStatusCodingType } from '../fhirValueSets/ChargeitemStatusCodings.js';
import { ChargeitemStatusCodeType } from '../fhirValueSets/ChargeitemStatusCodes.js';
/**
 * Valid arguments for the ChargeItemPerformer type.
 */
export interface ChargeItemPerformerArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
     */
    function?: fhir.CodeableConceptArgs | undefined;
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.ReferenceArgs | null;
}
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare class ChargeItemPerformer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for ChargeItemPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ChargeItemPerformerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * References the source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status: ChargeitemStatusCodeType | null;
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
    performer?: fhir.ChargeItemPerformerArgs[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
     */
    costCenter?: fhir.ReferenceArgs | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factorOverride?: fhir.FhirDecimal | number | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    priceOverride?: fhir.MoneyArgs | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: fhir.FhirString | string | undefined;
    /**
     * The enterer is also the person considered responsible for factor/price overrides if applicable.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: fhir.FhirDateTime | string | undefined;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    product?: fhir.Reference | fhir.CodeableConcept | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productReference?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.ReferenceArgs[] | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Further information supporting this charge.
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
    identifier?: fhir.Identifier[];
    /**
     * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionUri?: fhir.FhirUri[];
    /**
     * References the source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionCanonical?: fhir.FhirCanonical[];
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status: ChargeitemStatusCodeType | null;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf?: fhir.Reference[];
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
    performer?: fhir.ChargeItemPerformer[];
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhir.Reference | undefined;
    /**
     * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhir.Reference | undefined;
    /**
     * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
     */
    costCenter?: fhir.Reference | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite?: fhir.CodeableConcept[];
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factorOverride?: fhir.FhirDecimal | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    priceOverride?: fhir.Money | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: fhir.FhirString | undefined;
    /**
     * The enterer is also the person considered responsible for factor/price overrides if applicable.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: fhir.FhirDateTime | undefined;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason?: fhir.CodeableConcept[];
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: fhir.Reference[];
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    product?: (fhir.Reference | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ChargeItem.product[x]
     */
    protected static readonly _fts_productIsChoice: true;
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.Reference[];
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhir.Annotation[];
    /**
     * Further information supporting this charge.
     */
    supportingInformation?: fhir.Reference[];
    /**
     * Default constructor for ChargeItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ChargeItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ChargeItem.status)
     */
    static statusRequiredCoding(): ChargeitemStatusCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=ChargeItem.d.ts.map