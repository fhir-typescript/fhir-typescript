// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/signature-type|3.0.2
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmF0dXJlVHlwZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TaWduYXR1cmVUeXBlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsbUVBQW1FO0FBRW5FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEM7O09BRUc7SUFDSCxxQkFBcUIsRUFBRSx3QkFBd0I7SUFDL0M7O09BRUc7SUFDSCx3QkFBd0IsRUFBRSx5QkFBeUI7SUFDbkQ7O09BRUc7SUFDSCx1QkFBdUIsRUFBRSx5QkFBeUI7SUFDbEQ7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSx5QkFBeUI7SUFDL0M7O09BRUc7SUFDSCxlQUFlLEVBQUUseUJBQXlCO0lBQzFDOztPQUVHO0lBQ0gsZUFBZSxFQUFFLHlCQUF5QjtJQUMxQzs7T0FFRztJQUNILGlCQUFpQixFQUFFLHlCQUF5QjtJQUM1Qzs7T0FFRztJQUNILHFCQUFxQixFQUFFLHlCQUF5QjtJQUNoRDs7T0FFRztJQUNILGdDQUFnQyxFQUFFLHlCQUF5QjtJQUMzRDs7T0FFRztJQUNILGtCQUFrQixFQUFFLHlCQUF5QjtJQUM3Qzs7T0FFRztJQUNILHVCQUF1QixFQUFFLHdCQUF3QjtJQUNqRDs7T0FFRztJQUNILDRCQUE0QixFQUFFLHdCQUF3QjtJQUN0RDs7T0FFRztJQUNILGlDQUFpQyxFQUFFLHdCQUF3QjtJQUMzRDs7T0FFRztJQUNILHFCQUFxQixFQUFFLHdCQUF3QjtJQUMvQzs7T0FFRztJQUNILG1CQUFtQixFQUFFLHdCQUF3QjtJQUM3Qzs7T0FFRztJQUNILGdCQUFnQixFQUFFLHdCQUF3QjtJQUMxQzs7T0FFRztJQUNILHlCQUF5QixFQUFFLHdCQUF3QjtJQUNuRDs7T0FFRztJQUNILHFCQUFxQixFQUFFLHdCQUF3QjtDQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3NpZ25hdHVyZS10eXBlfDMuMC4yXHJcblxyXG4vKipcclxuICogVGhlIERpZ2l0YWwgU2lnbmF0dXJlIFB1cnBvc2VzLCBhbiBpbmRpY2F0aW9uIG9mIHRoZSByZWFzb24gYW4gZW50aXR5IHNpZ25zIGEgZG9jdW1lbnQuIFRoaXMgaXMgaW5jbHVkZWQgaW4gdGhlIHNpZ25lZCBpbmZvcm1hdGlvbiBhbmQgY2FuIGJlIHVzZWQgd2hlbiBkZXRlcm1pbmluZyBhY2NvdW50YWJpbGl0eSBmb3IgdmFyaW91cyBhY3Rpb25zIGNvbmNlcm5pbmcgdGhlIGRvY3VtZW50LiBFeGFtcGxlcyBpbmNsdWRlOiBhdXRob3IsIHRyYW5zY3JpcHRpb25pc3QvcmVjb3JkZXIsIGFuZCB3aXRuZXNzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNpZ25hdHVyZVR5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiAxLjIuODQwLjEwMDY1LjEuMTIuMS4xOiB0aGUgc2lnbmF0dXJlIG9mIHRoZSBwcmltYXJ5IG9yIHNvbGUgYXV0aG9yIG9mIGEgaGVhbHRoIGluZm9ybWF0aW9uIGRvY3VtZW50LiBUaGVyZSBjYW4gYmUgb25seSBvbmUgcHJpbWFyeSBhdXRob3Igb2YgYSBoZWFsdGggaW5mb3JtYXRpb24gZG9jdW1lbnQuXHJcbiAgICovXHJcbiAgQXV0aG9yUXVvdGVTU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjFcIixcclxuICAvKipcclxuICAgKiAxLjIuODQwLjEwMDY1LjEuMTIuMS4xMDogdGhlIHNpZ25hdHVyZSBvZiBhbiBpbmRpdmlkdWFsIHdobyBoYXMgd2l0bmVzc2VkIGFub3RoZXIgaW5kaXZpZHVhbCB3aG8gaXMga25vd24gdG8gdGhlbSBzaWduaW5nIGEgZG9jdW1lbnQuIChFeGFtcGxlIHRoZSBpZGVudGl0eSB3aXRuZXNzIGlzIGEgbm90YXJ5IHB1YmxpYy4pXHJcbiAgICovXHJcbiAgSWRlbnRpdHlXaXRuZXNzU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjEwXCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTE6IHRoZSBzaWduYXR1cmUgb2YgYW4gaW5kaXZpZHVhbCB3aG8gaGFzIHdpdG5lc3NlZCB0aGUgaGVhbHRoIGNhcmUgcHJvdmlkZXIgY291bnNlbGxpbmcgYSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIENvbnNlbnRXaXRuZXNzU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjExXCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTI6IHRoZSBzaWduYXR1cmUgb2YgYW4gaW5kaXZpZHVhbCB3aG8gaGFzIHRyYW5zbGF0ZWQgaGVhbHRoIGNhcmUgaW5mb3JtYXRpb24gZHVyaW5nIGFuIGV2ZW50IG9yIHRoZSBvYnRhaW5pbmcgb2YgY29uc2VudCB0byBhIHRyZWF0bWVudC5cclxuICAgKi9cclxuICBJbnRlcnByZXRlclNpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4xMlwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjEzOiB0aGUgc2lnbmF0dXJlIG9mIGEgcGVyc29uLCBkZXZpY2UsIG9yIGFsZ29yaXRobSB0aGF0IGhhcyByZXZpZXdlZCBvciBmaWx0ZXJlZCBkYXRhIGZvciBpbmNsdXNpb24gaW50byB0aGUgcGF0aWVudCByZWNvcmQuICggRXhhbXBsZXM6ICgxKSBhIG1lZGljYWwgcmVjb3JkcyBjbGVyayB3aG8gc2NhbnMgYSBkb2N1bWVudCBmb3IgaW5jbHVzaW9uIGluIHRoZSBtZWRpY2FsIHJlY29yZCwgZW50ZXJzIGhlYWRlciBpbmZvcm1hdGlvbiwgb3IgY2F0YWxvZ3VlcyBhbmQgY2xhc3NpZmllcyB0aGUgZGF0YSwgb3IgYSBjb21iaW5hdGlvbiB0aGVyZW9mOyAoMikgYSBnYXRld2F5IHRoYXQgcmVjZWl2ZXMgZGF0YSBmcm9tIGFub3RoZXIgY29tcHV0ZXIgc3lzdGVtIGFuZCBpbnRlcnByZXRzIHRoYXQgZGF0YSBvciBjaGFuZ2VzIGl0cyBmb3JtYXQsIG9yIGJvdGgsIGJlZm9yZSBlbnRlcmluZyBpdCBpbnRvIHRoZSBwYXRpZW50IHJlY29yZC4pXHJcbiAgICovXHJcbiAgUmV2aWV3U2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjEzXCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTQ6IHRoZSBzaWduYXR1cmUgb2YgYW4gYXV0b21hdGVkIGRhdGEgc291cmNlLiAoRXhhbXBsZXM6ICgxKSB0aGUgc2lnbmF0dXJlIGZvciBhbiBpbWFnZSB0aGF0IGlzIGdlbmVyYXRlZCBieSBhIGRldmljZSBmb3IgaW5jbHVzaW9uIGluIHRoZSBwYXRpZW50IHJlY29yZDsgKDIpIHRoZSBzaWduYXR1cmUgZm9yIGFuIEVDRyBkZXJpdmVkIGJ5IGFuIEVDRyBzeXN0ZW0gZm9yIGluY2x1c2lvbiBpbiB0aGUgcGF0aWVudCByZWNvcmQ7ICgzKSB0aGUgZGF0YSBmcm9tIGEgYmlvbWVkaWNhbCBtb25pdG9yaW5nIGRldmljZSBvciBzeXN0ZW0gdGhhdCBpcyBmb3IgaW5jbHVzaW9uIGluIHRoZSBwYXRpZW50IHJlY29yZC4pXHJcbiAgICovXHJcbiAgU291cmNlU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjE0XCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTU6IHRoZSBzaWduYXR1cmUgb24gYSBuZXcgYW1lbmRlZCBkb2N1bWVudCBvZiBhbiBpbmRpdmlkdWFsIHdobyBoYXMgY29ycmVjdGVkLCBlZGl0ZWQsIG9yIGFtZW5kZWQgYW4gb3JpZ2luYWwgaGVhbHRoIGluZm9ybWF0aW9uIGRvY3VtZW50LiBBbiBhZGRlbmR1bSBzaWduYXR1cmUgY2FuIGVpdGhlciBiZSBhIHNpZ25hdHVyZSB0eXBlIG9yIGEgc2lnbmF0dXJlIHN1Yi10eXBlIChzZWUgOC4xKS4gQW55IGRvY3VtZW50IHdpdGggYW4gYWRkZW5kdW0gc2lnbmF0dXJlIHNoYWxsIGhhdmUgYSBjb21wYW5pb24gZG9jdW1lbnQgdGhhdCBpcyB0aGUgb3JpZ2luYWwgZG9jdW1lbnQgd2l0aCBpdHMgb3JpZ2luYWwsIHVuYWx0ZXJlZCBjb250ZW50LCBhbmQgb3JpZ2luYWwgc2lnbmF0dXJlcy4gVGhlIG9yaWdpbmFsIGRvY3VtZW50IHNoYWxsIGJlIHJlZmVyZW5jZWQgdmlhIGFuIGF0dHJpYnV0ZSBpbiB0aGUgbmV3IGRvY3VtZW50LCB3aGljaCBjb250YWlucywgZm9yIGV4YW1wbGUsIHRoZSBkaWdlc3Qgb2YgdGhlIG9sZCBkb2N1bWVudC4gV2hldGhlciB0aGUgb3JpZ2luYWwsIHVuYWx0ZXJlZCwgZG9jdW1lbnQgaXMgYWx3YXlzIGRpc3BsYXllZCB3aXRoIHRoZSBhZGRlbmRlZCBkb2N1bWVudCBpcyBhIGxvY2FsIG1hdHRlciwgYnV0IHRoZSBvcmlnaW5hbCwgdW5hbHRlcmVkLCBkb2N1bWVudCBtdXN0IHJlbWFpbiBhcyBwYXJ0IG9mIHRoZSBwYXRpZW50IHJlY29yZCBhbmQgYmUgcmV0cmlldmFibGUgb24gZGVtYW5kLlxyXG4gICAqL1xyXG4gIEFkZGVuZHVtU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjE1XCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTY6IHRoZSBzaWduYXR1cmUgb24gYW4gb3JpZ2luYWwgZG9jdW1lbnQgb2YgYW4gaW5kaXZpZHVhbCB3aG8gaGFzIGdlbmVyYXRlZCBhIG5ldyBhbWVuZGVkIGRvY3VtZW50LiBUaGlzIChvcmlnaW5hbCkgZG9jdW1lbnQgc2hhbGwgcmVmZXJlbmNlIHRoZSBuZXcgZG9jdW1lbnQgdmlhIGFuIGFkZGl0aW9uYWwgc2lnbmF0dXJlIHB1cnBvc2UuIFRoaXMgaXMgdGhlIGludmVyc2Ugb2YgYW4gYWRkZW5kdW0gc2lnbmF0dXJlIGFuZCBwcm92aWRlcyBhIHBvaW50ZXIgZnJvbSB0aGUgb3JpZ2luYWwgdG8gdGhlIGFtZW5kZWQgZG9jdW1lbnQuXHJcbiAgICovXHJcbiAgTW9kaWZpY2F0aW9uU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjE2XCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTc6IHRoZSBzaWduYXR1cmUgb2YgYW4gaW5kaXZpZHVhbCB3aG8gaXMgY2VydGlmeWluZyB0aGF0IHRoZSBkb2N1bWVudCBpcyBpbnZhbGlkYXRlZCBieSBhbiBlcnJvcihzKSwgb3IgaXMgcGxhY2VkIGluIHRoZSB3cm9uZyBjaGFydC4gQW4gYWRtaW5pc3RyYXRpdmUgKGVycm9yL2VkaXQpIHNpZ25hdHVyZSBtdXN0IGluY2x1ZGUgYW4gYWRkZW5kdW0gdG8gdGhlIGRvY3VtZW50IGFuZCB0aGVyZWZvcmUgc2hhbGwgaGF2ZSBhbiBhZGRlbmR1bSBzaWduYXR1cmUgc3ViLXR5cGUgKHNlZSA4LjEpLiBUaGlzIHNpZ25hdHVyZSBpcyByZXNlcnZlZCBmb3IgdGhlIGhpZ2hlc3QgaGVhbHRoIGluZm9ybWF0aW9uIHN5c3RlbSBhZG1pbmlzdHJhdGl2ZSBjbGFzc2lmaWNhdGlvbiwgc2luY2UgaXQgaXMgYSBzdGF0ZW1lbnQgdGhhdCB0aGUgZW50aXJlIGRvY3VtZW50IGlzIGludmFsaWRhdGVkIGJ5IHRoZSBlcnJvciBhbmQgdGhhdCB0aGUgZG9jdW1lbnQgc2hvdWxkIG5vIGxvbmdlciBiZSB1c2VkIGZvciBwYXRpZW50IGNhcmUsIGFsdGhvdWdoIGZvciBsZWdhbCByZWFzb25zIHRoZSBkb2N1bWVudCBtdXN0IHJlbWFpbiBwYXJ0IG9mIHRoZSBwZXJtYW5lbnQgcGF0aWVudCByZWNvcmQuXHJcbiAgICovXHJcbiAgQWRtaW5pc3RyYXRpdmVFcnJvckVkaXRTaWduYXR1cmU6IFwiMS4yLjg0MC4xMDA2NS4xLjEyLjEuMTdcIixcclxuICAvKipcclxuICAgKiAxLjIuODQwLjEwMDY1LjEuMTIuMS4xODogdGhlIHNpZ25hdHVyZSBieSBhbiBlbnRpdHkgb3IgZGV2aWNlIHRydXN0ZWQgdG8gcHJvdmlkZSBhY2N1cmF0ZSB0aW1lc3RhbXBzLiBUaGlzIHRpbWVzdGFtcCBtaWdodCBiZSBwcm92aWRlZCwgZm9yIGV4YW1wbGUsIGluIHRoZSBzaWduYXR1cmUgdGltZSBhdHRyaWJ1dGUuXHJcbiAgICovXHJcbiAgVGltZXN0YW1wU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjE4XCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMjogdGhlIHNpZ25hdHVyZSBvZiBhIGhlYWx0aCBpbmZvcm1hdGlvbiBkb2N1bWVudCBjb2F1dGhvci4gVGhlcmUgY2FuIGJlIG11bHRpcGxlIGNvYXV0aG9ycyBvZiBhIGhlYWx0aCBpbmZvcm1hdGlvbiBkb2N1bWVudC5cclxuICAgKi9cclxuICBDb2F1dGhvclF1b3RlU1NpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS4yXCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuMzogdGhlIHNpZ25hdHVyZSBvZiBhbiBpbmRpdmlkdWFsIHdobyBpcyBhIHBhcnRpY2lwYW50IGluIHRoZSBoZWFsdGggaW5mb3JtYXRpb24gZG9jdW1lbnQgYnV0IGlzIG5vdCBhbiBhdXRob3Igb3IgY29hdXRob3IuIChFeGFtcGxlIGEgc3VyZ2VvbiB3aG8gaXMgcmVxdWlyZWQgYnkgaW5zdGl0dXRpb25hbCwgcmVndWxhdG9yeSwgb3IgbGVnYWwgcnVsZXMgdG8gc2lnbiBhbiBvcGVyYXRpdmUgcmVwb3J0LCBidXQgd2hvIHdhcyBub3QgaW52b2x2ZWQgaW4gdGhlIGF1dGhvcnNoaXAgb2YgdGhhdCByZXBvcnQuKVxyXG4gICAqL1xyXG4gIENvUGFydGljaXBhbnRRdW90ZVNTaWduYXR1cmU6IFwiMS4yLjg0MC4xMDA2NS4xLjEyLjEuM1wiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjQ6IHRoZSBzaWduYXR1cmUgb2YgYW4gaW5kaXZpZHVhbCB3aG8gaGFzIHRyYW5zY3JpYmVkIGEgZGljdGF0ZWQgZG9jdW1lbnQgb3IgcmVjb3JkZWQgd3JpdHRlbiB0ZXh0IGludG8gYSBkaWdpdGFsIG1hY2hpbmUgcmVhZGFibGUgZm9ybWF0LlxyXG4gICAqL1xyXG4gIFRyYW5zY3JpcHRpb25pc3RSZWNvcmRlclNpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS40XCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuNTogYSBzaWduYXR1cmUgdmVyaWZ5aW5nIHRoZSBpbmZvcm1hdGlvbiBjb250YWluZWQgaW4gYSBkb2N1bWVudC4gKEV4YW1wbGUgYSBwaHlzaWNpYW4gaXMgcmVxdWlyZWQgdG8gY291bnRlcnNpZ24gYSB2ZXJiYWwgb3JkZXIgdGhhdCBoYXMgcHJldmlvdXNseSBiZWVuIHJlY29yZGVkIGluIHRoZSBtZWRpY2FsIHJlY29yZCBieSBhIHJlZ2lzdGVyZWQgbnVyc2Ugd2hvIGhhcyBjYXJyaWVkIG91dCB0aGUgdmVyYmFsIG9yZGVyLilcclxuICAgKi9cclxuICBWZXJpZmljYXRpb25TaWduYXR1cmU6IFwiMS4yLjg0MC4xMDA2NS4xLjEyLjEuNVwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjY6IGEgc2lnbmF0dXJlIHZhbGlkYXRpbmcgYSBoZWFsdGggaW5mb3JtYXRpb24gZG9jdW1lbnQgZm9yIGluY2x1c2lvbiBpbiB0aGUgcGF0aWVudCByZWNvcmQuIChFeGFtcGxlIGEgbWVkaWNhbCBzdHVkZW50IG9yIHJlc2lkZW50IGlzIGNyZWRlbnRpYWxlZCB0byBwZXJmb3JtIGhpc3Rvcnkgb3IgcGh5c2ljYWwgZXhhbWluYXRpb25zIGFuZCB0byB3cml0ZSBwcm9ncmVzcyBub3Rlcy4gVGhlIGF0dGVuZGluZyBwaHlzaWNpYW4gc2lnbnMgdGhlIGhpc3RvcnkgYW5kIHBoeXNpY2FsIGV4YW1pbmF0aW9uIHRvIHZhbGlkYXRlIHRoZSBlbnRyeSBmb3IgaW5jbHVzaW9uIGluIHRoZSBwYXRpZW50J3MgbWVkaWNhbCByZWNvcmQuKVxyXG4gICAqL1xyXG4gIFZhbGlkYXRpb25TaWduYXR1cmU6IFwiMS4yLjg0MC4xMDA2NS4xLjEyLjEuNlwiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjc6IHRoZSBzaWduYXR1cmUgb2YgYW4gaW5kaXZpZHVhbCBjb25zZW50aW5nIHRvIHdoYXQgaXMgZGVzY3JpYmVkIGluIGEgaGVhbHRoIGluZm9ybWF0aW9uIGRvY3VtZW50LlxyXG4gICAqL1xyXG4gIENvbnNlbnRTaWduYXR1cmU6IFwiMS4yLjg0MC4xMDA2NS4xLjEyLjEuN1wiLFxyXG4gIC8qKlxyXG4gICAqIDEuMi44NDAuMTAwNjUuMS4xMi4xLjg6IHRoZSBzaWduYXR1cmUgb2YgYSB3aXRuZXNzIHRvIGFueSBvdGhlciBzaWduYXR1cmUuXHJcbiAgICovXHJcbiAgU2lnbmF0dXJlV2l0bmVzc1NpZ25hdHVyZTogXCIxLjIuODQwLjEwMDY1LjEuMTIuMS44XCIsXHJcbiAgLyoqXHJcbiAgICogMS4yLjg0MC4xMDA2NS4xLjEyLjEuOTogdGhlIHNpZ25hdHVyZSBvZiBhIHdpdG5lc3MgdG8gYW4gZXZlbnQuIChFeGFtcGxlIHRoZSB3aXRuZXNzIGhhcyBvYnNlcnZlZCBhIHByb2NlZHVyZSBhbmQgaXMgYXR0ZXN0aW5nIHRvIHRoaXMgZmFjdC4pXHJcbiAgICovXHJcbiAgRXZlbnRXaXRuZXNzU2lnbmF0dXJlOiBcIjEuMi44NDAuMTAwNjUuMS4xMi4xLjlcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgRGlnaXRhbCBTaWduYXR1cmUgUHVycG9zZXMsIGFuIGluZGljYXRpb24gb2YgdGhlIHJlYXNvbiBhbiBlbnRpdHkgc2lnbnMgYSBkb2N1bWVudC4gVGhpcyBpcyBpbmNsdWRlZCBpbiB0aGUgc2lnbmVkIGluZm9ybWF0aW9uIGFuZCBjYW4gYmUgdXNlZCB3aGVuIGRldGVybWluaW5nIGFjY291bnRhYmlsaXR5IGZvciB2YXJpb3VzIGFjdGlvbnMgY29uY2VybmluZyB0aGUgZG9jdW1lbnQuIEV4YW1wbGVzIGluY2x1ZGU6IGF1dGhvciwgdHJhbnNjcmlwdGlvbmlzdC9yZWNvcmRlciwgYW5kIHdpdG5lc3MuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaWduYXR1cmVUeXBlQ29kZVR5cGUgPSB0eXBlb2YgU2lnbmF0dXJlVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBTaWduYXR1cmVUeXBlQ29kZXNdO1xyXG4iXX0=