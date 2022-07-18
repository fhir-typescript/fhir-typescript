// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/signature-type|4.3.0
/**
 * The Digital Signature Purposes, an indication of the reason an entity signs a document. This is included in the signed information and can be used when determining accountability for various actions concerning the document. Examples include: author, transcriptionist/recorder, and witness.
 */
export const SignatureTypeCodes = {
    /**
     * 1.2.840.10065.1.12.1.1: the signature of the primary or sole author of a health information document. There can be only one primary author of a health information document.
     */
    AuthorQuoteSSignature: "1.2.840.10065.1.12.1.1",
    /**
     * 1.2.840.10065.1.12.1.10: the signature of an individual who has witnessed another individual who is known to them signing a document. (Example the identity witness is a notary public.)
     */
    IdentityWitnessSignature: "1.2.840.10065.1.12.1.10",
    /**
     * 1.2.840.10065.1.12.1.11: the signature of an individual who has witnessed the health care provider counselling a patient.
     */
    ConsentWitnessSignature: "1.2.840.10065.1.12.1.11",
    /**
     * 1.2.840.10065.1.12.1.12: the signature of an individual who has translated health care information during an event or the obtaining of consent to a treatment.
     */
    InterpreterSignature: "1.2.840.10065.1.12.1.12",
    /**
     * 1.2.840.10065.1.12.1.13: the signature of a person, device, or algorithm that has reviewed or filtered data for inclusion into the patient record. ( Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.)
     */
    ReviewSignature: "1.2.840.10065.1.12.1.13",
    /**
     * 1.2.840.10065.1.12.1.14: the signature of an automated data source. (Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.)
     */
    SourceSignature: "1.2.840.10065.1.12.1.14",
    /**
     * 1.2.840.10065.1.12.1.15: the signature on a new amended document of an individual who has corrected, edited, or amended an original health information document. An addendum signature can either be a signature type or a signature sub-type (see 8.1). Any document with an addendum signature shall have a companion document that is the original document with its original, unaltered content, and original signatures. The original document shall be referenced via an attribute in the new document, which contains, for example, the digest of the old document. Whether the original, unaltered, document is always displayed with the addended document is a local matter, but the original, unaltered, document must remain as part of the patient record and be retrievable on demand.
     */
    AddendumSignature: "1.2.840.10065.1.12.1.15",
    /**
     * 1.2.840.10065.1.12.1.16: the signature on an original document of an individual who has generated a new amended document. This (original) document shall reference the new document via an additional signature purpose. This is the inverse of an addendum signature and provides a pointer from the original to the amended document.
     */
    ModificationSignature: "1.2.840.10065.1.12.1.16",
    /**
     * 1.2.840.10065.1.12.1.17: the signature of an individual who is certifying that the document is invalidated by an error(s), or is placed in the wrong chart. An administrative (error/edit) signature must include an addendum to the document and therefore shall have an addendum signature sub-type (see 8.1). This signature is reserved for the highest health information system administrative classification, since it is a statement that the entire document is invalidated by the error and that the document should no longer be used for patient care, although for legal reasons the document must remain part of the permanent patient record.
     */
    AdministrativeErrorEditSignature: "1.2.840.10065.1.12.1.17",
    /**
     * 1.2.840.10065.1.12.1.18: the signature by an entity or device trusted to provide accurate timestamps. This timestamp might be provided, for example, in the signature time attribute.
     */
    TimestampSignature: "1.2.840.10065.1.12.1.18",
    /**
     * 1.2.840.10065.1.12.1.2: the signature of a health information document coauthor. There can be multiple coauthors of a health information document.
     */
    CoauthorQuoteSSignature: "1.2.840.10065.1.12.1.2",
    /**
     * 1.2.840.10065.1.12.1.3: the signature of an individual who is a participant in the health information document but is not an author or coauthor. (Example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.)
     */
    CoParticipantQuoteSSignature: "1.2.840.10065.1.12.1.3",
    /**
     * 1.2.840.10065.1.12.1.4: the signature of an individual who has transcribed a dictated document or recorded written text into a digital machine readable format.
     */
    TranscriptionistRecorderSignature: "1.2.840.10065.1.12.1.4",
    /**
     * 1.2.840.10065.1.12.1.5: a signature verifying the information contained in a document. (Example a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.)
     */
    VerificationSignature: "1.2.840.10065.1.12.1.5",
    /**
     * 1.2.840.10065.1.12.1.6: a signature validating a health information document for inclusion in the patient record. (Example a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.)
     */
    ValidationSignature: "1.2.840.10065.1.12.1.6",
    /**
     * 1.2.840.10065.1.12.1.7: the signature of an individual consenting to what is described in a health information document.
     */
    ConsentSignature: "1.2.840.10065.1.12.1.7",
    /**
     * 1.2.840.10065.1.12.1.8: the signature of a witness to any other signature.
     */
    SignatureWitnessSignature: "1.2.840.10065.1.12.1.8",
    /**
     * 1.2.840.10065.1.12.1.9: the signature of a witness to an event. (Example the witness has observed a procedure and is attesting to this fact.)
     */
    EventWitnessSignature: "1.2.840.10065.1.12.1.9",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmF0dXJlVHlwZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TaWduYXR1cmVUeXBlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsbUVBQW1FO0FBRW5FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEM7O09BRUc7SUFDSCxxQkFBcUIsRUFBRSx3QkFBd0I7SUFDL0M7O09BRUc7SUFDSCx3QkFBd0IsRUFBRSx5QkFBeUI7SUFDbkQ7O09BRUc7SUFDSCx1QkFBdUIsRUFBRSx5QkFBeUI7SUFDbEQ7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSx5QkFBeUI7SUFDL0M7O09BRUc7SUFDSCxlQUFlLEVBQUUseUJBQXlCO0lBQzFDOztPQUVHO0lBQ0gsZUFBZSxFQUFFLHlCQUF5QjtJQUMxQzs7T0FFRztJQUNILGlCQUFpQixFQUFFLHlCQUF5QjtJQUM1Qzs7T0FFRztJQUNILHFCQUFxQixFQUFFLHlCQUF5QjtJQUNoRDs7T0FFRztJQUNILGdDQUFnQyxFQUFFLHlCQUF5QjtJQUMzRDs7T0FFRztJQUNILGtCQUFrQixFQUFFLHlCQUF5QjtJQUM3Qzs7T0FFRztJQUNILHVCQUF1QixFQUFFLHdCQUF3QjtJQUNqRDs7T0FFRztJQUNILDRCQUE0QixFQUFFLHdCQUF3QjtJQUN0RDs7T0FFRztJQUNILGlDQUFpQyxFQUFFLHdCQUF3QjtJQUMzRDs7T0FFRztJQUNILHFCQUFxQixFQUFFLHdCQUF3QjtJQUMvQzs7T0FFRztJQUNILG1CQUFtQixFQUFFLHdCQUF3QjtJQUM3Qzs7T0FFRztJQUNILGdCQUFnQixFQUFFLHdCQUF3QjtJQUMxQzs7T0FFRztJQUNILHlCQUF5QixFQUFFLHdCQUF3QjtJQUNuRDs7T0FFRztJQUNILHFCQUFxQixFQUFFLHdCQUF3QjtDQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zaWduYXR1cmUtdHlwZXw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoZSBEaWdpdGFsIFNpZ25hdHVyZSBQdXJwb3NlcywgYW4gaW5kaWNhdGlvbiBvZiB0aGUgcmVhc29uIGFuIGVudGl0eSBzaWducyBhIGRvY3VtZW50LiBUaGlzIGlzIGluY2x1ZGVkIGluIHRoZSBzaWduZWQgaW5mb3JtYXRpb24gYW5kIGNhbiBiZSB1c2VkIHdoZW4gZGV0ZXJtaW5pbmcgYWNjb3VudGFiaWxpdHkgZm9yIHZhcmlvdXMgYWN0aW9ucyBjb25jZXJuaW5nIHRoZSBkb2N1bWVudC4gRXhhbXBsZXMgaW5jbHVkZTogYXV0aG9yLCB0cmFuc2NyaXB0aW9uaXN0L3JlY29yZGVyLCBhbmQgd2l0bmVzcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTaWduYXR1cmVUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTogdGhlIHNpZ25hdHVyZSBvZiB0aGUgcHJpbWFyeSBvciBzb2xlIGF1dGhvciBvZiBhIGhlYWx0aCBpbmZvcm1hdGlvbiBkb2N1bWVudC4gVGhlcmUgY2FuIGJlIG9ubHkgb25lIHByaW1hcnkgYXV0aG9yIG9mIGEgaGVhbHRoIGluZm9ybWF0aW9uIGRvY3VtZW50LlxyXG4gICAqL1xyXG4gIEF1dGhvclF1b3RlU1NpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4xXCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTA6IHRoZSBzaWduYXR1cmUgb2YgYW4gaW5kaXZpZHVhbCB3aG8gaGFzIHdpdG5lc3NlZCBhbm90aGVyIGluZGl2aWR1YWwgd2hvIGlzIGtub3duIHRvIHRoZW0gc2lnbmluZyBhIGRvY3VtZW50LiAoRXhhbXBsZSB0aGUgaWRlbnRpdHkgd2l0bmVzcyBpcyBhIG5vdGFyeSBwdWJsaWMuKVxyXG4gICAqL1xyXG4gIElkZW50aXR5V2l0bmVzc1NpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4xMFwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjExOiB0aGUgc2lnbmF0dXJlIG9mIGFuIGluZGl2aWR1YWwgd2hvIGhhcyB3aXRuZXNzZWQgdGhlIGhlYWx0aCBjYXJlIHByb3ZpZGVyIGNvdW5zZWxsaW5nIGEgcGF0aWVudC5cclxuICAgKi9cclxuICBDb25zZW50V2l0bmVzc1NpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4xMVwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjEyOiB0aGUgc2lnbmF0dXJlIG9mIGFuIGluZGl2aWR1YWwgd2hvIGhhcyB0cmFuc2xhdGVkIGhlYWx0aCBjYXJlIGluZm9ybWF0aW9uIGR1cmluZyBhbiBldmVudCBvciB0aGUgb2J0YWluaW5nIG9mIGNvbnNlbnQgdG8gYSB0cmVhdG1lbnQuXHJcbiAgICovXHJcbiAgSW50ZXJwcmV0ZXJTaWduYXR1cmU6IFwiMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTJcIixcclxuICAvKipcclxuICAgKiAxLjIuODQwLjEwMDY1LjEuMTIuMS4xMzogdGhlIHNpZ25hdHVyZSBvZiBhIHBlcnNvbiwgZGV2aWNlLCBvciBhbGdvcml0aG0gdGhhdCBoYXMgcmV2aWV3ZWQgb3IgZmlsdGVyZWQgZGF0YSBmb3IgaW5jbHVzaW9uIGludG8gdGhlIHBhdGllbnQgcmVjb3JkLiAoIEV4YW1wbGVzOiAoMSkgYSBtZWRpY2FsIHJlY29yZHMgY2xlcmsgd2hvIHNjYW5zIGEgZG9jdW1lbnQgZm9yIGluY2x1c2lvbiBpbiB0aGUgbWVkaWNhbCByZWNvcmQsIGVudGVycyBoZWFkZXIgaW5mb3JtYXRpb24sIG9yIGNhdGFsb2d1ZXMgYW5kIGNsYXNzaWZpZXMgdGhlIGRhdGEsIG9yIGEgY29tYmluYXRpb24gdGhlcmVvZjsgKDIpIGEgZ2F0ZXdheSB0aGF0IHJlY2VpdmVzIGRhdGEgZnJvbSBhbm90aGVyIGNvbXB1dGVyIHN5c3RlbSBhbmQgaW50ZXJwcmV0cyB0aGF0IGRhdGEgb3IgY2hhbmdlcyBpdHMgZm9ybWF0LCBvciBib3RoLCBiZWZvcmUgZW50ZXJpbmcgaXQgaW50byB0aGUgcGF0aWVudCByZWNvcmQuKVxyXG4gICAqL1xyXG4gIFJldmlld1NpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4xM1wiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjE0OiB0aGUgc2lnbmF0dXJlIG9mIGFuIGF1dG9tYXRlZCBkYXRhIHNvdXJjZS4gKEV4YW1wbGVzOiAoMSkgdGhlIHNpZ25hdHVyZSBmb3IgYW4gaW1hZ2UgdGhhdCBpcyBnZW5lcmF0ZWQgYnkgYSBkZXZpY2UgZm9yIGluY2x1c2lvbiBpbiB0aGUgcGF0aWVudCByZWNvcmQ7ICgyKSB0aGUgc2lnbmF0dXJlIGZvciBhbiBFQ0cgZGVyaXZlZCBieSBhbiBFQ0cgc3lzdGVtIGZvciBpbmNsdXNpb24gaW4gdGhlIHBhdGllbnQgcmVjb3JkOyAoMykgdGhlIGRhdGEgZnJvbSBhIGJpb21lZGljYWwgbW9uaXRvcmluZyBkZXZpY2Ugb3Igc3lzdGVtIHRoYXQgaXMgZm9yIGluY2x1c2lvbiBpbiB0aGUgcGF0aWVudCByZWNvcmQuKVxyXG4gICAqL1xyXG4gIFNvdXJjZVNpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4xNFwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjE1OiB0aGUgc2lnbmF0dXJlIG9uIGEgbmV3IGFtZW5kZWQgZG9jdW1lbnQgb2YgYW4gaW5kaXZpZHVhbCB3aG8gaGFzIGNvcnJlY3RlZCwgZWRpdGVkLCBvciBhbWVuZGVkIGFuIG9yaWdpbmFsIGhlYWx0aCBpbmZvcm1hdGlvbiBkb2N1bWVudC4gQW4gYWRkZW5kdW0gc2lnbmF0dXJlIGNhbiBlaXRoZXIgYmUgYSBzaWduYXR1cmUgdHlwZSBvciBhIHNpZ25hdHVyZSBzdWItdHlwZSAoc2VlIDguMSkuIEFueSBkb2N1bWVudCB3aXRoIGFuIGFkZGVuZHVtIHNpZ25hdHVyZSBzaGFsbCBoYXZlIGEgY29tcGFuaW9uIGRvY3VtZW50IHRoYXQgaXMgdGhlIG9yaWdpbmFsIGRvY3VtZW50IHdpdGggaXRzIG9yaWdpbmFsLCB1bmFsdGVyZWQgY29udGVudCwgYW5kIG9yaWdpbmFsIHNpZ25hdHVyZXMuIFRoZSBvcmlnaW5hbCBkb2N1bWVudCBzaGFsbCBiZSByZWZlcmVuY2VkIHZpYSBhbiBhdHRyaWJ1dGUgaW4gdGhlIG5ldyBkb2N1bWVudCwgd2hpY2ggY29udGFpbnMsIGZvciBleGFtcGxlLCB0aGUgZGlnZXN0IG9mIHRoZSBvbGQgZG9jdW1lbnQuIFdoZXRoZXIgdGhlIG9yaWdpbmFsLCB1bmFsdGVyZWQsIGRvY3VtZW50IGlzIGFsd2F5cyBkaXNwbGF5ZWQgd2l0aCB0aGUgYWRkZW5kZWQgZG9jdW1lbnQgaXMgYSBsb2NhbCBtYXR0ZXIsIGJ1dCB0aGUgb3JpZ2luYWwsIHVuYWx0ZXJlZCwgZG9jdW1lbnQgbXVzdCByZW1haW4gYXMgcGFydCBvZiB0aGUgcGF0aWVudCByZWNvcmQgYW5kIGJlIHJldHJpZXZhYmxlIG9uIGRlbWFuZC5cclxuICAgKi9cclxuICBBZGRlbmR1bVNpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4xNVwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjE2OiB0aGUgc2lnbmF0dXJlIG9uIGFuIG9yaWdpbmFsIGRvY3VtZW50IG9mIGFuIGluZGl2aWR1YWwgd2hvIGhhcyBnZW5lcmF0ZWQgYSBuZXcgYW1lbmRlZCBkb2N1bWVudC4gVGhpcyAob3JpZ2luYWwpIGRvY3VtZW50IHNoYWxsIHJlZmVyZW5jZSB0aGUgbmV3IGRvY3VtZW50IHZpYSBhbiBhZGRpdGlvbmFsIHNpZ25hdHVyZSBwdXJwb3NlLiBUaGlzIGlzIHRoZSBpbnZlcnNlIG9mIGFuIGFkZGVuZHVtIHNpZ25hdHVyZSBhbmQgcHJvdmlkZXMgYSBwb2ludGVyIGZyb20gdGhlIG9yaWdpbmFsIHRvIHRoZSBhbWVuZGVkIGRvY3VtZW50LlxyXG4gICAqL1xyXG4gIE1vZGlmaWNhdGlvblNpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4xNlwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjE3OiB0aGUgc2lnbmF0dXJlIG9mIGFuIGluZGl2aWR1YWwgd2hvIGlzIGNlcnRpZnlpbmcgdGhhdCB0aGUgZG9jdW1lbnQgaXMgaW52YWxpZGF0ZWQgYnkgYW4gZXJyb3IocyksIG9yIGlzIHBsYWNlZCBpbiB0aGUgd3JvbmcgY2hhcnQuIEFuIGFkbWluaXN0cmF0aXZlIChlcnJvci9lZGl0KSBzaWduYXR1cmUgbXVzdCBpbmNsdWRlIGFuIGFkZGVuZHVtIHRvIHRoZSBkb2N1bWVudCBhbmQgdGhlcmVmb3JlIHNoYWxsIGhhdmUgYW4gYWRkZW5kdW0gc2lnbmF0dXJlIHN1Yi10eXBlIChzZWUgOC4xKS4gVGhpcyBzaWduYXR1cmUgaXMgcmVzZXJ2ZWQgZm9yIHRoZSBoaWdoZXN0IGhlYWx0aCBpbmZvcm1hdGlvbiBzeXN0ZW0gYWRtaW5pc3RyYXRpdmUgY2xhc3NpZmljYXRpb24sIHNpbmNlIGl0IGlzIGEgc3RhdGVtZW50IHRoYXQgdGhlIGVudGlyZSBkb2N1bWVudCBpcyBpbnZhbGlkYXRlZCBieSB0aGUgZXJyb3IgYW5kIHRoYXQgdGhlIGRvY3VtZW50IHNob3VsZCBubyBsb25nZXIgYmUgdXNlZCBmb3IgcGF0aWVudCBjYXJlLCBhbHRob3VnaCBmb3IgbGVnYWwgcmVhc29ucyB0aGUgZG9jdW1lbnQgbXVzdCByZW1haW4gcGFydCBvZiB0aGUgcGVybWFuZW50IHBhdGllbnQgcmVjb3JkLlxyXG4gICAqL1xyXG4gIEFkbWluaXN0cmF0aXZlRXJyb3JFZGl0U2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjE3XCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTg6IHRoZSBzaWduYXR1cmUgYnkgYW4gZW50aXR5IG9yIGRldmljZSB0cnVzdGVkIHRvIHByb3ZpZGUgYWNjdXJhdGUgdGltZXN0YW1wcy4gVGhpcyB0aW1lc3RhbXAgbWlnaHQgYmUgcHJvdmlkZWQsIGZvciBleGFtcGxlLCBpbiB0aGUgc2lnbmF0dXJlIHRpbWUgYXR0cmlidXRlLlxyXG4gICAqL1xyXG4gIFRpbWVzdGFtcFNpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4xOFwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjI6IHRoZSBzaWduYXR1cmUgb2YgYSBoZWFsdGggaW5mb3JtYXRpb24gZG9jdW1lbnQgY29hdXRob3IuIFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBjb2F1dGhvcnMgb2YgYSBoZWFsdGggaW5mb3JtYXRpb24gZG9jdW1lbnQuXHJcbiAgICovXHJcbiAgQ29hdXRob3JRdW90ZVNTaWduYXR1cmU6IFwiMS4yLjg0MC4xMDA2NS4xLjEyLjEuMlwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjM6IHRoZSBzaWduYXR1cmUgb2YgYW4gaW5kaXZpZHVhbCB3aG8gaXMgYSBwYXJ0aWNpcGFudCBpbiB0aGUgaGVhbHRoIGluZm9ybWF0aW9uIGRvY3VtZW50IGJ1dCBpcyBub3QgYW4gYXV0aG9yIG9yIGNvYXV0aG9yLiAoRXhhbXBsZSBhIHN1cmdlb24gd2hvIGlzIHJlcXVpcmVkIGJ5IGluc3RpdHV0aW9uYWwsIHJlZ3VsYXRvcnksIG9yIGxlZ2FsIHJ1bGVzIHRvIHNpZ24gYW4gb3BlcmF0aXZlIHJlcG9ydCwgYnV0IHdobyB3YXMgbm90IGludm9sdmVkIGluIHRoZSBhdXRob3JzaGlwIG9mIHRoYXQgcmVwb3J0LilcclxuICAgKi9cclxuICBDb1BhcnRpY2lwYW50UXVvdGVTU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjNcIixcclxuICAvKipcclxuICAgKiAxLjIuODQwLjEwMDY1LjEuMTIuMS40OiB0aGUgc2lnbmF0dXJlIG9mIGFuIGluZGl2aWR1YWwgd2hvIGhhcyB0cmFuc2NyaWJlZCBhIGRpY3RhdGVkIGRvY3VtZW50IG9yIHJlY29yZGVkIHdyaXR0ZW4gdGV4dCBpbnRvIGEgZGlnaXRhbCBtYWNoaW5lIHJlYWRhYmxlIGZvcm1hdC5cclxuICAgKi9cclxuICBUcmFuc2NyaXB0aW9uaXN0UmVjb3JkZXJTaWduYXR1cmU6IFwiMS4yLjg0MC4xMDA2NS4xLjEyLjEuNFwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjU6IGEgc2lnbmF0dXJlIHZlcmlmeWluZyB0aGUgaW5mb3JtYXRpb24gY29udGFpbmVkIGluIGEgZG9jdW1lbnQuIChFeGFtcGxlIGEgcGh5c2ljaWFuIGlzIHJlcXVpcmVkIHRvIGNvdW50ZXJzaWduIGEgdmVyYmFsIG9yZGVyIHRoYXQgaGFzIHByZXZpb3VzbHkgYmVlbiByZWNvcmRlZCBpbiB0aGUgbWVkaWNhbCByZWNvcmQgYnkgYSByZWdpc3RlcmVkIG51cnNlIHdobyBoYXMgY2FycmllZCBvdXQgdGhlIHZlcmJhbCBvcmRlci4pXHJcbiAgICovXHJcbiAgVmVyaWZpY2F0aW9uU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjVcIixcclxuICAvKipcclxuICAgKiAxLjIuODQwLjEwMDY1LjEuMTIuMS42OiBhIHNpZ25hdHVyZSB2YWxpZGF0aW5nIGEgaGVhbHRoIGluZm9ybWF0aW9uIGRvY3VtZW50IGZvciBpbmNsdXNpb24gaW4gdGhlIHBhdGllbnQgcmVjb3JkLiAoRXhhbXBsZSBhIG1lZGljYWwgc3R1ZGVudCBvciByZXNpZGVudCBpcyBjcmVkZW50aWFsZWQgdG8gcGVyZm9ybSBoaXN0b3J5IG9yIHBoeXNpY2FsIGV4YW1pbmF0aW9ucyBhbmQgdG8gd3JpdGUgcHJvZ3Jlc3Mgbm90ZXMuIFRoZSBhdHRlbmRpbmcgcGh5c2ljaWFuIHNpZ25zIHRoZSBoaXN0b3J5IGFuZCBwaHlzaWNhbCBleGFtaW5hdGlvbiB0byB2YWxpZGF0ZSB0aGUgZW50cnkgZm9yIGluY2x1c2lvbiBpbiB0aGUgcGF0aWVudCdzIG1lZGljYWwgcmVjb3JkLilcclxuICAgKi9cclxuICBWYWxpZGF0aW9uU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjZcIixcclxuICAvKipcclxuICAgKiAxLjIuODQwLjEwMDY1LjEuMTIuMS43OiB0aGUgc2lnbmF0dXJlIG9mIGFuIGluZGl2aWR1YWwgY29uc2VudGluZyB0byB3aGF0IGlzIGRlc2NyaWJlZCBpbiBhIGhlYWx0aCBpbmZvcm1hdGlvbiBkb2N1bWVudC5cclxuICAgKi9cclxuICBDb25zZW50U2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjdcIixcclxuICAvKipcclxuICAgKiAxLjIuODQwLjEwMDY1LjEuMTIuMS44OiB0aGUgc2lnbmF0dXJlIG9mIGEgd2l0bmVzcyB0byBhbnkgb3RoZXIgc2lnbmF0dXJlLlxyXG4gICAqL1xyXG4gIFNpZ25hdHVyZVdpdG5lc3NTaWduYXR1cmU6IFwiMS4yLjg0MC4xMDA2NS4xLjEyLjEuOFwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjk6IHRoZSBzaWduYXR1cmUgb2YgYSB3aXRuZXNzIHRvIGFuIGV2ZW50LiAoRXhhbXBsZSB0aGUgd2l0bmVzcyBoYXMgb2JzZXJ2ZWQgYSBwcm9jZWR1cmUgYW5kIGlzIGF0dGVzdGluZyB0byB0aGlzIGZhY3QuKVxyXG4gICAqL1xyXG4gIEV2ZW50V2l0bmVzc1NpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS45XCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIERpZ2l0YWwgU2lnbmF0dXJlIFB1cnBvc2VzLCBhbiBpbmRpY2F0aW9uIG9mIHRoZSByZWFzb24gYW4gZW50aXR5IHNpZ25zIGEgZG9jdW1lbnQuIFRoaXMgaXMgaW5jbHVkZWQgaW4gdGhlIHNpZ25lZCBpbmZvcm1hdGlvbiBhbmQgY2FuIGJlIHVzZWQgd2hlbiBkZXRlcm1pbmluZyBhY2NvdW50YWJpbGl0eSBmb3IgdmFyaW91cyBhY3Rpb25zIGNvbmNlcm5pbmcgdGhlIGRvY3VtZW50LiBFeGFtcGxlcyBpbmNsdWRlOiBhdXRob3IsIHRyYW5zY3JpcHRpb25pc3QvcmVjb3JkZXIsIGFuZCB3aXRuZXNzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2lnbmF0dXJlVHlwZUNvZGVUeXBlID0gdHlwZW9mIFNpZ25hdHVyZVR5cGVDb2Rlc1trZXlvZiB0eXBlb2YgU2lnbmF0dXJlVHlwZUNvZGVzXTtcclxuIl19