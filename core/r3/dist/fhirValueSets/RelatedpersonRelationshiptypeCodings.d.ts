import { CodingArgs } from '../fhir/Coding.js';
/**
 * A set of codes that can be used to indicate the relationship between a Patient and a Related Person.
 */
export declare type RelatedpersonRelationshiptypeCodingType = {
    /**
     * _PersonalRelationshipRoleType: PersonalRelationshipRoleType
     */
    PersonalRelationshipRoleType: CodingArgs;
    /**
     * ADOPTF: The player of the role (father) is a male who has taken the scoper (child) into their family through legal means and raises them as his own child.
     */
    AdoptiveFather: CodingArgs;
    /**
     * ADOPTM: The player of the role (father) is a female who has taken the scoper (child) into their family through legal means and raises them as her own child.
     */
    AdoptiveMother: CodingArgs;
    /**
     * ADOPTP: The player of the role (parent) has taken the scoper (child) into their family through legal means and raises them as his or her own child.
     */
    AdoptiveParent: CodingArgs;
    /**
     * AUNT: The player of the role is a sister of the scoping person's mother or father.
     */
    Aunt: CodingArgs;
    /**
     * Code: BP
     */
    BillingContactPerson: CodingArgs;
    /**
     * BRO: The player of the role is a male sharing one or both parents in common with the scoping entity.
     */
    Brother: CodingArgs;
    /**
     * BROINLAW: The player of the role is: (1) a brother of the scoping person's spouse, or (2) the husband of the scoping person's sister, or (3) the husband of a sister of the scoping person's spouse.
     */
    BrotherInLaw: CodingArgs;
    /**
     * Code: C
     */
    EmergencyContact: CodingArgs;
    /**
     * CHILD: The player of the role is a child of the scoping entity.
     */
    Child: CodingArgs;
    /**
     * CHLDADOPT: The player of the role is a child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    AdoptedChild: CodingArgs;
    /**
     * CHLDFOST: The player of the role is a child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    FosterChild: CodingArgs;
    /**
     * CHLDINLAW: The player of the role is the spouse of scoping person's child.
     */
    ChildInLaw: CodingArgs;
    /**
     * COUSN: The player of the role is a relative of the scoping person descended from a common ancestor, such as a 	grandparent, by two or more steps in a diverging line.
     */
    Cousin: CodingArgs;
    /**
     * Code: CP
     */
    ContactPerson: CodingArgs;
    /**
     * DAU: The player of the role is a female offspring of the scoping entity (parent).
     */
    NaturalDaughter: CodingArgs;
    /**
     * DAUADOPT: The player of the role is a female child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    AdoptedDaughter: CodingArgs;
    /**
     * DAUC: Description: The player of the role is a female child (of any type) of scoping entity (parent)
     */
    Daughter: CodingArgs;
    /**
     * DAUFOST: The player of the role is a female child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    FosterDaughter: CodingArgs;
    /**
     * DAUINLAW: The player of the role is the wife of scoping person's son.
     */
    DaughterInLaw: CodingArgs;
    /**
     * DOMPART: The player of the role cohabits with the scoping person but is not the scoping person's spouse.
     */
    DomesticPartner: CodingArgs;
    /**
     * Code: E
     */
    Employer: CodingArgs;
    /**
     * Code: EP
     */
    EmergencyContactPerson: CodingArgs;
    /**
     * EXT: Description: A family member not having an immediate genetic or legal relationship e.g. Aunt, cousin, great grandparent, grandchild, grandparent, niece, nephew or uncle.
     */
    ExtendedFamilyMember: CodingArgs;
    /**
     * Code: F
     */
    FederalAgency: CodingArgs;
    /**
     * FAMMEMB: A relationship between two people characterizing their "familial" relationship
     */
    FamilyMember: CodingArgs;
    /**
     * FMRSPS: Player of the role was previously joined to the scoping person in marriage and this marriage is now dissolved and inactive.
     *
     *
     *                            Usage Note: This is significant to indicate as some jurisdictions have different legal requirements for former spouse to access the patient's record, from a general friend.
     */
    FormerSpouse: CodingArgs;
    /**
     * FRND: The player of the role is a person who is known, liked, and trusted by the scoping person.
     */
    UnrelatedFriend: CodingArgs;
    /**
     * FTH: The player of the role is a male who begets or raises or nurtures the scoping entity (child).
     */
    Father: CodingArgs;
    /**
     * FTHFOST: The player of the role (parent) who is a male state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    FosterFather: CodingArgs;
    /**
     * FTHINLAW: The player of the role is the father of the scoping person's husband or wife.
     */
    FatherInLaw: CodingArgs;
    /**
     * FTWIN: The scoper and player were carried in the same womb and share common biological parents but are the product of distinct egg/sperm pairs.
     */
    FraternalTwin: CodingArgs;
    /**
     * FTWINBRO: The scoper was carried in the same womb as the male player and shares common biological parents but is the product of a distinct egg/sperm pair.
     */
    FraternalTwinBrother: CodingArgs;
    /**
     * FTWINSIS: The scoper was carried in the same womb as the female player and shares common biological parents but is the product of a distinct egg/sperm pair.
     */
    FraternalTwinSister: CodingArgs;
    /**
     * GESTM: The player is a female whose womb carries the fetus of the scoper.  Generally used when the gestational mother and natural mother are not the same.
     */
    GestationalMother: CodingArgs;
    /**
     * GGRFTH: The player of the role is the father of the scoping person's grandparent.
     */
    GreatGrandfather: CodingArgs;
    /**
     * GGRMTH: The player of the role is the mother of the scoping person's grandparent.
     */
    GreatGrandmother: CodingArgs;
    /**
     * GGRPRN: The player of the role is a parent of the scoping person's grandparent.
     */
    GreatGrandparent: CodingArgs;
    /**
     * GRFTH: The player of the role is the father of the scoping person's mother or father.
     */
    Grandfather: CodingArgs;
    /**
     * GRMTH: The player of the role is the mother of the scoping person's mother or father.
     */
    Grandmother: CodingArgs;
    /**
     * GRNDCHILD: The player of the role is a child of the scoping person's son or daughter.
     */
    Grandchild: CodingArgs;
    /**
     * GRNDDAU: The player of the role is a daughter of the scoping person's son or daughter.
     */
    Granddaughter: CodingArgs;
    /**
     * GRNDSON: The player of the role is a son of the scoping person's son or daughter.
     */
    Grandson: CodingArgs;
    /**
     * GRPRN: The player of the role is a parent of the scoping person's mother or father.
     */
    Grandparent: CodingArgs;
    /**
     * HBRO: The player of the role is a male related to the scoping entity by sharing only one biological parent.
     */
    HalfBrother: CodingArgs;
    /**
     * HSIB: The player of the role is related to the scoping entity by sharing only one biological parent.
     */
    HalfSibling: CodingArgs;
    /**
     * HSIS: The player of the role is a female related to the scoping entity by sharing only one biological parent.
     */
    HalfSister: CodingArgs;
    /**
     * HUSB: The player of the role is a man joined to a woman (scoping person) in marriage.
     */
    Husband: CodingArgs;
    /**
     * Code: I
     */
    InsuranceCompany: CodingArgs;
    /**
     * INLAW: A relationship between an individual and a member of their spousal partner's immediate family.
     */
    Inlaw: CodingArgs;
    /**
     * ITWIN: The scoper and player are offspring of the same egg-sperm pair.
     */
    IdenticalTwin: CodingArgs;
    /**
     * ITWINBRO: The male scoper is an offspring of the same egg-sperm pair as the male player.
     */
    IdenticalTwinBrother: CodingArgs;
    /**
     * ITWINSIS: The female scoper is an offspring of the same egg-sperm pair as the female player.
     */
    IdenticalTwinSister: CodingArgs;
    /**
     * MAUNT: Description:The player of the role is a biological sister of the scoping person's biological mother.
     */
    MaternalAunt: CodingArgs;
    /**
     * MCOUSN: Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's mother's side, such as a grandparent, by two or more steps in a diverging line.
     */
    MaternalCousin: CodingArgs;
    /**
     * MGGRFTH: Description:The player of the role is the biological father of the scoping person's biological mother's parent.
     */
    MaternalGreatGrandfather: CodingArgs;
    /**
     * MGGRMTH: Description:The player of the role is the biological mother of the scoping person's biological mother's parent.
     */
    MaternalGreatGrandmother: CodingArgs;
    /**
     * MGGRPRN: Description:The player of the role is a biological parent of the scoping person's biological mother's parent.
     */
    MaternalGreatGrandparent: CodingArgs;
    /**
     * MGRFTH: Description:The player of the role is the biological father of the scoping person's biological mother.
     */
    MaternalGrandfather: CodingArgs;
    /**
     * MGRMTH: Description:The player of the role is the biological mother of the scoping person's biological mother.
     */
    MaternalGrandmother: CodingArgs;
    /**
     * MGRPRN: Description:The player of the role is the biological parent of the scoping person's biological mother.
     */
    MaternalGrandparent: CodingArgs;
    /**
     * MTH: The player of the role is a female who conceives, gives birth to, or raises and nurtures the scoping entity (child).
     */
    Mother: CodingArgs;
    /**
     * MTHFOST: The player of the role (parent) who is a female state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    FosterMother: CodingArgs;
    /**
     * MTHINLAW: The player of the role is the mother of the scoping person's husband or wife.
     */
    MotherInLaw: CodingArgs;
    /**
     * MUNCLE: Description:The player of the role is a biological brother of the scoping person's biological mother.
     */
    MaternalUncle: CodingArgs;
    /**
     * Code: N
     */
    NextOfKin: CodingArgs;
    /**
     * NBOR: The player of the role lives near or next to the 	scoping person.
     */
    Neighbor: CodingArgs;
    /**
     * NBRO: The player of the role is a male having the same biological parents as the scoping entity.
     */
    NaturalBrother: CodingArgs;
    /**
     * NCHILD: The player of the role is an offspring of the scoping entity as determined by birth.
     */
    NaturalChild: CodingArgs;
    /**
     * NEPHEW: The player of the role is a son of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    Nephew: CodingArgs;
    /**
     * NFTH: The player of the role is a male who begets the scoping entity (child).
     */
    NaturalFather: CodingArgs;
    /**
     * NFTHF: Indicates the biologic male parent of a fetus.
     */
    NaturalFatherOfFetus: CodingArgs;
    /**
     * NIECE: The player of the role is a daughter of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    Niece: CodingArgs;
    /**
     * NIENEPH: The player of the role is a child of scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    NieceNephew: CodingArgs;
    /**
     * NMTH: The player of the role is a female who conceives or gives birth to the scoping entity (child).
     */
    NaturalMother: CodingArgs;
    /**
     * NMTHF: The player is the biologic female parent of the scoping fetus.
     */
    NaturalMotherOfFetus: CodingArgs;
    /**
     * NPRN: natural parent
     */
    NaturalParent: CodingArgs;
    /**
     * NSIB: The player of the role has both biological parents in common with the scoping entity.
     */
    NaturalSibling: CodingArgs;
    /**
     * NSIS: The player of the role is a female having the same biological parents as the scoping entity.
     */
    NaturalSister: CodingArgs;
    /**
     * Code: O
     */
    Other: CodingArgs;
    /**
     * ONESELF: The relationship that a person has with his or her self.
     */
    Self: CodingArgs;
    /**
     * PAUNT: Description:The player of the role is a biological sister of the scoping person's biological father.
     */
    PaternalAunt: CodingArgs;
    /**
     * PCOUSN: Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's father's side, such as a grandparent, by two or more steps in a diverging line.
     */
    PaternalCousin: CodingArgs;
    /**
     * PGGRFTH: Description:The player of the role is the biological father of the scoping person's biological father's parent.
     */
    PaternalGreatGrandfather: CodingArgs;
    /**
     * PGGRMTH: Description:The player of the role is the biological mother of the scoping person's biological father's parent.
     */
    PaternalGreatGrandmother: CodingArgs;
    /**
     * PGGRPRN: Description:The player of the role is a biological parent of the scoping person's biological father's parent.
     */
    PaternalGreatGrandparent: CodingArgs;
    /**
     * PGRFTH: Description:The player of the role is the biological father of the scoping person's biological father.
     */
    PaternalGrandfather: CodingArgs;
    /**
     * PGRMTH: Description:The player of the role is the biological mother of the scoping person's biological father.
     */
    PaternalGrandmother: CodingArgs;
    /**
     * PGRPRN: Description:The player of the role is the biological parent of the scoping person's biological father.
     */
    PaternalGrandparent: CodingArgs;
    /**
     * Code: PR
     */
    PersonPreparingReferral: CodingArgs;
    /**
     * PRN: The player of the role is one who begets, gives birth to, or nurtures and raises the scoping entity (child).
     */
    Parent: CodingArgs;
    /**
     * PRNFOST: The player of the role (parent) who is a state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    FosterParent: CodingArgs;
    /**
     * PRNINLAW: The player of the role is the parent of scoping person's husband or wife.
     */
    ParentInLaw: CodingArgs;
    /**
     * PUNCLE: Description:The player of the role is a biological brother of the scoping person's biological father.
     */
    PaternalUncle: CodingArgs;
    /**
     * ROOM: One who shares living quarters with the subject.
     */
    Roommate: CodingArgs;
    /**
     * Code: S
     */
    StateAgency: CodingArgs;
    /**
     * SIB: The player of the role shares one or both parents in common with the scoping entity.
     */
    Sibling: CodingArgs;
    /**
     * SIBINLAW: The player of the role is: (1) a sibling of the scoping person's spouse, or (2) the spouse of the scoping person's sibling, or (3) the spouse of a sibling of the scoping person's spouse.
     */
    SiblingInLaw: CodingArgs;
    /**
     * SIGOTHR: A person who is important to one's well being; especially a spouse or one in a similar relationship.  (The player is the one who is important)
     */
    SignificantOther: CodingArgs;
    /**
     * SIS: The player of the role is a female sharing one or both parents in common with the scoping entity.
     */
    Sister: CodingArgs;
    /**
     * SISINLAW: The player of the role is: (1) a sister of the scoping person's spouse, or (2) the wife of the scoping person's brother, or (3) the wife of a brother of the scoping person's spouse.
     */
    SisterInLaw: CodingArgs;
    /**
     * SON: The player of the role is a male offspring of the scoping entity (parent).
     */
    NaturalSon: CodingArgs;
    /**
     * SONADOPT: The player of the role is a male child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    AdoptedSon: CodingArgs;
    /**
     * SONC: Description: The player of the role is a male child (of any type) of scoping entity (parent)
     */
    Son: CodingArgs;
    /**
     * SONFOST: The player of the role is a male child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    FosterSon: CodingArgs;
    /**
     * SONINLAW: The player of the role is the husband of scoping person's daughter.
     */
    SonInLaw: CodingArgs;
    /**
     * SPS: The player of the role is a marriage partner of the scoping person.
     */
    Spouse: CodingArgs;
    /**
     * STPBRO: The player of the role is a son of the scoping person's stepparent.
     */
    Stepbrother: CodingArgs;
    /**
     * STPCHLD: The player of the role is a child of the scoping person's spouse by a previous union.
     */
    StepChild: CodingArgs;
    /**
     * STPDAU: The player of the role is a daughter of the scoping person's spouse by a previous union.
     */
    Stepdaughter: CodingArgs;
    /**
     * STPFTH: The player of the role is the husband of scoping person's mother and not the scoping person's natural father.
     */
    Stepfather: CodingArgs;
    /**
     * STPMTH: The player of the role is the wife of scoping person's father and not the scoping person's natural mother.
     */
    Stepmother: CodingArgs;
    /**
     * STPPRN: The player of the role is the spouse of the scoping person's parent and not the scoping person's natural parent.
     */
    StepParent: CodingArgs;
    /**
     * STPSIB: The player of the role is a child of the scoping person's stepparent.
     */
    StepSibling: CodingArgs;
    /**
     * STPSIS: The player of the role is a daughter of the scoping person's stepparent.
     */
    Stepsister: CodingArgs;
    /**
     * STPSON: The player of the role is a son of the scoping person's spouse by a previous union.
     */
    Stepson: CodingArgs;
    /**
     * TWIN: The scoper and player were carried in the same womb and shared common biological parents.
     */
    Twin: CodingArgs;
    /**
     * TWINBRO: The scoper was carried in the same womb as the male player and shares common biological parents.
     */
    TwinBrother: CodingArgs;
    /**
     * TWINSIS: The scoper was carried in the same womb as the female player and shares common biological parents.
     */
    TwinSister: CodingArgs;
    /**
     * Code: U
     */
    Unknown: CodingArgs;
    /**
     * UNCLE: The player of the role is a brother of the scoping person's mother or father.
     */
    Uncle: CodingArgs;
    /**
     * WIFE: The player of the role is a woman joined to a man (scoping person) in marriage.
     */
    Wife: CodingArgs;
};
/**
 * A set of codes that can be used to indicate the relationship between a Patient and a Related Person.
 */
export declare const RelatedpersonRelationshiptypeCodings: RelatedpersonRelationshiptypeCodingType;
//# sourceMappingURL=RelatedpersonRelationshiptypeCodings.d.ts.map