import { CodingArgs } from '../fhir/Coding.js';
/**
 * A relationship between two people characterizing their "familial" relationship
 */
export declare type V3FamilyMemberCodingType = {
    /**
     * Code: ADOPTF
     */
    AdoptiveFather: CodingArgs;
    /**
     * Code: ADOPTM
     */
    AdoptiveMother: CodingArgs;
    /**
     * Code: ADOPTP
     */
    AdoptiveParent: CodingArgs;
    /**
     * Code: AUNT
     */
    Aunt: CodingArgs;
    /**
     * Code: BRO
     */
    Brother: CodingArgs;
    /**
     * Code: BROINLAW
     */
    BrotherInLaw: CodingArgs;
    /**
     * Code: CHILD
     */
    Child: CodingArgs;
    /**
     * Code: CHLDADOPT
     */
    AdoptedChild: CodingArgs;
    /**
     * Code: CHLDFOST
     */
    FosterChild: CodingArgs;
    /**
     * Code: CHLDINLAW
     */
    ChildInLaw: CodingArgs;
    /**
     * Code: COUSN
     */
    Cousin: CodingArgs;
    /**
     * Code: DAU
     */
    NaturalDaughter: CodingArgs;
    /**
     * Code: DAUADOPT
     */
    AdoptedDaughter: CodingArgs;
    /**
     * Code: DAUC
     */
    Daughter: CodingArgs;
    /**
     * Code: DAUFOST
     */
    FosterDaughter: CodingArgs;
    /**
     * Code: DAUINLAW
     */
    DaughterInLaw: CodingArgs;
    /**
     * Code: DOMPART
     */
    DomesticPartner: CodingArgs;
    /**
     * Code: EXT
     */
    ExtendedFamilyMember: CodingArgs;
    /**
     * Code: FAMMEMB
     */
    FamilyMember: CodingArgs;
    /**
     * Code: FMRSPS
     */
    FormerSpouse: CodingArgs;
    /**
     * Code: FTH
     */
    Father: CodingArgs;
    /**
     * Code: FTHFOST
     */
    FosterFather: CodingArgs;
    /**
     * Code: FTHINLAW
     */
    FatherInLaw: CodingArgs;
    /**
     * Code: FTWIN
     */
    FraternalTwin: CodingArgs;
    /**
     * Code: FTWINBRO
     */
    FraternalTwinBrother: CodingArgs;
    /**
     * Code: FTWINSIS
     */
    FraternalTwinSister: CodingArgs;
    /**
     * Code: GESTM
     */
    GestationalMother: CodingArgs;
    /**
     * Code: GGRFTH
     */
    GreatGrandfather: CodingArgs;
    /**
     * Code: GGRMTH
     */
    GreatGrandmother: CodingArgs;
    /**
     * Code: GGRPRN
     */
    GreatGrandparent: CodingArgs;
    /**
     * Code: GRFTH
     */
    Grandfather: CodingArgs;
    /**
     * Code: GRMTH
     */
    Grandmother: CodingArgs;
    /**
     * Code: GRNDCHILD
     */
    Grandchild: CodingArgs;
    /**
     * Code: GRNDDAU
     */
    Granddaughter: CodingArgs;
    /**
     * Code: GRNDSON
     */
    Grandson: CodingArgs;
    /**
     * Code: GRPRN
     */
    Grandparent: CodingArgs;
    /**
     * Code: HBRO
     */
    HalfBrother: CodingArgs;
    /**
     * Code: HSIB
     */
    HalfSibling: CodingArgs;
    /**
     * Code: HSIS
     */
    HalfSister: CodingArgs;
    /**
     * Code: HUSB
     */
    Husband: CodingArgs;
    /**
     * Code: INLAW
     */
    Inlaw: CodingArgs;
    /**
     * Code: ITWIN
     */
    IdenticalTwin: CodingArgs;
    /**
     * Code: ITWINBRO
     */
    IdenticalTwinBrother: CodingArgs;
    /**
     * Code: ITWINSIS
     */
    IdenticalTwinSister: CodingArgs;
    /**
     * Code: MAUNT
     */
    MaternalAunt: CodingArgs;
    /**
     * Code: MCOUSN
     */
    MaternalCousin: CodingArgs;
    /**
     * Code: MGGRFTH
     */
    MaternalGreatGrandfather: CodingArgs;
    /**
     * Code: MGGRMTH
     */
    MaternalGreatGrandmother: CodingArgs;
    /**
     * Code: MGGRPRN
     */
    MaternalGreatGrandparent: CodingArgs;
    /**
     * Code: MGRFTH
     */
    MaternalGrandfather: CodingArgs;
    /**
     * Code: MGRMTH
     */
    MaternalGrandmother: CodingArgs;
    /**
     * Code: MGRPRN
     */
    MaternalGrandparent: CodingArgs;
    /**
     * Code: MTH
     */
    Mother: CodingArgs;
    /**
     * Code: MTHFOST
     */
    FosterMother: CodingArgs;
    /**
     * Code: MTHINLAW
     */
    MotherInLaw: CodingArgs;
    /**
     * Code: MTHINLOAW
     */
    MotherInLawMTHINLOAW: CodingArgs;
    /**
     * Code: MUNCLE
     */
    MaternalUncle: CodingArgs;
    /**
     * Code: NBRO
     */
    NaturalBrother: CodingArgs;
    /**
     * Code: NCHILD
     */
    NaturalChild: CodingArgs;
    /**
     * Code: NEPHEW
     */
    Nephew: CodingArgs;
    /**
     * Code: NFTH
     */
    NaturalFather: CodingArgs;
    /**
     * Code: NFTHF
     */
    NaturalFatherOfFetus: CodingArgs;
    /**
     * Code: NIECE
     */
    Niece: CodingArgs;
    /**
     * Code: NIENEPH
     */
    NieceNephew: CodingArgs;
    /**
     * Code: NMTH
     */
    NaturalMother: CodingArgs;
    /**
     * Code: NMTHF
     */
    NaturalMotherOfFetus: CodingArgs;
    /**
     * Code: NPRN
     */
    NaturalParent: CodingArgs;
    /**
     * Code: NSIB
     */
    NaturalSibling: CodingArgs;
    /**
     * Code: NSIS
     */
    NaturalSister: CodingArgs;
    /**
     * Code: PAUNT
     */
    PaternalAunt: CodingArgs;
    /**
     * Code: PCOUSN
     */
    PaternalCousin: CodingArgs;
    /**
     * Code: PGGRFTH
     */
    PaternalGreatGrandfather: CodingArgs;
    /**
     * Code: PGGRMTH
     */
    PaternalGreatGrandmother: CodingArgs;
    /**
     * Code: PGGRPRN
     */
    PaternalGreatGrandparent: CodingArgs;
    /**
     * Code: PGRFTH
     */
    PaternalGrandfather: CodingArgs;
    /**
     * Code: PGRMTH
     */
    PaternalGrandmother: CodingArgs;
    /**
     * Code: PGRPRN
     */
    PaternalGrandparent: CodingArgs;
    /**
     * Code: PRN
     */
    Parent: CodingArgs;
    /**
     * Code: PRNFOST
     */
    FosterParent: CodingArgs;
    /**
     * Code: PRNINLAW
     */
    ParentInLaw: CodingArgs;
    /**
     * Code: PUNCLE
     */
    PaternalUncle: CodingArgs;
    /**
     * Code: SIB
     */
    Sibling: CodingArgs;
    /**
     * Code: SIBINLAW
     */
    SiblingInLaw: CodingArgs;
    /**
     * Code: SIGOTHR
     */
    SignificantOther: CodingArgs;
    /**
     * Code: SIS
     */
    Sister: CodingArgs;
    /**
     * Code: SISINLAW
     */
    SisterInLaw: CodingArgs;
    /**
     * Code: SISLINLAW
     */
    SisterInLawSISLINLAW: CodingArgs;
    /**
     * Code: SON
     */
    NaturalSon: CodingArgs;
    /**
     * Code: SONADOPT
     */
    AdoptedSon: CodingArgs;
    /**
     * Code: SONC
     */
    Son: CodingArgs;
    /**
     * Code: SONFOST
     */
    FosterSon: CodingArgs;
    /**
     * Code: SONINLAW
     */
    SonInLaw: CodingArgs;
    /**
     * Code: SPS
     */
    Spouse: CodingArgs;
    /**
     * Code: STPBRO
     */
    Stepbrother: CodingArgs;
    /**
     * Code: STPCHLD
     */
    StepChild: CodingArgs;
    /**
     * Code: STPDAU
     */
    Stepdaughter: CodingArgs;
    /**
     * Code: STPFTH
     */
    Stepfather: CodingArgs;
    /**
     * Code: STPMTH
     */
    Stepmother: CodingArgs;
    /**
     * Code: STPPRN
     */
    StepParent: CodingArgs;
    /**
     * Code: STPSIB
     */
    StepSibling: CodingArgs;
    /**
     * Code: STPSIS
     */
    Stepsister: CodingArgs;
    /**
     * Code: STPSON
     */
    Stepson: CodingArgs;
    /**
     * Code: TWIN
     */
    Twin: CodingArgs;
    /**
     * Code: TWINBRO
     */
    TwinBrother: CodingArgs;
    /**
     * Code: TWINSIS
     */
    TwinSister: CodingArgs;
    /**
     * Code: UNCLE
     */
    Uncle: CodingArgs;
    /**
     * Code: WIFE
     */
    Wife: CodingArgs;
};
/**
 * A relationship between two people characterizing their "familial" relationship
 */
export declare const V3FamilyMemberCodings: V3FamilyMemberCodingType;
//# sourceMappingURL=V3FamilyMemberCodings.d.ts.map