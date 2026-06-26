import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   DATA — fill in marked fields
───────────────────────────────────────── */
const DATA = {
  name: ["THAMAN", "NUTAKKI"],
  initials: "T·N",
  role: "AI Engineer & ML Researcher",
  linkedinDisplay: "linkedin.com/thaman-n",
  linkedinFull: "https://www.linkedin.com/in/thaman-n-538984274/",
  githubDisplay: "github.com/Thaman-N",
  githubFull: "https://github.com/Thaman-N",
  location: "Bengaluru, India",

  about: [
    "I work at the intersection of mechanistic interpretability, causal ML, and applied mathematical modelling. Currently an AI Engineer at a Bengaluru-based startup, where I build rigorous quantitative methods — including probabilistic record linkage and anomaly detection — on financial data.",
    "My research focuses on understanding how neural networks represent and process information through causal intervention. I am actively exploring mechanistic interpretability and plan to extend this work into diffusion-based language models.",
  ],

  stack: [
    { label: "Frameworks", items: ["PyTorch", "JAX", "TensorFlow", "Keras"] },
    { label: "Libraries",  items: ["TransformerLens", "nnsight", "pandas", "Splink"] },
    { label: "Methods",    items: ["Mechanistic Interp.", "Causal Intervention", "RLHF", "RAG"] },
    { label: "Languages",  items: ["Python", "C/C++", "SQL", "Bash"] },
  ],

  experience: [
    {
      role: "AI Engineer",
      org: "Late-stage Startup",
      location: "Bengaluru, India",
      period: "2026 – Present",
      bullets: [
        "Developing probabilistic entity resolution models using Fellegi-Sunter record linkage on large-scale financial datasets.",
        "Designing and deploying statistical anomaly detection methods for structured financial data in production audit systems.",
        "Bridging classical mathematical modelling with modern ML to ensure both interpretability and regulatory robustness.",
      ],
    },
    {
      role: "Research Intern — Machine Learning",
      org: "CCBD & CDSAML, PES University",
      location: "Bengaluru, India",
      period: "Jan 2026 – May 2026",
      bullets: [
        "Discovered the Sensitivity-Drift Paradox: per-block Fisher Information predicts parameter drift direction with a binary architecture-dependent sign across 35 model-generation pairs (25/25 sequential negative, 10/10 parallel positive; d=5.96, sign-test p=2.9×10⁻¹¹), causally attributed to AdamW's cross-generation second-moment memory via a dose-response β₂ ablation and a two-architecture vₜ-reset factorial, explaining 5–50× faster collapse in parallel residual-stream models.",
        "Decomposed collapse dynamics to circuit and component level: established that sequential protection is entirely MLP-driven (ρ_mlp=−0.66* vs ρ_attn=+0.03 ns in GPT-2) while circuit structure is preserved throughout collapse (node stability=1.0000); discovered that freezing low-FIM MLP blocks in Pythia-1.4b induces sequential-like FIM-drift inversion in free blocks (ρ=−0.68**, p<0.01), demonstrating that the parallel collapse signature is governed by which parameters receive gradient pressure, not solely by architecture.",
      ],
    },
    {
      role: "Undergraduate Teaching Assistant — Software Engineering",
      org: "PES University",
      location: "Bengaluru, India",
      period: "Aug 2025 – Dec 2025",
      bullets: [
        "Facilitated weekly lab sessions for 120+ students on Agile methodologies, guiding teams through sprint simulations, backlog estimation, and velocity tracking.",
        "Conducted code reviews on Automated Testing, ensuring students identified edge cases via Fuzz Testing and achieved a mandatory 90% branch coverage threshold.",
        "Directed students on Static Code Analysis using Pylint and Bandit within GitHub Codespaces, reinforcing PEP 8 standards and security vulnerability resolution.",
      ],
    },
  ],

  projects: [
    {
      title: "Token-Manifold Sentinel",
      url: "https://github.com/Thaman-N/DAC",
      stack: "PyTorch · TransformerLens",
      status: "Under Review — TMLR 2026",
      bullets: [
        "Identified and causally validated a five-head attention circuit for OOD detection in Gemma-2-2B via MAP, path patching, and four-criterion double dissociation (z=41.90, p<1e-6); deployed as a zero-shot scalar monitor achieving AUROC=0.965 on Arabic and 0.994 on adversarial GCG inputs with no labelled data, outperforming rigorous Mahalanobis baseline by 0.409 AUROC.",
        "Characterised the detection mechanism via a geometric dilution formula (r=0.9959) explaining two distinct detection modes (sharpening and diffusion); confirmed cross-architecture non-universality in Pythia-2.8B (causal circuit at 3% depth vs 96% in Gemma, opposite GCG detection mechanism) and Mistral-7B (GCG via sharpening, not diffusion); white-box attack achieves 100% norm suppression yet AUROC increases, with mechanism fully explained.",
      ],    
    },
    {
      title: "The Sensitivity-Drift Paradox",
      url: "https://github.com/Thaman-N/sdp",
      stack: "PyTorch · TransformerLens · SAELens · 5 transformer families",
      status: "In Progress — Preprint",
      bullets: [
        "Identified a binary architecture-dependent law governing weight-space collapse in recursive self-distillation: per-block Fisher Information predicts drift direction with d=5.96 across 35 model-generation pairs, causally traced to AdamW's vₜ cross-generation memory via full β₂ dose-response and a two-architecture reset factorial confirming parallel collapse is architectural rather than memory-dependent; Falcon-7B's MQA split reveals the mechanism at sub-block granularity (KV ρ=+0.60**, Q ρ=−0.37*).",
        "Extended the mechanism to circuit and component level via TransformerLens: sequential MLP protection confirmed (ρ_mlp=−0.66* vs ρ_attn=+0.03 ns), circuit nodes stable to 1.0000 across all generations, and a GQA gradient-sharing dissociation identified in Llama-3.2-1B (ρ_K=−0.897**, ρ_O=+0.694**); block-freeze experiments across four conditions revealed a compensatory self-similar paradox — low-FIM block freezing inverts the free-block correlation to ρ=−0.68**, partially inducing sequential-like optimizer dynamics in a parallel model.",
      ],
    },
    {
      title: "ErzurNet",
      url: "https://github.com/Thaman-N/TDISS",
      stack: "PyTorch · OpenCV · ONNX · TensorRT · FastAPI · React",
      status: "Under Review — IJIT 2026",
      bullets: [
        "Architected a real-time violence detection pipeline integrating YOLOv8 for spatial cropping with a custom X3D-backbone model to capture spatiotemporal features efficiently.",
        "Achieved SOTA accuracy on RWF-2000 (94.25%) and RLVS (99.75%) benchmarks; optimised inference 50× faster than competing transformers via ONNX and TensorRT for viable edge deployment.",
      ],
    },
    {
      title: "Advanced Contract Analysis System",
      url: "https://github.com/Thaman-N/acas",
      stack: "PyTorch · Transformers · PEFT · NLTK · Tesseract",
      status: "Independent",
      bullets: [
        "Built a multimodal RAG pipeline using Tesseract OCR to digitise legal documents, enabling context-aware querying of complex contracts via vector search.",
        "Fine-tuned LLaMA and Mistral models using QLoRA and PEFT on legal datasets, reducing hallucination rates and improving domain-specific response accuracy.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "PES University",
      location: "Bengaluru, India",
      period: "Sep 2022 – May 2026",
      detail: "CGPA 8.35 / 10",
    },
  ],

  certifications: [
    { title: "TensorFlow Developer Certificate", issuer: "Google / TensorFlow", url: "https://www.credential.net/c37a7c9f-e1fd-4493-a20f-330dd8f296a2" },
    { title: "Deep Learning Specialisation",     issuer: "DeepLearning.AI",     url: "https://coursera.org/verify/specialization/WCM7KMMBLQ89" },
    { title: "Natural Language Processing",      issuer: "DeepLearning.AI",     url: "https://coursera.org/verify/specialization/QR4RDZYWW7HS" },
    { title: "Linux System Administration",      issuer: "Udemy",               url: "https://www.udemy.com/certificate/UC-5cf59ab7-1a42-4fa9-abc0-a9cf920b6781/" },
  ],
};

/* ─────────────────────────────────────────
   CARD GRAIN — draws cotton-stock texture onto a canvas.
   Organic, non-uniform, no ridges or grid.
───────────────────────────────────────── */
function useCardGrain(canvasRef, wrapRef) {
  useEffect(() => {
    function draw() {
      const wrap = wrapRef.current;
      const canvas = canvasRef.current;
      if (!wrap || !canvas) return;
      const W = wrap.offsetWidth;
      const H = wrap.offsetHeight;
      if (!W || !H) return;
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext("2d");
      const img = ctx.createImageData(W, H);
      const d = img.data;

      // fast deterministic pseudo-random
      function rng(x, y, s) {
        let n = Math.sin(x * 127.1 + y * 311.7 + s * 93.5) * 43758.5453;
        return n - Math.floor(n);
      }
      // smooth noise — no axis preference, purely 2D
      function noise(x, y, sc, s) {
        const xi = Math.floor(x * sc), yi = Math.floor(y * sc);
        const xf = x * sc - xi, yf = y * sc - yi;
        const ux = xf * xf * (3 - 2 * xf);
        const uy = yf * yf * (3 - 2 * yf);
        const a = rng(xi,   yi,   s);
        const b = rng(xi+1, yi,   s);
        const c = rng(xi,   yi+1, s);
        const e = rng(xi+1, yi+1, s);
        return a + (b-a)*ux + (c-a)*uy + (b-a+a-b+e-c)*ux*uy;
      }

     for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4;

        // D — Wove Paper base: #f5f1e8
        let r = 245, g = 241, b = 232;

        // slow large-scale tonal drift — uneven light across the stock
        // base stays the same: r=245, g=241, b=232
        const tonal = noise(x/W, y/H, 1.5, 4) * 0.6
                    + noise(x/W, y/H, 2.8, 11) * 0.4;
        const tv = (tonal - 0.5) * 18;          // was 10
        r += tv * 0.55; g += tv * 0.5; b += tv * 0.42;

        const mid = noise(x/W * 16, y/H * 16, 1, 6)
                  + noise(x/W * 10, y/H * 10, 1, 9) * 0.5;
        const mv = (mid / 2 - 0.5) * 14;        // was 6
        r += mv; g += mv * 0.92; b += mv * 0.8;

        const micro = rng(x, y, 11) + rng(x+1, y, 12) * 0.4 + rng(x, y+1, 13) * 0.4;
        const fv = (micro / 1.8 - 0.5) * 7;    // was 3
        r += fv; g += fv; b += fv * 0.9;

        d[i]   = Math.max(216, Math.min(255, Math.round(r)));  // floor lowered
        d[i+1] = Math.max(212, Math.min(255, Math.round(g)));
        d[i+2] = Math.max(204, Math.min(255, Math.round(b)));
        d[i+3] = 255;
      }
    }
      ctx.putImageData(img, 0, 0);
    }

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => setTimeout(draw, 60));
    } else {
      setTimeout(draw, 300);
    }
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [canvasRef, wrapRef]);
}

