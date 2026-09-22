---
name: seo-and-geo
description: "Master SEO and GEO (Generative Engine Optimization) workflow for Let's Study MS School Division. Executes monthly SEO audits, keyword targeting for Kolkata & international CBSE/ICSE/WB Board audiences, local search optimization, AI Overview readiness, Schema validation, and delivers an overall site ranking out of 10 with actionable improvement steps. Triggers on: 'run the SEO for this month', 'run SEO', 'monthly SEO', 'SEO audit', 'check SEO', 'GEO'."
user-invocable: true
argument-hint: "[month or audit type]"
---

# Let's Study MS: Monthly SEO & GEO Execution Workflow

This skill executes comprehensive monthly Search Engine Optimization (SEO) and Generative Engine Optimization (GEO) audits for the **Let's Study MS — School Division** web platform.

## When Triggered

Whenever the user prompts:
- *"run the SEO for this month"*
- *"do the SEO for this month"*
- *"run SEO"*
- *"SEO and GEO audit"*

Execute the multi-pillar inspection below, analyze current site performance against the specific target audience, score the site out of 10, and deliver a prioritized roadmap to reach 10/10.

---

## 1. Target Audience & Business Profile

Before analyzing keywords and metadata, evaluate alignment with the core audience:
* **Primary Geography:** North 24 Parganas, Kolkata suburban belt, and West Bengal (Khardaha, Barrackpore, Sodepur, Belgharia, Madhyamgram, Barasat, Rahara, Dum Dum, Bardhaman).
* **Target Segments:**
  1. **Parents of Std 5–8 students:** Seeking intimidation-free foundational mentorship in small pods (3–4 students) to remove math/science fear.
  2. **Students & Parents of Std 9–10 (Board Exam Batch):** Focused on 90%+ scores in CBSE, ICSE, and Madhyamik (WBBSE).
  3. **Students of Std 11–12 & Competitive Track:** Seeking advanced physics, chemistry, mathematics, and biology coaching, bridging to ISI, CMI, IIT JAM, and Olympiads.
  4. **International/NRI Cohort:** Students enrolled in CBSE/Indian curriculum schools abroad (e.g. Lagos, Nigeria; Gulf region) seeking top Kolkata educators.
* **Core Brand Authorities:**
  * Affiliated with **Ramanujan School of Mathematics (RSM)**.
  * Powered by **Let's Study MS** (reputed higher mathematics institute with AIR 37 and IIT/ISI credentials).
  * Unique pedagogical selling points: Strictly 3–5 student micro-batches, 4-tier faculty hierarchy (Near-peer toppers to B.Ed/M.Sc. senior mentors), 1.5–2 hour intensive sessions.

---

## 2. Monthly SEO & GEO Audit Checklist

Check all components using the bundled sub-skills in `.agents/skills/`:
* `seo-technical`: Check meta tags, title tags, open graph tags, canonicals, robots.txt, and sitemap.xml.
* `seo-schema`: Inspect JSON-LD schemas (`EducationalOrganization`, `LocalBusiness`, `Course`, `Person`, `Review`).
* `seo-local`: Evaluate local citations, suburb/locality landing signals, and NAP (Name, Address, Phone) consistency.
* `seo-content`: Inspect E-E-A-T signals (faculty qualifications, student score testimonials, verified achievements).
* `seo-geo`: Analyze visibility for Generative Engines (Google AI Overviews, Perplexity, ChatGPT Search, Claude).

---

## 3. Required Report Output Format

Every monthly SEO report MUST follow this structured reporting format:

### Part A: Executive Summary & Overall Score
Provide the prominent score:
> ### 🏆 Overall SEO & GEO Score: **[X / 10]**
> *(e.g., 7.5 / 10 or 8.2 / 10)*

Provide a category breakdown:
| Evaluation Pillar | Score | Status |
| :--- | :---: | :--- |
| **Technical SEO & Metadata** | `/ 10` | Titles, descriptions, canonicals, sitemap |
| **Local Search (Kolkata & Suburbs)** | `/ 10` | Locality keywords, geo-targeting, NAP |
| **E-E-A-T & Content Credibility** | `/ 10` | Faculty profiles, testimonials, curriculum |
| **GEO & AI Search Engines** | `/ 10` | Citation eligibility in Google AI & Perplexity |
| **Structured Data & Schema.org** | `/ 10` | JSON-LD schema richness & validation |

### Part B: High-Performing Areas (What's Working)
Highlight the top strengths currently driving visibility and trust.

### Part C: Deficiencies & Missed Opportunities (The Gaps)
Detail specific missing elements (e.g., missing location-specific keywords in titles, schema gaps, missing sitemap links, unoptimized images).

### Part D: Action Plan to Reach 10/10
Numbered, concrete actions for the user to review or execute:
1. **Immediate Quick Fixes** (Title updates, metadata adjustments, schema additions).
2. **Content & Local Additions** (Locality mentions for Khardaha/Barrackpore/Madhyamgram, syllabus guides).
3. **GEO Optimization** (Entity structuring for Ramanujan School of Mathematics & Let's Study MS).

---

## 4. Execution Commands

To execute technical analysis, invoke tools directly or leverage scripts in `.agents/scripts/`:
- Meta inspection: examine `src/app/layout.tsx` and route-specific `page.tsx` metadata.
- Schema verification: check JSON-LD markup on home, team, and course pages.
- Sitemap check: verify `public/sitemap.xml` or `src/app/sitemap.ts` and `public/robots.txt`.
