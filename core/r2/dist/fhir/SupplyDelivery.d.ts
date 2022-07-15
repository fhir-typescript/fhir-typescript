import * as fhir from '../fhir.js';
import { SupplydeliveryStatusCodeType } from '../fhirValueSets/SupplydeliveryStatusCodes.js';
/**
 * Valid arguments for the SupplyDelivery type.
 */
export interface SupplyDeliveryArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyDelivery" | undefined;
    /**
     * Identifier assigned by the dispensing facility when the item(s) is dispensed.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * A code specifying the state of the dispense event.
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
     * The amount of supply that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a simple attribute carrying a code that identifies the item from a known list.
     */
    suppliedItem?: fhir.ReferenceArgs | undefined;
    /**
     * The individual responsible for dispensing the medication, supplier or device.
     */
    supplier?: fhir.ReferenceArgs | undefined;
    /**
     * The time the dispense event occurred.
     */
    whenPrepared?: fhir.PeriodArgs | undefined;
    /**
     * The time the dispensed item was sent or handed to the patient (or agent).
     */
    time?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SupplyDelivery.time
     */
    _time?: fhir.FhirElementArgs;
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
     * Identifier assigned by the dispensing facility when the item(s) is dispensed.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * A code specifying the state of the dispense event.
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
     * The amount of supply that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a simple attribute carrying a code that identifies the item from a known list.
     */
    suppliedItem?: fhir.Reference | undefined;
    /**
     * The individual responsible for dispensing the medication, supplier or device.
     */
    supplier?: fhir.Reference | undefined;
    /**
     * The time the dispense event occurred.
     */
    whenPrepared?: fhir.Period | undefined;
    /**
     * The time the dispensed item was sent or handed to the patient (or agent).
     */
    time?: fhir.FhirDateTime | undefined;
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SupplyDelivery.d.ts.map