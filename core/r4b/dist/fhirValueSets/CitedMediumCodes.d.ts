/**
 * NLM codes Internet or Print.
 */
export declare const CitedMediumCodes: {
    /**
     * internet: Online publication in a periodic release. Used to match NLM JournalIssue CitedMedium code for online version.
     */
    readonly Internet: "internet";
    /**
     * internet-without-issue: Online publication without any periodic release. Used for article specific publication date which could be the same as or different from journal issue publication date.
     */
    readonly InternetWithoutIssue: "internet-without-issue";
    /**
     * offline-digital-storage: Publication in a physical device for electronic data storage, organized in issues for periodic release.
     */
    readonly OfflineDigitalStorage: "offline-digital-storage";
    /**
     * offline-digital-storage-without-issue: Publication in a physical device for electronic data storage, without any periodic release.
     */
    readonly OfflineDigitalStorageWithoutIssue: "offline-digital-storage-without-issue";
    /**
     * print: Print publication in a periodic release. Used to match NLM JournalIssue CitedMedium code for print version.
     */
    readonly Print: "print";
    /**
     * print-without-issue: Print publication without any periodic release.
     */
    readonly PrintWithoutIssue: "print-without-issue";
};
/**
 * NLM codes Internet or Print.
 */
export declare type CitedMediumCodeType = typeof CitedMediumCodes[keyof typeof CitedMediumCodes];
//# sourceMappingURL=CitedMediumCodes.d.ts.map