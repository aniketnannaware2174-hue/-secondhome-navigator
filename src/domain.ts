export type View = 'home' | 'dashboard' | 'project' | 'assessment' | 'designs' | 'estimator' | 'roadmap' | 'rental' | 'report' | 'quality';
export type Project = {
  name: string; location: string; plotArea: number; plotUnit: 'sq ft' | 'sq m' | 'acre' | 'guntha'; use: string;
  targetBudget: number; builtUpArea: number; style: string; priorities: string[]; notes: string;
  assessment?: Assessment; selectedDesigns: string[]; estimate?: Estimate; roadmap: boolean[]; roadmapNotes: string[]; rental: boolean[];
};
export type Assessment = { terrain: string; road: string; water: string; electricity: string; site: string; restrictions: string };
export type Estimate = { area: number; rate: number; site: number; utilities: number; fees: number; other: number; contingency: number };
export const ROADMAP = [
  'Define project goals and budget', 'Collect land and ownership documents', 'Consult the local planning authority and qualified professionals',
  'Conduct site survey and assess site conditions', 'Develop a preliminary architectural brief', 'Evaluate sustainable design strategies',
  'Obtain required professional designs and statutory approvals', 'Finalize detailed estimates and contractor scope',
  'Plan construction and quality checks', 'Prepare utilities, landscaping and maintenance arrangements',
  'Review safety, guest requirements and operational readiness if rental use is intended',
];
export const RENTAL_TASKS = ['Guest safety and first-aid provisions', 'Reliable water and electricity', 'Internet connectivity needs', 'Bathroom and kitchen facilities', 'Guest access and parking', 'Waste management arrangements', 'Cleaning and maintenance plan', 'Guest instructions and emergency contacts', 'Operating-cost considerations', 'Investigate relevant local requirements'];
export const DESIGNS = [
 { id:'compact', name:'Compact sustainable retreat', style:'Contemporary', use:'Personal retreat', range:'650–1,000 sq ft', tags:['Solar readiness','Rainwater harvesting','Native planting'], features:['Compact footprint','Cross ventilation','Water-efficient fixtures'], advantage:'A considered, lower-footprint brief for occasional stays.', consideration:'Confirm access, services and site fit with local professionals.' },
 { id:'courtyard', name:'Courtyard farmhouse', style:'Courtyard', use:'Family holiday home', range:'1,200–2,000 sq ft', tags:['Daylight','Shaded outdoor space','Passive cooling'], features:['Central shaded court','Daylight optimization','Cross ventilation'], advantage:'Creates a sheltered shared outdoor heart for family use.', consideration:'Courtyard proportions and drainage need climate- and site-specific design.' },
 { id:'tropical', name:'Tropical contemporary villa', style:'Contemporary', use:'Family holiday home', range:'1,800–3,000 sq ft', tags:['Shaded outdoor space','Solar readiness','Native planting'], features:['Deep overhangs','Covered verandas','Landscape integration'], advantage:'Blends indoor and outdoor living with generous shade.', consideration:'Larger footprint may increase infrastructure and maintenance needs.' },
 { id:'passive', name:'Passive-cooling farmhouse', style:'Regional', use:'Personal retreat', range:'1,000–1,800 sq ft', tags:['Passive cooling','Daylight','Water efficiency'], features:['Orientation-led planning','Shaded openings','Thermal comfort strategies'], advantage:'Puts climate-responsive design questions at the center.', consideration:'Performance depends on the specific climate, design and construction.' },
 { id:'permaculture', name:'Permaculture-integrated retreat', style:'Regional', use:'Personal retreat', range:'900–1,600 sq ft', tags:['Rainwater harvesting','Native planting','Water efficiency'], features:['Rainwater planning','Edible landscape brief','Native planting'], advantage:'Connects the home brief with landscape and water planning.', consideration:'Requires ongoing landscape care and site-specific water assessment.' },
 { id:'rental', name:'Rental-oriented holiday villa', style:'Contemporary', use:'Potential rental', range:'1,500–2,500 sq ft', tags:['Solar readiness','Water efficiency','Shaded outdoor space'], features:['Durable finishes','Guest flow planning','Operational storage'], advantage:'Prompts early consideration of guest experience and operations.', consideration:'No occupancy or income is implied; verify relevant local requirements.' },
];
export const DEFAULT_ESTIMATE: Estimate = { area: 1200, rate: 2400, site: 250000, utilities: 180000, fees: 220000, other: 100000, contingency: 10 };
export const emptyProject = (): Project => ({ name:'', location:'', plotArea:0, plotUnit:'guntha', use:'Personal retreat', targetBudget:0, builtUpArea:1200, style:'Contemporary', priorities:[], notes:'', selectedDesigns:[], roadmap:Array(ROADMAP.length).fill(false), roadmapNotes:Array(ROADMAP.length).fill(''), rental:Array(RENTAL_TASKS.length).fill(false) });
