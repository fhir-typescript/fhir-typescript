import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes to identify how UDI data was entered.
 */
export declare type UdiEntryTypeCodingType = {
    /**
     * barcode: a barcodescanner captured the data from the device label.
     */
    Barcode: CodingArgs;
    /**
     * card: The data originated from a patient's implant card and was read by an operator.
     */
    Card: CodingArgs;
    /**
     * manual: The data was read from the label by a person and manually entered. (e.g.  via a keyboard).
     */
    Manual: CodingArgs;
    /**
     * rfid: An RFID chip reader captured the data from the device label.
     */
    RFID: CodingArgs;
    /**
     * self-reported: The data originated from a patient source and was not directly scanned or read from a label or card.
     */
    SelfReported: CodingArgs;
    /**
     * unknown: The method of data capture has not been determined.
     */
    Unknown: CodingArgs;
};
/**
 * Codes to identify how UDI data was entered.
 */
export declare const UdiEntryTypeCodings: UdiEntryTypeCodingType;
//# sourceMappingURL=UdiEntryTypeCodings.d.ts.map