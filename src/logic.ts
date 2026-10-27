import type { Estimate, Project } from './domain';

export const AREA_TO_SQFT: Record<Project['plotUnit'], number> = { 'sq ft': 1, 'sq m': 10.7639104167, acre: 43560, guntha: 1089 };
export const plotAreaInSqFt = (area: number, unit: Project['plotUnit']) => area * AREA_TO_SQFT[unit];
export const estimateCosts = (e: Estimate) => {
  const base = e.area * e.rate;
  const subtotal = base + e.site + e.utilities + e.fees + e.other;
  const contingencyAmount = subtotal * e.contingency / 100;
  return { base, subtotal, contingencyAmount, total: subtotal + contingencyAmount };
};
export const progressPercent = (items: boolean[]) => items.length ? Math.round(items.filter(Boolean).length / items.length * 100) : 0;
export const isValidEstimate = (e: Estimate) => Number.isFinite(e.area) && e.area > 0 && e.area <= 100000 && Number.isFinite(e.rate) && e.rate > 0 && e.rate <= 100000 && [e.site,e.utilities,e.fees,e.other].every(v => Number.isFinite(v) && v >= 0 && v <= 1_000_000_000_000) && Number.isFinite(e.contingency) && e.contingency >= 0 && e.contingency <= 100;
const STORAGE_KEY = 'secondhome-navigator:v1';
type Store = { version: 1; project: Project | null };
export function loadProject(): Project | null {
  try { const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return null; const parsed = JSON.parse(raw) as Store; return parsed.version === 1 && parsed.project && typeof parsed.project === 'object' ? parsed.project : null; }
  catch { return null; }
}
export function saveProject(project: Project | null) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, project } satisfies Store)); } catch { /* Storage may be unavailable; app remains usable for this session. */ } }
