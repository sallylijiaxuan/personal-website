# TeamSlot — project copy draft

Sources: [live app](https://quick-team-time.lovable.app/), [screencast](https://www.youtube.com/watch?v=5UQH2XfDRf4).

Evidence note: Reviewed sampled visual frames throughout the 8:40 screencast and the live app's public interface/client logic. Narration was not transcribed; no captions were available. The timestamps below are approximate. No meetings were created or calendar accounts connected during this review.

## Portfolio card

**TeamSlot**

**A meeting time with the right people in the room.**

A group scheduling prototype that brings required attendees, team representation, and availability into one decision. Organizers set the rules, participants share their availability, and TeamSlot explains which times work—and why others don't.

Suggested tags: Product development · Scheduling · Lovable

Links: Try TeamSlot / Watch the walkthrough

## Context and motivation

TeamSlot began as a class project, but the problem was personal: coordinating group meetings had been bothering me, and I had already been thinking about how to improve it. The assignment gave me an opportunity to turn that recurring frustration into a working prototype.

## Ownership

Independent class project by Jiaxuan (Sally) Li. Owned the problem framing, product decisions, and implementation end to end.

## Overview

TeamSlot helps organizers find meeting times that satisfy the attendance needs of a group. Instead of treating every available participant as interchangeable, it supports both named required attendees and minimum representation from each team. Participants can connect Google Calendar or mark availability manually, and organizers can review explained recommendations before finalizing a time.

## Problem statement

Finding a time with high attendance is only part of scheduling a useful meeting. A cross-team discussion may need a particular decision-maker and at least one representative from each team. Organizers have to compare availability against those requirements, follow up on missing responses, and translate the selected time into a calendar invitation.

TeamSlot brings those attendance requirements into the scheduling process, so organizers can judge whether a proposed time brings together the people the meeting needs.

This is a framing inferred from the demonstrated product behavior; confirm the original motivation before presenting it as a research finding.

## Product question

How might we help an organizer find a meeting time that includes required people and sufficient team representation, while making scheduling tradeoffs easy to understand?

## Workflow

1. **Define the meeting.** Set a name, duration, candidate dates, daily time window, and a shared meeting time zone. Dates can be selected across a calendar by clicking or dragging.
2. **Define who needs to attend.** Add teams and participants, mark specific people as required, and set a minimum number of available people from each team.
3. **Collect availability.** Create a meeting link and share it. Participants select their name and either connect Google Calendar or mark available half-hour blocks manually. An app account is not required for the manual path; calendar connection uses Google authorization.
4. **Review the decision.** Check participant response statuses and a recommended time. Review qualifying options separately from options that fail attendance rules, with explanations of the missing people or team representation.
5. **Finalize and hand off.** Choose a qualifying time, review the meeting summary, and open a prefilled Google Calendar event, download an .ics file, or copy the summary to share.

## Highlights worth featuring

### Attendance rules that reflect the meeting's purpose

Named required attendees and team minimums capture two different needs: a specific person must attend, or enough people from a team must be represented. Making both explicit helps the organizer evaluate availability against the purpose of the meeting.

Example for explanation, not a claim about the demo's exact setup: A planning meeting might require its project lead plus one person from Design and two from Engineering. A time with more attendees can still fail if no designer is available.

### Recommendations with reasons

The results show who is available, whether required attendees can attend, and whether each team minimum is met. Near misses remain visible with explanations. When no time qualifies, the app identifies blocking conditions rather than simply returning an empty list.

### Two ways to participate

Google Calendar connection offers an automated availability path, while manual selection lets participants respond without connecting a calendar. The interface also provides manual entry when calendar access fails. This makes calendar connection optional rather than a requirement for joining the scheduling process.

### Missing responses stay visible

The organizer can see which participants have responded and which are still waiting. People with no availability data are not counted as available, preventing an incomplete response set from appearing to be unanimous availability.

### A complete scheduling handoff

Finalization carries the selected date, time, duration, available participants, and attendance-rule summary into a confirmation screen. The Google Calendar action opens an event template; invitations still require the organizer's calendar action. The prototype also supports .ics download and a copyable summary.

## Decision logic

The public client logic evaluates candidate start times in half-hour increments and checks availability across the full requested duration. A time qualifies only when all required participants are available and every configured team minimum is satisfied. Within qualifying options, it prefers more optional attendees, then earlier date/time. This is deterministic constraint checking and ranking, not evidence of an AI scheduling model.

## Demonstrated outcome

The screencast demonstrates an end-to-end prototype: configuring a meeting and attendance rules, collecting availability, inspecting results, finalizing a time, and opening a calendar event flow. It also returns to the participant/calendar path later in the recording.

Safe outcome wording: “Built an end-to-end scheduling prototype that connects attendance requirements to explained time recommendations and a calendar handoff.”

Do not claim measured time savings, user adoption, usability improvements, or production reliability without supporting evidence.

## Suggested visual sequence

- **Meeting setup and rules** — approximately 0:05–3:15. Emphasize the required-attendee checkbox and team minimums rather than the full form.
- **Availability entry** — approximately 3:20–4:35. Show a participant selecting green time blocks, with calendar connection as the alternate path.
- **Results and explanations** — approximately 4:35–5:35. Pair a qualifying recommendation with an explained near miss.
- **Finalization and calendar handoff** — approximately 5:30–6:10. Show the summary and calendar event flow.
- **Calendar-connected path and follow-up** — later portions revisit availability and finalization; verify full-resolution frames before publishing precise captions.

## Details to confirm before publication

- Original motivation and intended audience.
- Class-project date and duration.
- How Lovable was used and which decisions/implementation work you owned.
- Any interviews, tests, iterations, or real-world use, with actual evidence.
- The main limitation or next improvement you identified.

Solo ownership is confirmed. Omit unverified research, timeline, and metrics from the published case study.
