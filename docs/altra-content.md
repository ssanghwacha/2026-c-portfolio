# Altra — Case Study Content

## Hero (CaseHero / left sidebar)

- **Title:** Altra
- **Headline:** From 25% to 75% risk awareness making hiking safer in uncertain conditions
- **Description:** By restructuring navigation around safety states rather than routes, ALTRA helps hikers understand their current risk and make confident decisions in unpredictable situations.
- **Role:** UI/UX Designer
- **Team:** SC / TN, WL / BD
- **Timeline:** 8 weeks
- **Tool:** Figma

---

## 1. Project Overview

> Most trail apps tell you where you are. Altra tells you what to do next.

---

## 2. The Problem

**Heading:** Knowing where you are isn't the same as knowing what to do next.

| What apps provide | What hikers face |
|---|---|
| GPS coordinates | Ambiguous junctions |
| Route maps | Scale distortion |
| ETA | Fading daylight |
| Elevation | Unclear thresholds |

> Even with exact GPS, the right next step isn't always obvious.

---

## 3. Research & Insight

**Heading:** 15 hikers. One question: when do you stop trusting the map?

**Method:** Google Forms · 12 beginner + 3 peer hikers · ages 25–40

**Voices:**
- "I thought I was on the right path until it was too late."
- "I kept checking the map, but I still wasn't sure."
- "I didn't know if turning back was overreacting."

> Hikers don't need precision. They need a signal that their next step is safe.

---

## 4. Design System

**Heading:** From route to state.

1. **Route → State.** The primary screen reads Safe, Caution, or Critical — not coordinates.
   *(Visual: Safe / Critical phone mockups)*

2. **Metrics → Signals.** ETA, daylight, and weather collapse into a single judgment line.
   *(Visual: timeline — Now / Sunset / Arrival)*

3. **Safety State Model.** Each state has a defined threshold — temporal (return time + 30min < sunset) and environmental (weather, trail condition).
   *(Visual: temporal boundary — Safe / Critical mockups)*

4. **State → Tokens.** Color, weight, and hierarchy shift with risk — not brand.
   *(Visual: variable tokens — safe / critical)*

---

## 5. User Testing

**Heading:** Recognition got 58% faster.

**Hero stat:** `4.88s → 2.06s` (−58%)
*Time to identify safety status — route-first vs state-first layout.*

**Supporting tests:**

| Objective | A: Route-first | B: State-first | Finding |
|---|---|---|---|
| Decision confidence (1–5) | 4.0 | 4.75 | Users felt more certain about whether to continue or turn back. |
| Risk awareness accuracy | 25% | 75% | Three times more users correctly identified the current risk level. |

---

## 6. Result — Before / After

| Metric | Before | After |
|---|---|---|
| Risk awareness | 25% | **75%** |
| Recognition time | 8.44s | **5.87s** (−30%) |
| Decision confidence | 4.0 / 5 | **4.75 / 5** |

---

## 7. Reflection — Takeaways

1. **Confidence matters more than speed.** Hikers act on certainty, not on latency.
2. **Safety needs thresholds, not warnings.** "Be careful" performs no better than nothing.
3. **Binary states beat fuzzy ones.** Removing the middle "Warning" tier sharpened decisions.

---

## Editing Principles (왜 이렇게 바꿨는지)

1. **숫자를 헤드라인으로** — 본문에 숨기지 않고 큰 활자로 단독 노출 (`58%`, `25→75%`, `30%`)
2. **섹션당 한 문장 펀치라인** — 단락은 그 문장을 받쳐주는 보조 역할만
3. **중복 제거** — "Route → State" 컨셉 1회만 등장 (기존 4회 반복)
4. **메타 서술 컷** — "The goal was...", "The next step was to..." 류의 자기소개식 문장 제거
5. **시각 호흡 회복** — Design System / Testing / Result에 mockup placeholder 배치
