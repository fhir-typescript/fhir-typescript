/**
 * Codes to identify how UDI data was entered
 */
export declare const UdiEntryTypeCodes: {
    /**
     * barcode: A Barcode scanner captured the data from the device label
     */
    readonly BarCode: "barcode";
    /**
     * card: The data originated from a patient's implant card and read by an operator.
     */
    readonly Card: "card";
    /**
     * manual: The data was read from the label by a person and manually entered. (e.g.  via a keyboard)
     */
    readonly Manual: "manual";
    /**
     * rfid: An RFID chip reader captured the data from the device label
     */
    readonly RFID: "rfid";
    /**
     * self-reported: The data originated from a patient source and not directly scanned or read from a label or card.
     */
    readonly SelfReported: "self-reported";
    /**
     * unknown: The method of data capture has not been determined
     */
    readonly Unknown: "unknown";
};
/**
 * Codes to identify how UDI data was entered
 */
export declare type UdiEntryTypeCodeType = typeof UdiEntryTypeCodes[keyof typeof UdiEntryTypeCodes];
//# sourceMappingURL=UdiEntryTypeCodes.d.ts.map