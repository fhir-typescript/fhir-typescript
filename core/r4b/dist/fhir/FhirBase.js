// Minimum TypeScript Version: 3.7
export class FhirBase {
    /** Default constructor */
    constructor(source = {}, options = {}) {
        if (options.allowUnknownElements === true) {
            Object.assign(this, source);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(_exp = '') {
        return [];
    }
    /**
     * FNV-1a implementation from https://github.com/tjwebb/fnv-plus
     * @param str
     * @returns
     */
    static _hash52_1a_fast(str) {
        var i, l = str.length - 3, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
        for (i = 0; i < l;) {
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
        }
        while (i < l + 3) {
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
        }
        return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ (v3 >> 4));
    }
    /**
     * Validate an Optional Scalar element
     * @param p
     * @param exp
     * @returns
     */
    vOS(p, exp) {
        if ((this[p] === undefined) ||
            (this[p] === null) ||
            (this[p] === '') ||
            (Number.isNaN(this[p]))) {
            return [];
        }
        if (Array.isArray(this[p])) {
            return [{
                    severity: 'error',
                    code: 'structure',
                    details: { text: `Found array in scalar property ${p} (${exp})` },
                    expression: [exp],
                }];
        }
        return this[p].doModelValidation(exp + '.' + p);
    }
    /**
     * Validate an Optional Scalar element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vOSV(p, exp, vsN, vsV, vsS) {
        if ((this[p] === undefined) ||
            (this[p] === null) ||
            (this[p] === '') ||
            (Number.isNaN(this[p]))) {
            return [];
        }
        if (Array.isArray(this[p])) {
            return [{
                    severity: 'error',
                    code: 'structure',
                    details: { text: `Found array in scalar property ${p} (${exp})` },
                    expression: [exp],
                }];
        }
        let iss = [];
        iss.push(...this[p].doModelValidation(exp + '.' + p));
        if (!this[p].hasCodingFromValidationObj(vsV)) {
            iss.push({
                severity: (vsS === 'r') ? 'error' : 'information',
                code: 'code-invalid',
                details: { text: `${p} (${exp}) does not contain code from bound value set ${vsN}` },
                expression: [exp],
            });
        }
        return iss;
    }
    /**
     * Validate an Optional Array element
     * @param p
     * @param exp
     * @returns
     */
    vOA(p, exp) {
        if ((this[p] === undefined) ||
            (this[p] === null) ||
            (this[p] === '') ||
            (Number.isNaN(this[p]))) {
            return [];
        }
        if (!Array.isArray(this[p])) {
            return [{
                    severity: 'error',
                    code: 'structure',
                    details: { text: `Found scalar in array property ${p} (${exp})` }
                }];
        }
        let iss = [];
        this[p].forEach((x, i) => { iss.push(...x.doModelValidation(`${exp}.${p}[${i}]`)); });
        return iss;
    }
    /**
     * Validate an Optional Array element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vOAV(p, exp, vsN, vsV, vsS) {
        let iss = [];
        if ((this[p] === undefined) ||
            (this[p] === null) ||
            (this[p] === '') ||
            (Number.isNaN(this[p]))) {
            return [];
        }
        if (!Array.isArray(this[p])) {
            return [{
                    severity: 'error',
                    code: 'structure',
                    details: { text: `Found scalar in array property ${p} (${exp})` },
                    expression: [exp],
                }];
        }
        this[p].forEach((x, i) => {
            iss.push(...x.doModelValidation(`${exp}.${p}[${i}]`));
            if (!x.hasCodingFromValidationObj(vsV)) {
                iss.push({
                    severity: (vsS === 'r') ? 'error' : 'information',
                    code: 'code-invalid',
                    details: { text: `${p} (${exp}) does not contain code from bound value set ${vsN}` },
                    expression: [exp],
                });
            }
        });
        return iss;
    }
    /**
     * Validate a Required Scalar element
     * @param p
     * @param exp
     * @returns
     */
    vRS(p, exp) {
        if ((this[p] === undefined) ||
            (this[p] === null) ||
            (this[p] === '') ||
            (Number.isNaN(this[p]))) {
            return [{
                    severity: 'error',
                    code: 'required',
                    details: { text: `Missing required property '${p}', ${exp}` },
                    expression: [exp],
                }];
        }
        if (Array.isArray(this[p])) {
            return [{
                    severity: 'error',
                    code: 'structure',
                    details: { text: `Found array in scalar property ${p} (${exp})` },
                    expression: [exp],
                }];
        }
        if (this[p].length === 0) {
            return [{
                    severity: 'error',
                    code: 'required',
                    details: { text: `Missing required property '${p}', ${exp}` },
                    expression: [exp],
                }];
        }
        return this[p].doModelValidation(exp + '.' + p);
    }
    /**
     * Validate a Required Scalar element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vRSV(p, exp, vsN, vsV, vsS) {
        if ((this[p] === undefined) ||
            (this[p] === null) ||
            (this[p] === '') ||
            (Number.isNaN(this[p]))) {
            return [{
                    severity: 'error',
                    code: 'required',
                    details: { text: `Missing required property '${p}', ${exp}` },
                    expression: [exp],
                }];
        }
        if (Array.isArray(this[p])) {
            return [{
                    severity: 'error',
                    code: 'structure',
                    details: { text: `Found array in scalar property ${p} (${exp})` },
                    expression: [exp],
                }];
        }
        let iss = [];
        iss.push(...this[p].doModelValidation(exp + '.' + p));
        if (!this[p].hasCodingFromValidationObj(vsV)) {
            iss.push({
                severity: (vsS === 'r') ? 'error' : 'information',
                code: 'code-invalid',
                details: { text: `${p} (${exp}) does not contain code from bound value set ${vsN}` },
                expression: [exp],
            });
        }
        return iss;
    }
    /**
     * Validate a Required Array element
     * @param p
     * @param exp
     * @returns
     */
    vRA(p, exp) {
        if ((this[p] === undefined) ||
            (this[p] === null) ||
            (this[p] === '') ||
            (Number.isNaN(this[p]))) {
            return [{
                    severity: 'error',
                    code: 'required',
                    details: { text: `Missing required property '${p}', ${exp}` },
                    expression: [exp],
                }];
        }
        if (!Array.isArray(this[p])) {
            return [{
                    severity: 'error',
                    code: 'structure',
                    details: { text: `Found scalar in array property ${p} (${exp})` },
                    expression: [exp],
                }];
        }
        if (this[p].length === 0) {
            return [{
                    severity: 'error',
                    code: 'required',
                    details: { text: `Missing required property '${p}', ${exp}` },
                    expression: [exp],
                }];
        }
        let iss = [];
        this[p].forEach((x, i) => { iss.push(...x.doModelValidation(`${exp}.${p}[${i}]`)); });
        return iss;
    }
    /**
     * Validate a Required Array element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vRAV(p, exp, vsN, vsV, vsS) {
        if ((this[p] === undefined) ||
            (this[p] === null) ||
            (this[p] === '') ||
            (Number.isNaN(this[p]))) {
            return [{
                    severity: 'error',
                    code: 'required',
                    details: { text: `Missing required property '${p}', ${exp}` },
                    expression: [exp],
                }];
        }
        if (!Array.isArray(this[p])) {
            return [{
                    severity: 'error',
                    code: 'structure',
                    details: { text: `Found scalar in array property ${p} (${exp})` },
                    expression: [exp],
                }];
        }
        if (this[p].length === 0) {
            return [{
                    severity: 'error',
                    code: 'required',
                    details: { text: `Missing required property '${p}', ${exp}` },
                    expression: [exp],
                }];
        }
        let iss = [];
        this[p].forEach((x, i) => {
            iss.push(...x.doModelValidation(`${exp}.${p}[${i}]`));
            if (!x.hasCodingFromValidationObj(vsV)) {
                iss.push({
                    severity: (vsS === 'r') ? 'error' : 'information',
                    code: 'code-invalid',
                    details: { text: `${p} (${exp}) does not contain code from bound value set ${vsN}` },
                    expression: [exp],
                });
            }
        });
        return iss;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        let c = {};
        for (const key in this) {
            if ((this[key] === undefined) ||
                (this[key] === null) ||
                (this[key] === '') ||
                (Number.isNaN(this[key]))) {
                continue;
            }
            let isArray = Array.isArray(this[key]);
            if (isArray && this[key].length === 0) {
                continue;
            }
            let ftsDt = (isArray ? this[key][0].constructor._fts_dataType : this[key].constructor._fts_dataType) ?? '';
            let isChoice = this.constructor['_fts_' + key + 'IsChoice'] ?? false;
            let isPrimitive = (isArray ? this[key][0].constructor['_fts_isPrimitive'] : this[key].constructor['_fts_isPrimitive']) ?? false;
            let dKey = key + (isChoice ? ftsDt : '');
            if (isArray) {
                if (isPrimitive) {
                    const eName = '_' + dKey;
                    let foundAnyVal = false;
                    let foundAnyExt = false;
                    c[dKey] = [];
                    c[eName] = [];
                    this[key].forEach((av) => {
                        let addElement = false;
                        if ((av.value !== undefined) && (av.value !== null)) {
                            c[dKey].push(av.value);
                            foundAnyVal = true;
                            addElement = true;
                        }
                        else {
                            c[dKey].push(null);
                        }
                        let ao = {};
                        if (av.id) {
                            ao['id'] = av.id;
                            foundAnyExt = true;
                        }
                        if ((av.extension) && (av.extension.length !== 0)) {
                            ao['extension'] = [];
                            av.extension.forEach((e) => {
                                ao['extension'].push(e);
                            });
                            foundAnyExt = true;
                        }
                        if (foundAnyExt) {
                            c[eName].push(ao);
                            addElement = true;
                        }
                        else {
                            c[eName].push(null);
                        }
                        if (!addElement) {
                            c[dKey].pop();
                            c[eName].pop();
                        }
                    });
                    if (!foundAnyVal) {
                        delete c[dKey];
                    }
                    if (!foundAnyExt) {
                        delete c[eName];
                    }
                }
                else if (ftsDt) {
                    c[dKey] = [];
                    this[key].forEach((v) => {
                        // c[dKey].push(v.toJSON());
                        c[dKey].push(v);
                    });
                }
                else {
                    c[dKey] = this[key];
                }
            }
            else if (isPrimitive) {
                if ((this[key].value !== undefined) && (this[key].value !== null)) {
                    c[dKey] = this[key].value;
                }
                const eName = '_' + dKey;
                c[eName] = {};
                if (this[key]['id']) {
                    c[eName]['id'] = this[key]['id'];
                }
                if ((this[key]['extension']) && (this[key]['extension'].length !== 0)) {
                    c[eName]['extension'] = [];
                    this[key]['extension'].forEach((e) => {
                        c[eName]['extension'].push(e);
                    });
                }
                if (Object.keys(c[eName]).length === 0) {
                    delete c[eName];
                }
            }
            else if (ftsDt) {
                c[dKey] = this[key];
            }
            else {
                c[dKey] = this[key];
            }
        }
        return c;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirBase._fts_dataType = 'Base';
FhirBase._fts_regex = /.?/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckJhc2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQXFGbEMsTUFBTSxPQUFPLFFBQVE7SUFPbkIsMEJBQTBCO0lBQzFCLFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQWlDLEVBQUU7UUFDaEYsSUFBSSxPQUFPLENBQUMsb0JBQW9CLEtBQUssSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FBRTtJQUM3RSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxpQkFBaUIsQ0FBQyxPQUFjLEVBQUU7UUFDeEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBVTtRQUN4QyxJQUFJLENBQUMsRUFBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsRUFBRSxHQUFDLENBQUMsRUFBQyxFQUFFLEdBQUMsTUFBTSxFQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsRUFBRSxHQUFDLE1BQU0sRUFBQyxFQUFFLEdBQUMsQ0FBQyxFQUFDLEVBQUUsR0FBQyxNQUFNLEVBQUMsRUFBRSxHQUFDLENBQUMsRUFBQyxFQUFFLEdBQUMsTUFBTSxDQUFDO1FBRWpGLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQ25CLEVBQUUsSUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFDeEMsRUFBRSxJQUFFLEVBQUUsSUFBRSxDQUFDLENBQUM7WUFBQSxFQUFFLElBQUUsRUFBRSxJQUFFLENBQUMsQ0FBQztZQUNwQixFQUFFLElBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxJQUFFLEVBQUUsS0FBRyxFQUFFLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztZQUFBLEVBQUUsR0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUUsS0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQ3BGLEVBQUUsSUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFDeEMsRUFBRSxJQUFFLEVBQUUsSUFBRSxDQUFDLENBQUM7WUFBQSxFQUFFLElBQUUsRUFBRSxJQUFFLENBQUMsQ0FBQztZQUNwQixFQUFFLElBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxJQUFFLEVBQUUsS0FBRyxFQUFFLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztZQUFBLEVBQUUsR0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUUsS0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQ3BGLEVBQUUsSUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFDeEMsRUFBRSxJQUFFLEVBQUUsSUFBRSxDQUFDLENBQUM7WUFBQSxFQUFFLElBQUUsRUFBRSxJQUFFLENBQUMsQ0FBQztZQUNwQixFQUFFLElBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxJQUFFLEVBQUUsS0FBRyxFQUFFLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztZQUFBLEVBQUUsR0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUUsS0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQ3BGLEVBQUUsSUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFDeEMsRUFBRSxJQUFFLEVBQUUsSUFBRSxDQUFDLENBQUM7WUFBQSxFQUFFLElBQUUsRUFBRSxJQUFFLENBQUMsQ0FBQztZQUNwQixFQUFFLElBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxJQUFFLEVBQUUsS0FBRyxFQUFFLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztZQUFBLEVBQUUsR0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUUsS0FBRyxF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QyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsSUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFO3dCQUNoRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFBRTthQUM3RDtpQkFBTSxJQUFJLEtBQUssRUFBRTtnQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFJLElBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUksSUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7O0FBamZEOztHQUVHO0FBQ29CLHNCQUFhLEdBQVEsTUFBTSxDQUFDO0FBQzVCLG1CQUFVLEdBQVUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaGlyQ29uc3RydWN0b3JPcHRpb25zIHtcclxuICAvKiogSWYgaW5zdGFudGlhdGVkIG9iamVjdHMgc2hvdWxkIGFsbG93IG5vbi1GSElSIGRlZmluZWQgcHJvcGVydGllcyAqL1xyXG4gIGFsbG93VW5rbm93bkVsZW1lbnRzPzogYm9vbGVhbnx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBFbGVtZW50IC0gZXF1aXZhbGVudCB0byBhIEZISVIgSlNPTiBFbGVtZW50IChDb21wbGV4IERhdGFUeXBlKSwgd2l0aG91dCBleHRlbnNpb25zXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ0c0VsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSBpZCBmb3IgdGhlIGVsZW1lbnQgd2l0aGluIGEgcmVzb3VyY2UgKGZvciBpbnRlcm5hbCByZWZlcmVuY2VzKS4gVGhpcyBtYXkgYmUgYW55IHN0cmluZyB2YWx1ZSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gc3BhY2VzLlxyXG4gICAqL1xyXG4gICBpZD86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjb2RpbmcgLSBlcXVpdmFsZW50IHRvIGEgRkhJUiBKU09OIENvZGluZyAoQ29tcGxleCBEYXRhVHlwZSksIHdpdGhvdXQgZXh0ZW5zaW9uc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGdHNDb2RpbmcgZXh0ZW5kcyBGdHNFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBUaGUgVVJJIG1heSBiZSBhbiBPSUQgKHVybjpvaWQ6Li4uKSBvciBhIFVVSUQgKHVybjp1dWlkOi4uLikuICBPSURzIGFuZCBVVUlEcyBTSEFMTCBiZSByZWZlcmVuY2VzIHRvIHRoZSBITDcgT0lEIHJlZ2lzdHJ5LiBPdGhlcndpc2UsIHRoZSBVUkkgc2hvdWxkIGNvbWUgZnJvbSBITDcncyBsaXN0IG9mIEZISVIgZGVmaW5lZCBzcGVjaWFsIFVSSXMgb3IgaXQgc2hvdWxkIHJlZmVyZW5jZSB0byBzb21lIGRlZmluaXRpb24gdGhhdCBlc3RhYmxpc2hlcyB0aGUgc3lzdGVtIGNsZWFybHkgYW5kIHVuYW1iaWd1b3VzbHkuXHJcbiAgICovXHJcbiAgIHN5c3RlbT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgIC8qKlxyXG4gICAgKiBXaGVyZSB0aGUgdGVybWlub2xvZ3kgZG9lcyBub3QgY2xlYXJseSBkZWZpbmUgd2hhdCBzdHJpbmcgc2hvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgY29kZSBzeXN0ZW0gdmVyc2lvbnMsIHRoZSByZWNvbW1lbmRhdGlvbiBpcyB0byB1c2UgdGhlIGRhdGUgKGV4cHJlc3NlZCBpbiBGSElSIGRhdGUgZm9ybWF0KSBvbiB3aGljaCB0aGF0IHZlcnNpb24gd2FzIG9mZmljaWFsbHkgcHVibGlzaGVkIGFzIHRoZSB2ZXJzaW9uIGRhdGUuXHJcbiAgICAqL1xyXG4gICB2ZXJzaW9uPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgLyoqXHJcbiAgICAqIEEgc3ltYm9sIGluIHN5bnRheCBkZWZpbmVkIGJ5IHRoZSBzeXN0ZW0uIFRoZSBzeW1ib2wgbWF5IGJlIGEgcHJlZGVmaW5lZCBjb2RlIG9yIGFuIGV4cHJlc3Npb24gaW4gYSBzeW50YXggZGVmaW5lZCBieSB0aGUgY29kaW5nIHN5c3RlbSAoZS5nLiBwb3N0LWNvb3JkaW5hdGlvbikuXHJcbiAgICAqL1xyXG4gICBjb2RlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgLyoqXHJcbiAgICAqIEEgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1lYW5pbmcgb2YgdGhlIGNvZGUgaW4gdGhlIHN5c3RlbSwgZm9sbG93aW5nIHRoZSBydWxlcyBvZiB0aGUgc3lzdGVtLlxyXG4gICAgKi9cclxuICAgZGlzcGxheT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgIC8qKlxyXG4gICAgKiBBbW9uZ3N0IGEgc2V0IG9mIGFsdGVybmF0aXZlcywgYSBkaXJlY3RseSBjaG9zZW4gY29kZSBpcyB0aGUgbW9zdCBhcHByb3ByaWF0ZSBzdGFydGluZyBwb2ludCBmb3IgbmV3IHRyYW5zbGF0aW9ucy4gVGhlcmUgaXMgc29tZSBhbWJpZ3VpdHkgYWJvdXQgd2hhdCBleGFjdGx5ICdkaXJlY3RseSBjaG9zZW4nIGltcGxpZXMsIGFuZCB0cmFkaW5nIHBhcnRuZXIgYWdyZWVtZW50IG1heSBiZSBuZWVkZWQgdG8gY2xhcmlmeSB0aGUgdXNlIG9mIHRoaXMgZWxlbWVudCBhbmQgaXRzIGNvbnNlcXVlbmNlcyBtb3JlIGNvbXBsZXRlbHkuXHJcbiAgICAqL1xyXG4gICB1c2VyU2VsZWN0ZWQ/OiBib29sZWFufHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIENvZGVhYmxlQ29uY2VwdCAtIGVxdWl2YWxlbnQgdG8gYSBGSElSIEpTT04gQ29kZWFibGVDb25jZXB0IChDb21wbGV4IERhdGFUeXBlKSwgd2l0aG91dCBleHRlbnNpb25zXHJcbiAqL1xyXG4gZXhwb3J0IGludGVyZmFjZSBGdHNDb2RlYWJsZUNvbmNlcHQgZXh0ZW5kcyBGdHNFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogQ29kZXMgbWF5IGJlIGRlZmluZWQgdmVyeSBjYXN1YWxseSBpbiBlbnVtZXJhdGlvbnMsIG9yIGNvZGUgbGlzdHMsIHVwIHRvIHZlcnkgZm9ybWFsIGRlZmluaXRpb25zIHN1Y2ggYXMgU05PTUVEIENUIC0gc2VlIHRoZSBITDcgdjMgQ29yZSBQcmluY2lwbGVzIGZvciBtb3JlIGluZm9ybWF0aW9uLiAgT3JkZXJpbmcgb2YgY29kaW5ncyBpcyB1bmRlZmluZWQgYW5kIFNIQUxMIE5PVCBiZSB1c2VkIHRvIGluZmVyIG1lYW5pbmcuIEdlbmVyYWxseSwgYXQgbW9zdCBvbmx5IG9uZSBvZiB0aGUgY29kaW5nIHZhbHVlcyB3aWxsIGJlIGxhYmVsZWQgYXMgVXNlclNlbGVjdGVkID0gdHJ1ZS5cclxuICAgKi9cclxuICBjb2Rpbmc/OiBGdHNDb2RpbmdbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVmVyeSBvZnRlbiB0aGUgdGV4dCBpcyB0aGUgc2FtZSBhcyBhIGRpc3BsYXlOYW1lIG9mIG9uZSBvZiB0aGUgY29kaW5ncy5cclxuICAgKi9cclxuICB0ZXh0Pzogc3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIE9wZXJhdGlvbk91dGNvbWVJc3N1ZSAtIGVxdWl2YWxlbnQgdG8gT3BlcmF0aW9uT3V0Y29tZS5pc3N1ZSAoQmFja2JvbmUgRWxlbWVudCksIHdpdGhvdXQgZXh0ZW5zaW9uc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGdHNJc3N1ZSBleHRlbmRzIEZ0c0VsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgbGFiZWxlZCBhcyBcIklzIE1vZGlmaWVyXCIgYmVjYXVzZSBhcHBsaWNhdGlvbnMgc2hvdWxkIG5vdCBjb25mdXNlIGhpbnRzIGFuZCB3YXJuaW5ncyB3aXRoIGVycm9ycy5cclxuICAgKi9cclxuICAgc2V2ZXJpdHk6ICdlcnJvcid8J2ZhdGFsJ3wnaW5mb3JtYXRpb24nfCd3YXJuaW5nJ3xudWxsO1xyXG4gICAvKipcclxuICAgICogRGVzY3JpYmVzIHRoZSB0eXBlIG9mIHRoZSBpc3N1ZS4gVGhlIHN5c3RlbSB0aGF0IGNyZWF0ZXMgYW4gT3BlcmF0aW9uT3V0Y29tZSBTSEFMTCBjaG9vc2UgdGhlIG1vc3QgYXBwbGljYWJsZSBjb2RlIGZyb20gdGhlIElzc3VlVHlwZSB2YWx1ZSBzZXQsIGFuZCBtYXkgYWRkaXRpb25hbCBwcm92aWRlIGl0cyBvd24gY29kZSBmb3IgdGhlIGVycm9yIGluIHRoZSBkZXRhaWxzIGVsZW1lbnQuXHJcbiAgICAqL1xyXG4gICBjb2RlOiAnYnVzaW5lc3MtcnVsZSd8J2NvZGUtaW52YWxpZCd8J2NvbmZsaWN0J3wnZGVsZXRlZCd8J2R1cGxpY2F0ZSd8J2V4Y2VwdGlvbid8J2V4cGlyZWQnfCdleHRlbnNpb24nfCdmb3JiaWRkZW4nfCdpbmNvbXBsZXRlJ3wnaW5mb3JtYXRpb25hbCd8J2ludmFsaWQnfCdpbnZhcmlhbnQnfCdsb2NrLWVycm9yJ3wnbG9naW4nfCdtdWx0aXBsZS1tYXRjaGVzJ3wnbm8tc3RvcmUnfCdub3QtZm91bmQnfCdub3Qtc3VwcG9ydGVkJ3wncHJvY2Vzc2luZyd8J3JlcXVpcmVkJ3wnc2VjdXJpdHknfCdzdHJ1Y3R1cmUnfCdzdXBwcmVzc2VkJ3wndGhyb3R0bGVkJ3wndGltZW91dCd8J3Rvby1jb3N0bHknfCd0b28tbG9uZyd8J3RyYW5zaWVudCd8J3Vua25vd24nfCd2YWx1ZSd8bnVsbDtcclxuICAgLyoqXHJcbiAgICAqIEEgaHVtYW4gcmVhZGFibGUgZGVzY3JpcHRpb24gb2YgdGhlIGVycm9yIGlzc3VlIFNIT1VMRCBiZSBwbGFjZWQgaW4gZGV0YWlscy50ZXh0LlxyXG4gICAgKi9cclxuICAgZGV0YWlscz86IEZ0c0NvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGlzIG1heSBiZSBhIGRlc2NyaXB0aW9uIG9mIGhvdyBhIHZhbHVlIGlzIGVycm9uZW91cywgYSBzdGFjayBkdW1wIHRvIGhlbHAgdHJhY2UgdGhlIGlzc3VlIG9yIG90aGVyIHRyb3VibGVzaG9vdGluZyBpbmZvcm1hdGlvbi5cclxuICAgICovXHJcbiAgIGRpYWdub3N0aWNzPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgLyoqXHJcbiAgICAqIFRoZSByb290IG9mIHRoZSBGSElSUGF0aCBpcyB0aGUgcmVzb3VyY2Ugb3IgYnVuZGxlIHRoYXQgZ2VuZXJhdGVkIE9wZXJhdGlvbk91dGNvbWUuICBFYWNoIEZISVJQYXRoIFNIQUxMIHJlc29sdmUgdG8gYSBzaW5nbGUgbm9kZS5cclxuICAgICovXHJcbiAgIGV4cHJlc3Npb24/OiBzdHJpbmdbXXx1bmRlZmluZWQ7XHJcbiB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJCYXNlQXJncyB7IH1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaGlyQmFzZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZz0nQmFzZSc7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBfZnRzX3JlZ2V4OlJlZ0V4cCA9IC8uPy87XHJcblxyXG4gIC8qKiBEZWZhdWx0IGNvbnN0cnVjdG9yICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RmhpckJhc2VBcmdzPiA9IHt9LCBvcHRpb25zOkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgaWYgKG9wdGlvbnMuYWxsb3dVbmtub3duRWxlbWVudHMgPT09IHRydWUpIHsgT2JqZWN0LmFzc2lnbih0aGlzLCBzb3VyY2UpOyB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICAgcHVibGljIGRvTW9kZWxWYWxpZGF0aW9uKF9leHA6c3RyaW5nID0gJycpOkZ0c0lzc3VlW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRk5WLTFhIGltcGxlbWVudGF0aW9uIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Rqd2ViYi9mbnYtcGx1c1xyXG4gICAqIEBwYXJhbSBzdHIgXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBfaGFzaDUyXzFhX2Zhc3Qoc3RyOnN0cmluZyk6bnVtYmVye1xyXG5cdFx0dmFyIGksbD1zdHIubGVuZ3RoLTMsdDA9MCx2MD0weDIzMjUsdDE9MCx2MT0weDg0MjIsdDI9MCx2Mj0weDljZTQsdDM9MCx2Mz0weGNiZjI7XHJcblxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGw7KSB7XHJcblx0XHRcdHYwXj1zdHIuY2hhckNvZGVBdChpKyspO1xyXG5cdFx0XHR0MD12MCo0MzU7dDE9djEqNDM1O3QyPXYyKjQzNTt0Mz12Myo0MzU7XHJcblx0XHRcdHQyKz12MDw8ODt0Mys9djE8PDg7XHJcblx0XHRcdHQxKz10MD4+PjE2O3YwPXQwJjY1NTM1O3QyKz10MT4+PjE2O3YxPXQxJjY1NTM1O3YzPSh0MysodDI+Pj4xNikpJjY1NTM1O3YyPXQyJjY1NTM1O1xyXG5cdFx0XHR2MF49c3RyLmNoYXJDb2RlQXQoaSsrKTtcclxuXHRcdFx0dDA9djAqNDM1O3QxPXYxKjQzNTt0Mj12Mio0MzU7dDM9djMqNDM1O1xyXG5cdFx0XHR0Mis9djA8PDg7dDMrPXYxPDw4O1xyXG5cdFx0XHR0MSs9dDA+Pj4xNjt2MD10MCY2NTUzNTt0Mis9dDE+Pj4xNjt2MT10MSY2NTUzNTt2Mz0odDMrKHQyPj4+MTYpKSY2NTUzNTt2Mj10MiY2NTUzNTtcclxuXHRcdFx0djBePXN0ci5jaGFyQ29kZUF0KGkrKyk7XHJcblx0XHRcdHQwPXYwKjQzNTt0MT12MSo0MzU7dDI9djIqNDM1O3QzPXYzKjQzNTtcclxuXHRcdFx0dDIrPXYwPDw4O3QzKz12MTw8ODtcclxuXHRcdFx0dDErPXQwPj4+MTY7djA9dDAmNjU1MzU7dDIrPXQxPj4+MTY7djE9dDEmNjU1MzU7djM9KHQzKyh0Mj4+PjE2KSkmNjU1MzU7djI9dDImNjU1MzU7XHJcblx0XHRcdHYwXj1zdHIuY2hhckNvZGVBdChpKyspO1xyXG5cdFx0XHR0MD12MCo0MzU7dDE9djEqNDM1O3QyPXYyKjQzNTt0Mz12Myo0MzU7XHJcblx0XHRcdHQyKz12MDw8ODt0Mys9djE8PDg7XHJcblx0XHRcdHQxKz10MD4+PjE2O3YwPXQwJjY1NTM1O3QyKz10MT4+PjE2O3YxPXQxJjY1NTM1O3YzPSh0MysodDI+Pj4xNikpJjY1NTM1O3YyPXQyJjY1NTM1O1xyXG5cdFx0fVxyXG5cclxuXHRcdHdoaWxlKGk8bCszKXtcclxuXHRcdFx0djBePXN0ci5jaGFyQ29kZUF0KGkrKyk7XHJcblx0XHRcdHQwPXYwKjQzNTt0MT12MSo0MzU7dDI9djIqNDM1O3QzPXYzKjQzNTtcclxuXHRcdFx0dDIrPXYwPDw4O3QzKz12MTw8ODtcclxuXHRcdFx0dDErPXQwPj4+MTY7djA9dDAmNjU1MzU7dDIrPXQxPj4+MTY7djE9dDEmNjU1MzU7djM9KHQzKyh0Mj4+PjE2KSkmNjU1MzU7djI9dDImNjU1MzU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICh2MyYxNSkgKiAyODE0NzQ5NzY3MTA2NTYgKyB2MiAqIDQyOTQ5NjcyOTYgKyB2MSAqIDY1NTM2ICsgKHYwXih2Mz4+NCkpO1xyXG5cdH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdGUgYW4gT3B0aW9uYWwgU2NhbGFyIGVsZW1lbnQgXHJcbiAgICogQHBhcmFtIHAgXHJcbiAgICogQHBhcmFtIGV4cCBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAgcHVibGljIHZPUyhwOlJlYWRvbmx5PHN0cmluZz4sIGV4cDpSZWFkb25seTxzdHJpbmc+KTpGdHNJc3N1ZVtdIHtcclxuICAgIGlmICgoKHRoaXMgYXMgYW55KVtwXSA9PT0gdW5kZWZpbmVkKSB8fCBcclxuICAgICAgICAoKHRoaXMgYXMgYW55KVtwXSA9PT0gbnVsbCkgfHxcclxuICAgICAgICAoKHRoaXMgYXMgYW55KVtwXSA9PT0gJycpIHx8XHJcbiAgICAgICAgKE51bWJlci5pc05hTigodGhpcyBhcyBhbnkpW3BdKSkpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KCh0aGlzIGFzIGFueSlbcF0pKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdzdHJ1Y3R1cmUnLFxyXG4gICAgICAgIGRldGFpbHM6IHt0ZXh0OiBgRm91bmQgYXJyYXkgaW4gc2NhbGFyIHByb3BlcnR5ICR7cH0gKCR7ZXhwfSlgfSxcclxuICAgICAgICBleHByZXNzaW9uOiBbZXhwXSxcclxuICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICh0aGlzIGFzIGFueSlbcF0uZG9Nb2RlbFZhbGlkYXRpb24oZXhwKycuJytwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIGFuIE9wdGlvbmFsIFNjYWxhciBlbGVtZW50IGJvdW5kIHRvIGEgVmFsdWUgc2V0XHJcbiAgICogQHBhcmFtIHAgXHJcbiAgICogQHBhcmFtIGV4cCBcclxuICAgKiBAcGFyYW0gdnNOIFxyXG4gICAqIEBwYXJhbSB2c1YgXHJcbiAgICogQHBhcmFtIHZzUyBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwdWJsaWMgdk9TVihcclxuICAgIHA6UmVhZG9ubHk8c3RyaW5nPixcclxuICAgIGV4cDpSZWFkb25seTxzdHJpbmc+LFxyXG4gICAgdnNOOnN0cmluZyxcclxuICAgIHZzVjpSZWFkb25seTxzdHJpbmdbXT4sXHJcbiAgICB2c1M6UmVhZG9ubHk8c3RyaW5nPik6RnRzSXNzdWVbXSB7XHJcblxyXG4gICAgaWYgKCgodGhpcyBhcyBhbnkpW3BdID09PSB1bmRlZmluZWQpIHx8IFxyXG4gICAgICAgICgodGhpcyBhcyBhbnkpW3BdID09PSBudWxsKSB8fFxyXG4gICAgICAgICgodGhpcyBhcyBhbnkpW3BdID09PSAnJykgfHxcclxuICAgICAgICAoTnVtYmVyLmlzTmFOKCh0aGlzIGFzIGFueSlbcF0pKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoKHRoaXMgYXMgYW55KVtwXSkpIHtcclxuICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgY29kZTogJ3N0cnVjdHVyZScsXHJcbiAgICAgICAgZGV0YWlsczoge3RleHQ6IGBGb3VuZCBhcnJheSBpbiBzY2FsYXIgcHJvcGVydHkgJHtwfSAoJHtleHB9KWB9LFxyXG4gICAgICAgIGV4cHJlc3Npb246IFtleHBdLFxyXG4gICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNzOkZ0c0lzc3VlW10gPSBbXTtcclxuICAgIGlzcy5wdXNoKC4uLih0aGlzIGFzIGFueSlbcF0uZG9Nb2RlbFZhbGlkYXRpb24oZXhwKycuJytwKSk7XHJcbiAgICBpZiAoISh0aGlzIGFzIGFueSlbcF0uaGFzQ29kaW5nRnJvbVZhbGlkYXRpb25PYmoodnNWKSkge1xyXG4gICAgICBpc3MucHVzaCh7XHJcbiAgICAgICAgc2V2ZXJpdHk6ICh2c1MgPT09ICdyJykgPyAnZXJyb3InIDogJ2luZm9ybWF0aW9uJywgXHJcbiAgICAgICAgY29kZTonY29kZS1pbnZhbGlkJywgXHJcbiAgICAgICAgZGV0YWlsczp7dGV4dDpgJHtwfSAoJHtleHB9KSBkb2VzIG5vdCBjb250YWluIGNvZGUgZnJvbSBib3VuZCB2YWx1ZSBzZXQgJHt2c059YH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSBhbiBPcHRpb25hbCBBcnJheSBlbGVtZW50XHJcbiAgICogQHBhcmFtIHAgXHJcbiAgICogQHBhcmFtIGV4cCBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwdWJsaWMgdk9BKHA6UmVhZG9ubHk8c3RyaW5nPiwgZXhwOlJlYWRvbmx5PHN0cmluZz4pOkZ0c0lzc3VlW10ge1xyXG4gICAgaWYgKCgodGhpcyBhcyBhbnkpW3BdID09PSB1bmRlZmluZWQpIHx8IFxyXG4gICAgICAgICgodGhpcyBhcyBhbnkpW3BdID09PSBudWxsKSB8fFxyXG4gICAgICAgICgodGhpcyBhcyBhbnkpW3BdID09PSAnJykgfHxcclxuICAgICAgICAoTnVtYmVyLmlzTmFOKCh0aGlzIGFzIGFueSlbcF0pKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KCh0aGlzIGFzIGFueSlbcF0pKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdzdHJ1Y3R1cmUnLFxyXG4gICAgICAgIGRldGFpbHM6IHt0ZXh0OiBgRm91bmQgc2NhbGFyIGluIGFycmF5IHByb3BlcnR5ICR7cH0gKCR7ZXhwfSlgfVxyXG4gICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNzOkZ0c0lzc3VlW10gPSBbXTtcclxuICAgICh0aGlzIGFzIGFueSlbcF0uZm9yRWFjaCgoeDphbnksaTpudW1iZXIpID0+IHtpc3MucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKGAke2V4cH0uJHtwfVske2l9XWApKX0gKTtcclxuXHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdGUgYW4gT3B0aW9uYWwgQXJyYXkgZWxlbWVudCBib3VuZCB0byBhIFZhbHVlIHNldFxyXG4gICAqIEBwYXJhbSBwIFxyXG4gICAqIEBwYXJhbSBleHAgXHJcbiAgICogQHBhcmFtIHZzTiBcclxuICAgKiBAcGFyYW0gdnNWIFxyXG4gICAqIEBwYXJhbSB2c1MgXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgcHVibGljIHZPQVYoXHJcbiAgICBwOlJlYWRvbmx5PHN0cmluZz4sXHJcbiAgICBleHA6UmVhZG9ubHk8c3RyaW5nPixcclxuICAgIHZzTjpzdHJpbmcsXHJcbiAgICB2c1Y6UmVhZG9ubHk8c3RyaW5nW10+LFxyXG4gICAgdnNTOlJlYWRvbmx5PHN0cmluZz4pOkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpGdHNJc3N1ZVtdID0gW107XHJcblxyXG4gICAgaWYgKCgodGhpcyBhcyBhbnkpW3BdID09PSB1bmRlZmluZWQpIHx8IFxyXG4gICAgICAgICgodGhpcyBhcyBhbnkpW3BdID09PSBudWxsKSB8fFxyXG4gICAgICAgICgodGhpcyBhcyBhbnkpW3BdID09PSAnJykgfHxcclxuICAgICAgICAoTnVtYmVyLmlzTmFOKCh0aGlzIGFzIGFueSlbcF0pKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KCh0aGlzIGFzIGFueSlbcF0pKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdzdHJ1Y3R1cmUnLFxyXG4gICAgICAgIGRldGFpbHM6IHt0ZXh0OiBgRm91bmQgc2NhbGFyIGluIGFycmF5IHByb3BlcnR5ICR7cH0gKCR7ZXhwfSlgfSxcclxuICAgICAgICBleHByZXNzaW9uOiBbZXhwXSxcclxuICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgKHRoaXMgYXMgYW55KVtwXS5mb3JFYWNoKCh4OmFueSxpOm51bWJlcikgPT4ge1xyXG4gICAgICBpc3MucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKGAke2V4cH0uJHtwfVske2l9XWApKTtcclxuICAgICAgaWYgKCF4Lmhhc0NvZGluZ0Zyb21WYWxpZGF0aW9uT2JqKHZzVikpIHtcclxuICAgICAgICBpc3MucHVzaCh7XHJcbiAgICAgICAgICBzZXZlcml0eTogKHZzUyA9PT0gJ3InKSA/ICdlcnJvcicgOiAnaW5mb3JtYXRpb24nLCBcclxuICAgICAgICAgIGNvZGU6J2NvZGUtaW52YWxpZCcsIFxyXG4gICAgICAgICAgZGV0YWlsczp7dGV4dDpgJHtwfSAoJHtleHB9KSBkb2VzIG5vdCBjb250YWluIGNvZGUgZnJvbSBib3VuZCB2YWx1ZSBzZXQgJHt2c059YH0sXHJcbiAgICAgICAgICBleHByZXNzaW9uOiBbZXhwXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIGEgUmVxdWlyZWQgU2NhbGFyIGVsZW1lbnRcclxuICAgKiBAcGFyYW0gcCBcclxuICAgKiBAcGFyYW0gZXhwIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHB1YmxpYyB2UlMocDpSZWFkb25seTxzdHJpbmc+LCBleHA6UmVhZG9ubHk8c3RyaW5nPik6RnRzSXNzdWVbXSB7XHJcbiAgICBpZiAoKCh0aGlzIGFzIGFueSlbcF0gPT09IHVuZGVmaW5lZCkgfHwgXHJcbiAgICAgICAgKCh0aGlzIGFzIGFueSlbcF0gPT09IG51bGwpIHx8XHJcbiAgICAgICAgKCh0aGlzIGFzIGFueSlbcF0gPT09ICcnKSB8fFxyXG4gICAgICAgIChOdW1iZXIuaXNOYU4oKHRoaXMgYXMgYW55KVtwXSkpKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZGV0YWlsczoge3RleHQ6IGBNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5ICcke3B9JywgJHtleHB9YH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KCh0aGlzIGFzIGFueSlbcF0pKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdzdHJ1Y3R1cmUnLFxyXG4gICAgICAgIGRldGFpbHM6IHt0ZXh0OiBgRm91bmQgYXJyYXkgaW4gc2NhbGFyIHByb3BlcnR5ICR7cH0gKCR7ZXhwfSlgfSxcclxuICAgICAgICBleHByZXNzaW9uOiBbZXhwXSxcclxuICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCh0aGlzIGFzIGFueSlbcF0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZGV0YWlsczoge3RleHQ6IGBNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5ICcke3B9JywgJHtleHB9YH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW3BdLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCsnLicrcCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSBhIFJlcXVpcmVkIFNjYWxhciBlbGVtZW50IGJvdW5kIHRvIGEgVmFsdWUgc2V0XHJcbiAgICogQHBhcmFtIHAgXHJcbiAgICogQHBhcmFtIGV4cCBcclxuICAgKiBAcGFyYW0gdnNOIFxyXG4gICAqIEBwYXJhbSB2c1YgXHJcbiAgICogQHBhcmFtIHZzUyBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwdWJsaWMgdlJTVihcclxuICAgIHA6UmVhZG9ubHk8c3RyaW5nPixcclxuICAgIGV4cDpSZWFkb25seTxzdHJpbmc+LFxyXG4gICAgdnNOOnN0cmluZyxcclxuICAgIHZzVjpSZWFkb25seTxzdHJpbmdbXT4sXHJcbiAgICB2c1M6UmVhZG9ubHk8c3RyaW5nPik6RnRzSXNzdWVbXSB7XHJcblxyXG4gICAgaWYgKCgodGhpcyBhcyBhbnkpW3BdID09PSB1bmRlZmluZWQpIHx8IFxyXG4gICAgICAgICgodGhpcyBhcyBhbnkpW3BdID09PSBudWxsKSB8fFxyXG4gICAgICAgICgodGhpcyBhcyBhbnkpW3BdID09PSAnJykgfHxcclxuICAgICAgICAoTnVtYmVyLmlzTmFOKCh0aGlzIGFzIGFueSlbcF0pKSkge1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICBjb2RlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgIGRldGFpbHM6IHt0ZXh0OiBgTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSAnJHtwfScsICR7ZXhwfWB9LFxyXG4gICAgICAgIGV4cHJlc3Npb246IFtleHBdLFxyXG4gICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSgodGhpcyBhcyBhbnkpW3BdKSkge1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICBjb2RlOiAnc3RydWN0dXJlJyxcclxuICAgICAgICBkZXRhaWxzOiB7dGV4dDogYEZvdW5kIGFycmF5IGluIHNjYWxhciBwcm9wZXJ0eSAke3B9ICgke2V4cH0pYH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpc3M6RnRzSXNzdWVbXSA9IFtdO1xyXG4gICAgaXNzLnB1c2goLi4uKHRoaXMgYXMgYW55KVtwXS5kb01vZGVsVmFsaWRhdGlvbihleHArJy4nK3ApKTtcclxuICAgIGlmICghKHRoaXMgYXMgYW55KVtwXS5oYXNDb2RpbmdGcm9tVmFsaWRhdGlvbk9iaih2c1YpKSB7XHJcbiAgICAgIGlzcy5wdXNoKHtcclxuICAgICAgICBzZXZlcml0eTogKHZzUyA9PT0gJ3InKSA/ICdlcnJvcicgOiAnaW5mb3JtYXRpb24nLCBcclxuICAgICAgICBjb2RlOidjb2RlLWludmFsaWQnLCBcclxuICAgICAgICBkZXRhaWxzOnt0ZXh0OmAke3B9ICgke2V4cH0pIGRvZXMgbm90IGNvbnRhaW4gY29kZSBmcm9tIGJvdW5kIHZhbHVlIHNldCAke3ZzTn1gfSxcclxuICAgICAgICBleHByZXNzaW9uOiBbZXhwXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSBhIFJlcXVpcmVkIEFycmF5IGVsZW1lbnRcclxuICAgKiBAcGFyYW0gcCBcclxuICAgKiBAcGFyYW0gZXhwIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHB1YmxpYyB2UkEocDpSZWFkb25seTxzdHJpbmc+LCBleHA6UmVhZG9ubHk8c3RyaW5nPik6RnRzSXNzdWVbXSB7XHJcbiAgICBpZiAoKCh0aGlzIGFzIGFueSlbcF0gPT09IHVuZGVmaW5lZCkgfHwgXHJcbiAgICAgICAgKCh0aGlzIGFzIGFueSlbcF0gPT09IG51bGwpIHx8XHJcbiAgICAgICAgKCh0aGlzIGFzIGFueSlbcF0gPT09ICcnKSB8fFxyXG4gICAgICAgIChOdW1iZXIuaXNOYU4oKHRoaXMgYXMgYW55KVtwXSkpKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZGV0YWlsczoge3RleHQ6IGBNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5ICcke3B9JywgJHtleHB9YH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSgodGhpcyBhcyBhbnkpW3BdKSkge1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICBjb2RlOiAnc3RydWN0dXJlJyxcclxuICAgICAgICBkZXRhaWxzOiB7dGV4dDogYEZvdW5kIHNjYWxhciBpbiBhcnJheSBwcm9wZXJ0eSAke3B9ICgke2V4cH0pYH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgodGhpcyBhcyBhbnkpW3BdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICBjb2RlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgIGRldGFpbHM6IHt0ZXh0OiBgTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSAnJHtwfScsICR7ZXhwfWB9LFxyXG4gICAgICAgIGV4cHJlc3Npb246IFtleHBdLFxyXG4gICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNzOkZ0c0lzc3VlW10gPSBbXTtcclxuICAgICh0aGlzIGFzIGFueSlbcF0uZm9yRWFjaCgoeDphbnksaTpudW1iZXIpID0+IHtpc3MucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKGAke2V4cH0uJHtwfVske2l9XWApKX0gKTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSBhIFJlcXVpcmVkIEFycmF5IGVsZW1lbnQgYm91bmQgdG8gYSBWYWx1ZSBzZXRcclxuICAgKiBAcGFyYW0gcCBcclxuICAgKiBAcGFyYW0gZXhwIFxyXG4gICAqIEBwYXJhbSB2c04gXHJcbiAgICogQHBhcmFtIHZzViBcclxuICAgKiBAcGFyYW0gdnNTIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHB1YmxpYyB2UkFWKFxyXG4gICAgcDpSZWFkb25seTxzdHJpbmc+LFxyXG4gICAgZXhwOlJlYWRvbmx5PHN0cmluZz4sXHJcbiAgICB2c046c3RyaW5nLFxyXG4gICAgdnNWOlJlYWRvbmx5PHN0cmluZ1tdPixcclxuICAgIHZzUzpSZWFkb25seTxzdHJpbmc+KTpGdHNJc3N1ZVtdIHtcclxuXHJcbiAgICBpZiAoKCh0aGlzIGFzIGFueSlbcF0gPT09IHVuZGVmaW5lZCkgfHwgXHJcbiAgICAgICAgKCh0aGlzIGFzIGFueSlbcF0gPT09IG51bGwpIHx8XHJcbiAgICAgICAgKCh0aGlzIGFzIGFueSlbcF0gPT09ICcnKSB8fFxyXG4gICAgICAgIChOdW1iZXIuaXNOYU4oKHRoaXMgYXMgYW55KVtwXSkpKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZGV0YWlsczoge3RleHQ6IGBNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5ICcke3B9JywgJHtleHB9YH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSgodGhpcyBhcyBhbnkpW3BdKSkge1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICBjb2RlOiAnc3RydWN0dXJlJyxcclxuICAgICAgICBkZXRhaWxzOiB7dGV4dDogYEZvdW5kIHNjYWxhciBpbiBhcnJheSBwcm9wZXJ0eSAke3B9ICgke2V4cH0pYH0sXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgodGhpcyBhcyBhbnkpW3BdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICBjb2RlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgIGRldGFpbHM6IHt0ZXh0OiBgTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSAnJHtwfScsICR7ZXhwfWB9LFxyXG4gICAgICAgIGV4cHJlc3Npb246IFtleHBdLFxyXG4gICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNzOkZ0c0lzc3VlW10gPSBbXTtcclxuICAgICh0aGlzIGFzIGFueSlbcF0uZm9yRWFjaCgoeDphbnksaTpudW1iZXIpID0+IHtcclxuICAgICAgaXNzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbihgJHtleHB9LiR7cH1bJHtpfV1gKSk7XHJcbiAgICAgIGlmICgheC5oYXNDb2RpbmdGcm9tVmFsaWRhdGlvbk9iaih2c1YpKSB7XHJcbiAgICAgICAgaXNzLnB1c2goe1xyXG4gICAgICAgICAgc2V2ZXJpdHk6ICh2c1MgPT09ICdyJykgPyAnZXJyb3InIDogJ2luZm9ybWF0aW9uJywgXHJcbiAgICAgICAgICBjb2RlOidjb2RlLWludmFsaWQnLCBcclxuICAgICAgICAgIGRldGFpbHM6e3RleHQ6YCR7cH0gKCR7ZXhwfSkgZG9lcyBub3QgY29udGFpbiBjb2RlIGZyb20gYm91bmQgdmFsdWUgc2V0ICR7dnNOfWB9LFxyXG4gICAgICAgICAgZXhwcmVzc2lvbjogW2V4cF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHN0cmlwIGludmFsaWQgZWxlbWVudCB2YWx1ZXMgZm9yIHNlcmlhbGl6YXRpb24uXHJcbiAgICovXHJcbiAgIHB1YmxpYyB0b0pTT04oKSB7XHJcbiAgICBsZXQgYzphbnkgPSB7fTtcclxuICBcclxuICAgIGZvciAoY29uc3Qga2V5IGluICh0aGlzIGFzIGFueSkpIHtcclxuICAgICAgaWYgKCgodGhpcyBhcyBhbnkpW2tleV0gPT09IHVuZGVmaW5lZCkgfHwgXHJcbiAgICAgICAgICAoKHRoaXMgYXMgYW55KVtrZXldID09PSBudWxsKSB8fFxyXG4gICAgICAgICAgKCh0aGlzIGFzIGFueSlba2V5XSA9PT0gJycpIHx8XHJcbiAgICAgICAgICAoTnVtYmVyLmlzTmFOKCh0aGlzIGFzIGFueSlba2V5XSkpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBpc0FycmF5OmJvb2xlYW4gPSBBcnJheS5pc0FycmF5KCh0aGlzIGFzIGFueSlba2V5XSk7XHJcblxyXG4gICAgICBpZiAoaXNBcnJheSAmJiAodGhpcyBhcyBhbnkpW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBmdHNEdDpzdHJpbmcgPSAoaXNBcnJheSA/ICh0aGlzIGFzIGFueSlba2V5XVswXS5jb25zdHJ1Y3Rvci5fZnRzX2RhdGFUeXBlIDogKHRoaXMgYXMgYW55KVtrZXldLmNvbnN0cnVjdG9yLl9mdHNfZGF0YVR5cGUpID8/ICcnO1xyXG4gICAgICBsZXQgaXNDaG9pY2U6Ym9vbGVhbiA9ICh0aGlzIGFzIGFueSkuY29uc3RydWN0b3JbJ19mdHNfJyArIGtleSArICdJc0Nob2ljZSddID8/IGZhbHNlO1xyXG4gICAgICBsZXQgaXNQcmltaXRpdmUgPSAoaXNBcnJheSA/ICh0aGlzIGFzIGFueSlba2V5XVswXS5jb25zdHJ1Y3RvclsnX2Z0c19pc1ByaW1pdGl2ZSddIDogKHRoaXMgYXMgYW55KVtrZXldLmNvbnN0cnVjdG9yWydfZnRzX2lzUHJpbWl0aXZlJ10pID8/IGZhbHNlO1xyXG4gICAgICBsZXQgZEtleTpzdHJpbmcgPSBrZXkgKyAoaXNDaG9pY2UgPyBmdHNEdCA6ICcnKTtcclxuICBcclxuICAgICAgaWYgKGlzQXJyYXkpIHtcclxuICAgICAgICBpZiAoaXNQcmltaXRpdmUpIHtcclxuICAgICAgICAgIGNvbnN0IGVOYW1lOnN0cmluZyA9ICdfJyArIGRLZXk7XHJcbiAgICAgICAgICBsZXQgZm91bmRBbnlWYWw6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgbGV0IGZvdW5kQW55RXh0OmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgIGNbZEtleV0gPSBbXTtcclxuICAgICAgICAgIGNbZU5hbWVdID0gW107XHJcbiAgICAgICAgICAodGhpcyBhcyBhbnkpW2tleV0uZm9yRWFjaCgoYXY6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhZGRFbGVtZW50OmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKChhdi52YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAoYXYudmFsdWUgIT09IG51bGwpKSB7IFxyXG4gICAgICAgICAgICAgIGNbZEtleV0ucHVzaChhdi52YWx1ZSk7IFxyXG4gICAgICAgICAgICAgIGZvdW5kQW55VmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBhZGRFbGVtZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICAgICAgY1tkS2V5XS5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIGxldCBhbzpvYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgaWYgKGF2LmlkKSB7IFxyXG4gICAgICAgICAgICAgIChhbyBhcyBhbnkpWydpZCddID0gYXYuaWQ7XHJcbiAgICAgICAgICAgICAgZm91bmRBbnlFeHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoYXYuZXh0ZW5zaW9uKSAmJiAoYXYuZXh0ZW5zaW9uLmxlbmd0aCAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAoYW8gYXMgYW55KVsnZXh0ZW5zaW9uJ10gPSBbXTtcclxuICAgICAgICAgICAgICBhdi5leHRlbnNpb24uZm9yRWFjaCgoZTphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIChhbyBhcyBhbnkpWydleHRlbnNpb24nXS5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGZvdW5kQW55RXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICBpZiAoZm91bmRBbnlFeHQpIHsgXHJcbiAgICAgICAgICAgICAgY1tlTmFtZV0ucHVzaChhbyk7XHJcbiAgICAgICAgICAgICAgYWRkRWxlbWVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY1tlTmFtZV0ucHVzaChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICBpZiAoIWFkZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICBjW2RLZXldLnBvcCgpO1xyXG4gICAgICAgICAgICAgIGNbZU5hbWVdLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICAgIGlmICghZm91bmRBbnlWYWwpIHsgZGVsZXRlIGNbZEtleV07IH1cclxuICAgICAgICAgIGlmICghZm91bmRBbnlFeHQpIHsgZGVsZXRlIGNbZU5hbWVdOyB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChmdHNEdCkge1xyXG4gICAgICAgICAgY1tkS2V5XSA9IFtdO1xyXG4gICAgICAgICAgKHRoaXMgYXMgYW55KVtrZXldLmZvckVhY2goKHY6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNbZEtleV0ucHVzaCh2LnRvSlNPTigpKTtcclxuICAgICAgICAgICAgY1tkS2V5XS5wdXNoKHYpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNbZEtleV0gPSAodGhpcyBhcyBhbnkpW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKSB7XHJcbiAgICAgICAgaWYgKCgodGhpcyBhcyBhbnkpW2tleV0udmFsdWUgIT09IHVuZGVmaW5lZCkgJiYgKCh0aGlzIGFzIGFueSlba2V5XS52YWx1ZSAhPT0gbnVsbCkpIHsgY1tkS2V5XSA9ICh0aGlzIGFzIGFueSlba2V5XS52YWx1ZTsgfVxyXG5cclxuICAgICAgICBjb25zdCBlTmFtZTpzdHJpbmcgPSAnXycgKyBkS2V5O1xyXG4gICAgICAgIGNbZU5hbWVdID0ge307XHJcbiAgICAgICAgaWYgKCh0aGlzIGFzIGFueSlba2V5XVsnaWQnXSkgeyBjW2VOYW1lXVsnaWQnXSA9ICh0aGlzIGFzIGFueSlba2V5XVsnaWQnXTsgfVxyXG4gICAgICAgIGlmICgoKHRoaXMgYXMgYW55KVtrZXldWydleHRlbnNpb24nXSkgJiYgKCh0aGlzIGFzIGFueSlba2V5XVsnZXh0ZW5zaW9uJ10ubGVuZ3RoICE9PSAwKSkge1xyXG4gICAgICAgICAgY1tlTmFtZV1bJ2V4dGVuc2lvbiddID0gW107XHJcbiAgICAgICAgICAodGhpcyBhcyBhbnkpW2tleV1bJ2V4dGVuc2lvbiddLmZvckVhY2goKGU6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNbZU5hbWVdWydleHRlbnNpb24nXS5wdXNoKGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY1tlTmFtZV0pLmxlbmd0aCA9PT0gMCkgeyBkZWxldGUgY1tlTmFtZV07IH1cclxuICAgICAgfSBlbHNlIGlmIChmdHNEdCkge1xyXG4gICAgICAgIGNbZEtleV0gPSAodGhpcyBhcyBhbnkpW2tleV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY1tkS2V5XSA9ICh0aGlzIGFzIGFueSlba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGM7XHJcbiAgfVxyXG59XHJcbiJdfQ==