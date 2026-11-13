import React from 'react';
import { slideProjects } from './slideProjects';

export default function SlideProject({ slug }) {
 const project = slideProjects[slug];
 return <article className={`case-page wrap slide-case slide-case-${slug}`}>
  <a className="text-link" href="/#more-work">← more things I’ve made</a>
  <header className="case-page-heading"><span className="eyebrow">{project.category}</span><h1>{project.title}</h1><p>{project.subtitle}</p></header>
  <div className="slide-case-opening"><div><span className="eyebrow">THE PROJECT</span><p>{project.intro}</p><span className="slide-case-context">{project.context}</span><a className="text-link" href={project.deck} target="_blank" rel="noopener noreferrer">explore the original slides ↗</a></div><figure><img src={project.image} alt={`${project.title} original project artwork`} /><figcaption>FROM THE ORIGINAL PRESENTATION</figcaption></figure></div>
  <div className="case-study"><section className="case-intro"><span className="eyebrow">THE CHALLENGE</span><h4>{project.question}</h4><p>{project.challenge}</p></section>
  <section className="slide-case-process" aria-labelledby={`${slug}-process`}><span className="eyebrow">HOW THE THINKING DEVELOPED</span><h2 id={`${slug}-process`}>from context to a point of view</h2><ol>{project.steps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
  <section className="slide-case-concept"><span className="eyebrow">THE CENTRAL IDEA</span><h2>{project.concept}</h2><p>{project.conceptText}</p></section>
  <section className="slide-case-details" aria-labelledby={`${slug}-details`}><span className="eyebrow">A CLOSER LOOK</span><h2 id={`${slug}-details`}>{slug === 'bumble' ? 'the connections behind the analysis' : 'how the idea takes shape'}</h2><div className="case-grid">{project.insights.map(([title, text]) => <div key={title}><h5>{title}</h5><p>{text}</p></div>)}</div></section>
  {project.gallery && <section className="slide-case-gallery" aria-labelledby={`${slug}-gallery`}><div className="section-heading"><div><span className="eyebrow">SELECTED ORIGINAL SLIDES</span><h2 id={`${slug}-gallery`}>the work, in context</h2></div><a className="text-link" href={project.deck} target="_blank" rel="noopener noreferrer">view full presentation ↗</a></div><div className="slide-case-gallery-grid">{project.gallery.map(([page, caption]) => <figure key={page}><a href={project.deck} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} presentation: ${caption}`}><img src={`/images/project/${slug}/slide-${page}.png`} alt={caption} loading="lazy" /></a><figcaption><span>SLIDE {String(page).padStart(2, '0')}</span>{caption}</figcaption></figure>)}</div></section>}
  <section className="slide-case-delivery"><span className="eyebrow">THE DELIVERABLE</span><h2>{project.outcome}</h2><p className="slide-case-credits">Team: {project.credits}</p><p className="research-note">{project.note}</p></section>
  <details className="slide-case-source"><summary>where to find the thinking in the deck</summary><ul>{project.evidence.map(item => <li key={item}>{item}</li>)}</ul><a className="text-link" href={project.deck} target="_blank" rel="noopener noreferrer">open the source presentation ↗</a></details>
  </div><div className="next-project"><span className="eyebrow">keep exploring</span><a href="/#more-work">more things I’ve made ↗</a></div>
 </article>;
}
