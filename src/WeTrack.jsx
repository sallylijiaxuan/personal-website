import React, { useRef, useState } from 'react';

const screens = [
 { label: 'overview', file: 'dashboard.png', alt: 'WeTrack dashboard with quick currency conversion and spending summary' },
 { label: 'categories', file: 'dashboard2.png', alt: 'WeTrack spending breakdown by category' },
 { label: 'transactions', file: 'tran.jpg', alt: 'WeTrack searchable transaction history grouped by date' },
 { label: 'add expense', file: 'addtran.png', alt: 'WeTrack expense entry with amount, currency, category, and description' },
 { label: 'budget', file: 'budget.png', alt: 'WeTrack monthly budget with spending progress and remaining balance' },
];

export function WeTrackArt({ homepage = false }) {
 const [selected, setSelected] = useState(0);
 const screen = screens[selected];
 const supportingCopy = [
  'Your currencies and spending, together in one view.',
  'See where your money goes, category by category.',
  'Review your spending across currencies.',
  'Log purchases in the currency you spend.',
  'Set your budget. Keep track of what’s left.',
 ];
 const picker = <div className="wetrack-screen-picker" role="group" aria-label="Explore WeTrack product screens">{screens.map((item, index) => <button key={item.file} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.label}</button>)}</div>;
 return <div className={`project-art wetrack-art${homepage ? ' homepage-wetrack-art' : ''}`}>
  <div className="art-top"><span>{homepage ? 'WETRACK / TRAVEL FINANCE' : 'WETRACK / MULTI-CURRENCY EXPENSES'}</span></div>
  {!homepage && picker}
  <div className="wetrack-screens">
   {homepage && <div className="wetrack-poster-copy"><span className="eyebrow">wherever you go</span><h3>New places.<br /><em>Clearer spending.</em></h3><p className="wetrack-changing-copy" aria-live="polite">{supportingCopy.map((text, index) => <span key={text} aria-hidden={selected !== index}>{text}</span>)}</p>{picker}</div>}
   {!homepage && <figure className="wetrack-device wetrack-device-left"><img src="/images/project/wetrack/dashboard2.png" alt="WeTrack category breakdown screen" loading="lazy" /></figure>}
   <figure className="wetrack-device wetrack-device-main"><img src={`/images/project/wetrack/${screen.file}`} alt={screen.alt} loading="lazy" />{!homepage && <figcaption aria-live="polite">{screen.label}</figcaption>}</figure>
   {!homepage && <figure className="wetrack-device wetrack-device-right"><img src="/images/project/wetrack/addtran.png" alt="WeTrack add expense screen" loading="lazy" /></figure>}
  </div>
  <span className="art-caption">{homepage ? 'INTERACTIVE PORTFOLIO ILLUSTRATION · ORIGINAL APP SCREENSHOTS' : 'ANDROID APP · ORIGINAL PRODUCT SCREENSHOTS'}</span>
 </div>;
}
function ScreenshotSlice({ file, width, height, top, cropHeight, label }) {
 return <svg className="wetrack-screenshot-slice" viewBox={`0 ${top} ${width} ${cropHeight}`} role="img" aria-label={label}><image href={`/images/project/wetrack/${file}`} width={width} height={height} /></svg>;
}

function NavigationIcon({ page }) {
 const paths = {
  dashboard: <><path d="M12 3v9h9" /><path d="M8 4a9 9 0 1 0 12 12" /><path d="M16 3a6 6 0 0 1 5 5h-5z" /></>,
  transactions: <><circle cx="12" cy="12" r="9" /><path d="M15 8h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9m3-10v12" /></>,
  add: <path d="M12 4v16M4 12h16" />,
  budget: <><path d="M4 9 2 10v5h3l2 4h3v-3h5v3h3l2-5 2-2-2-2a8 8 0 0 0-13-3L4 5z" /><path d="M10 8h5" /><circle cx="17" cy="10" r=".5" /></>,
  profile: <><circle cx="12" cy="7" r="4" /><path d="M3 22v-2a9 9 0 0 1 18 0v2" /></>,
 };
 return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[page]}</svg>;
}

