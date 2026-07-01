"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────
   Seeded RNG + bar builders
───────────────────────────────────────── */
function seeded(seed: number) {
  let s = seed;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}
function buildBars(n: number, mode: "clean" | "noisy", seedOff: number) {
  const rnd = seeded(seedOff);
  return Array.from({ length: n }, (_, k) => {
    let h = mode === "clean"
      ? 34 + 44 * Math.abs(Math.sin(k * 0.5)) + 14 * Math.sin(k * 0.17)
      : 12 + rnd() * rnd() * 100 + (rnd() > 0.8 ? 26 : 0);
    return Math.max(8, Math.min(100, h));
  });
}

/* ─────────────────────────────────────────
   Hex decoration
───────────────────────────────────────── */
function HexDecor({ pos }: { pos: "tr" | "bl" }) {
  return (
    <div className={`csh-decor csh-${pos}`} aria-hidden>
      <svg viewBox="0 0 100 100" fill="none">
        <path d="M50 3 L91 26 L91 74 L50 97 L9 74 L9 26 Z" stroke="#00d4ff" strokeWidth="0.5" opacity="0.35"/>
        <path d="M50 13 L82 31 L82 69 L50 87 L18 69 L18 31 Z" stroke="#7c3aed" strokeWidth="0.4" opacity="0.45"/>
        <path d="M50 24 L72 37 L72 63 L50 76 L28 63 L28 37 Z" stroke="#00d4ff" strokeWidth="0.3" opacity="0.2"/>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   Signal bars
───────────────────────────────────────── */
function Bars({ n, mode, si, h = 100 }: { n: number; mode: "clean"|"noisy"; si: number; h?: number }) {
  const bars = buildBars(n, mode, 1000 + si * 37);
  return (
    <div style={{ display:"flex", alignItems:"flex-end", gap:"4px", height:`${h}px`, width:"100%" }}>
      {bars.map((pct, i) => (
        <div key={i} style={{
          flex:1, borderRadius:"3px", height:`${pct}%`,
          background: mode === "clean"
            ? "linear-gradient(180deg,#00d4ff 0%,#0d4a7a 100%)"
            : "linear-gradient(180deg,#2a3a5c 0%,#0d1b4b 100%)",
          boxShadow: mode === "clean" ? "0 0 10px rgba(0,212,255,.3)" : undefined,
          opacity: mode === "noisy" ? 0.7 : undefined,
          transition: "height 0.6s ease",
        }} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   Individual slide bodies
───────────────────────────────────────── */
function S1() {
  return (<>
    <div className="csh-tag">Data → AI</div>
    <h1 className="csh-h1" style={{ fontSize:"clamp(38px,5.8vw,88px)" }}>
      Why clean data has to come <em className="csh-em">before</em> AI.
    </h1>
    <p className="csh-sub">
      The step most brands skip on the way to automation — and the one that decides
      whether AI works for you or against you.
    </p>
    <div className="csh-sigwrap">
      <span className="csh-sigcap">clean signal · ready to scale</span>
      <Bars n={52} mode="clean" si={0} h={90} />
    </div>
  </>);
}

function S2() {
  return (<>
    <h1 className="csh-h1" style={{ fontSize:"clamp(34px,5.2vw,76px)" }}>
      AI doesn&apos;t fix messy data.<br/>
      <span className="csh-kw">It scales it.</span>
    </h1>
    <p className="csh-lead">
      Point an algorithm at bad signals and it won&apos;t hesitate. It optimises —{" "}
      <strong>confidently, at speed</strong> — in the wrong direction.
    </p>
    <div className="csh-pipe">
      <div className="csh-pcol" style={{ width:"clamp(100px,20vw,240px)" }}>
        <span className="csh-sigcap">your data</span>
        <Bars n={22} mode="noisy" si={1} h={80} />
      </div>
      <div className="csh-parrow">➢</div>
      <div className="csh-pcol" style={{ flex:1, minWidth:0 }}>
        <span className="csh-sigcap">the same noise, at AI scale</span>
        <Bars n={46} mode="noisy" si={2} h={120} />
      </div>
    </div>
  </>);
}

function S3() {
  return (<>
    <h1 className="csh-h1" style={{ fontSize:"clamp(34px,5.2vw,74px)" }}>
      Everyone&apos;s automating.<br/>
      <span className="csh-kw">Few are ready.</span>
    </h1>
    <p className="csh-lead">
      Smart bidding, predictive audiences, auto-generated creative — all of it learns
      from the data you already have.
    </p>
    <p className="csh-lead">
      A cracked foundation doesn&apos;t disappear under AI.{" "}
      <strong>It gets multiplied.</strong>
    </p>
    <div className="csh-sigwrap" style={{ marginTop:8 }}>
      <span className="csh-sigcap">noisy signal · scaling the wrong way</span>
      <Bars n={40} mode="noisy" si={3} h={80} />
    </div>
  </>);
}

const BAD = [
  "Conversions firing twice — or not firing at all",
  "Attribution models that contradict each other",
  "Audiences built on stale, months-old events",
  "A ROAS number nobody on the team fully trusts",
];
function S4() {
  return (<>
    <h1 className="csh-h1" style={{ fontSize:"clamp(30px,4.8vw,66px)" }}>
      Signs your data<br/>isn&apos;t <span className="csh-kw">AI-ready</span>
    </h1>
    <div className="csh-list">
      {BAD.map((t, i) => (
        <div className="csh-row" key={i}>
          <span className="csh-mk csh-bad">✕</span>
          <span>{t}</span>
        </div>
      ))}
    </div>
  </>);
}

const GOOD = [
  "One source of truth for every conversion",
  "Deduplicated, server-side tracking",
  "Consistent attribution windows across channels",
  "Events mapped to real revenue, not vanity clicks",
];
function S5() {
  return (<>
    <h1 className="csh-h1" style={{ fontSize:"clamp(30px,4.8vw,66px)" }}>
      What a clean foundation<br/><span className="csh-kw">looks like</span>
    </h1>
    <div className="csh-list">
      {GOOD.map((t, i) => (
        <div className="csh-row" key={i}>
          <span className="csh-mk csh-good">✓</span>
          <span>{t}</span>
        </div>
      ))}
    </div>
    <div className="csh-sigwrap" style={{ marginTop:8 }}>
      <span className="csh-sigcap">clean signal · AI can trust this</span>
      <Bars n={52} mode="clean" si={4} h={80} />
    </div>
  </>);
}

function S6() {
  return (<>
    <div className="csh-logo-text" style={{ fontSize:"clamp(22px,3vw,42px)", marginBottom:8 }}>
      <span className="csh-logo-sparkle">SPARKLE</span>
      <span className="csh-logo-media"> MEDIA</span>
    </div>
    <h1 className="csh-h1" style={{ fontSize:"clamp(32px,5vw,72px)" }}>
      Fix the foundation.<br/>Then let <span className="csh-kw">AI scale it.</span>
    </h1>
    <p className="csh-lead">
      Clean data isn&apos;t the boring prerequisite. Handled right, it&apos;s the unfair
      advantage your competitors keep skipping.
    </p>
    <div className="csh-cta-row">
      <a
        href="https://calendly.com/sparklemediacreatives/30min"
        target="_blank" rel="noopener noreferrer"
        className="csh-pill"
      >
        Get AI-ready →
      </a>
      <span className="csh-cta-hint">DM us &ldquo;DATA&rdquo; to start</span>
    </div>
    <div className="csh-handle">
      @sparklemediacreatives &nbsp;·&nbsp; sparklemediacreatives@gmail.com
    </div>
  </>);
}

/* ─────────────────────────────────────────
   Slide registry
───────────────────────────────────────── */
const SLIDES = [
  { eyebrow:"Performance Marketing", hex:"tr" as const, Body:S1 },
  { eyebrow:"The hard truth",        hex:"bl" as const, Body:S2 },
  { eyebrow:"The rush to automate",  hex:"tr" as const, Body:S3 },
  { eyebrow:"Diagnostic",            hex:"bl" as const, Body:S4 },
  { eyebrow:"The fix",               hex:"tr" as const, Body:S5 },
  { eyebrow:"Sparkle Media",         hex:"bl" as const, Body:S6 },
];

const AUTO_MS = 6000; // auto-advance interval

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════ */
export function CarouselSlides() {
  const [cur, setCur]           = useState(0);
  const [phase, setPhase]       = useState<"idle"|"out"|"in">("idle");
  const [dir, setDir]           = useState<1|-1>(1);
  const [next, setNext]         = useState(0);
  const [paused, setPaused]     = useState(false);
  const [progress, setProgress] = useState(0);

  const touchX   = useRef<number|null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>|null>(null);
  const progRef  = useRef<ReturnType<typeof setInterval>|null>(null);
  const total    = SLIDES.length;

  /* ── Advance logic ── */
  const goTo = useCallback((idx: number, d: 1|-1 = 1) => {
    if (phase !== "idle") return;
    const target = ((idx % total) + total) % total;
    setDir(d);
    setNext(target);
    setPhase("out");
  }, [phase, total]);

  /* ── out → in transition ── */
  useEffect(() => {
    if (phase !== "out") return;
    const t = setTimeout(() => {
      setCur(next);
      setPhase("in");
    }, 350);
    return () => clearTimeout(t);
  }, [phase, next]);

  useEffect(() => {
    if (phase !== "in") return;
    const t = setTimeout(() => setPhase("idle"), 400);
    return () => clearTimeout(t);
  }, [phase]);

  /* ── Auto-advance + progress bar ── */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progRef.current)  clearInterval(progRef.current);
    setProgress(0);
    if (paused) return;
    let elapsed = 0;
    progRef.current = setInterval(() => {
      elapsed += 80;
      setProgress(Math.min(100, (elapsed / AUTO_MS) * 100));
    }, 80);
    timerRef.current = setTimeout(() => {
      setCur(c => {
        const nx = (c + 1) % total;
        goTo(nx, 1);
        return c;
      });
    }, AUTO_MS);
  }, [paused, total, goTo]);

  /* restart timer when slide changes or pause toggles */
  useEffect(() => { resetTimer(); return () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progRef.current)  clearInterval(progRef.current);
  }; }, [cur, paused, resetTimer]);

  /* keyboard */
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { goTo(cur + 1, 1); resetTimer(); }
      if (e.key === "ArrowLeft")  { goTo(cur - 1, -1); resetTimer(); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [cur, goTo, resetTimer]);

  const slide = SLIDES[cur];
  const Body  = slide.Body;

  /* slide class */
  const slideClass = [
    "csh-slide",
    phase === "out" ? (dir === 1 ? "csh-exit-left"  : "csh-exit-right") : "",
    phase === "in"  ? (dir === 1 ? "csh-enter-right": "csh-enter-left") : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      {/* ── Scoped styles ── */}
      <style>{`
        /* ─ Reset & container ─ */
        .csh-outer {
          width:100%; overflow:hidden; position:relative;
          background:linear-gradient(145deg,#060f2e 0%,#0d1b4b 40%,#071a3e 70%,#060f2e 100%);
          font-family:'Poppins','Inter',sans-serif;
        }

        /* ─ Slide panel (FULL WIDTH) ─ */
        .csh-slide {
          position:relative; width:100%; min-height:100vh;
          padding: 0 clamp(24px,7vw,120px);
          display:flex; flex-direction:column;
          color:#e8f4ff; overflow:hidden;
          background:
            radial-gradient(ellipse 110% 80% at 85% -5%, rgba(0,212,255,.14) 0%, transparent 50%),
            radial-gradient(ellipse 80% 70% at 5% 105%, rgba(124,58,237,.14) 0%, transparent 52%),
            linear-gradient(145deg,#060f2e 0%,#0d1b4b 40%,#071a3e 70%,#060f2e 100%);
        }

        /* ─ Transitions ─ */
        .csh-exit-left  { animation: cshExL .35s cubic-bezier(.4,0,.6,1) forwards; }
        .csh-exit-right { animation: cshExR .35s cubic-bezier(.4,0,.6,1) forwards; }
        .csh-enter-right{ animation: cshEnR .4s  cubic-bezier(.25,.46,.45,.94) both; }
        .csh-enter-left { animation: cshEnL .4s  cubic-bezier(.25,.46,.45,.94) both; }
        @keyframes cshExL  { to   { opacity:0; transform:translateX(-5%) scale(.97); } }
        @keyframes cshExR  { to   { opacity:0; transform:translateX(5%)  scale(.97); } }
        @keyframes cshEnR  { from { opacity:0; transform:translateX(6%)  scale(.98); } to { opacity:1; transform:none; } }
        @keyframes cshEnL  { from { opacity:0; transform:translateX(-6%) scale(.98); } to { opacity:1; transform:none; } }

        /* ─ Grain overlay ─ */
        .csh-grain {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background:
            radial-gradient(circle at 50% 30%, rgba(0,212,255,.06), transparent 55%),
            radial-gradient(circle at 80% 10%, rgba(0,212,255,.08) 0%, transparent 40%),
            radial-gradient(circle at 10% 90%, rgba(124,58,237,.08) 0%, transparent 40%);
        }

        /* ─ Hex decorations ─ */
        .csh-decor { position:absolute; pointer-events:none; opacity:.45; z-index:0; }
        .csh-decor svg { display:block; }
        .csh-tr { top:-14vw; right:-12vw; width:clamp(280px,44vw,640px); transform:rotate(10deg); }
        .csh-bl { bottom:-18vw; left:-14vw; width:clamp(320px,50vw,720px); transform:rotate(-7deg); }

        /* ─ Progress bar (top) ─ */
        .csh-prog-bar-wrap {
          position:absolute; top:0; left:0; right:0; height:3px; z-index:20;
          background:rgba(0,212,255,.08);
        }
        .csh-prog-bar {
          height:100%;
          background:linear-gradient(90deg,#7c3aed,#00d4ff,#7c3aed);
          box-shadow:0 0 12px rgba(0,212,255,.7);
          transition:width .08s linear;
          border-radius:0 2px 2px 0;
        }

        /* ─ Top eyebrow ─ */
        .csh-top {
          display:flex; align-items:center; justify-content:space-between;
          padding-top: clamp(28px,5vh,68px);
          position:relative; z-index:2;
        }
        .csh-lbl {
          display:flex; align-items:center; gap:10px;
          font-size:clamp(9px,1vw,14px); letter-spacing:.32em; text-transform:uppercase;
          color:rgba(0,212,255,.7); font-family:'Courier New',monospace;
        }
        .csh-dot {
          width:8px; height:8px; border-radius:50%; background:#00d4ff;
          box-shadow:0 0 12px 2px rgba(0,212,255,.9);
          animation:cshPulse 2s ease-in-out infinite;
        }
        @keyframes cshPulse { 0%,100%{ box-shadow:0 0 12px 2px rgba(0,212,255,.9); } 50%{ box-shadow:0 0 22px 5px rgba(0,212,255,.4); } }
        .csh-idx { font-family:'Courier New',monospace; font-size:clamp(9px,1vw,14px); color:rgba(255,255,255,.3); letter-spacing:.2em; }
        .csh-idx b { color:rgba(255,255,255,.85); font-weight:500; }

        /* ─ Body ─ */
        .csh-body {
          flex:1; display:flex; flex-direction:column; justify-content:center;
          gap:clamp(16px,2.6vh,34px);
          padding: clamp(20px,3vh,48px) 0;
          position:relative; z-index:2;
        }

        /* ─ Typography ─ */
        .csh-h1  { font-weight:700; line-height:1.06; letter-spacing:-.02em; }
        .csh-kw  { color:#00d4ff; }
        .csh-em  { font-style:italic; font-weight:700; color:#00d4ff; }
        .csh-sub { font-size:clamp(13px,1.9vw,26px); line-height:1.54; color:rgba(255,255,255,.55); max-width:75ch; }
        .csh-lead{ font-size:clamp(13px,1.9vw,26px); line-height:1.54; color:rgba(255,255,255,.72); max-width:78ch; }
        .csh-lead strong { color:#ffffff; font-weight:600; }

        /* ─ Tag ─ */
        .csh-tag {
          display:inline-flex; align-items:center; gap:8px;
          font-family:'Courier New',monospace; font-size:clamp(9px,1vw,13px);
          letter-spacing:.22em; text-transform:uppercase; color:#00d4ff;
          border:1px solid rgba(0,212,255,.35); padding:6px 14px;
          border-radius:999px; width:max-content; background:rgba(0,212,255,.07);
        }

        /* ─ Checklist ─ */
        .csh-list { display:flex; flex-direction:column; gap:clamp(12px,1.8vh,22px); }
        .csh-row  { display:flex; align-items:flex-start; gap:clamp(12px,1.6vw,22px);
                    font-size:clamp(13px,1.9vw,26px); line-height:1.36; color:#cdd6e0; }
        .csh-mk   {
          flex:none; width:clamp(34px,3.2vw,46px); height:clamp(34px,3.2vw,46px);
          border-radius:10px; display:flex; align-items:center; justify-content:center;
          font-size:clamp(13px,1.6vw,20px); margin-top:1px;
        }
        .csh-bad  { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.15); color:rgba(255,255,255,.4); }
        .csh-good {
          background:rgba(0,212,255,.12); border:1px solid rgba(0,212,255,.45); color:#00d4ff;
          box-shadow:0 0 18px rgba(0,212,255,.2);
        }

        /* ─ Signal widget ─ */
        .csh-sigwrap { display:flex; flex-direction:column; gap:10px; }
        .csh-sigcap  { font-family:'Courier New',monospace; font-size:clamp(8px,.9vw,13px);
                       letter-spacing:.22em; text-transform:uppercase; color:rgba(0,212,255,.45); }

        /* ─ Pipe ─ */
        .csh-pipe   { display:flex; align-items:flex-end; gap:clamp(14px,2.2vw,30px); flex-wrap:wrap; }
        .csh-pcol   { display:flex; flex-direction:column; gap:10px; }
        .csh-parrow { color:#00d4ff; font-size:clamp(20px,2.5vw,34px); padding-bottom:18px; flex:none; }

        /* ─ CTA ─ */
        .csh-cta-row {
          display:flex; align-items:center; gap:18px; flex-wrap:wrap;
          font-family:'Courier New',monospace; font-size:clamp(11px,1.4vw,18px);
          letter-spacing:.08em; color:#ffffff;
        }
        .csh-pill {
          background:linear-gradient(135deg,#00d4ff 0%,#7c3aed 100%);
          color:#ffffff; font-weight:700; padding:13px 26px; border-radius:12px;
          letter-spacing:.06em; text-decoration:none;
          box-shadow:0 0 30px rgba(0,212,255,.4), 0 4px 24px rgba(124,58,237,.25);
          transition:transform .2s, box-shadow .2s; display:inline-block;
        }
        .csh-pill:hover { transform:translateY(-2px) scale(1.04); box-shadow:0 0 48px rgba(0,212,255,.6), 0 8px 24px rgba(124,58,237,.4); }
        .csh-cta-hint { color:rgba(255,255,255,.55); }
        .csh-handle { font-family:'Courier New',monospace; font-size:clamp(9px,1.1vw,15px); color:rgba(0,212,255,.65); letter-spacing:.12em; }

        /* ─ Logo text (footer + slide 6) ─ */
        .csh-logo-text { font-size:clamp(12px,1.3vw,20px); font-weight:700; letter-spacing:.18em; line-height:1; }
        .csh-logo-sparkle { color:#00d4ff; }
        .csh-logo-media   { color:#ffffff; }

        /* ─ Footer ─ */
        .csh-foot {
          display:flex; align-items:center; justify-content:space-between; gap:16px;
          border-top:1px solid rgba(0,212,255,.12);
          padding-top:clamp(14px,2vh,24px); padding-bottom:clamp(18px,3.5vh,48px);
          position:relative; z-index:2;
        }
        .csh-brand { display:flex; align-items:center; gap:10px; }

        /* ─ Dot nav ─ */
        .csh-dots { display:flex; gap:8px; align-items:center; }
        .csh-dot-btn {
          height:4px; border-radius:2px; border:none; padding:0; cursor:pointer;
          background:rgba(255,255,255,.12); transition:all .3s ease; width:20px;
        }
        .csh-dot-btn.on {
          background:linear-gradient(90deg,#7c3aed,#00d4ff);
          box-shadow:0 0 10px rgba(0,212,255,.6); width:32px;
        }

        /* ─ Arrow nav ─ */
        .csh-arrow {
          position:absolute; top:50%; transform:translateY(-50%);
          z-index:15; display:flex; align-items:center; justify-content:center;
          width:clamp(38px,4vw,54px); height:clamp(38px,4vw,54px); border-radius:50%;
          background:rgba(6,15,46,.7); border:1px solid rgba(0,212,255,.25);
          color:rgba(0,212,255,.8); font-size:clamp(16px,2vw,26px); cursor:pointer;
          backdrop-filter:blur(12px); transition:all .2s;
        }
        .csh-arrow:hover { background:rgba(0,212,255,.12); border-color:rgba(0,212,255,.6); box-shadow:0 0 18px rgba(0,212,255,.25); color:#fff; }
        .csh-arrow-l { left:clamp(12px,1.8vw,28px); }
        .csh-arrow-r { right:clamp(12px,1.8vw,28px); }

        /* ─ Pause btn ─ */
        .csh-pause {
          position:absolute; bottom:clamp(70px,10vh,110px); right:clamp(24px,2.5vw,40px); z-index:15;
          background:rgba(6,15,46,.6); border:1px solid rgba(0,212,255,.2);
          color:rgba(0,212,255,.4); border-radius:8px; padding:5px 10px;
          font-size:clamp(9px,.9vw,12px); letter-spacing:.18em; font-family:'Courier New',monospace;
          text-transform:uppercase; cursor:pointer; backdrop-filter:blur(8px);
          transition:all .2s;
        }
        .csh-pause:hover { color:rgba(0,212,255,.9); border-color:rgba(0,212,255,.5); }
      `}</style>

      <section
        className="csh-outer"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 44) { goTo(cur + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1); resetTimer(); }
          touchX.current = null;
        }}
        aria-label="Data-to-AI carousel"
      >
        {/* Auto-progress bar */}
        <div className="csh-prog-bar-wrap" aria-hidden>
          <div className="csh-prog-bar" style={{ width:`${progress}%` }} />
        </div>

        {/* Arrow buttons */}
        <button className="csh-arrow csh-arrow-l" onClick={() => { goTo(cur - 1, -1); resetTimer(); }} aria-label="Previous slide">‹</button>
        <button className="csh-arrow csh-arrow-r" onClick={() => { goTo(cur + 1,  1); resetTimer(); }} aria-label="Next slide">›</button>

        {/* Pause / play */}
        <button className="csh-pause" onClick={() => setPaused(p => !p)} aria-label={paused ? "Play" : "Pause"}>
          {paused ? "▶ AUTO" : "⏸ AUTO"}
        </button>

        {/* Slide */}
        <div className={slideClass} key={cur}>
          <div className="csh-grain" aria-hidden />
          <HexDecor pos={slide.hex} />

          {/* Eyebrow */}
          <div className="csh-top">
            <div className="csh-lbl"><span className="csh-dot" />{slide.eyebrow}</div>
            <div className="csh-idx">
              <b>{String(cur + 1).padStart(2,"0")}</b> / {String(total).padStart(2,"0")}
            </div>
          </div>

          {/* Content */}
          <div className="csh-body"><Body /></div>

          {/* Footer */}
          <div className="csh-foot">
            <div className="csh-brand">
              <div className="csh-logo-text">
                <span className="csh-logo-sparkle">SPARKLE</span>
                <span className="csh-logo-media"> MEDIA</span>
              </div>
            </div>
            <div className="csh-dots" aria-label="Slides">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`csh-dot-btn${i === cur ? " on" : ""}`}
                  onClick={() => { goTo(i, i > cur ? 1 : -1); resetTimer(); }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
