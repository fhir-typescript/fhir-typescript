import * as fhir from '../fhirJson.js';
/**
 * A request for a procedure to be performed. May be a proposal or an order.
 */
export interface ProcedureRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ProcedureRequest" | null;
    /**
     * Identifiers assigned to this order by the order or by the receiver.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
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
    bodySite?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
     */
    reasonCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    scheduledDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.scheduled[x]
     */
    _scheduledDateTime?: fhir.FhirElement;
    /**
     * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    scheduledPeriod?: fhir.Period | undefined;
    /**
     * The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    scheduledTiming?: fhir.Timing | undefined;
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
    status?: 'aborted' | 'accepted' | 'completed' | 'draft' | 'in-progress' | 'proposed' | 'received' | 'rejected' | 'requested' | 'suspended' | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * Any other notes associated with this proposal or order - e.g. provider instructions.
     */
    notes?: (fhir.Annotation | null)[] | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
     */
    asNeededBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.asNeeded[x]
     */
    _asNeededBoolean?: fhir.FhirElement;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
     */
    asNeededCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The time when the request was made.
     */
    orderedOn?: string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.orderedOn
     */
    _orderedOn?: fhir.FhirElement;
    /**
     * The healthcare professional responsible for proposing or ordering the procedure.
     */
    orderer?: fhir.Reference | undefined;
    /**
     * The clinical priority associated with this order.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.priority
     */
    _priority?: fhir.FhirElement;
}
//# sourceMappingURL=ProcedureRequest.d.ts.map