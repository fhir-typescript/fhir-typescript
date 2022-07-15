import * as fhir from '../fhir.js';
import { ResearchSubjectStatusCodeType } from '../fhirValueSets/ResearchSubjectStatusCodes.js';
/**
 * Valid arguments for the ResearchSubject type.
 */
export interface ResearchSubjectArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchSubject" | undefined;
    /**
     * Identifiers assigned to this research subject for a study.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The current state of the subject.
     */
    status: fhir.FhirCode<ResearchSubjectStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhir.ReferenceArgs | null;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhir.ReferenceArgs | null;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.assignedArm
     */
    _assignedArm?: fhir.FhirElementArgs;
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.actualArm
     */
    _actualArm?: fhir.FhirElementArgs;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.ReferenceArgs | undefined;
}
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export declare class ResearchSubject extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ResearchSubject";
    /**
     * Identifiers assigned to this research subject for a study.
     */
    identifier: fhir.Identifier[];
    /**
     * The current state of the subject.
     */
    status: fhir.FhirCode<ResearchSubjectStatusCodeType> | null;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhir.Period | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhir.Reference | null;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhir.Reference | null;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: fhir.FhirString | undefined;
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: fhir.FhirString | undefined;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.Reference | undefined;
    /**
     * Default constructor for ResearchSubject - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchSubjectArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ResearchSubject.d.ts.map