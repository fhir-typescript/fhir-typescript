import { CodingArgs } from '../fhir/Coding.js';
/**
 * The processing mode that applies to this list
 */
export declare type ListModeCodingType = {
    /**
     * changes: A list that indicates where changes have been made or recommended
     */
    ChangeList: CodingArgs;
    /**
     * snapshot: This list was prepared as a snapshot. It should not be assumed to be current
     */
    SnapshotList: CodingArgs;
    /**
     * working: This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes
     */
    WorkingList: CodingArgs;
};
/**
 * The processing mode that applies to this list
 */
export declare const ListModeCodings: ListModeCodingType;
//# sourceMappingURL=ListModeCodings.d.ts.map