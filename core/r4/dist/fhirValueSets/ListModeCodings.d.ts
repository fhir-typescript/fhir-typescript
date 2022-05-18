import { Coding } from '../fhir/Coding.js';
/**
 * The processing mode that applies to this list.
 */
export declare const ListModeCodings: {
    /**
     * changes: A point-in-time list that shows what changes have been made or recommended.  E.g. a discharge medication list showing what was added and removed during an encounter.
     */
    readonly ChangeList: Coding;
    /**
     * snapshot: This list was prepared as a snapshot. It should not be assumed to be current.
     */
    readonly SnapshotList: Coding;
    /**
     * working: This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes.
     */
    readonly WorkingList: Coding;
};
/**
 * The processing mode that applies to this list.
 */
export declare type ListModeCodingType = typeof ListModeCodings;
//# sourceMappingURL=ListModeCodings.d.ts.map