import { CodingArgs } from '../fhir/Coding.js';
/**
 *  Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results. Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
 */
export declare type V3ActInvoiceGroupCodingType = {
    /**
     * _ActInvoiceInterGroupCode: Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     *
     *                         The domain is only specified for an intermediate invoice element group (non-root or non-top level) for an Invoice.
     */
    ActInvoiceInterGroupCode: CodingArgs;
    /**
     * _ActInvoiceRootGroupCode: Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     *
     *                         Codes from this domain reflect the type of Invoice such as Pharmacy Dispense, Clinical Service and Clinical Product.  The domain is only specified for the root (top level) invoice element group for an Invoice.
     */
    ActInvoiceRootGroupCode: CodingArgs;
    /**
     * CPINV: Clinical product invoice where the Invoice Grouping contains one or more billable item and is supported by clinical product(s).
     *
     *                         For example, a crutch or a wheelchair.
     */
    ClinicalProductInvoice: CodingArgs;
    /**
     * CPNDDRGING: A grouping of invoice element groups and details including the ones specifying the compound ingredients being invoiced. It may also contain generic detail items such as markup.
     */
    CompoundDrugInvoiceGroup: CodingArgs;
    /**
     * CPNDINDING: A grouping of invoice element details including the one specifying an ingredient drug being invoiced. It may also contain generic detail items such as tax or markup.
     */
    CompoundIngredientInvoiceGroup: CodingArgs;
    /**
     * CPNDSUPING: A grouping of invoice element groups and details including the ones specifying the compound supplies being invoiced. It may also contain generic detail items such as markup.
     */
    CompoundSupplyInvoiceGroup: CodingArgs;
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
    ClinicalServiceInvoice: CodingArgs;
    /**
     * CSPINV: A clinical Invoice Grouping consisting of one or more services and one or more product.  Billing for these service(s) and product(s) are supported by multiple clinical billable events (acts).
     *
     *                         All items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator.
     *
     *                         For example , a brace (product) invoiced together with the fitting (service).
     */
    ClinicalServiceAndProduct: CodingArgs;
    /**
     * DRUGING: A grouping of invoice element details including the one specifying the drug being invoiced. It may also contain generic detail items such as markup.
     */
    DrugInvoiceGroup: CodingArgs;
    /**
     * FININV: Invoice Grouping without clinical justification.  These will not require identification of participants and associations from a clinical context such as patient and provider.
     *
     *                         Examples are interest charges and mileage.
     */
    FinancialInvoice: CodingArgs;
    /**
     * FRAMEING: A grouping of invoice element details including the ones specifying the frame fee and the frame dispensing cost that are being invoiced.
     */
    FrameInvoiceGroup: CodingArgs;
    /**
     * LENSING: A grouping of invoice element details including the ones specifying the lens fee and the lens dispensing cost that are being invoiced.
     */
    LensInvoiceGroup: CodingArgs;
    /**
     * OHSINV: A clinical Invoice Grouping consisting of one or more oral health services. Billing for these service(s) are supported by multiple clinical billable events (acts).
     *
     *                         All items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator.
     */
    OralHealthService: CodingArgs;
    /**
     * PAINV: HealthCare facility preferred accommodation invoice.
     */
    PreferredAccommodationInvoice: CodingArgs;
    /**
     * PRDING: A grouping of invoice element details including the one specifying the product (good or supply) being invoiced. It may also contain generic detail items such as tax or discount.
     */
    ProductInvoiceGroup: CodingArgs;
    /**
     * RXCINV: Pharmacy dispense invoice for a compound.
     */
    RxCompoundInvoice: CodingArgs;
    /**
     * RXDINV: Pharmacy dispense invoice not involving a compound
     */
    RxDispenseInvoice: CodingArgs;
    /**
     * SBFINV: Clinical services invoice where the Invoice Group contains one billable item for multiple clinical services in one or more sessions.
     */
    SessionalOrBlockFeeInvoice: CodingArgs;
    /**
     * VRXINV: Vision dispense invoice for up to 2 lens (left and right), frame and optional discount.  Eye exams are invoiced as a clinical service invoice.
     */
    VisionDispenseInvoice: CodingArgs;
};
/**
 *  Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results. Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
 */
export declare const V3ActInvoiceGroupCodings: V3ActInvoiceGroupCodingType;
//# sourceMappingURL=V3ActInvoiceGroupCodings.d.ts.map