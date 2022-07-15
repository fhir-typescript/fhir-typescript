import * as fhir from '../fhir.js';
import { ProcedureRequestStatusCodeType } from '../fhirValueSets/ProcedureRequestStatusCodes.js';
import { ProcedureRequestPriorityCodeType } from '../fhirValueSets/ProcedureRequestPriorityCodes.js';
/**
 * Valid arguments for the ProcedureRequest type.
 */
export interface ProcedureRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ProcedureRequest" | undefined;
    /**
     * Identifiers assigned to this order by the order or by the receiver.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The person, animal or group that should receive the procedure.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The specific procedure that is ordered. Use text if the exact nature of the procedure cannot be coded.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Knowing where the procedure is made is important for tracking if multiple sites are possible.
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
     */
    reason?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
     */
    reasonCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
     */
    reasonReference?: fhir.ReferenceArgs | undefined;
    /**
     * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    scheduled?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    scheduledDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    scheduledPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    scheduledTiming?: fhir.TimingArgs | undefined;
    /**
     * The encounter within which the procedure proposal or request was created.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * For example, the surgeon, anaethetist, endoscopist, etc.
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * The status of the order.
     */
    status?: fhir.FhirCode<ProcedureRequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Any other notes associated with this proposal or order - e.g. provider instructions.
     */
    notes?: fhir.AnnotationArgs[] | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
     */
    asNeeded?: fhir.FhirBoolean | fhir.CodeableConcept | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
     */
    asNeededBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
     */
    asNeededCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The time when the request was made.
     */
    orderedOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.orderedOn
     */
    _orderedOn?: fhir.FhirElementArgs;
    /**
     * The healthcare professional responsible for proposing or ordering the procedure.
     */
    orderer?: fhir.ReferenceArgs | undefined;
    /**
     * The clinical priority associated with this order.
     */
    priority?: fhir.FhirCode<ProcedureRequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
}
/**
 * A request for a procedure to be performed. May be a proposal or an order.
 */
export declare class ProcedureRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ProcedureRequest";
    /**
     * Identifiers assigned to this order by the order or by the receiver.
     */
    identifier: fhir.Identifier[];
    /**
     * The person, animal or group that should receive the procedure.
     */
    subject: fhir.Reference | null;
    /**
     * The specific procedure that is ordered. Use text if the exact nature of the procedure cannot be coded.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Knowing where the procedure is made is important for tracking if multiple sites are possible.
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
     */
    reason?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ProcedureRequest.reason[x]
     */
    protected static readonly _fts_reasonIsChoice: true;
    /**
     * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    scheduled?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ProcedureRequest.scheduled[x]
     */
    protected static readonly _fts_scheduledIsChoice: true;
    /**
     * The encounter within which the procedure proposal or request was created.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * For example, the surgeon, anaethetist, endoscopist, etc.
     */
    performer?: fhir.Reference | undefined;
    /**
     * The status of the order.
     */
    status?: fhir.FhirCode<ProcedureRequestStatusCodeType> | undefined;
    /**
     * Any other notes associated with this proposal or order - e.g. provider instructions.
     */
    notes: fhir.Annotation[];
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
     */
    asNeeded?: (fhir.FhirBoolean | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ProcedureRequest.asNeeded[x]
     */
    protected static readonly _fts_asNeededIsChoice: true;
    /**
     * The time when the request was made.
     */
    orderedOn?: fhir.FhirDateTime | undefined;
    /**
     * The healthcare professional responsible for proposing or ordering the procedure.
     */
    orderer?: fhir.Reference | undefined;
    /**
     * The clinical priority associated with this order.
     */
    priority?: fhir.FhirCode<ProcedureRequestPriorityCodeType> | undefined;
    /**
     * Default constructor for ProcedureRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcedureRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ProcedureRequest.d.ts.map