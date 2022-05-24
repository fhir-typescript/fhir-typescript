import { CodingArgs } from '../fhir/Coding.js';
/**
 * Operations supported by REST at the type or instance level.
 */
export declare type TypeRestfulInteractionCodingType = {
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create: CodingArgs;
    /**
     * delete: Delete a resource.
     */
    Delete: CodingArgs;
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    HistoryInstance: CodingArgs;
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    HistoryType: CodingArgs;
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    Patch: CodingArgs;
    /**
     * read: Read the current state of the resource.
     */
    Read: CodingArgs;
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    SearchType: CodingArgs;
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    Update: CodingArgs;
    /**
     * vread: Read the state of a specific version of the resource.
     */
    Vread: CodingArgs;
};
/**
 * Operations supported by REST at the type or instance level.
 */
export declare const TypeRestfulInteractionCodings: TypeRestfulInteractionCodingType;
//# sourceMappingURL=TypeRestfulInteractionCodings.d.ts.map