const phonePages = [
 { id: 'dashboard', label: 'Dashboard', title: 'the bigger picture', description: 'Convert currencies, check your spending, and scroll down to see where your money goes.' },
 { id: 'transactions', label: 'Transactions', title: 'every expense, in view', description: 'Explore the transaction history, organized by date with a description search.' },
 { id: 'add', label: 'Add expense', title: 'a place for each purchase', description: 'The expense-entry screen brings together amount, currency, category, and description.' },
 { id: 'budget', label: 'Budget', title: 'keep your budget close', description: 'See your monthly budget, spending progress, and remaining balance together.' },
 { id: 'profile', label: 'Profile', title: 'your account', description: 'The profile screen holds account information and the logout entry point.' },
];

export function WeTrackPhone() {
 const [active, setActive] = useState('dashboard');
 const viewport = useRef(null);
 const page = phonePages.find(item => item.id === active);
 function navigate(id) { setActive(id); if (viewport.current) viewport.current.scrollTop = 0; }
 const slices = {
  transactions: { file: 'tran.jpg', width: 385, height: 827, top: 20, cropHeight: 689 },
  add: { file: 'addtran.png', width: 310, height: 668, top: 20, cropHeight: 556 },
  budget: { file: 'budget.png', width: 340, height: 734, top: 20, cropHeight: 617 },
  profile: { file: 'profile.png', width: 358, height: 780, top: 20, cropHeight: 655 },
 };
 return <section className="wetrack-phone-preview" aria-label="Interactive WeTrack screenshot walkthrough">
  <div className="wetrack-phone-intro"><span className="eyebrow">EXPLORE THE APP</span><h2 aria-live="polite">{page.title}</h2><p>{page.description}</p><span className="wetrack-phone-hint">{active === 'dashboard' ? 'scroll inside the phone ↓' : 'choose a screen below'}<br />use the bottom navigation to explore</span></div>
  <div className="wetrack-phone"><div className="wetrack-phone-speaker" aria-hidden="true" />
   <div ref={viewport} className="wetrack-phone-viewport" tabIndex={0} role="region" aria-label={`${page.label} screenshot${active === 'dashboard' ? ', scroll for category breakdown' : ''}`}>
    {active === 'dashboard' ? <><ScreenshotSlice file="dashboard.png" width={348} height={754} top={20} cropHeight={622} label="Quick currency conversion and spending summary" /><ScreenshotSlice file="dashboard2.png" width={348} height={752} top={394} cropHeight={258} label="Spending category breakdown" /></> : <ScreenshotSlice {...slices[active]} label={`${page.label} screen`} />}
   </div>
   <nav className="wetrack-phone-nav" aria-label="WeTrack screens">{phonePages.map(item => <button key={item.id} className={item.id === 'add' ? 'wetrack-phone-add' : undefined} type="button" aria-pressed={active === item.id} onClick={() => navigate(item.id)}><NavigationIcon page={item.id} /><span>{item.label}</span></button>)}</nav>
  </div>
  <p className="wetrack-phone-disclosure">Original app screenshots with interactive navigation. Data entry is shown for demonstration.</p>
 </section>;
}

export function WeTrackStory() {
 return <div className="case-study" id="wetrack-case"><div className="case-intro"><span className="eyebrow">WETRACK / THE PRODUCT</span><h4>Expenses across currencies,<br />in one place.</h4><p>An Android app for real-time currency conversion and multi-currency expense tracking.</p></div><div className="case-grid"><div><h5>track transactions</h5><p>WeTrack brings transaction entry and an expense dashboard into a mobile experience for tracking spending across currencies.</p></div><div><h5>keep a budget in view</h5><p>The budget screen complements transaction tracking with a view of spending against a budget.</p></div></div><div className="case-actions"><a className="text-link" href="https://github.com/sallylijiaxuan/WeTrack" target="_blank" rel="noopener noreferrer">explore the repository ↗</a></div></div>;
}
