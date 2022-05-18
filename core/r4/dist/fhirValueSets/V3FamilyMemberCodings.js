/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 *  A relationship between two people characterizing their "familial" relationship
 */
var V3FamilyMemberCodings = {
    /**
     * ADOPTF: The player of the role (father) is a male who has taken the scoper (child) into their family through legal means and raises them as his own child.
     */
    AdoptiveFather: new Coding({
        display: "adoptive father",
        code: "ADOPTF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ADOPTM: The player of the role (father) is a female who has taken the scoper (child) into their family through legal means and raises them as her own child.
     */
    AdoptiveMother: new Coding({
        display: "adoptive mother",
        code: "ADOPTM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ADOPTP: The player of the role (parent) has taken the scoper (child) into their family through legal means and raises them as his or her own child.
     */
    AdoptiveParent: new Coding({
        display: "adoptive parent",
        code: "ADOPTP",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * AUNT: The player of the role is a sister of the scoping person's mother or father.
     */
    Aunt: new Coding({
        display: "aunt",
        code: "AUNT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * BRO: The player of the role is a male sharing one or both parents in common with the scoping entity.
     */
    Brother: new Coding({
        display: "brother",
        code: "BRO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * BROINLAW: The player of the role is: (1) a brother of the scoping person's spouse, or (2) the husband of the scoping person's sister, or (3) the husband of a sister of the scoping person's spouse.
     */
    BrotherInLaw: new Coding({
        display: "brother-in-law",
        code: "BROINLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CHILD: The player of the role is a child of the scoping entity.
     */
    Child: new Coding({
        display: "child",
        code: "CHILD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CHLDADOPT: The player of the role is a child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    AdoptedChild: new Coding({
        display: "adopted child",
        code: "CHLDADOPT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CHLDFOST: The player of the role is a child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    FosterChild: new Coding({
        display: "foster child",
        code: "CHLDFOST",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CHLDINLAW: The player of the role is the spouse of scoping person's child.
     */
    ChildInLaw: new Coding({
        display: "child-in-law",
        code: "CHLDINLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * COUSN: The player of the role is a relative of the scoping person descended from a common ancestor, such as a 	grandparent, by two or more steps in a diverging line.
     */
    Cousin: new Coding({
        display: "cousin",
        code: "COUSN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * DAU: The player of the role is a female offspring of the scoping entity (parent).
     */
    NaturalDaughter: new Coding({
        display: "natural daughter",
        code: "DAU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * DAUADOPT: The player of the role is a female child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    AdoptedDaughter: new Coding({
        display: "adopted daughter",
        code: "DAUADOPT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * DAUC: Description: The player of the role is a female child (of any type) of scoping entity (parent)
     */
    Daughter: new Coding({
        display: "daughter",
        code: "DAUC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * DAUFOST: The player of the role is a female child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    FosterDaughter: new Coding({
        display: "foster daughter",
        code: "DAUFOST",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * DAUINLAW: The player of the role is the wife of scoping person's son.
     */
    DaughterInLaw: new Coding({
        display: "daughter in-law",
        code: "DAUINLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * DOMPART: The player of the role cohabits with the scoping person but is not the scoping person's spouse.
     */
    DomesticPartner: new Coding({
        display: "domestic partner",
        code: "DOMPART",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * EXT: Description: A family member not having an immediate genetic or legal relationship e.g. Aunt, cousin, great grandparent, grandchild, grandparent, niece, nephew or uncle.
     */
    ExtendedFamilyMember: new Coding({
        display: "extended family member",
        code: "EXT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * FAMMEMB: A relationship between two people characterizing their "familial" relationship
     */
    FamilyMember: new Coding({
        display: "family member",
        code: "FAMMEMB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * FMRSPS: Player of the role was previously joined to the scoping person in marriage and this marriage is now dissolved and inactive.
     *
     *
     *                            Usage Note: This is significant to indicate as some jurisdictions have different legal requirements for former spouse to access the patient's record, from a general friend.
     */
    FormerSpouse: new Coding({
        display: "former spouse",
        code: "FMRSPS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * FTH: The player of the role is a male who begets or raises or nurtures the scoping entity (child).
     */
    Father: new Coding({
        display: "father",
        code: "FTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * FTHFOST: The player of the role (parent) who is a male state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    FosterFather: new Coding({
        display: "foster father",
        code: "FTHFOST",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * FTHINLAW: The player of the role is the father of the scoping person's husband or wife.
     */
    FatherInLaw: new Coding({
        display: "father-in-law",
        code: "FTHINLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * FTWIN: The scoper and player were carried in the same womb and share common biological parents but are the product of distinct egg/sperm pairs.
     */
    FraternalTwin: new Coding({
        display: "fraternal twin",
        code: "FTWIN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * FTWINBRO: The scoper was carried in the same womb as the male player and shares common biological parents but is the product of a distinct egg/sperm pair.
     */
    FraternalTwinBrother: new Coding({
        display: "fraternal twin brother",
        code: "FTWINBRO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * FTWINSIS: The scoper was carried in the same womb as the female player and shares common biological parents but is the product of a distinct egg/sperm pair.
     */
    FraternalTwinSister: new Coding({
        display: "fraternal twin sister",
        code: "FTWINSIS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GESTM: The player is a female whose womb carries the fetus of the scoper.  Generally used when the gestational mother and natural mother are not the same.
     */
    GestationalMother: new Coding({
        display: "gestational mother",
        code: "GESTM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GGRFTH: The player of the role is the father of the scoping person's grandparent.
     */
    GreatGrandfather: new Coding({
        display: "great grandfather",
        code: "GGRFTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GGRMTH: The player of the role is the mother of the scoping person's grandparent.
     */
    GreatGrandmother: new Coding({
        display: "great grandmother",
        code: "GGRMTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GGRPRN: The player of the role is a parent of the scoping person's grandparent.
     */
    GreatGrandparent: new Coding({
        display: "great grandparent",
        code: "GGRPRN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GRFTH: The player of the role is the father of the scoping person's mother or father.
     */
    Grandfather: new Coding({
        display: "grandfather",
        code: "GRFTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GRMTH: The player of the role is the mother of the scoping person's mother or father.
     */
    Grandmother: new Coding({
        display: "grandmother",
        code: "GRMTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GRNDCHILD: The player of the role is a child of the scoping person's son or daughter.
     */
    Grandchild: new Coding({
        display: "grandchild",
        code: "GRNDCHILD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GRNDDAU: The player of the role is a daughter of the scoping person's son or daughter.
     */
    Granddaughter: new Coding({
        display: "granddaughter",
        code: "GRNDDAU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GRNDSON: The player of the role is a son of the scoping person's son or daughter.
     */
    Grandson: new Coding({
        display: "grandson",
        code: "GRNDSON",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GRPRN: The player of the role is a parent of the scoping person's mother or father.
     */
    Grandparent: new Coding({
        display: "grandparent",
        code: "GRPRN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HBRO: The player of the role is a male related to the scoping entity by sharing only one biological parent.
     */
    HalfBrother: new Coding({
        display: "half-brother",
        code: "HBRO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HSIB: The player of the role is related to the scoping entity by sharing only one biological parent.
     */
    HalfSibling: new Coding({
        display: "half-sibling",
        code: "HSIB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HSIS: The player of the role is a female related to the scoping entity by sharing only one biological parent.
     */
    HalfSister: new Coding({
        display: "half-sister",
        code: "HSIS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HUSB: The player of the role is a man joined to a woman (scoping person) in marriage.
     */
    Husband: new Coding({
        display: "husband",
        code: "HUSB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * INLAW: A relationship between an individual and a member of their spousal partner's immediate family.
     */
    Inlaw: new Coding({
        display: "inlaw",
        code: "INLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ITWIN: The scoper and player are offspring of the same egg-sperm pair.
     */
    IdenticalTwin: new Coding({
        display: "identical twin",
        code: "ITWIN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ITWINBRO: The male scoper is an offspring of the same egg-sperm pair as the male player.
     */
    IdenticalTwinBrother: new Coding({
        display: "identical twin brother",
        code: "ITWINBRO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ITWINSIS: The female scoper is an offspring of the same egg-sperm pair as the female player.
     */
    IdenticalTwinSister: new Coding({
        display: "identical twin sister",
        code: "ITWINSIS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MAUNT: Description:The player of the role is a biological sister of the scoping person's biological mother.
     */
    MaternalAunt: new Coding({
        display: "maternal aunt",
        code: "MAUNT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MCOUSN: Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's mother's side, such as a grandparent, by two or more steps in a diverging line.
     */
    MaternalCousin: new Coding({
        display: "maternal cousin",
        code: "MCOUSN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MGGRFTH: Description:The player of the role is the biological father of the scoping person's biological mother's parent.
     */
    MaternalGreatGrandfather: new Coding({
        display: "maternal great-grandfather",
        code: "MGGRFTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MGGRMTH: Description:The player of the role is the biological mother of the scoping person's biological mother's parent.
     */
    MaternalGreatGrandmother: new Coding({
        display: "maternal great-grandmother",
        code: "MGGRMTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MGGRPRN: Description:The player of the role is a biological parent of the scoping person's biological mother's parent.
     */
    MaternalGreatGrandparent: new Coding({
        display: "maternal great-grandparent",
        code: "MGGRPRN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MGRFTH: Description:The player of the role is the biological father of the scoping person's biological mother.
     */
    MaternalGrandfather: new Coding({
        display: "maternal grandfather",
        code: "MGRFTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MGRMTH: Description:The player of the role is the biological mother of the scoping person's biological mother.
     */
    MaternalGrandmother: new Coding({
        display: "maternal grandmother",
        code: "MGRMTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MGRPRN: Description:The player of the role is the biological parent of the scoping person's biological mother.
     */
    MaternalGrandparent: new Coding({
        display: "maternal grandparent",
        code: "MGRPRN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MTH: The player of the role is a female who conceives, gives birth to, or raises and nurtures the scoping entity (child).
     */
    Mother: new Coding({
        display: "mother",
        code: "MTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MTHFOST: The player of the role (parent) who is a female state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    FosterMother: new Coding({
        display: "foster mother",
        code: "MTHFOST",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MTHINLAW: The player of the role is the mother of the scoping person's husband or wife.
     */
    MotherInLaw: new Coding({
        display: "mother-in-law",
        code: "MTHINLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MUNCLE: Description:The player of the role is a biological brother of the scoping person's biological mother.
     */
    MaternalUncle: new Coding({
        display: "maternal uncle",
        code: "MUNCLE",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NBRO: The player of the role is a male having the same biological parents as the scoping entity.
     */
    NaturalBrother: new Coding({
        display: "natural brother",
        code: "NBRO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NCHILD: The player of the role is an offspring of the scoping entity as determined by birth.
     */
    NaturalChild: new Coding({
        display: "natural child",
        code: "NCHILD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NEPHEW: The player of the role is a son of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    Nephew: new Coding({
        display: "nephew",
        code: "NEPHEW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NFTH: The player of the role is a male who begets the scoping entity (child).
     */
    NaturalFather: new Coding({
        display: "natural father",
        code: "NFTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NFTHF: Indicates the biologic male parent of a fetus.
     */
    NaturalFatherOfFetus: new Coding({
        display: "natural father of fetus",
        code: "NFTHF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NIECE: The player of the role is a daughter of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    Niece: new Coding({
        display: "niece",
        code: "NIECE",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NIENEPH: The player of the role is a child of scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    NieceNephew: new Coding({
        display: "niece/nephew",
        code: "NIENEPH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NMTH: The player of the role is a female who conceives or gives birth to the scoping entity (child).
     */
    NaturalMother: new Coding({
        display: "natural mother",
        code: "NMTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NMTHF: The player is the biologic female parent of the scoping fetus.
     */
    NaturalMotherOfFetus: new Coding({
        display: "natural mother of fetus",
        code: "NMTHF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NPRN: natural parent
     */
    NaturalParent: new Coding({
        display: "natural parent",
        code: "NPRN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NSIB: The player of the role has both biological parents in common with the scoping entity.
     */
    NaturalSibling: new Coding({
        display: "natural sibling",
        code: "NSIB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NSIS: The player of the role is a female having the same biological parents as the scoping entity.
     */
    NaturalSister: new Coding({
        display: "natural sister",
        code: "NSIS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PAUNT: Description:The player of the role is a biological sister of the scoping person's biological father.
     */
    PaternalAunt: new Coding({
        display: "paternal aunt",
        code: "PAUNT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PCOUSN: Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's father's side, such as a grandparent, by two or more steps in a diverging line.
     */
    PaternalCousin: new Coding({
        display: "paternal cousin",
        code: "PCOUSN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PGGRFTH: Description:The player of the role is the biological father of the scoping person's biological father's parent.
     */
    PaternalGreatGrandfather: new Coding({
        display: "paternal great-grandfather",
        code: "PGGRFTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PGGRMTH: Description:The player of the role is the biological mother of the scoping person's biological father's parent.
     */
    PaternalGreatGrandmother: new Coding({
        display: "paternal great-grandmother",
        code: "PGGRMTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PGGRPRN: Description:The player of the role is a biological parent of the scoping person's biological father's parent.
     */
    PaternalGreatGrandparent: new Coding({
        display: "paternal great-grandparent",
        code: "PGGRPRN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PGRFTH: Description:The player of the role is the biological father of the scoping person's biological father.
     */
    PaternalGrandfather: new Coding({
        display: "paternal grandfather",
        code: "PGRFTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PGRMTH: Description:The player of the role is the biological mother of the scoping person's biological father.
     */
    PaternalGrandmother: new Coding({
        display: "paternal grandmother",
        code: "PGRMTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PGRPRN: Description:The player of the role is the biological parent of the scoping person's biological father.
     */
    PaternalGrandparent: new Coding({
        display: "paternal grandparent",
        code: "PGRPRN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PRN: The player of the role is one who begets, gives birth to, or nurtures and raises the scoping entity (child).
     */
    Parent: new Coding({
        display: "parent",
        code: "PRN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PRNFOST: The player of the role (parent) who is a state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    FosterParent: new Coding({
        display: "foster parent",
        code: "PRNFOST",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PRNINLAW: The player of the role is the parent of scoping person's husband or wife.
     */
    ParentInLaw: new Coding({
        display: "parent in-law",
        code: "PRNINLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PUNCLE: Description:The player of the role is a biological brother of the scoping person's biological father.
     */
    PaternalUncle: new Coding({
        display: "paternal uncle",
        code: "PUNCLE",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SIB: The player of the role shares one or both parents in common with the scoping entity.
     */
    Sibling: new Coding({
        display: "sibling",
        code: "SIB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SIBINLAW: The player of the role is: (1) a sibling of the scoping person's spouse, or (2) the spouse of the scoping person's sibling, or (3) the spouse of a sibling of the scoping person's spouse.
     */
    SiblingInLaw: new Coding({
        display: "sibling in-law",
        code: "SIBINLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SIGOTHR: A person who is important to one's well being; especially a spouse or one in a similar relationship.  (The player is the one who is important)
     */
    SignificantOther: new Coding({
        display: "significant other",
        code: "SIGOTHR",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SIS: The player of the role is a female sharing one or both parents in common with the scoping entity.
     */
    Sister: new Coding({
        display: "sister",
        code: "SIS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SISINLAW: The player of the role is: (1) a sister of the scoping person's spouse, or (2) the wife of the scoping person's brother, or (3) the wife of a brother of the scoping person's spouse.
     */
    SisterInLaw: new Coding({
        display: "sister-in-law",
        code: "SISINLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SON: The player of the role is a male offspring of the scoping entity (parent).
     */
    NaturalSon: new Coding({
        display: "natural son",
        code: "SON",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SONADOPT: The player of the role is a male child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    AdoptedSon: new Coding({
        display: "adopted son",
        code: "SONADOPT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SONC: Description: The player of the role is a male child (of any type) of scoping entity (parent)
     */
    Son: new Coding({
        display: "son",
        code: "SONC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SONFOST: The player of the role is a male child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    FosterSon: new Coding({
        display: "foster son",
        code: "SONFOST",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SONINLAW: The player of the role is the husband of scoping person's daughter.
     */
    SonInLaw: new Coding({
        display: "son in-law",
        code: "SONINLAW",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SPS: The player of the role is a marriage partner of the scoping person.
     */
    Spouse: new Coding({
        display: "spouse",
        code: "SPS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * STPBRO: The player of the role is a son of the scoping person's stepparent.
     */
    Stepbrother: new Coding({
        display: "stepbrother",
        code: "STPBRO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * STPCHLD: The player of the role is a child of the scoping person's spouse by a previous union.
     */
    StepChild: new Coding({
        display: "step child",
        code: "STPCHLD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * STPDAU: The player of the role is a daughter of the scoping person's spouse by a previous union.
     */
    Stepdaughter: new Coding({
        display: "stepdaughter",
        code: "STPDAU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * STPFTH: The player of the role is the husband of scoping person's mother and not the scoping person's natural father.
     */
    Stepfather: new Coding({
        display: "stepfather",
        code: "STPFTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * STPMTH: The player of the role is the wife of scoping person's father and not the scoping person's natural mother.
     */
    Stepmother: new Coding({
        display: "stepmother",
        code: "STPMTH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * STPPRN: The player of the role is the spouse of the scoping person's parent and not the scoping person's natural parent.
     */
    StepParent: new Coding({
        display: "step parent",
        code: "STPPRN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * STPSIB: The player of the role is a child of the scoping person's stepparent.
     */
    StepSibling: new Coding({
        display: "step sibling",
        code: "STPSIB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * STPSIS: The player of the role is a daughter of the scoping person's stepparent.
     */
    Stepsister: new Coding({
        display: "stepsister",
        code: "STPSIS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * STPSON: The player of the role is a son of the scoping person's spouse by a previous union.
     */
    Stepson: new Coding({
        display: "stepson",
        code: "STPSON",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * TWIN: The scoper and player were carried in the same womb and shared common biological parents.
     */
    Twin: new Coding({
        display: "twin",
        code: "TWIN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * TWINBRO: The scoper was carried in the same womb as the male player and shares common biological parents.
     */
    TwinBrother: new Coding({
        display: "twin brother",
        code: "TWINBRO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * TWINSIS: The scoper was carried in the same womb as the female player and shares common biological parents.
     */
    TwinSister: new Coding({
        display: "twin sister",
        code: "TWINSIS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * UNCLE: The player of the role is a brother of the scoping person's mother or father.
     */
    Uncle: new Coding({
        display: "uncle",
        code: "UNCLE",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * WIFE: The player of the role is a woman joined to a man (scoping person) in marriage.
     */
    Wife: new Coding({
        display: "wife",
        code: "WIFE",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
};

export { V3FamilyMemberCodings };
//# sourceMappingURL=V3FamilyMemberCodings.js.map
