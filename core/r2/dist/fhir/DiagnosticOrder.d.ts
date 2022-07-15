import * as fhir from '../fhir.js';
import { DiagnosticOrderStatusCodeType } from '../fhirValueSets/DiagnosticOrderStatusCodes.js';
import { DiagnosticOrderPriorityCodeType } from '../fhirValueSets/DiagnosticOrderPriorityCodes.js';
/**
 * Valid arguments for the DiagnosticOrderEvent type.
 */
export interface DiagnosticOrderEventArgs extends fhir.BackboneElementArgs {
    /**
     * The status for the event.
     */
    status: fhir.FhirCode<DiagnosticOrderStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticOrder.event.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Additional information about the event that occurred - e.g. if the status remained unchanged.
     */
    description?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date/time at which the event occurred.
     */
    dateTime: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticOrder.event.dateTime
     */
    _dateTime?: fhir.FhirElementArgs;
    /**
     * The person responsible for performing or recording the action.
     */
    actor?: fhir.ReferenceArgs | undefined;
}
/**
 * A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.
 */
export declare class DiagnosticOrderEvent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The status for the event.
     */
    status: fhir.FhirCode<DiagnosticOrderStatusCodeType> | null;
    /**
     * Additional information about the event that occurred - e.g. if the status remained unchanged.
     */
    description?: fhir.CodeableConcept | undefined;
    /**
     * The date/time at which the event occurred.
     */
    dateTime: fhir.FhirDateTime | null;
    /**
     * The person responsible for performing or recording the action.
     */
    actor?: fhir.Reference | undefined;
    /**
     * Default constructor for DiagnosticOrderEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DiagnosticOrderEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DiagnosticOrderItem type.
 */
export interface DiagnosticOrderItemArgs extends fhir.BackboneElementArgs {
    /**
     * A code that identifies a particular diagnostic investigation, or panel of investigations, that have been requested.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * If the item is related to a specific specimen.
     */
    specimen?: fhir.ReferenceArgs[] | undefined;
    /**
     * Anatomical location where the request test should be performed.  This is the target site.
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * The status of this individual item within the order.
     */
    status?: fhir.FhirCode<DiagnosticOrderStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticOrder.item.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A summary of the events of interest that have occurred as this item of the request is processed.
     */
    event?: fhir.DiagnosticOrderEventArgs[] | undefined;
}
/**
 * The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.
 */
export declare class DiagnosticOrderItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code that identifies a particular diagnostic investigation, or panel of investigations, that have been requested.
     */
    code: fhir.CodeableConcept | null;
    /**
     * If the item is related to a specific specimen.
     */
    specimen: fhir.Reference[];
    /**
     * Anatomical location where the request test should be performed.  This is the target site.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * The status of this individual item within the order.
     */
    status?: fhir.FhirCode<DiagnosticOrderStatusCodeType> | undefined;
    /**
     * A summary of the events of interest that have occurred as this item of the request is processed.
     */
    event: fhir.DiagnosticOrderEvent[];
    /**
     * Default constructor for DiagnosticOrderItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DiagnosticOrderItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DiagnosticOrder type.
 */
export interface DiagnosticOrderArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DiagnosticOrder" | undefined;
    /**
     * Who or what the investigation is to be performed on. This is usually a human patient, but diagnostic tests can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The practitioner that holds legal responsibility for ordering the investigation.
     */
    orderer?: fhir.ReferenceArgs | undefined;
    /**
     * Identifiers assigned to this order instance by the orderer and/or  the receiver and/or order fulfiller.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * An explanation or justification for why this diagnostic investigation is being requested.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Additional clinical information about the patient or specimen that may influence test interpretations.  This includes observations explicitly requested by the producer(filler) to provide context or supporting information needed to complete the order.
     */
    supportingInformation?: fhir.ReferenceArgs[] | undefined;
    /**
     * One or more specimens that the diagnostic investigation is about.
     */
    specimen?: fhir.ReferenceArgs[] | undefined;
    /**
     * The status of the order.
     */
    status?: fhir.FhirCode<DiagnosticOrderStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticOrder.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The clinical priority associated with this order.
     */
    priority?: fhir.FhirCode<DiagnosticOrderPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DiagnosticOrder.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.
     */
    event?: fhir.DiagnosticOrderEventArgs[] | undefined;
    /**
     * The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.
     */
    item?: fhir.DiagnosticOrderItemArgs[] | undefined;
    /**
     * Any other notes associated with this patient, specimen or order (e.g. "patient hates needles").
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * A record of a request for a diagnostic investigation service to be performed.
 */
export declare class DiagnosticOrder extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DiagnosticOrder";
    /**
     * Who or what the investigation is to be performed on. This is usually a human patient, but diagnostic tests can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
     */
    subject: fhir.Reference | null;
    /**
     * The practitioner that holds legal responsibility for ordering the investigation.
     */
    orderer?: fhir.Reference | undefined;
    /**
     * Identifiers assigned to this order instance by the orderer and/or  the receiver and/or order fulfiller.
     */
    identifier: fhir.Identifier[];
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * An explanation or justification for why this diagnostic investigation is being requested.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.
     */
    reason: fhir.CodeableConcept[];
    /**
     * Additional clinical information about the patient or specimen that may influence test interpretations.  This includes observations explicitly requested by the producer(filler) to provide context or supporting information needed to complete the order.
     */
    supportingInformation: fhir.Reference[];
    /**
     * One or more specimens that the diagnostic investigation is about.
     */
    specimen: fhir.Reference[];
    /**
     * The status of the order.
     */
    status?: fhir.FhirCode<DiagnosticOrderStatusCodeType> | undefined;
    /**
     * The clinical priority associated with this order.
     */
    priority?: fhir.FhirCode<DiagnosticOrderPriorityCodeType> | undefined;
    /**
     * A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.
     */
    event: fhir.DiagnosticOrderEvent[];
    /**
     * The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.
     */
    item: fhir.DiagnosticOrderItem[];
    /**
     * Any other notes associated with this patient, specimen or order (e.g. "patient hates needles").
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for DiagnosticOrder - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DiagnosticOrderArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DiagnosticOrder.d.ts.map