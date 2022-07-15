/**
 * The processing mode that applies to this list
 */
export declare const ListModeCodes: {
    /**
     * changes: A list that indicates where changes have been made or recommended
     */
    readonly ChangeList: "changes";
    /**
     * snapshot: This list was prepared as a snapshot. It should not be assumed to be current
     */
    readonly SnapshotList: "snapshot";
    /**
     * working: This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes
     */
    readonly WorkingList: "working";
};
/**
 * The processing mode that applies to this list
 */
export declare type ListModeCodeType = typeof ListModeCodes[keyof typeof ListModeCodes];
//# sourceMappingURL=ListModeCodes.d.ts.map