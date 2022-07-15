/**
 * Used to code the format of the display string.
 */
export declare const ContributorRoleCodes: {
    /**
     * author: An entity primarily responsible for making the resource, often called author or creator
     */
    readonly AuthorCreator: "author";
    /**
     * editor: Entity that revises or has authority to control the content
     */
    readonly Editor: "editor";
    /**
     * endorser: Entity that supports, approves, or advocates for the content
     */
    readonly Endorser: "endorser";
    /**
     * funder: Entity that supplies financial support
     */
    readonly Funder: "funder";
    /**
     * informant: Entity that supplies information
     */
    readonly Informant: "informant";
    /**
     * publisher: Entity that makes the content available for public use
     */
    readonly Publisher: "publisher";
    /**
     * reviewer: Entity that examines the content, formally or informally, and suggests revisions or comments
     */
    readonly Reviewer: "reviewer";
};
/**
 * Used to code the format of the display string.
 */
export declare type ContributorRoleCodeType = typeof ContributorRoleCodes[keyof typeof ContributorRoleCodes];
//# sourceMappingURL=ContributorRoleCodes.d.ts.map