import { CodingArgs } from '../fhir/Coding.js';
/**
 * Used to code the format of the display string.
 */
export declare type ContributorRoleCodingType = {
    /**
     * author: An entity primarily responsible for making the resource, often called author or creator
     */
    AuthorCreator: CodingArgs;
    /**
     * editor: Entity that revises or has authority to control the content
     */
    Editor: CodingArgs;
    /**
     * endorser: Entity that supports, approves, or advocates for the content
     */
    Endorser: CodingArgs;
    /**
     * funder: Entity that supplies financial support
     */
    Funder: CodingArgs;
    /**
     * informant: Entity that supplies information
     */
    Informant: CodingArgs;
    /**
     * publisher: Entity that makes the content available for public use
     */
    Publisher: CodingArgs;
    /**
     * reviewer: Entity that examines the content, formally or informally, and suggests revisions or comments
     */
    Reviewer: CodingArgs;
};
/**
 * Used to code the format of the display string.
 */
export declare const ContributorRoleCodings: ContributorRoleCodingType;
//# sourceMappingURL=ContributorRoleCodings.d.ts.map