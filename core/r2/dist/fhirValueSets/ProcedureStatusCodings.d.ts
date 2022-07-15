import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code specifying the state of the procedure.
 */
export declare type ProcedureStatusCodingType = {
    /**
     * aborted: The procedure was terminated without completing successfully.
     */
    Aboted: CodingArgs;
    /**
     * completed: All actions involved in the procedure have taken place.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: The statement was entered in error and Is not valid.
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: The procedure is still occurring.
     */
    InProgress: CodingArgs;
};
/**
 * A code specifying the state of the procedure.
 */
export declare const ProcedureStatusCodings: ProcedureStatusCodingType;
//# sourceMappingURL=ProcedureStatusCodings.d.ts.map