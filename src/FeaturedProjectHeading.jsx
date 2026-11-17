import React from 'react';
import { homepageProjects } from './homepageProjects';

export default function FeaturedProjectHeading({ slug }) {
 const project = homepageProjects.find(item => item.slug === slug);
 return <header className="case-page-heading featured-case-heading">
  <div className="featured-case-meta"><span className="eyebrow">{project.category}</span><span className="eyebrow">{project.status}</span></div>
  <h1>{project.title}</h1>
  <p>{project.subtitle}</p>
  <p className="featured-case-summary">{project.description}</p>
  <div className="tags featured-case-tags" aria-label="Project contributions">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
 </header>;
}
