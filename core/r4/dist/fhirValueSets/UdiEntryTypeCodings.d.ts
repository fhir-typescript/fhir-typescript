import { Coding } from '../fhir/Coding.js';
/**
 * Codes to identify how UDI data was entered.
 */
export declare const UdiEntryTypeCodings: {
    /**
     * barcode: a barcodescanner captured the data from the device label.
     */
    readonly Barcode: Coding;
    /**
     * card: The data originated from a patient's implant card and was read by an operator.
     */
    readonly Card: Coding;
    /**
     * manual: The data was read from the label by a person and manually entered. (e.g.  via a keyboard).
     */
    readonly Manual: Coding;
    /**
     * rfid: An RFID chip reader captured the data from the device label.
     */
    readonly RFID: Coding;
    /**
     * self-reported: The data originated from a patient source and was not directly scanned or read from a label or card.
     */
    readonly SelfReported: Coding;
    /**
     * unknown: The method of data capture has not been determined.
     */
    readonly Unknown: Coding;
};
/**
 * Codes to identify how UDI data was entered.
 */
export declare type UdiEntryTypeCodingType = typeof UdiEntryTypeCodings;
//# sourceMappingURL=UdiEntryTypeCodings.d.ts.map