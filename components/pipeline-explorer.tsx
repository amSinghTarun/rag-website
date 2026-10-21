"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const stages = [
  {
    id: "ingest",
    number: "01",
    label: "Ingest",
    eyebrow: "STRUCTURE BEFORE VECTORS",
    title: "Turn messy files into durable, traceable chunks.",
    description:
      "Format-aware parsing keeps headings and PDF page boundaries. The chunker targets roughly 500 tokens, preserves long-sentence continuations, and gives every chunk a stable ID.",
    nodes: [
      ["PDF · DOCX · HTML · MD · TXT", "5 input families"],
      ["Structure-aware parser", "headings + pages"],
      ["Deterministic chunker", "~500 token target"],
      ["text-embedding-3-small", "default · 384 dimensions"],
      ["LanceDB", "collection-scoped vectors"],
    ],
    footnote:
      "SQLite tracks queued → indexing → ready / failed while originals stay in the local file store.",
  },
  {
    id: "retrieve",
    number: "02",
    label: "Retrieve",
    eyebrow: "TWO INDEPENDENT SIGNALS",
    title: "Let semantic similarity and exact language disagree.",
    description:
      "Each query opens two lanes: a 384-dimensional OpenAI query embedding drives cosine search, while a local BM25 pass rewards exact terms across the selected collection.",
    nodes: [
      ["Question", "collection scoped"],
      ["Query embedding", "semantic intent"],
      ["40 cosine candidates", "LanceDB"],
      ["40 BM25 candidates", "local lexical pass"],
      ["Candidate union", "both signals retained"],
    ],
    footnote:
      "The lexical path is computed over collection rows at query time—there is no hidden hosted search service.",
  },
  {
    id: "rank",
    number: "03",
    label: "Rank",
    eyebrow: "VISIBLE RANKING LOGIC",
    title: "Fuse, rerank, and rebuild the missing context.",
    description:
      "Reciprocal-rank fusion (k=60) merges both lanes. A deterministic reranker then blends fusion strength, query-term coverage, heading relevance, and exact-phrase evidence.",
    nodes: [
      ["RRF fusion", "k = 60"],
      ["Term coverage", "30% weight"],
      ["Heading coverage", "10% weight"],
      ["Exact phrase", "5% weight"],
      ["Top 8 windows", "neighbors restored"],
    ],
    footnote:
      "Same-section neighbors and split continuation groups are reattached without returning duplicate windows.",
  },
  {
    id: "answer",
    number: "04",
    label: "Answer",
    eyebrow: "EVIDENCE, THEN GENERATION",
    title: "Give the model bounded context—not the whole library.",
    description:
      "Only the selected evidence windows are formatted with filenames, pages, and section paths before they reach the OpenAI Responses API.",
    nodes: [
      ["Evidence windows", "ranked + expanded"],
      ["Source labels", "file · page · section"],
      ["Bounded prompt", "sources only"],
      ["OpenAI response", "storage disabled"],
      ["Citation-guided answer", "prompted [1] references"],
    ],
    footnote:
      "The generator is instructed to abstain when the supplied sources do not support an answer.",
  },
] as const;

export function PipelineExplorer() {
  const [activeId, setActiveId] = useState<(typeof stages)[number]["id"]>(
    "ingest",
  );
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % stages.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + stages.length) % stages.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = stages.length - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    const nextStage = stages[nextIndex];
    setActiveId(nextStage.id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="pipeline-explorer">
      <div className="pipeline-tabs" role="tablist" aria-label="RAG pipeline">
        {stages.map((stage, index) => (
          <button
            aria-controls={`pipeline-panel-${stage.id}`}
            aria-selected={stage.id === activeId}
            className={stage.id === activeId ? "pipeline-tab active" : "pipeline-tab"}
            id={`pipeline-tab-${stage.id}`}
            key={stage.id}
            onClick={() => setActiveId(stage.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            role="tab"
            tabIndex={stage.id === activeId ? 0 : -1}
            type="button"
          >
            <span>{stage.number}</span>
            {stage.label}
          </button>
        ))}
      </div>

      {stages.map((stage) => (
        <div
          aria-labelledby={`pipeline-tab-${stage.id}`}
          className="pipeline-panel"
          hidden={stage.id !== activeId}
          id={`pipeline-panel-${stage.id}`}
          key={stage.id}
          role="tabpanel"
          tabIndex={0}
        >
          <div className="pipeline-copy">
            <p className="micro-label">{stage.eyebrow}</p>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <div className="pipeline-footnote">
              <span aria-hidden="true">↳</span>
              {stage.footnote}
            </div>
          </div>

          <div className="pipeline-flow" aria-label={`${stage.label} flow`}>
            {stage.nodes.map(([name, meta], index) => (
              <div className="flow-step-wrap" key={name}>
                <div className="flow-step">
                  <span className="flow-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{name}</strong>
                  <small>{meta}</small>
                </div>
                {index < stage.nodes.length - 1 ? (
                  <span className="flow-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
