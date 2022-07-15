/**
 * Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.
 */
export declare const ListItemFlagCodes: {
    /**
     * 01: No change has been made to the status of this medicine item.
     */
    readonly Unchanged: "01";
    /**
     * 02: The medicine item has changed. The change may be described in an extension (not defined yet)
     */
    readonly Changed: "02";
    /**
     * 03: The prescription for this medicine item was cancelled by an authorized health care provider. The patient may be advised to complete the course of the prescribed medicine. This advice is a clinical decision made based on assessment of the patient's clinical condition.
     */
    readonly Cancelled: "03";
    /**
     * 04: A new medicine item has been prescribed
     */
    readonly Prescribed: "04";
    /**
     * 05: Administration of this medication item that the patient is currently taking is stopped or recommended to be stopped (i.e. instructed to be ceased by a health care provider). This cessation is anticipated to be permanent. The Change Description should describe the reason for cessation. Example uses: the medication in question is considered ineffective or has caused serious adverse effects. This value applies both to the cessation of a medication that is prescribed by another healthcare provider or patient self-administration of OTC medicines.
     */
    readonly Ceased: "05";
    /**
     * 06: Administration of this medication item that the patient is currently taking is on hold, or instructed or recommended by a health care provider to be temporarily stopped, or subject to clinical review (i.e. the stop may be temporary or permanent depending on the outcome of clinical review), or temporarily suspended as a pre-requisite to certain surgical or diagnostic procedures.
     */
    readonly Suspended: "06";
};
/**
 * Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.
 */
export declare type ListItemFlagCodeType = typeof ListItemFlagCodes[keyof typeof ListItemFlagCodes];
//# sourceMappingURL=ListItemFlagCodes.d.ts.map