/**
 * The type of publication such as book, database, or journal.
 */
export declare const PublishedInTypeCodes: {
    /**
     * D001877: Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.
     */
    readonly Book: "D001877";
    /**
     * D019991: A structured file of information or a set of logically related data stored and retrieved using computer-based means.
     */
    readonly Database: "D019991";
    /**
     * D020492: Publication intended to be issued on an ongoing basis, generally more frequently than annually, containing separate articles, stories, or writings.
     */
    readonly Periodical: "D020492";
    /**
     * D064886: Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.
     */
    readonly Dataset: "D064886";
};
/**
 * The type of publication such as book, database, or journal.
 */
export declare type PublishedInTypeCodeType = typeof PublishedInTypeCodes[keyof typeof PublishedInTypeCodes];
//# sourceMappingURL=PublishedInTypeCodes.d.ts.map