/* ─────────────────────────────────────────
   CARD — reusable for hero + modal
───────────────────────────────────────── */
function CardFace({
  nameSize    = "clamp(14px, 4.5vw, 22px)",
  titleSize   = "clamp(7px, 1.8vw, 8.5px)",
  companySize = "clamp(7px, 1.9vw, 9px)",
  contactSize = "clamp(7px, 1.7vw, 8px)",
  dividerWidth = "clamp(24px, 8vw, 40px)",
  bottomOffset = "clamp(0.8rem, 3.5vw, 2rem)",
  sidePad      = "clamp(1.2rem, 7vw, 3rem)",
}) {
  const canvasRef = useRef(null);
  const wrapRef   = useRef(null);
  useCardGrain(canvasRef, wrapRef);

  const linkStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: contactSize,
    fontWeight: 300,
    letterSpacing: "0.2em",
    color: "#3a2e18",
    textTransform: "uppercase",
    opacity: 0.55,
    textShadow: "0 0.5px 0 rgba(255,255,255,0.5)",
    whiteSpace: "nowrap",
    textDecoration: "none",
    cursor: "pointer",
    transition: "opacity 0.2s",
  };

  return (
    <div ref={wrapRef} style={{ position: "absolute", inset: 0, borderRadius: "inherit" }}>
      {/* grain canvas — sits at z0, fills card exactly */}
      <canvas ref={canvasRef} style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        borderRadius: "inherit", display: "block", pointerEvents: "none", zIndex: 0,
      }} />

      {/* shadow + inset highlight */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "inherit", zIndex: 1, pointerEvents: "none",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -1px 0 rgba(140,120,80,0.1), 0 8px 32px rgba(60,48,24,0.16), 0 2px 8px rgba(60,48,24,0.1)"
      }} />
      {/* edge */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "inherit", zIndex: 1, pointerEvents: "none",
        border: "0.5px solid rgba(150,130,90,0.2)"
      }} />

      {/* content — z2 */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "clamp(1.2rem, 4vw, 2.5rem) clamp(1.5rem, 6vw, 3rem)",
      }}>
        <div style={{
          fontFamily: "'Cinzel',serif", fontSize: companySize, fontWeight: 400,
          letterSpacing: "0.35em", color: "#4a3e24", textTransform: "uppercase",
          opacity: 0.5, marginBottom: "clamp(0.6rem, 2.5vw, 1.4rem)",
          textShadow: "0 0.8px 0 rgba(255,255,255,0.9), 0 -0.4px 0 rgba(40,28,6,0.28)"
        }}>Bengaluru, India · 2026</div>

        <div style={{
          fontFamily: "'Cinzel',serif", fontSize: nameSize, fontWeight: 500,
          letterSpacing: "0.18em", color: "#1a1208", textTransform: "uppercase",
          textAlign: "center", lineHeight: 1.3,
          textShadow: "0 1px 0 rgba(255,255,255,0.95), 0 2px 2px rgba(255,255,255,0.4), 0 -0.5px 0 rgba(14,8,0,0.6), 0 -1px 1.5px rgba(14,8,0,0.2)",
          filter: "drop-shadow(0 1px 0.5px rgba(245,240,228,0.8)) drop-shadow(0 -0.5px 0.5px rgba(14,8,0,0.3))"
        }}>{DATA.name[0]}<br />{DATA.name[1]}</div>

        <div style={{ width: dividerWidth, height: "0.5px", background: "rgba(90,76,44,0.28)", margin: "clamp(0.5rem, 2vw, 1.2rem) auto" }} />

        <div style={{
          fontFamily: "'Cinzel',serif", fontSize: titleSize, fontWeight: 400,
          letterSpacing: "0.28em", color: "#4a3e24", textTransform: "uppercase",
          opacity: 0.6, textAlign: "center",
          textShadow: "0 0.5px 0 rgba(255,255,255,0.8)"
        }}>{DATA.role}</div>
      </div>

      {/* contact row — z3, absolutely at bottom */}
      <div style={{
        position: "absolute", zIndex: 3,
        bottom: bottomOffset, left: sidePad, right: sidePad,
        display: "flex", gap: "2.2rem", justifyContent: "center"
      }}>
        <a href={DATA.linkedinFull} target="_blank" rel="noopener noreferrer"
           style={linkStyle}
           onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
           onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
           onClick={e => e.stopPropagation()}>
          {DATA.linkedinDisplay}
        </a>
        <a href={DATA.githubFull} target="_blank" rel="noopener noreferrer"
           style={linkStyle}
           onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
           onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
           onClick={e => e.stopPropagation()}>
          {DATA.githubDisplay}
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   STYLES
───────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #ede8de; font-family: 'Cinzel', serif; color: #1e1508; -webkit-font-smoothing: antialiased; }

  .pf-top-edge {
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(107,88,48,0.12) 15%, rgba(130,108,60,0.22) 50%, rgba(107,88,48,0.12) 85%, transparent 100%);
  }

  /* nav */
  .pf-nav { display: flex; justify-content: space-between; align-items: center; padding: 2.2rem 4rem; border-bottom: 0.5px solid rgba(140,120,75,0.18); }
  .pf-nav-mark { font-size: 9px; letter-spacing: 0.5em; color: #7a6840; opacity: 0.5; text-transform: uppercase; }
  .pf-nav-links { display: flex; gap: 3rem; }
  .pf-nav-link { font-size: 8px; letter-spacing: 0.35em; color: #5c4e2e; opacity: 0.55; text-transform: uppercase; text-decoration: none; cursor: pointer; transition: opacity 0.25s; background: none; border: none; font-family: 'Cinzel', serif; }
  .pf-nav-link:hover { opacity: 0.9; }

  /* hero */
  .pf-hero { padding: 5rem 4rem; border-bottom: 0.5px solid rgba(140,120,75,0.14); display: flex; align-items: center; justify-content: center; }

  /* hero card */
  .pf-card { width: 480px; height: 280px; background: #f5f1e8; border-radius: 6px; position: relative; cursor: pointer; transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
  .pf-card:hover { transform: translateY(-6px); }

  /* modal */
  .pf-modal-backdrop {
    position: fixed; inset: 0; z-index: 200;
    background: rgba(22,15,5,0.78);
    backdrop-filter: blur(3px);
    display: flex; align-items: center; justify-content: center; padding: 2rem;
    opacity: 0; pointer-events: none;
    transition: opacity 0.28s ease;
  }
  .pf-modal-backdrop.open { opacity: 1; pointer-events: all; }
  .pf-modal-card {
    width: min(720px, 92vw);
    aspect-ratio: 1.714;
    background: #f5f1e8;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transform: scale(0.9);
    transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
  }
  .pf-modal-backdrop.open .pf-modal-card { transform: scale(1); }

  /* close hint inside modal card */
  .pf-modal-close {
    position: absolute; top: 1rem; right: 1.2rem; z-index: 10;
    font-family: 'Cinzel', serif; font-size: 7px; letter-spacing: 0.3em;
    color: #6b5e3e; opacity: 0.35; text-transform: uppercase;
    cursor: pointer; transition: opacity 0.2s; user-select: none;
  }
  .pf-modal-close:hover { opacity: 0.75; }

  /* eyebrow */
  .pf-eyebrow { font-size: 8.5px; letter-spacing: 0.42em; color: #2e2410; opacity: 0.82; text-transform: uppercase; margin-bottom: 2rem; }

  /* two-col */
  .pf-two-col { display: grid; grid-template-columns: 1fr 1fr; }
  .pf-col { padding: 3.5rem 4rem; }
  .pf-col-left { border-right: 0.5px solid rgba(140,120,75,0.14); border-bottom: 0.5px solid rgba(140,120,75,0.14); }
  .pf-col-right { border-bottom: 0.5px solid rgba(140,120,75,0.14); }

  /* about */
  .pf-about-body { font-family: 'Cormorant Garamond', serif; font-size: 15px; font-weight: 300; line-height: 1.9; color: #3d3018; opacity: 0.78; letter-spacing: 0.02em; }
  .pf-about-body + .pf-about-body { margin-top: 1.1rem; }

  /* stack */
  .pf-skill-row { display: flex; justify-content: space-between; align-items: baseline; padding: 0.85rem 0; border-bottom: 0.5px solid rgba(140,120,75,0.09); }
  .pf-skill-row:last-child { border-bottom: none; }
  .pf-skill-name { font-size: 8px; letter-spacing: 0.28em; color: #3d3018; text-transform: uppercase; opacity: 0.65; white-space: nowrap; margin-right: 1rem; }
  .pf-skill-tags { display: flex; gap: 0.6rem; flex-wrap: wrap; justify-content: flex-end; }
  .pf-skill-tag { font-family: 'Cormorant Garamond', serif; font-size: 11px; font-style: italic; color: #7a6840; opacity: 0.58; }

  /* section */
  .pf-section { padding: 3.5rem 4rem; border-bottom: 0.5px solid rgba(140,120,75,0.14); }

  /* experience */
  .pf-exp-item { margin-bottom: 2.8rem; }
  .pf-exp-item:last-child { margin-bottom: 0; }
  .pf-exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.25rem; }
  .pf-exp-role { font-size: 11px; letter-spacing: 0.22em; color: #1a1005; text-transform: uppercase; font-weight: 500; }
  .pf-exp-period { font-family: 'Cormorant Garamond', serif; font-size: 11px; font-style: italic; color: #7a6840; opacity: 0.55; }
  .pf-exp-org { font-size: 7.5px; letter-spacing: 0.3em; color: #7a6840; opacity: 0.45; text-transform: uppercase; margin-bottom: 1rem; }
  .pf-exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
  .pf-exp-bullet { font-family: 'Cormorant Garamond', serif; font-size: 14px; font-weight: 300; line-height: 1.75; color: #3d3018; opacity: 0.75; padding-left: 1.2rem; position: relative; }
  .pf-exp-bullet::before { content: '·'; position: absolute; left: 0; color: #7a6840; opacity: 0.5; }

  /* projects — hover spotlights the hovered row, dims siblings */
  .pf-projects-list:hover .pf-project-item { opacity: 0.35; transition: opacity 0.22s ease; }
  .pf-projects-list .pf-project-item:hover { opacity: 1 !important; }

  .pf-project-item { padding: 2rem 4rem; margin: 0 -4rem; border-bottom: 0.5px solid rgba(140,120,75,0.09); transition: opacity 0.22s ease; }
  .pf-project-item:last-child { border-bottom: none; }
  .pf-project-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.25rem; }
  .pf-project-title { font-size: 11px; letter-spacing: 0.22em; color: #1a1005; text-transform: uppercase; font-weight: 500; text-decoration: none; transition: opacity 0.2s; }
  .pf-project-title:hover { opacity: 0.6; }
  .pf-project-status { font-family: 'Cormorant Garamond', serif; font-size: 11px; font-style: italic; color: #7a6840; opacity: 0.5; }
  .pf-project-stack { font-size: 7px; letter-spacing: 0.3em; color: #3d3018; opacity: 0.62; text-transform: uppercase; margin-bottom: 1rem; }

  /* education */
  .pf-edu-item { margin-bottom: 1.5rem; }
  .pf-edu-item:last-child { margin-bottom: 0; }
  .pf-edu-degree { display: block; font-size: 10px; letter-spacing: 0.2em; color: #1a1005; text-transform: uppercase; font-weight: 500; margin-bottom: 0.3rem; }
  .pf-edu-period { display: block; font-family: 'Cormorant Garamond', serif; font-size: 11px; font-style: italic; color: #7a6840; opacity: 0.55; margin-bottom: 0.35rem; }
  .pf-edu-inst { font-size: 7.5px; letter-spacing: 0.28em; color: #3d3018; opacity: 0.62; text-transform: uppercase; margin-bottom: 0.35rem; }
  .pf-edu-detail { font-family: 'Cormorant Garamond', serif; font-size: 12px; font-style: italic; color: #5c4e2e; opacity: 0.65; }

  /* certs */
  .pf-cert-grid { display: grid; grid-template-columns: 1fr 1fr; }
  .pf-cert-item { padding: 1.2rem 0; border-bottom: 0.5px solid rgba(140,120,75,0.09); }
  .pf-cert-item:nth-last-child(-n+2) { border-bottom: none; }
  .pf-cert-title { display: block; font-size: 9px; letter-spacing: 0.2em; color: #2a2010; text-transform: uppercase; opacity: 0.78; margin-bottom: 0.25rem; text-decoration: none; transition: opacity 0.2s; }
  .pf-cert-title:hover { opacity: 1; }
  .pf-cert-issuer { font-family: 'Cormorant Garamond', serif; font-size: 11px; font-style: italic; color: #5a4830; opacity: 0.65; }

  /* footer */
  .pf-footer { padding: 1.8rem 4rem; display: flex; justify-content: space-between; align-items: center; }
  .pf-footer-links { display: flex; gap: 1.4rem; align-items: center; }
  .pf-footer-link { font-size: 7px; letter-spacing: 0.45em; color: #3d3018; opacity: 0.62; text-transform: uppercase; text-decoration: none; transition: opacity 0.2s; }
  .pf-footer-link:hover { opacity: 1; }
  .pf-footer-sep { font-size: 7px; color: #3d3018; opacity: 0.3; }
  .pf-footer-wm { font-size: 7px; letter-spacing: 0.55em; color: #3d3018; opacity: 0.5; text-transform: uppercase; }

  /* responsive */
  @media (max-width: 700px) {
    .pf-nav { padding: 1.2rem 1.5rem; flex-direction: column; align-items: flex-start; gap: 0.7rem; }
    .pf-nav-links { gap: 0.9rem; flex-wrap: wrap; }
    .pf-nav-link  { letter-spacing: 0.2em; }
    .pf-hero { padding: 3rem 1.5rem; }
    .pf-card { width: 100%; max-width: 340px; height: 200px; padding: 1.5rem; }
    .pf-two-col { grid-template-columns: 1fr; }
    .pf-col { padding: 2.5rem 1.5rem; }
    .pf-col-left { border-right: none; }
    .pf-section { padding: 2.5rem 1.5rem; }
    .pf-project-item { padding: 1.5rem; margin: 0 -1.5rem; }
    .pf-cert-grid { grid-template-columns: 1fr; }
    .pf-cert-item:last-child { border-bottom: none; }
    .pf-exp-header { flex-direction: column; gap: 0.15rem; }
    .pf-project-header { flex-direction: column; gap: 0.15rem; }
    .pf-footer { padding: 1.5rem; flex-direction: column; gap: 0.6rem; text-align: center; }
    .pf-footer-links { justify-content: center; }
    .pf-footer-links { flex-wrap: wrap; justify-content: center; }
    .pf-modal-card { width: 92vw; aspect-ratio: unset; min-height: 55vw; }
  }
`;

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function Portfolio() {
  const styleInjected = useRef(false);
  const [cardOpen, setCardOpen] = useState(false);

  useLayoutEffect(() => {
    if (styleInjected.current) return;
    styleInjected.current = true;
    if (document.getElementById("pf-styles")) return;
    const el = document.createElement("style");
    el.id = "pf-styles";
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);

  useEffect(() => {
    document.body.style.overflow = cardOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cardOpen]);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") setCardOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <div className="pf-top-edge" />

      {/* nav */}
      <nav className="pf-nav">
        <div className="pf-nav-mark">{DATA.initials} · 2026</div>
        <div className="pf-nav-links">
          {[["Experience","experience"],["Projects","projects"],["Education","education"],["Contact","contact"]].map(([l,id]) => (
            <button key={id} className="pf-nav-link" onClick={() => scrollTo(id)}>{l}</button>
          ))}
        </div>
      </nav>

      {/* hero */}
      <section className="pf-hero">
        <div className="pf-card" onClick={() => setCardOpen(true)}>
          <CardFace />
        </div>
      </section>

      {/* modal — fullscreen closer view of card */}
      <div
        className={`pf-modal-backdrop${cardOpen ? " open" : ""}`}
        onClick={() => setCardOpen(false)}
      >
        <div className="pf-modal-card" onClick={e => e.stopPropagation()}>
          <div className="pf-modal-close" onClick={() => setCardOpen(false)}>✕ close</div>
          <CardFace
            nameSize="clamp(26px,5vw,44px)"
            titleSize="clamp(7.5px,1.2vw,11px)"
            companySize="clamp(8px,1.1vw,11px)"
            contactSize="clamp(7.5px,1.1vw,10px)"
            dividerWidth="clamp(30px,5vw,50px)"
            bottomOffset="clamp(1.4rem,3vw,2.4rem)"
            sidePad="clamp(1.5rem,5vw,4rem)"
          />
        </div>
      </div>

      {/* about + stack */}
      <div className="pf-two-col">
        <div className="pf-col pf-col-left">
          <div className="pf-eyebrow">About</div>
          {DATA.about.map((p,i) => <p key={i} className="pf-about-body">{p}</p>)}
        </div>
        <div className="pf-col pf-col-right">
          <div className="pf-eyebrow">Stack</div>
          {DATA.stack.map(s => (
            <div key={s.label} className="pf-skill-row">
              <span className="pf-skill-name">{s.label}</span>
              <div className="pf-skill-tags">
                {s.items.map(t => <span key={t} className="pf-skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* experience */}
      <section className="pf-section" id="experience">
        <div className="pf-eyebrow">Experience</div>
        {DATA.experience.map(e => (
          <div key={e.role} className="pf-exp-item">
            <div className="pf-exp-header">
              <span className="pf-exp-role">{e.role}</span>
              <span className="pf-exp-period">{e.period}</span>
            </div>
            <div className="pf-exp-org">{e.org} · {e.location}</div>
            <ul className="pf-exp-bullets">
              {e.bullets.map((b,i) => <li key={i} className="pf-exp-bullet">{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* projects */}
      <section className="pf-section" id="projects">
        <div className="pf-eyebrow">Projects</div>
        <div className="pf-projects-list">
          {DATA.projects.map(p => (
            <div key={p.title} className="pf-project-item">
              <div className="pf-project-header">
                <a className="pf-project-title" href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                <span className="pf-project-status">{p.status}</span>
              </div>
              <div className="pf-project-stack">{p.stack}</div>
              <ul className="pf-exp-bullets">
                {p.bullets.map((b,i) => <li key={i} className="pf-exp-bullet">{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* education + certs */}
      <div className="pf-two-col" id="education">
        <div className="pf-col pf-col-left">
          <div className="pf-eyebrow">Education</div>
          {DATA.education.map(e => (
            <div key={e.degree} className="pf-edu-item">
              <span className="pf-edu-degree">{e.degree}</span>
              <span className="pf-edu-period">{e.period}</span>
              <div className="pf-edu-inst">{e.institution} · {e.location}</div>
              <div className="pf-edu-detail">{e.detail}</div>
            </div>
          ))}
        </div>
        <div className="pf-col pf-col-right">
          <div className="pf-eyebrow">Certifications</div>
          <div className="pf-cert-grid">
            {DATA.certifications.map(c => (
              <div key={c.title} className="pf-cert-item">
                <a className="pf-cert-title" href={c.url} target="_blank" rel="noopener noreferrer">{c.title}</a>
                <div className="pf-cert-issuer">{c.issuer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="pf-footer" id="contact">
        <div className="pf-footer-links">
          <a className="pf-footer-link" href={DATA.linkedinFull} target="_blank" rel="noopener noreferrer">{DATA.linkedinDisplay}</a>
          <span className="pf-footer-sep">·</span>
          <a className="pf-footer-link" href={DATA.githubFull} target="_blank" rel="noopener noreferrer">{DATA.githubDisplay}</a>
        </div>
        <div className="pf-footer-wm">◆ {DATA.location} · MMXXVI</div>
      </footer>
    </div>
  );
}