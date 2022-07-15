import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of publication such as book, database, or journal.
 */
export declare type PublishedInTypeCodingType = {
    /**
     * D001877: Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.
     */
    Book: CodingArgs;
    /**
     * D019991: A structured file of information or a set of logically related data stored and retrieved using computer-based means.
     */
    Database: CodingArgs;
    /**
     * D020492: Publication intended to be issued on an ongoing basis, generally more frequently than annually, containing separate articles, stories, or writings.
     */
    Periodical: CodingArgs;
    /**
     * D064886: Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.
     */
    Dataset: CodingArgs;
};
/**
 * The type of publication such as book, database, or journal.
 */
export declare const PublishedInTypeCodings: PublishedInTypeCodingType;
//# sourceMappingURL=PublishedInTypeCodings.d.ts.map