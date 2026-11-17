import React, { useState } from 'react';

export function HomepageMealArt() {
 const filters = ['Within 30 min', 'Up to $20 total'];
 return <div className="project-art meal-art homepage-meal-art"><div className="art-top"><span>QUICK MEAL / FOOD ORDERING</span><span>LESS DECIDING. MORE DOING.</span></div>
  <div className="meal-composition"><div className="meal-copy"><span className="mini-label">Hungry, short on time?</span><h3>Less scrolling.<br />Easier ordering.</h3><div className="constraint">{filters.map(filter => <span key={filter}>{filter}</span>)}</div><p>Set your time and budget.<br />See your total upfront.</p></div>
  <div className="phone"><div className="phone-notch" /><div className="phone-header"><span>‹</span><strong>Quick Meal</strong><span>☷</span></div><h4>Meals that fit your time and budget.</h4><div className="phone-chips">{filters.map(filter => <span key={filter}>{filter}</span>)}</div><div className="food-image"><span aria-hidden="true">🥗</span></div><div className="food-info"><strong>Garden salad</strong><span className="meal-restaurant">Campus Kitchen</span><span className="meal-arrival">Estimated arrival · 20-30 min</span><div className="meal-total"><b>$18.73</b><small>Estimated total, including fees, tax &amp; tip</small></div></div></div></div>
  <span className="art-caption">PORTFOLIO ILLUSTRATION · NOT THE ORIGINAL APP UI</span></div>;
}

export function HomepageFocusArt() {
 const [active, setActive] = useState(false);
 return <div className="project-art focus-art homepage-focus-art"><div className="art-top"><span>FOCUSPET / FOCUS &amp; PRODUCTIVITY</span><span>A LITTLE COMPANY. A LITTLE FOCUS.</span></div>
  <div className={`focus-window${active ? ' is-focusing' : ''}`}><div className="window-bar"><span>● ● ●</span><span>your focus session</span><span>↗</span></div><div className="focus-body"><span className="mini-label" aria-live="polite">{active ? 'focus session active' : 'ready when you are'}</span><h3>a little focus.<br />a little friend.</h3>
  <div className="pet" role="img" aria-label={active ? 'An attentive pet with bright, open eyes' : 'A relaxed pet with softly closed eyes'}><div className="ear left" /><div className="ear right" /><div className="pet-face"><i /><i /><span>ω</span></div></div>
  <div className="focus-controls"><span aria-live="polite">{active ? 'Your session is running. Pause whenever you need.' : 'Choose your distractions. Settle into focus.'}</span><button type="button" aria-pressed={active} onClick={() => setActive(current => !current)}>{active ? 'pause session' : 'start a focus session'}</button></div></div></div>
  <span className="art-caption">INTERACTIVE PORTFOLIO ILLUSTRATION · NOT THE ORIGINAL APP UI</span></div>;
}

export function HomepageTeamSlotArt() {
 const [option, setOption] = useState(0);
 const outcomes = [
  '6 of 6 available, all attendance rules met.',
  '5 of 6 available, no Design representative.',
  '4 of 6 available, required lead and both teams represented.',
 ];
 return <div className="project-art teamslot-art homepage-teamslot-art"><div className="art-top"><span>TEAMSLOT / GROUP SCHEDULING</span></div><div className="teamslot-composition"><div className="teamslot-art-copy"><span className="eyebrow">a time that works</span><h3>The right time.<br /><em>The right people.</em></h3><p>Set required attendees and attendance rules for each team.</p><div className="teamslot-people" aria-hidden="true"><span>JL</span><span>AK</span><span>MS</span><span>+3</span></div></div><div className="teamslot-window"><div className="teamslot-window-bar"><strong>TeamSlot</strong><span>planning / 60 min</span></div><div className="teamslot-window-body"><span className="eyebrow">Attendance requirements</span>{[['Project lead', 'Must attend'], ['Design', 'At least 1 attendee'], ['Engineering', 'At least 1 attendee']].map(([name, rule]) => <div className="teamslot-rule" key={name}><span>{name}</span><span>{rule}</span></div>)}<div className="teamslot-slots" role="group" aria-label="Explore sample meeting times">{['10:00 AM', '2:00 PM', '3:30 PM'].map((time, index) => <button type="button" key={time} onClick={() => setOption(index)} aria-pressed={option === index}>{time}</button>)}</div><div className={`teamslot-verdict${option === 1 ? ' is-blocked' : ''}`} aria-live="polite"><span>{option === 1 ? 'Missing a Design representative' : 'Meets all attendance rules'}</span><p>{outcomes[option]}</p></div><span className="teamslot-micro">Select a time to see who can attend.</span></div></div></div><span className="art-caption">INTERACTIVE PORTFOLIO ILLUSTRATION · NOT THE ORIGINAL APP UI</span></div>;
}

export function HomepageTabbyArt() {
 const rows = [
  ['Alex’s meal', '$30.00'], ['Jamie’s meal', '$20.00'], ['Shared starter, split equally', '$10.00'], ['Subtotal', '$60.00'], ['Tax · 10%', '$6.00'], ['Tip · 20% of subtotal', '$12.00'],
 ];
 return <div className="project-art tabby-art homepage-tabby-art"><div className="art-top"><span>TABBY / BILL SPLITTING</span><span>GOOD FOOD. FAIR SHARES.</span></div><div className="tabby-receipt"><span className="eyebrow">scan. assign. split.</span><h3>Good food.<br />Fair shares.</h3>{rows.map(([label, amount]) => <div className="receipt-item" key={label}><span>{label}</span><span>{amount}</span></div>)}<div className="receipt-total"><span>Total</span><strong>$78.00</strong></div><div className="receipt-shares"><span>Alex <small>Items $35.00</small><strong>$45.50</strong></span><span>Jamie <small>Items $25.00</small><strong>$32.50</strong></span></div><p>Your items, plus your share of tax and tip.</p></div><span className="art-caption">PORTFOLIO ILLUSTRATION · NOT THE ORIGINAL APP UI</span></div>;
}
