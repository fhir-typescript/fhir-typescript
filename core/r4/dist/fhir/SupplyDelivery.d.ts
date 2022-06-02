import * as fhir from '../fhir.js';
import { SupplydeliveryStatusCodeType } from '../fhirValueSets/SupplydeliveryStatusCodes.js';
/**
 * Valid arguments for the SupplyDeliverySuppliedItem type.
 */
export interface SupplyDeliverySuppliedItemArgs extends fhir.BackboneElementArgs {
    /**
     * The amount of supply that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    item?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    itemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    itemReference?: fhir.ReferenceArgs | undefined;
}
/**
 * The item that is being delivered or has been supplied.
 */
export declare class SupplyDeliverySuppliedItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The amount of supply that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    item?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SupplyDelivery.suppliedItem.item[x]
     */
    protected static readonly _fts_itemIsChoice: true;
    /**
     * Default constructor for SupplyDeliverySuppliedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SupplyDeliverySuppliedItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SupplyDelivery type.
 */
export interface SupplyDeliveryArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyDelivery" | undefined;
    /**
     * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Event.context for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<SupplydeliveryStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SupplyDelivery.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A link to a resource representing the person whom the delivered item is for.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The item that is being delivered or has been supplied.
     */
    suppliedItem?: fhir.SupplyDeliverySuppliedItemArgs | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrenceTiming?: fhir.TimingArgs | undefined;
    /**
     * The individual responsible for dispensing the medication, supplier or device.
     */
    supplier?: fhir.ReferenceArgs | undefined;
    /**
     * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
     */
    destination?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the person who picked up the Supply.
     */
    receiver?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Record of delivery of what is supplied.
 */
export declare class SupplyDelivery extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SupplyDelivery";
    /**
     * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
     */
    identifier: fhir.Identifier[];
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn: fhir.Reference[];
    /**
     * Not to be used to link an event to an Encounter - use Event.context for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf: fhir.Reference[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<SupplydeliveryStatusCodeType> | undefined;
    /**
     * A link to a resource representing the person whom the delivered item is for.
     */
    patient?: fhir.Reference | undefined;
    /**
     * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The item that is being delivered or has been supplied.
     */
    suppliedItem?: fhir.SupplyDeliverySuppliedItem | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SupplyDelivery.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * The individual responsible for dispensing the medication, supplier or device.
     */
    supplier?: fhir.Reference | undefined;
    /**
     * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
     */
    destination?: fhir.Reference | undefined;
    /**
     * Identifies the person who picked up the Supply.
     */
    receiver: fhir.Reference[];
    /**
     * Default constructor for SupplyDelivery - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SupplyDeliveryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (SupplyDelivery.status)
     */
    static get statusRequiredCodes(): {
        readonly Abandoned: "abandoned";
        readonly Delivered: "completed";
        readonly EnteredInError: "entered-in-error";
        readonly InProgress: "in-progress";
    };
    /**
     * Required-bound Value Set for type (SupplyDelivery.type)
     */
    static get typeRequiredCodes(): {
        readonly Device: "device";
        readonly Medication: "medication";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SupplyDelivery.d.ts.map