// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/v3-ActInvoiceGroupCode|2014-03-26
/**
 *  Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results. Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
 */
export const V3ActInvoiceGroupCodings = {
    /**
     * _ActInvoiceInterGroupCode: Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     *
     *                         The domain is only specified for an intermediate invoice element group (non-root or non-top level) for an Invoice.
     */
    ActInvoiceInterGroupCode: {
        display: "ActInvoiceInterGroupCode",
        code: "_ActInvoiceInterGroupCode",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * _ActInvoiceRootGroupCode: Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     *
     *                         Codes from this domain reflect the type of Invoice such as Pharmacy Dispense, Clinical Service and Clinical Product.  The domain is only specified for the root (top level) invoice element group for an Invoice.
     */
    ActInvoiceRootGroupCode: {
        display: "ActInvoiceRootGroupCode",
        code: "_ActInvoiceRootGroupCode",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * CPINV: Clinical product invoice where the Invoice Grouping contains one or more billable item and is supported by clinical product(s).
     *
     *                         For example, a crutch or a wheelchair.
     */
    ClinicalProductInvoice: {
        display: "clinical product invoice",
        code: "CPINV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * CPNDDRGING: A grouping of invoice element groups and details including the ones specifying the compound ingredients being invoiced. It may also contain generic detail items such as markup.
     */
    CompoundDrugInvoiceGroup: {
        display: "compound drug invoice group",
        code: "CPNDDRGING",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * CPNDINDING: A grouping of invoice element details including the one specifying an ingredient drug being invoiced. It may also contain generic detail items such as tax or markup.
     */
    CompoundIngredientInvoiceGroup: {
        display: "compound ingredient invoice group",
        code: "CPNDINDING",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * CPNDSUPING: A grouping of invoice element groups and details including the ones specifying the compound supplies being invoiced. It may also contain generic detail items such as markup.
     */
    CompoundSupplyInvoiceGroup: {
        display: "compound supply invoice group",
        code: "CPNDSUPING",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * CSINV: Clinical Services Invoice which can be used to describe a single service, multiple services or repeated services.
     *
     *                         [1] Single Clinical services invoice where the Invoice Grouping contains one billable item and is supported by one clinical service.
     *
     *                         For example, a single service for an office visit or simple clinical procedure (e.g. knee mobilization).
     *
     *                         [2] Multiple Clinical services invoice where the Invoice Grouping contains more than one billable item, supported by one or more clinical services.  The services can be distinct and over multiple dates, but for the same patient. This type of invoice includes a series of treatments which must be adjudicated together.
     *
     *                         For example, an adjustment and ultrasound for a chiropractic session where fees are associated for each of the services and adjudicated (invoiced) together.
     *
     *                         [3] Repeated Clinical services invoice where the Invoice Grouping contains one or more billable item, supported by the same clinical service repeated over a period of time.
     *
     *                         For example, the same Chiropractic adjustment (service or treatment) delivered on 3 separate occasions over a period of time at the discretion of the provider (e.g. month).
     */
    ClinicalServiceInvoice: {
        display: "clinical service invoice",
        code: "CSINV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * CSPINV: A clinical Invoice Grouping consisting of one or more services and one or more product.  Billing for these service(s) and product(s) are supported by multiple clinical billable events (acts).
     *
     *                         All items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator.
     *
     *                         For example , a brace (product) invoiced together with the fitting (service).
     */
    ClinicalServiceAndProduct: {
        display: "clinical service and product",
        code: "CSPINV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * DRUGING: A grouping of invoice element details including the one specifying the drug being invoiced. It may also contain generic detail items such as markup.
     */
    DrugInvoiceGroup: {
        display: "drug invoice group",
        code: "DRUGING",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * FININV: Invoice Grouping without clinical justification.  These will not require identification of participants and associations from a clinical context such as patient and provider.
     *
     *                         Examples are interest charges and mileage.
     */
    FinancialInvoice: {
        display: "financial invoice",
        code: "FININV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * FRAMEING: A grouping of invoice element details including the ones specifying the frame fee and the frame dispensing cost that are being invoiced.
     */
    FrameInvoiceGroup: {
        display: "frame invoice group",
        code: "FRAMEING",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * LENSING: A grouping of invoice element details including the ones specifying the lens fee and the lens dispensing cost that are being invoiced.
     */
    LensInvoiceGroup: {
        display: "lens invoice group",
        code: "LENSING",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * OHSINV: A clinical Invoice Grouping consisting of one or more oral health services. Billing for these service(s) are supported by multiple clinical billable events (acts).
     *
     *                         All items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator.
     */
    OralHealthService: {
        display: "oral health service",
        code: "OHSINV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * PAINV: HealthCare facility preferred accommodation invoice.
     */
    PreferredAccommodationInvoice: {
        display: "preferred accommodation invoice",
        code: "PAINV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * PRDING: A grouping of invoice element details including the one specifying the product (good or supply) being invoiced. It may also contain generic detail items such as tax or discount.
     */
    ProductInvoiceGroup: {
        display: "product invoice group",
        code: "PRDING",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * RXCINV: Pharmacy dispense invoice for a compound.
     */
    RxCompoundInvoice: {
        display: "Rx compound invoice",
        code: "RXCINV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * RXDINV: Pharmacy dispense invoice not involving a compound
     */
    RxDispenseInvoice: {
        display: "Rx dispense invoice",
        code: "RXDINV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * SBFINV: Clinical services invoice where the Invoice Group contains one billable item for multiple clinical services in one or more sessions.
     */
    SessionalOrBlockFeeInvoice: {
        display: "sessional or block fee invoice",
        code: "SBFINV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
    /**
     * VRXINV: Vision dispense invoice for up to 2 lens (left and right), frame and optional discount.  Eye exams are invoiced as a clinical service invoice.
     */
    VisionDispenseInvoice: {
        display: "vision dispense invoice",
        code: "VRXINV",
        system: "http://hl7.org/fhir/v3/ActCode",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjNBY3RJbnZvaWNlR3JvdXBDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9WM0FjdEludm9pY2VHcm91cENvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsZ0ZBQWdGO0FBb0hoRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUErQjtJQUNsRTs7Ozs7O09BTUc7SUFDSCx3QkFBd0IsRUFBRTtRQUN4QixPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLElBQUksRUFBRSwyQkFBMkI7UUFDakMsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOzs7Ozs7T0FNRztJQUNILHVCQUF1QixFQUFFO1FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7Ozs7T0FJRztJQUNILHNCQUFzQixFQUFFO1FBQ3RCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7O09BRUc7SUFDSCx3QkFBd0IsRUFBRTtRQUN4QixPQUFPLEVBQUUsNkJBQTZCO1FBQ3RDLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDs7T0FFRztJQUNILDhCQUE4QixFQUFFO1FBQzlCLE9BQU8sRUFBRSxtQ0FBbUM7UUFDNUMsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOztPQUVHO0lBQ0gsMEJBQTBCLEVBQUU7UUFDMUIsT0FBTyxFQUFFLCtCQUErQjtRQUN4QyxJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7O09BY0c7SUFDSCxzQkFBc0IsRUFBRTtRQUN0QixPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOzs7Ozs7T0FNRztJQUNILHlCQUF5QixFQUFFO1FBQ3pCLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOzs7O09BSUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUU7UUFDakIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOzs7O09BSUc7SUFDSCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOztPQUVHO0lBQ0gsNkJBQTZCLEVBQUU7UUFDN0IsT0FBTyxFQUFFLGlDQUFpQztRQUMxQyxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDs7T0FFRztJQUNILG1CQUFtQixFQUFFO1FBQ25CLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7O09BRUc7SUFDSCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUU7UUFDakIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDs7T0FFRztJQUNILDBCQUEwQixFQUFFO1FBQzFCLE9BQU8sRUFBRSxnQ0FBZ0M7UUFDekMsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7O09BRUc7SUFDSCxxQkFBcUIsRUFBRTtRQUNyQixPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvdjMtQWN0SW52b2ljZUdyb3VwQ29kZXwyMDE0LTAzLTI2XHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogIFR5cGUgb2YgaW52b2ljZSBlbGVtZW50IHRoYXQgaXMgdXNlZCB0byBhc3Npc3QgaW4gZGVzY3JpYmluZyBhbiBJbnZvaWNlIHRoYXQgaXMgZWl0aGVyIHN1Ym1pdHRlZCBmb3IgYWRqdWRpY2F0aW9uIG9yIGZvciB3aGljaCBpcyByZXR1cm5lZCBvbiBhZGp1ZGljYXRpb24gcmVzdWx0cy4gSW52b2ljZSBlbGVtZW50cyBvZiB0aGlzIHR5cGUgc2lnbmlmeSBhIGdyb3VwaW5nIG9mIG9uZSBvciBtb3JlIGNoaWxkcmVuIChkZXRhaWwpIGludm9pY2UgZWxlbWVudHMuICBUaGV5IGRvIG5vdCBoYXZlIGludHJpbnNpYyBjb3N0aW5nIGFzc29jaWF0ZWQgd2l0aCB0aGVtLCBidXQgbWVyZWx5IHJlZmxlY3QgdGhlIHN1bSBvZiBhbGwgY29zdGluZyBmb3IgaXQncyBpbW1lZGlhdGUgY2hpbGRyZW4gaW52b2ljZSBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFYzQWN0SW52b2ljZUdyb3VwQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBfQWN0SW52b2ljZUludGVyR3JvdXBDb2RlOiBUeXBlIG9mIGludm9pY2UgZWxlbWVudCB0aGF0IGlzIHVzZWQgdG8gYXNzaXN0IGluIGRlc2NyaWJpbmcgYW4gSW52b2ljZSB0aGF0IGlzIGVpdGhlciBzdWJtaXR0ZWQgZm9yIGFkanVkaWNhdGlvbiBvciBmb3Igd2hpY2ggaXMgcmV0dXJuZWQgb24gYWRqdWRpY2F0aW9uIHJlc3VsdHMuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZSBlbGVtZW50cyBvZiB0aGlzIHR5cGUgc2lnbmlmeSBhIGdyb3VwaW5nIG9mIG9uZSBvciBtb3JlIGNoaWxkcmVuIChkZXRhaWwpIGludm9pY2UgZWxlbWVudHMuICBUaGV5IGRvIG5vdCBoYXZlIGludHJpbnNpYyBjb3N0aW5nIGFzc29jaWF0ZWQgd2l0aCB0aGVtLCBidXQgbWVyZWx5IHJlZmxlY3QgdGhlIHN1bSBvZiBhbGwgY29zdGluZyBmb3IgaXQncyBpbW1lZGlhdGUgY2hpbGRyZW4gaW52b2ljZSBlbGVtZW50cy5cclxuICAgKiBcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZG9tYWluIGlzIG9ubHkgc3BlY2lmaWVkIGZvciBhbiBpbnRlcm1lZGlhdGUgaW52b2ljZSBlbGVtZW50IGdyb3VwIChub24tcm9vdCBvciBub24tdG9wIGxldmVsKSBmb3IgYW4gSW52b2ljZS5cclxuICAgKi9cclxuICBBY3RJbnZvaWNlSW50ZXJHcm91cENvZGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogX0FjdEludm9pY2VSb290R3JvdXBDb2RlOiBUeXBlIG9mIGludm9pY2UgZWxlbWVudCB0aGF0IGlzIHVzZWQgdG8gYXNzaXN0IGluIGRlc2NyaWJpbmcgYW4gSW52b2ljZSB0aGF0IGlzIGVpdGhlciBzdWJtaXR0ZWQgZm9yIGFkanVkaWNhdGlvbiBvciBmb3Igd2hpY2ggaXMgcmV0dXJuZWQgb24gYWRqdWRpY2F0aW9uIHJlc3VsdHMuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZSBlbGVtZW50cyBvZiB0aGlzIHR5cGUgc2lnbmlmeSBhIGdyb3VwaW5nIG9mIG9uZSBvciBtb3JlIGNoaWxkcmVuIChkZXRhaWwpIGludm9pY2UgZWxlbWVudHMuICBUaGV5IGRvIG5vdCBoYXZlIGludHJpbnNpYyBjb3N0aW5nIGFzc29jaWF0ZWQgd2l0aCB0aGVtLCBidXQgbWVyZWx5IHJlZmxlY3QgdGhlIHN1bSBvZiBhbGwgY29zdGluZyBmb3IgaXQncyBpbW1lZGlhdGUgY2hpbGRyZW4gaW52b2ljZSBlbGVtZW50cy5cclxuICAgKiBcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBDb2RlcyBmcm9tIHRoaXMgZG9tYWluIHJlZmxlY3QgdGhlIHR5cGUgb2YgSW52b2ljZSBzdWNoIGFzIFBoYXJtYWN5IERpc3BlbnNlLCBDbGluaWNhbCBTZXJ2aWNlIGFuZCBDbGluaWNhbCBQcm9kdWN0LiAgVGhlIGRvbWFpbiBpcyBvbmx5IHNwZWNpZmllZCBmb3IgdGhlIHJvb3QgKHRvcCBsZXZlbCkgaW52b2ljZSBlbGVtZW50IGdyb3VwIGZvciBhbiBJbnZvaWNlLlxyXG4gICAqL1xyXG4gIEFjdEludm9pY2VSb290R3JvdXBDb2RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENQSU5WOiBDbGluaWNhbCBwcm9kdWN0IGludm9pY2Ugd2hlcmUgdGhlIEludm9pY2UgR3JvdXBpbmcgY29udGFpbnMgb25lIG9yIG1vcmUgYmlsbGFibGUgaXRlbSBhbmQgaXMgc3VwcG9ydGVkIGJ5IGNsaW5pY2FsIHByb2R1Y3QocykuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIGEgY3J1dGNoIG9yIGEgd2hlZWxjaGFpci5cclxuICAgKi9cclxuICBDbGluaWNhbFByb2R1Y3RJbnZvaWNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENQTkREUkdJTkc6IEEgZ3JvdXBpbmcgb2YgaW52b2ljZSBlbGVtZW50IGdyb3VwcyBhbmQgZGV0YWlscyBpbmNsdWRpbmcgdGhlIG9uZXMgc3BlY2lmeWluZyB0aGUgY29tcG91bmQgaW5ncmVkaWVudHMgYmVpbmcgaW52b2ljZWQuIEl0IG1heSBhbHNvIGNvbnRhaW4gZ2VuZXJpYyBkZXRhaWwgaXRlbXMgc3VjaCBhcyBtYXJrdXAuXHJcbiAgICovXHJcbiAgQ29tcG91bmREcnVnSW52b2ljZUdyb3VwOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENQTkRJTkRJTkc6IEEgZ3JvdXBpbmcgb2YgaW52b2ljZSBlbGVtZW50IGRldGFpbHMgaW5jbHVkaW5nIHRoZSBvbmUgc3BlY2lmeWluZyBhbiBpbmdyZWRpZW50IGRydWcgYmVpbmcgaW52b2ljZWQuIEl0IG1heSBhbHNvIGNvbnRhaW4gZ2VuZXJpYyBkZXRhaWwgaXRlbXMgc3VjaCBhcyB0YXggb3IgbWFya3VwLlxyXG4gICAqL1xyXG4gIENvbXBvdW5kSW5ncmVkaWVudEludm9pY2VHcm91cDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDUE5EU1VQSU5HOiBBIGdyb3VwaW5nIG9mIGludm9pY2UgZWxlbWVudCBncm91cHMgYW5kIGRldGFpbHMgaW5jbHVkaW5nIHRoZSBvbmVzIHNwZWNpZnlpbmcgdGhlIGNvbXBvdW5kIHN1cHBsaWVzIGJlaW5nIGludm9pY2VkLiBJdCBtYXkgYWxzbyBjb250YWluIGdlbmVyaWMgZGV0YWlsIGl0ZW1zIHN1Y2ggYXMgbWFya3VwLlxyXG4gICAqL1xyXG4gIENvbXBvdW5kU3VwcGx5SW52b2ljZUdyb3VwOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENTSU5WOiBDbGluaWNhbCBTZXJ2aWNlcyBJbnZvaWNlIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGRlc2NyaWJlIGEgc2luZ2xlIHNlcnZpY2UsIG11bHRpcGxlIHNlcnZpY2VzIG9yIHJlcGVhdGVkIHNlcnZpY2VzLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIFsxXSBTaW5nbGUgQ2xpbmljYWwgc2VydmljZXMgaW52b2ljZSB3aGVyZSB0aGUgSW52b2ljZSBHcm91cGluZyBjb250YWlucyBvbmUgYmlsbGFibGUgaXRlbSBhbmQgaXMgc3VwcG9ydGVkIGJ5IG9uZSBjbGluaWNhbCBzZXJ2aWNlLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBleGFtcGxlLCBhIHNpbmdsZSBzZXJ2aWNlIGZvciBhbiBvZmZpY2UgdmlzaXQgb3Igc2ltcGxlIGNsaW5pY2FsIHByb2NlZHVyZSAoZS5nLiBrbmVlIG1vYmlsaXphdGlvbikuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgWzJdIE11bHRpcGxlIENsaW5pY2FsIHNlcnZpY2VzIGludm9pY2Ugd2hlcmUgdGhlIEludm9pY2UgR3JvdXBpbmcgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBiaWxsYWJsZSBpdGVtLCBzdXBwb3J0ZWQgYnkgb25lIG9yIG1vcmUgY2xpbmljYWwgc2VydmljZXMuICBUaGUgc2VydmljZXMgY2FuIGJlIGRpc3RpbmN0IGFuZCBvdmVyIG11bHRpcGxlIGRhdGVzLCBidXQgZm9yIHRoZSBzYW1lIHBhdGllbnQuIFRoaXMgdHlwZSBvZiBpbnZvaWNlIGluY2x1ZGVzIGEgc2VyaWVzIG9mIHRyZWF0bWVudHMgd2hpY2ggbXVzdCBiZSBhZGp1ZGljYXRlZCB0b2dldGhlci5cclxuICAgKiBcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgZXhhbXBsZSwgYW4gYWRqdXN0bWVudCBhbmQgdWx0cmFzb3VuZCBmb3IgYSBjaGlyb3ByYWN0aWMgc2Vzc2lvbiB3aGVyZSBmZWVzIGFyZSBhc3NvY2lhdGVkIGZvciBlYWNoIG9mIHRoZSBzZXJ2aWNlcyBhbmQgYWRqdWRpY2F0ZWQgKGludm9pY2VkKSB0b2dldGhlci5cclxuICAgKiBcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBbM10gUmVwZWF0ZWQgQ2xpbmljYWwgc2VydmljZXMgaW52b2ljZSB3aGVyZSB0aGUgSW52b2ljZSBHcm91cGluZyBjb250YWlucyBvbmUgb3IgbW9yZSBiaWxsYWJsZSBpdGVtLCBzdXBwb3J0ZWQgYnkgdGhlIHNhbWUgY2xpbmljYWwgc2VydmljZSByZXBlYXRlZCBvdmVyIGEgcGVyaW9kIG9mIHRpbWUuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIHRoZSBzYW1lIENoaXJvcHJhY3RpYyBhZGp1c3RtZW50IChzZXJ2aWNlIG9yIHRyZWF0bWVudCkgZGVsaXZlcmVkIG9uIDMgc2VwYXJhdGUgb2NjYXNpb25zIG92ZXIgYSBwZXJpb2Qgb2YgdGltZSBhdCB0aGUgZGlzY3JldGlvbiBvZiB0aGUgcHJvdmlkZXIgKGUuZy4gbW9udGgpLlxyXG4gICAqL1xyXG4gIENsaW5pY2FsU2VydmljZUludm9pY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ1NQSU5WOiBBIGNsaW5pY2FsIEludm9pY2UgR3JvdXBpbmcgY29uc2lzdGluZyBvZiBvbmUgb3IgbW9yZSBzZXJ2aWNlcyBhbmQgb25lIG9yIG1vcmUgcHJvZHVjdC4gIEJpbGxpbmcgZm9yIHRoZXNlIHNlcnZpY2UocykgYW5kIHByb2R1Y3QocykgYXJlIHN1cHBvcnRlZCBieSBtdWx0aXBsZSBjbGluaWNhbCBiaWxsYWJsZSBldmVudHMgKGFjdHMpLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBpdGVtcyBpbiB0aGUgSW52b2ljZSBHcm91cGluZyBtdXN0IGJlIGFkanVkaWNhdGVkIHRvZ2V0aGVyIHRvIGJlIGFjY2VwdGFibGUgdG8gdGhlIEFkanVkaWNhdG9yLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBleGFtcGxlICwgYSBicmFjZSAocHJvZHVjdCkgaW52b2ljZWQgdG9nZXRoZXIgd2l0aCB0aGUgZml0dGluZyAoc2VydmljZSkuXHJcbiAgICovXHJcbiAgQ2xpbmljYWxTZXJ2aWNlQW5kUHJvZHVjdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBEUlVHSU5HOiBBIGdyb3VwaW5nIG9mIGludm9pY2UgZWxlbWVudCBkZXRhaWxzIGluY2x1ZGluZyB0aGUgb25lIHNwZWNpZnlpbmcgdGhlIGRydWcgYmVpbmcgaW52b2ljZWQuIEl0IG1heSBhbHNvIGNvbnRhaW4gZ2VuZXJpYyBkZXRhaWwgaXRlbXMgc3VjaCBhcyBtYXJrdXAuXHJcbiAgICovXHJcbiAgRHJ1Z0ludm9pY2VHcm91cDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBGSU5JTlY6IEludm9pY2UgR3JvdXBpbmcgd2l0aG91dCBjbGluaWNhbCBqdXN0aWZpY2F0aW9uLiAgVGhlc2Ugd2lsbCBub3QgcmVxdWlyZSBpZGVudGlmaWNhdGlvbiBvZiBwYXJ0aWNpcGFudHMgYW5kIGFzc29jaWF0aW9ucyBmcm9tIGEgY2xpbmljYWwgY29udGV4dCBzdWNoIGFzIHBhdGllbnQgYW5kIHByb3ZpZGVyLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIEV4YW1wbGVzIGFyZSBpbnRlcmVzdCBjaGFyZ2VzIGFuZCBtaWxlYWdlLlxyXG4gICAqL1xyXG4gIEZpbmFuY2lhbEludm9pY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogRlJBTUVJTkc6IEEgZ3JvdXBpbmcgb2YgaW52b2ljZSBlbGVtZW50IGRldGFpbHMgaW5jbHVkaW5nIHRoZSBvbmVzIHNwZWNpZnlpbmcgdGhlIGZyYW1lIGZlZSBhbmQgdGhlIGZyYW1lIGRpc3BlbnNpbmcgY29zdCB0aGF0IGFyZSBiZWluZyBpbnZvaWNlZC5cclxuICAgKi9cclxuICBGcmFtZUludm9pY2VHcm91cDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBMRU5TSU5HOiBBIGdyb3VwaW5nIG9mIGludm9pY2UgZWxlbWVudCBkZXRhaWxzIGluY2x1ZGluZyB0aGUgb25lcyBzcGVjaWZ5aW5nIHRoZSBsZW5zIGZlZSBhbmQgdGhlIGxlbnMgZGlzcGVuc2luZyBjb3N0IHRoYXQgYXJlIGJlaW5nIGludm9pY2VkLlxyXG4gICAqL1xyXG4gIExlbnNJbnZvaWNlR3JvdXA6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogT0hTSU5WOiBBIGNsaW5pY2FsIEludm9pY2UgR3JvdXBpbmcgY29uc2lzdGluZyBvZiBvbmUgb3IgbW9yZSBvcmFsIGhlYWx0aCBzZXJ2aWNlcy4gQmlsbGluZyBmb3IgdGhlc2Ugc2VydmljZShzKSBhcmUgc3VwcG9ydGVkIGJ5IG11bHRpcGxlIGNsaW5pY2FsIGJpbGxhYmxlIGV2ZW50cyAoYWN0cykuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgQWxsIGl0ZW1zIGluIHRoZSBJbnZvaWNlIEdyb3VwaW5nIG11c3QgYmUgYWRqdWRpY2F0ZWQgdG9nZXRoZXIgdG8gYmUgYWNjZXB0YWJsZSB0byB0aGUgQWRqdWRpY2F0b3IuXHJcbiAgICovXHJcbiAgT3JhbEhlYWx0aFNlcnZpY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogUEFJTlY6IEhlYWx0aENhcmUgZmFjaWxpdHkgcHJlZmVycmVkIGFjY29tbW9kYXRpb24gaW52b2ljZS5cclxuICAgKi9cclxuICBQcmVmZXJyZWRBY2NvbW1vZGF0aW9uSW52b2ljZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBQUkRJTkc6IEEgZ3JvdXBpbmcgb2YgaW52b2ljZSBlbGVtZW50IGRldGFpbHMgaW5jbHVkaW5nIHRoZSBvbmUgc3BlY2lmeWluZyB0aGUgcHJvZHVjdCAoZ29vZCBvciBzdXBwbHkpIGJlaW5nIGludm9pY2VkLiBJdCBtYXkgYWxzbyBjb250YWluIGdlbmVyaWMgZGV0YWlsIGl0ZW1zIHN1Y2ggYXMgdGF4IG9yIGRpc2NvdW50LlxyXG4gICAqL1xyXG4gIFByb2R1Y3RJbnZvaWNlR3JvdXA6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogUlhDSU5WOiBQaGFybWFjeSBkaXNwZW5zZSBpbnZvaWNlIGZvciBhIGNvbXBvdW5kLlxyXG4gICAqL1xyXG4gIFJ4Q29tcG91bmRJbnZvaWNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFJYRElOVjogUGhhcm1hY3kgZGlzcGVuc2UgaW52b2ljZSBub3QgaW52b2x2aW5nIGEgY29tcG91bmRcclxuICAgKi9cclxuICBSeERpc3BlbnNlSW52b2ljZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBTQkZJTlY6IENsaW5pY2FsIHNlcnZpY2VzIGludm9pY2Ugd2hlcmUgdGhlIEludm9pY2UgR3JvdXAgY29udGFpbnMgb25lIGJpbGxhYmxlIGl0ZW0gZm9yIG11bHRpcGxlIGNsaW5pY2FsIHNlcnZpY2VzIGluIG9uZSBvciBtb3JlIHNlc3Npb25zLlxyXG4gICAqL1xyXG4gIFNlc3Npb25hbE9yQmxvY2tGZWVJbnZvaWNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFZSWElOVjogVmlzaW9uIGRpc3BlbnNlIGludm9pY2UgZm9yIHVwIHRvIDIgbGVucyAobGVmdCBhbmQgcmlnaHQpLCBmcmFtZSBhbmQgb3B0aW9uYWwgZGlzY291bnQuICBFeWUgZXhhbXMgYXJlIGludm9pY2VkIGFzIGEgY2xpbmljYWwgc2VydmljZSBpbnZvaWNlLlxyXG4gICAqL1xyXG4gIFZpc2lvbkRpc3BlbnNlSW52b2ljZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqICBUeXBlIG9mIGludm9pY2UgZWxlbWVudCB0aGF0IGlzIHVzZWQgdG8gYXNzaXN0IGluIGRlc2NyaWJpbmcgYW4gSW52b2ljZSB0aGF0IGlzIGVpdGhlciBzdWJtaXR0ZWQgZm9yIGFkanVkaWNhdGlvbiBvciBmb3Igd2hpY2ggaXMgcmV0dXJuZWQgb24gYWRqdWRpY2F0aW9uIHJlc3VsdHMuIEludm9pY2UgZWxlbWVudHMgb2YgdGhpcyB0eXBlIHNpZ25pZnkgYSBncm91cGluZyBvZiBvbmUgb3IgbW9yZSBjaGlsZHJlbiAoZGV0YWlsKSBpbnZvaWNlIGVsZW1lbnRzLiAgVGhleSBkbyBub3QgaGF2ZSBpbnRyaW5zaWMgY29zdGluZyBhc3NvY2lhdGVkIHdpdGggdGhlbSwgYnV0IG1lcmVseSByZWZsZWN0IHRoZSBzdW0gb2YgYWxsIGNvc3RpbmcgZm9yIGl0J3MgaW1tZWRpYXRlIGNoaWxkcmVuIGludm9pY2UgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVjNBY3RJbnZvaWNlR3JvdXBDb2RpbmdzOlYzQWN0SW52b2ljZUdyb3VwQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBfQWN0SW52b2ljZUludGVyR3JvdXBDb2RlOiBUeXBlIG9mIGludm9pY2UgZWxlbWVudCB0aGF0IGlzIHVzZWQgdG8gYXNzaXN0IGluIGRlc2NyaWJpbmcgYW4gSW52b2ljZSB0aGF0IGlzIGVpdGhlciBzdWJtaXR0ZWQgZm9yIGFkanVkaWNhdGlvbiBvciBmb3Igd2hpY2ggaXMgcmV0dXJuZWQgb24gYWRqdWRpY2F0aW9uIHJlc3VsdHMuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZSBlbGVtZW50cyBvZiB0aGlzIHR5cGUgc2lnbmlmeSBhIGdyb3VwaW5nIG9mIG9uZSBvciBtb3JlIGNoaWxkcmVuIChkZXRhaWwpIGludm9pY2UgZWxlbWVudHMuICBUaGV5IGRvIG5vdCBoYXZlIGludHJpbnNpYyBjb3N0aW5nIGFzc29jaWF0ZWQgd2l0aCB0aGVtLCBidXQgbWVyZWx5IHJlZmxlY3QgdGhlIHN1bSBvZiBhbGwgY29zdGluZyBmb3IgaXQncyBpbW1lZGlhdGUgY2hpbGRyZW4gaW52b2ljZSBlbGVtZW50cy5cclxuICAgKiBcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZG9tYWluIGlzIG9ubHkgc3BlY2lmaWVkIGZvciBhbiBpbnRlcm1lZGlhdGUgaW52b2ljZSBlbGVtZW50IGdyb3VwIChub24tcm9vdCBvciBub24tdG9wIGxldmVsKSBmb3IgYW4gSW52b2ljZS5cclxuICAgKi9cclxuICBBY3RJbnZvaWNlSW50ZXJHcm91cENvZGU6IHtcclxuICAgIGRpc3BsYXk6IFwiQWN0SW52b2ljZUludGVyR3JvdXBDb2RlXCIsXHJcbiAgICBjb2RlOiBcIl9BY3RJbnZvaWNlSW50ZXJHcm91cENvZGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIF9BY3RJbnZvaWNlUm9vdEdyb3VwQ29kZTogVHlwZSBvZiBpbnZvaWNlIGVsZW1lbnQgdGhhdCBpcyB1c2VkIHRvIGFzc2lzdCBpbiBkZXNjcmliaW5nIGFuIEludm9pY2UgdGhhdCBpcyBlaXRoZXIgc3VibWl0dGVkIGZvciBhZGp1ZGljYXRpb24gb3IgZm9yIHdoaWNoIGlzIHJldHVybmVkIG9uIGFkanVkaWNhdGlvbiByZXN1bHRzLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2UgZWxlbWVudHMgb2YgdGhpcyB0eXBlIHNpZ25pZnkgYSBncm91cGluZyBvZiBvbmUgb3IgbW9yZSBjaGlsZHJlbiAoZGV0YWlsKSBpbnZvaWNlIGVsZW1lbnRzLiAgVGhleSBkbyBub3QgaGF2ZSBpbnRyaW5zaWMgY29zdGluZyBhc3NvY2lhdGVkIHdpdGggdGhlbSwgYnV0IG1lcmVseSByZWZsZWN0IHRoZSBzdW0gb2YgYWxsIGNvc3RpbmcgZm9yIGl0J3MgaW1tZWRpYXRlIGNoaWxkcmVuIGludm9pY2UgZWxlbWVudHMuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgQ29kZXMgZnJvbSB0aGlzIGRvbWFpbiByZWZsZWN0IHRoZSB0eXBlIG9mIEludm9pY2Ugc3VjaCBhcyBQaGFybWFjeSBEaXNwZW5zZSwgQ2xpbmljYWwgU2VydmljZSBhbmQgQ2xpbmljYWwgUHJvZHVjdC4gIFRoZSBkb21haW4gaXMgb25seSBzcGVjaWZpZWQgZm9yIHRoZSByb290ICh0b3AgbGV2ZWwpIGludm9pY2UgZWxlbWVudCBncm91cCBmb3IgYW4gSW52b2ljZS5cclxuICAgKi9cclxuICBBY3RJbnZvaWNlUm9vdEdyb3VwQ29kZToge1xyXG4gICAgZGlzcGxheTogXCJBY3RJbnZvaWNlUm9vdEdyb3VwQ29kZVwiLFxyXG4gICAgY29kZTogXCJfQWN0SW52b2ljZVJvb3RHcm91cENvZGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENQSU5WOiBDbGluaWNhbCBwcm9kdWN0IGludm9pY2Ugd2hlcmUgdGhlIEludm9pY2UgR3JvdXBpbmcgY29udGFpbnMgb25lIG9yIG1vcmUgYmlsbGFibGUgaXRlbSBhbmQgaXMgc3VwcG9ydGVkIGJ5IGNsaW5pY2FsIHByb2R1Y3QocykuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIGEgY3J1dGNoIG9yIGEgd2hlZWxjaGFpci5cclxuICAgKi9cclxuICBDbGluaWNhbFByb2R1Y3RJbnZvaWNlOiB7XHJcbiAgICBkaXNwbGF5OiBcImNsaW5pY2FsIHByb2R1Y3QgaW52b2ljZVwiLFxyXG4gICAgY29kZTogXCJDUElOVlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ1BORERSR0lORzogQSBncm91cGluZyBvZiBpbnZvaWNlIGVsZW1lbnQgZ3JvdXBzIGFuZCBkZXRhaWxzIGluY2x1ZGluZyB0aGUgb25lcyBzcGVjaWZ5aW5nIHRoZSBjb21wb3VuZCBpbmdyZWRpZW50cyBiZWluZyBpbnZvaWNlZC4gSXQgbWF5IGFsc28gY29udGFpbiBnZW5lcmljIGRldGFpbCBpdGVtcyBzdWNoIGFzIG1hcmt1cC5cclxuICAgKi9cclxuICBDb21wb3VuZERydWdJbnZvaWNlR3JvdXA6IHtcclxuICAgIGRpc3BsYXk6IFwiY29tcG91bmQgZHJ1ZyBpbnZvaWNlIGdyb3VwXCIsXHJcbiAgICBjb2RlOiBcIkNQTkREUkdJTkdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENQTkRJTkRJTkc6IEEgZ3JvdXBpbmcgb2YgaW52b2ljZSBlbGVtZW50IGRldGFpbHMgaW5jbHVkaW5nIHRoZSBvbmUgc3BlY2lmeWluZyBhbiBpbmdyZWRpZW50IGRydWcgYmVpbmcgaW52b2ljZWQuIEl0IG1heSBhbHNvIGNvbnRhaW4gZ2VuZXJpYyBkZXRhaWwgaXRlbXMgc3VjaCBhcyB0YXggb3IgbWFya3VwLlxyXG4gICAqL1xyXG4gIENvbXBvdW5kSW5ncmVkaWVudEludm9pY2VHcm91cDoge1xyXG4gICAgZGlzcGxheTogXCJjb21wb3VuZCBpbmdyZWRpZW50IGludm9pY2UgZ3JvdXBcIixcclxuICAgIGNvZGU6IFwiQ1BORElORElOR1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ1BORFNVUElORzogQSBncm91cGluZyBvZiBpbnZvaWNlIGVsZW1lbnQgZ3JvdXBzIGFuZCBkZXRhaWxzIGluY2x1ZGluZyB0aGUgb25lcyBzcGVjaWZ5aW5nIHRoZSBjb21wb3VuZCBzdXBwbGllcyBiZWluZyBpbnZvaWNlZC4gSXQgbWF5IGFsc28gY29udGFpbiBnZW5lcmljIGRldGFpbCBpdGVtcyBzdWNoIGFzIG1hcmt1cC5cclxuICAgKi9cclxuICBDb21wb3VuZFN1cHBseUludm9pY2VHcm91cDoge1xyXG4gICAgZGlzcGxheTogXCJjb21wb3VuZCBzdXBwbHkgaW52b2ljZSBncm91cFwiLFxyXG4gICAgY29kZTogXCJDUE5EU1VQSU5HXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDU0lOVjogQ2xpbmljYWwgU2VydmljZXMgSW52b2ljZSB3aGljaCBjYW4gYmUgdXNlZCB0byBkZXNjcmliZSBhIHNpbmdsZSBzZXJ2aWNlLCBtdWx0aXBsZSBzZXJ2aWNlcyBvciByZXBlYXRlZCBzZXJ2aWNlcy5cclxuICAgKiBcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBbMV0gU2luZ2xlIENsaW5pY2FsIHNlcnZpY2VzIGludm9pY2Ugd2hlcmUgdGhlIEludm9pY2UgR3JvdXBpbmcgY29udGFpbnMgb25lIGJpbGxhYmxlIGl0ZW0gYW5kIGlzIHN1cHBvcnRlZCBieSBvbmUgY2xpbmljYWwgc2VydmljZS5cclxuICAgKiBcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgZXhhbXBsZSwgYSBzaW5nbGUgc2VydmljZSBmb3IgYW4gb2ZmaWNlIHZpc2l0IG9yIHNpbXBsZSBjbGluaWNhbCBwcm9jZWR1cmUgKGUuZy4ga25lZSBtb2JpbGl6YXRpb24pLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIFsyXSBNdWx0aXBsZSBDbGluaWNhbCBzZXJ2aWNlcyBpbnZvaWNlIHdoZXJlIHRoZSBJbnZvaWNlIEdyb3VwaW5nIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgYmlsbGFibGUgaXRlbSwgc3VwcG9ydGVkIGJ5IG9uZSBvciBtb3JlIGNsaW5pY2FsIHNlcnZpY2VzLiAgVGhlIHNlcnZpY2VzIGNhbiBiZSBkaXN0aW5jdCBhbmQgb3ZlciBtdWx0aXBsZSBkYXRlcywgYnV0IGZvciB0aGUgc2FtZSBwYXRpZW50LiBUaGlzIHR5cGUgb2YgaW52b2ljZSBpbmNsdWRlcyBhIHNlcmllcyBvZiB0cmVhdG1lbnRzIHdoaWNoIG11c3QgYmUgYWRqdWRpY2F0ZWQgdG9nZXRoZXIuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIGFuIGFkanVzdG1lbnQgYW5kIHVsdHJhc291bmQgZm9yIGEgY2hpcm9wcmFjdGljIHNlc3Npb24gd2hlcmUgZmVlcyBhcmUgYXNzb2NpYXRlZCBmb3IgZWFjaCBvZiB0aGUgc2VydmljZXMgYW5kIGFkanVkaWNhdGVkIChpbnZvaWNlZCkgdG9nZXRoZXIuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgWzNdIFJlcGVhdGVkIENsaW5pY2FsIHNlcnZpY2VzIGludm9pY2Ugd2hlcmUgdGhlIEludm9pY2UgR3JvdXBpbmcgY29udGFpbnMgb25lIG9yIG1vcmUgYmlsbGFibGUgaXRlbSwgc3VwcG9ydGVkIGJ5IHRoZSBzYW1lIGNsaW5pY2FsIHNlcnZpY2UgcmVwZWF0ZWQgb3ZlciBhIHBlcmlvZCBvZiB0aW1lLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBleGFtcGxlLCB0aGUgc2FtZSBDaGlyb3ByYWN0aWMgYWRqdXN0bWVudCAoc2VydmljZSBvciB0cmVhdG1lbnQpIGRlbGl2ZXJlZCBvbiAzIHNlcGFyYXRlIG9jY2FzaW9ucyBvdmVyIGEgcGVyaW9kIG9mIHRpbWUgYXQgdGhlIGRpc2NyZXRpb24gb2YgdGhlIHByb3ZpZGVyIChlLmcuIG1vbnRoKS5cclxuICAgKi9cclxuICBDbGluaWNhbFNlcnZpY2VJbnZvaWNlOiB7XHJcbiAgICBkaXNwbGF5OiBcImNsaW5pY2FsIHNlcnZpY2UgaW52b2ljZVwiLFxyXG4gICAgY29kZTogXCJDU0lOVlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ1NQSU5WOiBBIGNsaW5pY2FsIEludm9pY2UgR3JvdXBpbmcgY29uc2lzdGluZyBvZiBvbmUgb3IgbW9yZSBzZXJ2aWNlcyBhbmQgb25lIG9yIG1vcmUgcHJvZHVjdC4gIEJpbGxpbmcgZm9yIHRoZXNlIHNlcnZpY2UocykgYW5kIHByb2R1Y3QocykgYXJlIHN1cHBvcnRlZCBieSBtdWx0aXBsZSBjbGluaWNhbCBiaWxsYWJsZSBldmVudHMgKGFjdHMpLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBpdGVtcyBpbiB0aGUgSW52b2ljZSBHcm91cGluZyBtdXN0IGJlIGFkanVkaWNhdGVkIHRvZ2V0aGVyIHRvIGJlIGFjY2VwdGFibGUgdG8gdGhlIEFkanVkaWNhdG9yLlxyXG4gICAqIFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBleGFtcGxlICwgYSBicmFjZSAocHJvZHVjdCkgaW52b2ljZWQgdG9nZXRoZXIgd2l0aCB0aGUgZml0dGluZyAoc2VydmljZSkuXHJcbiAgICovXHJcbiAgQ2xpbmljYWxTZXJ2aWNlQW5kUHJvZHVjdDoge1xyXG4gICAgZGlzcGxheTogXCJjbGluaWNhbCBzZXJ2aWNlIGFuZCBwcm9kdWN0XCIsXHJcbiAgICBjb2RlOiBcIkNTUElOVlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogRFJVR0lORzogQSBncm91cGluZyBvZiBpbnZvaWNlIGVsZW1lbnQgZGV0YWlscyBpbmNsdWRpbmcgdGhlIG9uZSBzcGVjaWZ5aW5nIHRoZSBkcnVnIGJlaW5nIGludm9pY2VkLiBJdCBtYXkgYWxzbyBjb250YWluIGdlbmVyaWMgZGV0YWlsIGl0ZW1zIHN1Y2ggYXMgbWFya3VwLlxyXG4gICAqL1xyXG4gIERydWdJbnZvaWNlR3JvdXA6IHtcclxuICAgIGRpc3BsYXk6IFwiZHJ1ZyBpbnZvaWNlIGdyb3VwXCIsXHJcbiAgICBjb2RlOiBcIkRSVUdJTkdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEZJTklOVjogSW52b2ljZSBHcm91cGluZyB3aXRob3V0IGNsaW5pY2FsIGp1c3RpZmljYXRpb24uICBUaGVzZSB3aWxsIG5vdCByZXF1aXJlIGlkZW50aWZpY2F0aW9uIG9mIHBhcnRpY2lwYW50cyBhbmQgYXNzb2NpYXRpb25zIGZyb20gYSBjbGluaWNhbCBjb250ZXh0IHN1Y2ggYXMgcGF0aWVudCBhbmQgcHJvdmlkZXIuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgRXhhbXBsZXMgYXJlIGludGVyZXN0IGNoYXJnZXMgYW5kIG1pbGVhZ2UuXHJcbiAgICovXHJcbiAgRmluYW5jaWFsSW52b2ljZToge1xyXG4gICAgZGlzcGxheTogXCJmaW5hbmNpYWwgaW52b2ljZVwiLFxyXG4gICAgY29kZTogXCJGSU5JTlZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEZSQU1FSU5HOiBBIGdyb3VwaW5nIG9mIGludm9pY2UgZWxlbWVudCBkZXRhaWxzIGluY2x1ZGluZyB0aGUgb25lcyBzcGVjaWZ5aW5nIHRoZSBmcmFtZSBmZWUgYW5kIHRoZSBmcmFtZSBkaXNwZW5zaW5nIGNvc3QgdGhhdCBhcmUgYmVpbmcgaW52b2ljZWQuXHJcbiAgICovXHJcbiAgRnJhbWVJbnZvaWNlR3JvdXA6IHtcclxuICAgIGRpc3BsYXk6IFwiZnJhbWUgaW52b2ljZSBncm91cFwiLFxyXG4gICAgY29kZTogXCJGUkFNRUlOR1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogTEVOU0lORzogQSBncm91cGluZyBvZiBpbnZvaWNlIGVsZW1lbnQgZGV0YWlscyBpbmNsdWRpbmcgdGhlIG9uZXMgc3BlY2lmeWluZyB0aGUgbGVucyBmZWUgYW5kIHRoZSBsZW5zIGRpc3BlbnNpbmcgY29zdCB0aGF0IGFyZSBiZWluZyBpbnZvaWNlZC5cclxuICAgKi9cclxuICBMZW5zSW52b2ljZUdyb3VwOiB7XHJcbiAgICBkaXNwbGF5OiBcImxlbnMgaW52b2ljZSBncm91cFwiLFxyXG4gICAgY29kZTogXCJMRU5TSU5HXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPSFNJTlY6IEEgY2xpbmljYWwgSW52b2ljZSBHcm91cGluZyBjb25zaXN0aW5nIG9mIG9uZSBvciBtb3JlIG9yYWwgaGVhbHRoIHNlcnZpY2VzLiBCaWxsaW5nIGZvciB0aGVzZSBzZXJ2aWNlKHMpIGFyZSBzdXBwb3J0ZWQgYnkgbXVsdGlwbGUgY2xpbmljYWwgYmlsbGFibGUgZXZlbnRzIChhY3RzKS5cclxuICAgKiBcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgaXRlbXMgaW4gdGhlIEludm9pY2UgR3JvdXBpbmcgbXVzdCBiZSBhZGp1ZGljYXRlZCB0b2dldGhlciB0byBiZSBhY2NlcHRhYmxlIHRvIHRoZSBBZGp1ZGljYXRvci5cclxuICAgKi9cclxuICBPcmFsSGVhbHRoU2VydmljZToge1xyXG4gICAgZGlzcGxheTogXCJvcmFsIGhlYWx0aCBzZXJ2aWNlXCIsXHJcbiAgICBjb2RlOiBcIk9IU0lOVlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogUEFJTlY6IEhlYWx0aENhcmUgZmFjaWxpdHkgcHJlZmVycmVkIGFjY29tbW9kYXRpb24gaW52b2ljZS5cclxuICAgKi9cclxuICBQcmVmZXJyZWRBY2NvbW1vZGF0aW9uSW52b2ljZToge1xyXG4gICAgZGlzcGxheTogXCJwcmVmZXJyZWQgYWNjb21tb2RhdGlvbiBpbnZvaWNlXCIsXHJcbiAgICBjb2RlOiBcIlBBSU5WXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBQUkRJTkc6IEEgZ3JvdXBpbmcgb2YgaW52b2ljZSBlbGVtZW50IGRldGFpbHMgaW5jbHVkaW5nIHRoZSBvbmUgc3BlY2lmeWluZyB0aGUgcHJvZHVjdCAoZ29vZCBvciBzdXBwbHkpIGJlaW5nIGludm9pY2VkLiBJdCBtYXkgYWxzbyBjb250YWluIGdlbmVyaWMgZGV0YWlsIGl0ZW1zIHN1Y2ggYXMgdGF4IG9yIGRpc2NvdW50LlxyXG4gICAqL1xyXG4gIFByb2R1Y3RJbnZvaWNlR3JvdXA6IHtcclxuICAgIGRpc3BsYXk6IFwicHJvZHVjdCBpbnZvaWNlIGdyb3VwXCIsXHJcbiAgICBjb2RlOiBcIlBSRElOR1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogUlhDSU5WOiBQaGFybWFjeSBkaXNwZW5zZSBpbnZvaWNlIGZvciBhIGNvbXBvdW5kLlxyXG4gICAqL1xyXG4gIFJ4Q29tcG91bmRJbnZvaWNlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJ4IGNvbXBvdW5kIGludm9pY2VcIixcclxuICAgIGNvZGU6IFwiUlhDSU5WXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBSWERJTlY6IFBoYXJtYWN5IGRpc3BlbnNlIGludm9pY2Ugbm90IGludm9sdmluZyBhIGNvbXBvdW5kXHJcbiAgICovXHJcbiAgUnhEaXNwZW5zZUludm9pY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiUnggZGlzcGVuc2UgaW52b2ljZVwiLFxyXG4gICAgY29kZTogXCJSWERJTlZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFNCRklOVjogQ2xpbmljYWwgc2VydmljZXMgaW52b2ljZSB3aGVyZSB0aGUgSW52b2ljZSBHcm91cCBjb250YWlucyBvbmUgYmlsbGFibGUgaXRlbSBmb3IgbXVsdGlwbGUgY2xpbmljYWwgc2VydmljZXMgaW4gb25lIG9yIG1vcmUgc2Vzc2lvbnMuXHJcbiAgICovXHJcbiAgU2Vzc2lvbmFsT3JCbG9ja0ZlZUludm9pY2U6IHtcclxuICAgIGRpc3BsYXk6IFwic2Vzc2lvbmFsIG9yIGJsb2NrIGZlZSBpbnZvaWNlXCIsXHJcbiAgICBjb2RlOiBcIlNCRklOVlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogVlJYSU5WOiBWaXNpb24gZGlzcGVuc2UgaW52b2ljZSBmb3IgdXAgdG8gMiBsZW5zIChsZWZ0IGFuZCByaWdodCksIGZyYW1lIGFuZCBvcHRpb25hbCBkaXNjb3VudC4gIEV5ZSBleGFtcyBhcmUgaW52b2ljZWQgYXMgYSBjbGluaWNhbCBzZXJ2aWNlIGludm9pY2UuXHJcbiAgICovXHJcbiAgVmlzaW9uRGlzcGVuc2VJbnZvaWNlOiB7XHJcbiAgICBkaXNwbGF5OiBcInZpc2lvbiBkaXNwZW5zZSBpbnZvaWNlXCIsXHJcbiAgICBjb2RlOiBcIlZSWElOVlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==