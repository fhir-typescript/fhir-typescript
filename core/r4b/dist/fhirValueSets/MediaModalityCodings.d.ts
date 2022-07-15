import { CodingArgs } from '../fhir/Coding.js';
/**
 * Detailed information about the type of the image - its kind, purpose, or the kind of equipment used to generate it.
 */
export declare type MediaModalityCodingType = {
    /**
     * AR: Autorefraction device
     */
    Autorefraction: CodingArgs;
    /**
     * BDUS: Ultrasound Bone Densitometry (modality)
     */
    UltrasoundBoneDensitometry: CodingArgs;
    /**
     * BI: Biomagnetic imaging device
     */
    BiomagneticImaging: CodingArgs;
    /**
     * BMD: Bone Mineral Densitometry by X-Ray (modality), including dual-energy X-Ray absorptiometry (DXA) and morphometric X-Ray absorptiometry (MXA)
     */
    BoneMineralDensitometry: CodingArgs;
    /**
     * CR: Computed Radiography device
     */
    ComputedRadiography: CodingArgs;
    /**
     * CT: Computed Tomography device
     */
    ComputedTomography: CodingArgs;
    /**
     * DG: Diaphanography device
     */
    Diaphanography: CodingArgs;
    /**
     * diagram: A diagram. Often used in diagnostic reports
     */
    Diagram: CodingArgs;
    /**
     * Code: DMS
     */
    Dermoscopy: CodingArgs;
    /**
     * DX: Digital Radiography device
     */
    DigitalRadiography: CodingArgs;
    /**
     * ECG: Electrocardiography device
     */
    Electrocardiography: CodingArgs;
    /**
     * Code: EEG
     */
    Electroencephalography: CodingArgs;
    /**
     * Code: EMG
     */
    Electromyography: CodingArgs;
    /**
     * Code: EOG
     */
    Electrooculography: CodingArgs;
    /**
     * EPS: Cardiac Electrophysiology device
     */
    CardiacElectrophysiology: CodingArgs;
    /**
     * ES: Endoscopy device
     */
    Endoscopy: CodingArgs;
    /**
     * face: A face scan used for identification purposes
     */
    FaceScan: CodingArgs;
    /**
     * fax: A digital record of a fax document
     */
    Fax: CodingArgs;
    /**
     * fingerprint: A finger print scan used for identification purposes
     */
    Fingerprint: CodingArgs;
    /**
     * GM: General Microscopy device
     */
    GeneralMicroscopy: CodingArgs;
    /**
     * HD: Hemodynamic Waveform acquisition device
     */
    HemodynamicWaveform: CodingArgs;
    /**
     * IO: Intra-oral Radiography device
     */
    IntraOralRadiography: CodingArgs;
    /**
     * iris: An iris scan used for identification purposes
     */
    IrisScan: CodingArgs;
    /**
     * IVOCT: An acquisition device, process or method that performs intravascular optical coherence tomography
     */
    IntravascularOpticalCoherenceTomography: CodingArgs;
    /**
     * IVUS: Intravascular Ultrasound device
     */
    IntravascularUltrasound: CodingArgs;
    /**
     * KER: Keratometry device
     */
    Keratometry: CodingArgs;
    /**
     * LEN: Lensometry device
     */
    Lensometry: CodingArgs;
    /**
     * LS: Laser surface scan device
     */
    LaserSurfaceScan: CodingArgs;
    /**
     * MG: Mammography device
     */
    Mammography: CodingArgs;
    /**
     * MR: Magnetic Resonance device
     */
    MagneticResonance: CodingArgs;
    /**
     * NM: Nuclear Medicine device
     */
    NuclearMedicine: CodingArgs;
    /**
     * OAM: Measurements of the axial length of the eye, which are done by various devices
     */
    OphthalmicAxialMeasurements: CodingArgs;
    /**
     * OCT: Modality device that uses an interferometric, non-invasive optical tomographic technique to image 2D slices and 3D volumes of tissue using visible and near visible frequencies
     */
    OpticalCoherenceTomography: CodingArgs;
    /**
     * OP: Ophthalmic photography modality
     */
    OphthalmicPhotography: CodingArgs;
    /**
     * OPM: Modality device that measures corneal topography, corneal or retinal thickness, and other similar parameters that are typically displayed as maps
     */
    OphthalmicMapping: CodingArgs;
    /**
     * OPT: Tomography of the eye acquired by a modality that is based on light and optical principles. Tomography based on other principles, such as ultrasound, is excluded
     */
    OphthalmicTomography: CodingArgs;
    /**
     * Code: OPTBSV
     */
    OphthalmicTomographyBScanVolumeAnalysis: CodingArgs;
    /**
     * Code: OPTENF
     */
    OphthalmicTomographyEnFace: CodingArgs;
    /**
     * OPV: Modality device that measures visual fields and perform visual perimetry
     */
    OphthalmicVisualField: CodingArgs;
    /**
     * OSS: An acquisition device, process or method that performs optical surface scanning
     */
    OpticalSurvaceScanner: CodingArgs;
    /**
     * palm: A palm scan used for identification purposes
     */
    PalmScan: CodingArgs;
    /**
     * Code: POS
     */
    PositionSensor: CodingArgs;
    /**
     * PT: Positron emission tomography (PET) device
     */
    PositronEmissionTomography: CodingArgs;
    /**
     * PX: Panoramic X-Ray device
     */
    PanoramicXRay: CodingArgs;
    /**
     * Code: RESP
     */
    RespiratoryWaveform: CodingArgs;
    /**
     * retina: A retinal image used for identification purposes
     */
    RetinaScan: CodingArgs;
    /**
     * RF: Radiofluoroscopy device
     */
    Radiofluoroscopy: CodingArgs;
    /**
     * RG: Radiographic imaging (conventional film/screen)
     */
    RadiographicImaging: CodingArgs;
    /**
     * RTIMAGE: Radiotherapy Imaging device; includes portal imaging
     */
    RadiotherapyImage: CodingArgs;
    /**
     * scan: A digital scan of a document. This is reserved for when there is not enough metadata to create a document reference
     */
    ScannedDocument: CodingArgs;
    /**
     * SM: Slide Microscopy
     */
    SlideMicroscopy: CodingArgs;
    /**
     * SRF: Subjective Refraction device
     */
    SubjectiveRefraction: CodingArgs;
    /**
     * TG: Thermography device
     */
    Thermography: CodingArgs;
    /**
     * US: Ultrasound device
     */
    Ultrasound: CodingArgs;
    /**
     * VA: Visual Acuity device
     */
    VisualAcuity: CodingArgs;
    /**
     * XA: X-Ray Angiography device
     */
    XRayAngiography: CodingArgs;
    /**
     * XC: External-camera Photography device
     */
    ExternalCameraPhotography: CodingArgs;
};
/**
 * Detailed information about the type of the image - its kind, purpose, or the kind of equipment used to generate it.
 */
export declare const MediaModalityCodings: MediaModalityCodingType;
//# sourceMappingURL=MediaModalityCodings.d.ts.map