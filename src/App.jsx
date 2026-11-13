import React, { useLayoutEffect, useRef, useState } from 'react';
import { projects } from './projects';
import { TabbyArt, TabbyStory } from './Tabby';
import { WeTrackArt, WeTrackStory } from './WeTrack';
import Kava from './Kava';
import Brattle from './Brattle';
import Echo from './Echo';
import SlideProject from './SlideProject';
import { slideProjects } from './slideProjects';
import EchoCoverText from './EchoCoverText';
import TikTokResearch from './TikTokResearch';
import './styles.css';
import './editorial.css';

function CoastalCutout({ kind, className = '' }) {
 return <span className={`coastal-cutout cutout-${kind} ${className}`} aria-hidden="true" />;
}

function CoastalScene({ kind, className = '' }) {
 return <span className={`coastal-scene scene-${kind} ${className}`} aria-hidden="true" />;
}

function PrototypePreview() {
 return <a className="prototype-preview" href="https://quick-meal-demo.ioenv.workers.dev/" target="_blank" rel="noopener noreferrer" aria-label="Try the Quick Meal prototype in a new tab">
  <img className="prototype-screenshot" src="/images/project/quick-meal/prototype-results.png" alt="Quick Meal prototype results with 30-minute and $20 filters applied, showing matching restaurants and estimated all-in prices" loading="lazy" />
  <span className="prototype-preview-cta">try the prototype <span aria-hidden="true">↗</span></span>
 </a>;
}

