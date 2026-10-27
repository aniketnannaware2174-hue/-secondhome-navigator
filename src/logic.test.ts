import { afterEach, describe, expect, it } from 'vitest';
import { emptyProject } from './domain';
import { estimateCosts, isValidEstimate, loadProject, plotAreaInSqFt, progressPercent, saveProject } from './logic';
import type { Estimate } from './domain';

afterEach(() => localStorage.clear());

describe('cost estimator', () => {
  it('calculates the base, subtotal, contingency and total correctly', () => {
    const result = estimateCosts({ area:1000, rate:2000, site:200000, utilities:100000, fees:100000, other:100000, contingency:10 });
    expect(result).toEqual({ base:2000000, subtotal:2500000, contingencyAmount:250000, total:2750000 });
  });
  it('rejects negative values, zero area/rate, and unrealistic inputs', () => {
    const good: Estimate = { area:1200, rate:2400, site:0, utilities:0, fees:0, other:0, contingency:10 };
    expect(isValidEstimate(good)).toBe(true);
    expect(isValidEstimate({...good, site:-1})).toBe(false);
    expect(isValidEstimate({...good, area:0})).toBe(false);
    expect(isValidEstimate({...good, area:100001})).toBe(false);
    expect(isValidEstimate({...good, contingency:101})).toBe(false);
  });
});

describe('unit conversions and progress', () => {
  it('converts acres, guntha, square metres and square feet', () => {
    expect(plotAreaInSqFt(1,'acre')).toBe(43560);
    expect(plotAreaInSqFt(40,'guntha')).toBe(43560);
    expect(plotAreaInSqFt(1,'sq ft')).toBe(1);
    expect(plotAreaInSqFt(1,'sq m')).toBeCloseTo(10.7639,3);
  });
  it('calculates empty and non-empty checklist progress', () => {
    expect(progressPercent([])).toBe(0);
    expect(progressPercent([true,true,false,false])).toBe(50);
  });
});

describe('local persistence', () => {
  it('round-trips a project in the versioned schema', () => {
    const project = {...emptyProject(), name:'Test retreat', plotArea:2, plotUnit:'acre' as const};
    saveProject(project);
    expect(loadProject()).toEqual(project);
    expect(JSON.parse(localStorage.getItem('secondhome-navigator:v1')!).version).toBe(1);
  });
  it('handles malformed and unsupported stored data gracefully', () => {
    localStorage.setItem('secondhome-navigator:v1','{oops');
    expect(loadProject()).toBeNull();
    localStorage.setItem('secondhome-navigator:v1',JSON.stringify({version:2,project:{name:'wrong schema'}}));
    expect(loadProject()).toBeNull();
  });
  it('clears the project when reset is saved', () => {
    saveProject({...emptyProject(),name:'Temporary'});
    saveProject(null);
    expect(loadProject()).toBeNull();
  });
});
