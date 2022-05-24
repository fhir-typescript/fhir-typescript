import { CodingArgs } from '../fhir/Coding.js';
/**
 * Operations supported by REST at the system level.
 */
export declare type SystemRestfulInteractionCodingType = {
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    Batch: CodingArgs;
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    HistorySystem: CodingArgs;
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    SearchSystem: CodingArgs;
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction: CodingArgs;
};
/**
 * Operations supported by REST at the system level.
 */
export declare const SystemRestfulInteractionCodings: SystemRestfulInteractionCodingType;
//# sourceMappingURL=SystemRestfulInteractionCodings.d.ts.map