function Header() { return (<header className="nav wrap"><a className="wordmark" href="/">sally li<span>◡̈</span></a><nav aria-label="Main navigation"><a href="/#work">work</a><a href="/#about">a little about me</a><a href="/resume/SallyLi_Resume.pdf" target="_blank" rel="noopener">résumé ↗</a></nav><a className="nav-contact" href="mailto:jiaxuansallyli@gmail.com">say hello ↗</a></header>); }
function Footer() { return (<footer className="wrap"><span className="eyebrow">Something on your mind?</span><div className="footer-main"><h2>Let’s make <span className="closing-highlight">something</span><br /><em>worth caring about.</em></h2><CoastalScene kind="still-life" className="footer-still-life" /><a className="contact-circle" href="mailto:jiaxuansallyli@gmail.com" aria-label="Email Sally">↗</a></div><div className="footer-bottom"><span>© <span>{new Date().getFullYear()}</span> Sally Li</span><div><a href="mailto:jiaxuansallyli@gmail.com">email ↗</a><a href="https://www.linkedin.com/in/sally-jiaxuan-li" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://github.com/sallylijiaxuan" target="_blank" rel="noopener">GitHub ↗</a></div><a href="#">back to top ↑</a></div></footer>); }
function FocusArt() {
 const [active, setActive] = useState(false);
 return (<div className="project-art focus-art"><div className="art-top"><span>FOCUSPET</span><span>A LITTLE COMPANY. A LITTLE FOCUS.</span></div>
<div className={`focus-window${active ? " is-focusing" : ""}`}><div className="window-bar"><span>● ● ●</span><span>your space to focus</span><span>↗</span></div><div className="focus-body"><span className="mini-label">one thing at a time</span><h3>a little focus.<br />a little friend.</h3><div className="pet" aria-hidden="true"><div className="ear left"></div><div className="ear right"></div><div className="pet-face"><i></i><i></i><span>ω</span></div></div><div className="focus-controls"><span id="focus-status" aria-live="polite">{active ? "One thing at a time. Your friend is here." : "Room to breathe. Ready when you are."}</span><button id="focus-toggle" aria-pressed={active} onClick={() => setActive(!active)}>{active ? "pause for a breath Ⅱ" : "take a focus moment ↗"}</button></div></div></div>
<span className="art-caption">INTERACTIVE PORTFOLIO ILLUSTRATION · NOT THE ORIGINAL APP UI</span></div>
);
}
function MealArt() { return (<div className="project-art meal-art"><div className="art-top"><span>QUICK MEAL / DOORDASH CONCEPT</span><span>LESS DECIDING. MORE DOING.</span></div><div className="meal-composition"><div className="meal-copy"><span className="mini-label">Hungry, with a deadline?</span><h3>Less scrolling.<br />Lunch sorted.</h3><div className="constraint"><span>◷ &nbsp;30 minutes</span><span>↳ &nbsp;$20 all-in</span></div><p>A shorter path to a meal that fits.</p></div><div className="phone"><div className="phone-notch"></div><div className="phone-header">‹ <strong>Quick Meal</strong><span>☷</span></div><h4>Good food.<br />Within your limits.</h4><div className="phone-chips"><span>30 min ⌄</span><span>Up to $20 ⌄</span></div><div className="food-image"><span>🥗</span></div><div className="food-info"><strong>Something filling.</strong><span>Estimated arrival · 20–30 min</span><div><b>$18.73</b><small>Estimated all-in total</small></div></div><p className="phone-note">Illustrative meal · estimates, not guarantees</p></div></div><span className="art-caption">PORTFOLIO ILLUSTRATION · ACADEMIC TEAM CONCEPT</span></div>
); }
function ProjectArt({ slug }) { return slug === 'focuspet' ? <FocusArt /> : slug === 'tabby' ? <TabbyArt /> : slug === 'wetrack' ? <WeTrackArt /> : <MealArt />; }
function ProjectCard({ project }) {
 return <article className={`project feature-${project.slug}`}>
 <div className="project-art project-art-mount"><span className={`printed-paper-tab paper-${project.slug}`} aria-hidden="true" /><ProjectArt slug={project.slug} /></div>
 <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
 <div className="project-description"><div><h3><a href={`/projects/${project.slug}/`}>{project.title}</a></h3><p className="project-subtitle"><mark className="editorial-highlight">{project.subtitle}</mark></p></div><p>{project.description}</p></div>
 <div className="project-footer"><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={`/projects/${project.slug}/`}>read the case study ↗</a></div>
 </article>;
}
const otherWork = [
 { title: 'TikTok & consumption', type: 'CONSUMER RESEARCH', description: 'A survey study of TikTok screen time, promotional attitudes, and consumption, with 139 responses.', image: '/images/portfolio/tiktok.png', href: '/projects/tiktok/', action: 'explore the research', local: true },
 { title: 'Bumble', type: 'PLATFORM & COMMUNICATION ANALYSIS', description: 'An analysis of how platform mechanics, communication, and user expectations shape trust and connection.', image: '/images/portfolio/bumble.jpg', href: '/projects/bumble/', action: 'explore the project', local: true },
 { title: 'REI Co-op', type: 'ADVERTISING · STRATEGY', description: 'A strategy and creative proposal welcoming younger outdoor beginners: Bring Your Imperfections.', image: '/images/portfolio/rei.jpg', href: '/projects/rei/', action: 'explore the project', local: true },
 { title: 'Fubo', type: 'ADVERTISING · MEDIA PLANNING', description: 'A sports-family creative concept connected to audience profiles, channel roles, and a seasonal media plan.', image: '/images/portfolio/fubo.jpg', href: '/projects/fubo/', action: 'explore the project', local: true },
 { title: 'Mental Health', type: 'ADVERTISING · INTEGRATED CAMPAIGN', description: 'Face Yourself: an integrated awareness concept exploring what “I’m fine” can leave unsaid.', image: '/images/portfolio/mental.jpg', href: '/projects/mental-health/', action: 'explore the project', local: true },
 { title: 'Fanta', type: 'ADVERTISING · OUT OF HOME', description: 'International flavors as arriving travelers, with a poster series and a flavor-discovery concept.', image: '/images/portfolio/fanta.jpg', href: '/projects/fanta/', action: 'explore the project', local: true },
 { title: 'KAVA', type: 'GRAPHIC DESIGN · INDESIGN', description: 'A Greek-inspired palette and dotted price guides for a clearer restaurant menu.', image: '/images/project/kava/redesign-1.png', href: '/projects/kava/', action: 'view the redesign', local: true },
 { title: 'ECHO', type: 'EDITORIAL DESIGN · ILLUSTRATOR & INDESIGN', description: 'A music-publication brand and an Adele “Then & Now” issue, designed with a fashion-magazine approach.', image: '/images/project/echo/zine-1.png', href: '/projects/echo/', action: 'explore the zine', local: true },
 { title: 'Love & Transcendence', type: 'GRAPHIC DESIGN · PHOTOSHOP', description: 'Three films, one theme: a poster series for a Brattle design assignment.', image: '/images/project/brattle/posters-1.png', href: '/projects/brattle/', action: 'view the poster series', local: true },
];
function OtherWork() {
 const gallery = useRef(null);
 function scrollGallery(direction) {
  const card = gallery.current?.querySelector('.other-card');
  if (!card) return;
  gallery.current.scrollBy({ left: direction * (card.getBoundingClientRect().width + 26), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
 }
 return <section className="other-work wrap" id="more-work"><div className="section-heading"><CoastalCutout kind="oyster" className="other-oyster" /><div><span className="eyebrow">a different side of my toolkit</span><h2>more things I’ve made</h2></div><p>campaigns, consumer research, creative strategy, and graphic design.</p></div><div className="gallery-toolbar"><span>scroll to explore · {otherWork.length} projects</span><div><button type="button" onClick={() => scrollGallery(-1)} aria-label="Scroll to previous projects" aria-controls="other-work-gallery">←</button><button type="button" onClick={() => scrollGallery(1)} aria-label="Scroll to next projects" aria-controls="other-work-gallery">→</button></div></div><div className="other-grid" id="other-work-gallery" ref={gallery} tabIndex={0} role="region" aria-label="More projects — horizontally scrollable gallery">{otherWork.map(item => <a className="other-card" key={item.title} href={item.href} target={item.local ? undefined : "_blank"} rel={item.local ? undefined : "noopener noreferrer"}><div className={`other-image${item.title === 'ECHO' ? ' echo-gallery-preview' : ''}`}>{item.title === 'ECHO' ? <div className="echo-issue-cover echo-gallery-cover"><img src={item.image} alt="ECHO magazine cover featuring Adele" loading="lazy" /><EchoCoverText /></div> : <img src={item.image} alt={`${item.title} project preview`} loading="lazy" />}</div><span className="eyebrow">{item.type}</span><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">{item.action} ↗</span></a>)}</div></section>;
}
function Home() { return <>
<section className="editorial-cover wrap" aria-labelledby="cover-title">
<div className="edition-line"><span>product · research · engineering</span><span>THE PORTFOLIO EDIT / SALLY LI</span></div>
<div className="cover-heading"><span className="cover-kicker">a study in</span><h1 id="cover-title">everyday <em>possibility.</em></h1><p className="cover-deck">Sally Li · Product builder.<br />Connecting people, technology, and a little creative instinct.</p></div>
<div className="cover-bottom"><span>SAN JOSE, CA / SOFTWARE MANAGEMENT @ CMU</span><a className="text-link" href="#about">turn the page ↓</a><a href="#work">skip to the projects ↗</a></div>
</section>
<section className="intro-spread wrap" aria-labelledby="intro-title">
<div className="cover-spread" id="about">
 <div className="cover-intro"><span className="eyebrow">the person behind the products</span><h2 id="intro-title">a little about <em>me ◡̈</em></h2><p>I studied computer science and advertising at Boston University—one taught me how to build things, the other made me think about who they’re for. Now, I’m bringing those perspectives together through a master’s in Software Management at Carnegie Mellon.</p><p>That combination drew me to product management. I want to help shape what gets built, understand the people using it, and work with a team to bring it to life. I’m especially interested in everyday products where thoughtful details can make someone’s day easier.</p><a className="text-link" href="#work">Explore the selected stories ↓</a><a className="cover-resume" href="/resume/SallyLi_Resume.pdf" target="_blank" rel="noopener">the longer story: my résumé ↗</a></div>
 <div className="cover-collage" aria-label="Sally and photographs from her travels"><CoastalScene kind="reader" className="intro-reader" />
  <figure className="collage-city"><img src="/images/photo/4.JPG" alt="A moment in London, photographed by Sally" /><figcaption>OBSERVATIONS / LONDON</figcaption></figure>
  <figure className="collage-portrait"><img src="/images/me.jpg" alt="Sally Li" loading="lazy" /><figcaption>Sally Li / always curious</figcaption></figure>
  <figure className="collage-detail"><img src="/images/photo/6.jpg" alt="A moment in Amsterdam, photographed by Sally" /><figcaption>THROUGH MY LENS / AMSTERDAM</figcaption></figure>
  <span className="collage-note">people, places,<br /><em>and a point of view.</em></span>
 </div>
</div>
</section>
<section className="work wrap" id="work"><div className="section-heading"><CoastalCutout kind="fish" className="work-fish" /><h2>selected <em>stories.</em></h2><p>a few problems i’ve spent time thinking about.</p></div>{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</section>
<OtherWork />
<section className="photos wrap"><div className="editorial-aside"><CoastalScene kind="seaside" className="photo-seaside" /><span className="eyebrow">away from the desk</span><div className="personal-excerpt"><p><strong>Fun fact: I'm a certified bartender</strong>, and I take cocktail bars very seriously. I'm always trying to check off another spot on the World's 50 Best Bars list. Very important research, obviously.</p><p>Other side quests include traveling, playing tennis, and convincing myself I have room for just one more Starbucks mug. I've also tried and ranked almost every Celsius flavor, so if you need a recommendation, lmk ;)</p><p>Oh, did I mention I love photography? Film, digital, or a quick phone snap, I'm always collecting little moments. Here are a few of my favorites ↓</p></div></div><div className="section-heading"><div><span className="eyebrow">off the clock</span><h2>through my lens</h2></div><a className="text-link" href="https://www.instagram.com/36exposureslater/" target="_blank" rel="noopener">more little observations ↗</a></div><div className="photo-grid"><figure><a href="/images/photo/1.JPG" target="_blank" rel="noopener"><img src="/images/photo/1.JPG" alt="Sally’s photography from New York" loading="lazy" /></a><figcaption>01 / NEW YORK</figcaption></figure><figure><a href="/images/photo/4.JPG" target="_blank" rel="noopener"><img src="/images/photo/4.JPG" alt="Sally’s photography from London" loading="lazy" /></a><figcaption>02 / LONDON</figcaption></figure><figure><a href="/images/photo/6.jpg" target="_blank" rel="noopener"><img src="/images/photo/6.jpg" alt="Sally’s photography from Amsterdam" loading="lazy" /></a><figcaption>03 / AMSTERDAM</figcaption></figure></div></section>

</>; }
function CaseStudy({ project }) {
 return <article className="case-page wrap"><a className="text-link" href="/#work">← all selected work</a><header className="case-page-heading"><span className="eyebrow">{project.category}</span><h1>{project.title}</h1><p>{project.subtitle}</p></header><ProjectArt slug={project.slug} />
{project.slug === 'wetrack' ? <WeTrackStory /> : project.slug === 'tabby' ? <TabbyStory /> : project.slug === 'focuspet' ? (<div className="case-study" id="focus-case"><section className="project-video" aria-labelledby="focus-video-title"><span className="eyebrow">the product in action</span><h2 id="focus-video-title">Meet FocusPet.</h2><p>A screencast of the working product.</p><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/Iej2Vg1tqdM" title="FocusPet product screencast" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><a className="text-link" href="https://www.youtube.com/watch?v=Iej2Vg1tqdM" target="_blank" rel="noopener noreferrer">watch the screencast on YouTube ↗</a></section><div className="case-intro"><span className="eyebrow">FOCUSPET / THE STORY</span><h4>Focus tools need to fit<br />the way students actually work.</h4><p>Product Manager & Software Engineer · 3-person Agile team · Oct–Dec 2025</p></div><div className="case-grid"><div><h5>listen before blocking</h5><p>Five user interviews revealed that all-or-nothing device blocking could interfere with real coursework. The direction became selective support rather than rigid restrictions.</p></div><div><h5>choose the useful signals</h5><p>The team prioritized four of seven proposed features. Keyboard tracking was cut as a weak focus signal; the MVP combined eye tracking, selective blocking, and gamified feedback.</p></div><div><h5>make room for a pause</h5><p>Feedback across five-plus review cycles showed that ending a session felt too rigid. A pause feature gave students more control over their focus sessions.</p></div><div><h5>what shipped & what’s next</h5><p>A functional Windows and macOS MVP. The next question I’d test: does a flexible session help students return to their work? Quantitative retention and focus outcomes have not been established here.</p></div></div></div>
) : (<div className="case-study" id="meal-case"><section className="project-prototype" aria-labelledby="meal-prototype-title"><div className="prototype-intro"><span className="eyebrow">TRY THE PROTOTYPE</span><h2 id="meal-prototype-title">Find a meal that fits.</h2><p>Explore the team’s interactive concept in a separate tab. Prices and delivery times are illustrative; there is no real checkout.</p><a className="text-link" href="https://quick-meal-demo.ioenv.workers.dev/" target="_blank" rel="noopener noreferrer">try the prototype ↗</a><p className="prototype-note">Opens in a new tab so you can explore without leaving the case study.</p></div><PrototypePreview /></section><div className="case-intro"><span className="eyebrow">QUICK MEAL / THE STORY</span><h4>When attention is scarce,<br />choice has a cost.</h4><p>Product Manager · 5-person course project · Aug–Oct 2026</p></div><div className="research-stats"><div><strong>15</strong><span>student interviews across the team</span></div><div><strong>14/15</strong><span>described decision effort</span></div><div><strong>12/15</strong><span>valued dependable arrival</span></div></div><p className="research-note">Directional findings from a small qualitative sample, not population estimates.</p><div className="case-grid"><div><h5>reframe convenience</h5><p>Research shifted the team’s focus from speed and broad food access toward predictable meals and lower decision effort during academic crunch periods.</p></div><div><h5>choose a focused concept</h5><p>We compared Quick Meal, a Student Value Program, and item-level reviews. Quick Meal offered a way to address decision friction using existing delivery estimates, without relying on discounts.</p></div><div><h5>protect the limits</h5><p>The MVP centered on time and budget filters, feasible options, and all-in price estimates. When nothing fits, the flow offers explicit ways to relax a constraint rather than silently ignoring it.</p></div><div><h5>separate function from impact</h5><p>Seven groups of prototype checks were reported passed. Faster ordering and additional orders remain hypotheses. The proposed beta targets at least 20% faster ordering with stable satisfaction before expansion.</p></div></div><div className="case-actions"><a className="text-link" href="https://quick-meal-demo.ioenv.workers.dev/" target="_blank" rel="noopener">open team prototype ↗</a><a className="text-link" href="/projects/QuickMeal_Readout.pdf" target="_blank" rel="noopener">read the project deck ↗</a></div></div>
)}
<div className="next-project"><span className="eyebrow">keep exploring</span><a href={`/projects/${projects[(projects.findIndex(item => item.slug === project.slug) + 1) % projects.length].slug}/`}>{projects[(projects.findIndex(item => item.slug === project.slug) + 1) % projects.length].title} ↗</a></div></article>;
}
export default function App() {
 // Fragment targets exist only after React renders the destination page.
 useLayoutEffect(() => {
  function scrollToSection() {
   const id = window.location.hash.slice(1);
   if (!id) return;
   let target;
   try { target = document.getElementById(decodeURIComponent(id)); } catch { return; }
   target?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
  scrollToSection();
  window.addEventListener('hashchange', scrollToSection);
  return () => window.removeEventListener('hashchange', scrollToSection);
 }, []);
 const slug = window.location.pathname.split('/').filter(Boolean)[1];
 const project = projects.find(item => item.slug === slug);
 return <><a className="skip" href="#main">Skip to content</a><Header /><main id="main">{slideProjects[slug] ? <SlideProject slug={slug} /> : slug === 'tiktok' ? <TikTokResearch /> : slug === 'echo' ? <Echo /> : slug === 'brattle' ? <Brattle /> : slug === 'kava' ? <Kava /> : project ? <CaseStudy project={project} /> : <Home />}</main><Footer /></>;
}
