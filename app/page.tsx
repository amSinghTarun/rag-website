import { CopyCommand } from "@/components/copy-command";
import { PipelineExplorer } from "@/components/pipeline-explorer";

const repositoryUrl =
  process.env.NEXT_PUBLIC_REPOSITORY_URL ??
  "https://github.com/amSinghTarun/rag";

const quickstartCommand = `git clone ${repositoryUrl} og-rag
cd og-rag
docker build -t og-rag .
docker run --rm --init \\
  --name og-rag \\
  --stop-timeout 120 \\
  -p 127.0.0.1:3000:3000 \\
  -v og-rag-data:/app/data \\
  og-rag`;

const stack = [
  "TypeScript",
  "Bun",
  "React",
  "OpenAI",
  "LanceDB",
  "SQLite",
  "Apache Arrow",
  "PDF.js",
  "Mammoth",
  "Docker",
];

const engineeringDetails = [
  {
    index: "01",
    title: "Content-hash deduplication",
    copy: "SHA-256 fingerprints prevent the same file from being indexed twice inside a collection.",
  },
  {
    index: "02",
    title: "Observable ingestion",
    copy: "Queued, indexing, ready, and failed states make background work visible instead of optimistic.",
  },
  {
    index: "03",
    title: "Validated embeddings",
    copy: "Order, count, and the required 384 dimensions are checked before vectors reach storage.",
  },
  {
    index: "04",
    title: "Verified persistence",
    copy: "Stored chunk counts are checked before a document can transition to ready.",
  },
  {
    index: "05",
    title: "Restart recovery",
    copy: "Interrupted indexing is marked failed on boot, giving the system an honest recoverable state.",
  },
  {
    index: "06",
    title: "Graceful shutdown",
    copy: "Active ingestion work settles before LanceDB and SQLite connections are closed.",
  },
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="OG RAG home">
            <span className="wordmark-mark">R/</span>
            <span className="wordmark-copy">
              <strong>OG RAG</strong>
              <small>Retrieval, exposed.</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#pipeline">Pipeline</a>
            <a href="#ranking">Ranking</a>
            <a href="#storage">Storage</a>
            <a href="#quickstart">Quick start</a>
          </div>

          <a
            className="nav-cta"
            href={repositoryUrl}
            rel="noreferrer"
            target="_blank"
          >
            View repository <ArrowUpRight />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <span className="live-dot" aria-hidden="true" />
              EXPLAINABLE · LOCAL-FIRST · HYBRID RAG
            </div>

            <h1>
              Document search with the <em>ranking logic exposed.</em>
            </h1>

            <p className="hero-lede">
              OG RAG turns local document collections into inspectable search
              results and source-grounded answers—with a retrieval pipeline
              built from first principles, not hidden behind a framework.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#pipeline">
                Trace the pipeline <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-ghost"
                href={repositoryUrl}
                rel="noreferrer"
                target="_blank"
              >
                Clone the repository <ArrowUpRight />
              </a>
            </div>

            <div className="hero-proof" aria-label="Project characteristics">
              <span>Custom hybrid retriever</span>
              <span>Persistent local data plane</span>
              <span>Docker-ready</span>
            </div>
          </div>

          <div className="retrieval-demo" aria-label="Illustrative retrieval trace">
            <div className="window-bar">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>retrieval.trace</span>
              <span className="window-status">ILLUSTRATIVE</span>
            </div>

            <div className="demo-body">
              <div className="demo-collection">
                <div>
                  <small>ACTIVE COLLECTION</small>
                  <strong>Engineering handbook</strong>
                </div>
                <span className="ready-pill">● 12 READY</span>
              </div>

              <div className="demo-query">
                <span>Q</span>
                <p>How does hybrid retrieval preserve nearby context?</p>
                <kbd>↵</kbd>
              </div>

              <div className="trace-line" aria-label="Retrieval stages">
                <div>
                  <span>01</span>
                  <strong>Embed</strong>
                  <small>384D</small>
                </div>
                <i aria-hidden="true" />
                <div>
                  <span>02</span>
                  <strong>Retrieve</strong>
                  <small>40 + 40</small>
                </div>
                <i aria-hidden="true" />
                <div>
                  <span>03</span>
                  <strong>Fuse</strong>
                  <small>RRF · 60</small>
                </div>
                <i aria-hidden="true" />
                <div>
                  <span>04</span>
                  <strong>Expand</strong>
                  <small>±1 chunk</small>
                </div>
              </div>

              <div className="demo-results">
                <article className="demo-result primary-result">
                  <div className="result-rank">01</div>
                  <div className="demo-result-copy">
                    <div>
                      <strong>retrieval-notes.md</strong>
                      <span>Hybrid retrieval / Context windows</span>
                    </div>
                    <p>
                      Neighbor chunks are restored only when they share the
                      anchor&apos;s heading path, keeping context relevant…
                    </p>
                  </div>
                  <div className="result-score">
                    <small>SCORE</small>
                    <strong>.91</strong>
                  </div>
                </article>

                <article className="demo-result">
                  <div className="result-rank">02</div>
                  <div className="demo-result-copy">
                    <div>
                      <strong>architecture.pdf</strong>
                      <span>page 8 · Ranking</span>
                    </div>
                  </div>
                  <div className="result-score">
                    <small>SCORE</small>
                    <strong>.84</strong>
                  </div>
                </article>
              </div>

              <div className="demo-footer">
                <span>VECTOR RANK 02</span>
                <span>KEYWORD RANK 01</span>
                <span>CONTEXT 03 CHUNKS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="metric-strip" aria-label="Implementation defaults">
          <div className="section-shell metric-grid">
            <div>
              <strong>384</strong>
              <span>embedding dimensions</span>
            </div>
            <div>
              <strong>40 + 40</strong>
              <span>retrieval candidates</span>
            </div>
            <div>
              <strong>8</strong>
              <span>final evidence windows</span>
            </div>
            <div>
              <strong>5</strong>
              <span>supported file families</span>
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="pipeline">
          <div className="section-intro split-intro">
            <div>
              <p className="section-kicker">01 / THE PIPELINE</p>
              <h2>More than an LLM call.</h2>
            </div>
            <p>
              The full retrieval lifecycle is explicit: parsing, chunking,
              embedding, persistence, dual-lane search, fusion, deterministic
              reranking, context expansion, and grounded generation.
            </p>
          </div>

          <PipelineExplorer />
        </section>

        <section className="ranking-section" id="ranking">
          <div className="section-shell ranking-grid">
            <div className="ranking-copy">
              <p className="section-kicker light">02 / EXPLAINABLE RANKING</p>
              <h2>Two search lanes. One score you can defend.</h2>
              <p>
                Semantic retrieval catches meaning. BM25 catches exact
                language. Reciprocal-rank fusion makes their rank spaces
                comparable, then a deterministic reranker rewards evidence
                that actually matches the question.
              </p>

              <div className="ranking-note">
                <span>WHY IT MATTERS</span>
                <p>
                  Every result exposes its vector rank, keyword rank, fusion
                  score, final score, source file, page range, and heading
                  breadcrumb—before generation begins.
                </p>
              </div>
            </div>

            <div className="formula-board">
              <div className="formula-header">
                <span>DETERMINISTIC_RERANK.TS</span>
                <span>NO BLACK BOX</span>
              </div>

              <div className="formula">
                <div>
                  <span>.55</span>
                  <p>normalized fusion</p>
                </div>
                <b>+</b>
                <div>
                  <span>.30</span>
                  <p>term coverage</p>
                </div>
                <b>+</b>
                <div>
                  <span>.10</span>
                  <p>heading coverage</p>
                </div>
                <b>+</b>
                <div>
                  <span>.05</span>
                  <p>exact phrase</p>
                </div>
              </div>

              <div className="candidate-card">
                <div className="candidate-title">
                  <div>
                    <small>ILLUSTRATIVE CANDIDATE</small>
                    <strong>“Context window selection”</strong>
                  </div>
                  <span>FINAL · .91</span>
                </div>
                <div className="score-bars">
                  <div>
                    <span className="score-label">Fusion signal</span>
                    <span aria-hidden="true"><i style={{ width: "92%" }} /></span>
                    <b>.92</b>
                  </div>
                  <div>
                    <span className="score-label">Query coverage</span>
                    <span aria-hidden="true"><i style={{ width: "84%" }} /></span>
                    <b>.84</b>
                  </div>
                  <div>
                    <span className="score-label">Heading match</span>
                    <span aria-hidden="true"><i style={{ width: "100%" }} /></span>
                    <b>1.0</b>
                  </div>
                  <div>
                    <span className="score-label">Exact phrase</span>
                    <span aria-hidden="true"><i style={{ width: "100%" }} /></span>
                    <b>yes</b>
                  </div>
                </div>
              </div>

              <div className="formula-footer">
                <span>RRF K = 60</span>
                <span>COSINE + BM25</span>
                <span>TOP K = 8</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="storage">
          <div className="section-intro centered-intro">
            <p className="section-kicker">03 / PURPOSE-BUILT STORAGE</p>
            <h2>Three local layers. Clear ownership.</h2>
            <p>
              Each storage engine does one job well, under a single persistent
              data directory. No hosted database is required.
            </p>
          </div>

          <div className="storage-grid">
            <article className="storage-card sqlite-card">
              <div className="storage-topline">
                <span className="storage-icon">SQ</span>
                <span>CONTROL PLANE</span>
              </div>
              <h3>SQLite</h3>
              <p>
                Owns collections, document metadata, SHA-256 hashes, lifecycle
                state, errors, chunk counts, and timestamps.
              </p>
              <ul>
                <li>WAL journal mode</li>
                <li>Foreign-key integrity</li>
                <li>Per-collection deduplication</li>
              </ul>
            </article>

            <article className="storage-card lance-card">
              <div className="storage-topline">
                <span className="storage-icon">LD</span>
                <span>RETRIEVAL PLANE</span>
              </div>
              <h3>LanceDB</h3>
              <p>
                Stores chunk text, provenance, heading paths, continuation
                metadata, and fixed-size Float32 vectors.
              </p>
              <ul>
                <li>384-dimensional vectors</li>
                <li>Cosine similarity search</li>
                <li>Collection filters at query time</li>
              </ul>
            </article>

            <article className="storage-card file-card">
              <div className="storage-topline">
                <span className="storage-icon">FS</span>
                <span>SOURCE PLANE</span>
              </div>
              <h3>Local files</h3>
              <p>
                Keeps original uploads and local settings alongside the index,
                preserving a direct path back to every source.
              </p>
              <ul>
                <li>Atomic file copies</li>
                <li>Content fingerprinting</li>
                <li>Persistent Docker volume</li>
              </ul>
            </article>
          </div>

          <div className="storage-path">
            <span>ONE DATA ROOT</span>
            <code>/app/data</code>
            <i aria-hidden="true" />
            <span>SQLITE · LANCEDB · FILES · SETTINGS</span>
          </div>
        </section>

        <section className="collections-section">
          <div className="section-shell collections-grid">
            <div className="collection-ui" aria-label="Illustrative collection library">
              <div className="collection-ui-header">
                <div>
                  <small>DOCUMENT LIBRARY</small>
                  <strong>Collections</strong>
                </div>
                <div className="collection-tools">
                  <span className="collection-illustrative">ILLUSTRATIVE</span>
                  <span className="collection-new" aria-hidden="true">+ NEW</span>
                </div>
              </div>
              <div className="collection-row active">
                <span className="collection-check">✓</span>
                <div>
                  <strong>Platform docs</strong>
                  <small>Selected collection</small>
                </div>
                <b>12</b>
              </div>
              <div className="collection-row">
                <span className="collection-check" />
                <div>
                  <strong>Research papers</strong>
                  <small>Collection</small>
                </div>
                <b>08</b>
              </div>
              <div className="collection-row">
                <span className="collection-check" />
                <div>
                  <strong>Product notes</strong>
                  <small>Collection</small>
                </div>
                <b>05</b>
              </div>
              <div className="file-types">
                <span>PDF</span><span>DOCX</span><span>HTML</span><span>MD</span><span>TXT</span>
              </div>
            </div>

            <div className="collections-copy">
              <p className="section-kicker">04 / COLLECTION BOUNDARIES</p>
              <h2>One library. Many clean search spaces.</h2>
              <p>
                A default collection exists on first run. Every upload,
                content hash, vector query, and BM25 pass stays scoped to the
                selected collection—so unrelated corpora never compete for
                rank.
              </p>

              <div className="lifecycle">
                <span>QUEUED</span><i>→</i><span>INDEXING</span><i>→</i><span>READY</span>
                <b>or</b><span className="failed-state">FAILED</span>
              </div>

              <div className="limit-grid">
                <div><strong>20</strong><span>files / batch</span></div>
                <div><strong>50 MB</strong><span>per file</span></div>
                <div><strong>250 MB</strong><span>per batch</span></div>
              </div>

              <p className="small-note">
                PDF text extraction is supported; scanned image-only files
                require OCR before upload.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section section-shell engineering-section">
          <div className="section-intro split-intro">
            <div>
              <p className="section-kicker">05 / ENGINEERING DEPTH</p>
              <h2>Built past the demo.</h2>
            </div>
            <p>
              The details that make prototypes brittle are first-class here:
              integrity checks, recoverable state, provenance, persistence,
              and shutdown behavior.
            </p>
          </div>

          <div className="engineering-grid">
            {engineeringDetails.map((detail) => (
              <article key={detail.index}>
                <span>{detail.index}</span>
                <h3>{detail.title}</h3>
                <p>{detail.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="boundary-section">
          <div className="section-shell boundary-grid">
            <div className="boundary-copy">
              <p className="section-kicker light">06 / HONEST DATA BOUNDARY</p>
              <h2>Local-first. Explicitly not “offline.”</h2>
              <p>
                Files, metadata, and indexes persist locally. OpenAI is the
                only provider currently supported, and its boundary is made
                visible instead of hidden in fine print.
              </p>
            </div>

            <div className="boundary-map">
              <div className="boundary-local">
                <span>LOCAL</span>
                <strong>Files · SQLite · LanceDB</strong>
                <small>persistent data directory</small>
              </div>
              <div className="boundary-arrow">
                <span>chunk text</span>
                <span>query</span>
                <span>retrieved evidence</span>
                <i aria-hidden="true">→</i>
              </div>
              <div className="boundary-cloud">
                <span>OPENAI</span>
                <strong>Embeddings · Responses</strong>
                <small>generation uses store: false</small>
              </div>
            </div>
          </div>
        </section>

        <section className="stack-section section-shell">
          <div className="stack-heading">
            <p className="section-kicker">07 / THE STACK</p>
            <h2>Small surface area. Serious primitives.</h2>
          </div>
          <div className="stack-list">
            {stack.map((item, index) => (
              <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>
            ))}
          </div>
          <p className="stack-caption">
            The product application is React + Bun. This showcase is built
            separately with Next.js for a zero-config Vercel deployment.
          </p>
        </section>

        <section className="quickstart-section" id="quickstart">
          <div className="section-shell quickstart-grid">
            <div className="quickstart-copy">
              <p className="section-kicker">08 / CLONE &amp; RUN</p>
              <h2>From repository to retrieval in three steps.</h2>
              <a
                className="button button-primary quickstart-repository-link"
                href={repositoryUrl}
                rel="noreferrer"
                target="_blank"
              >
                Get the repository <ArrowUpRight />
              </a>
              <ol>
                <li><span>01</span><p><strong>Clone and start the container.</strong> One repository, one image, one named data volume.</p></li>
                <li><span>02</span><p><strong>Add an OpenAI API key.</strong> The app boots keyless, then enables indexing and search.</p></li>
                <li><span>03</span><p><strong>Create a collection and upload.</strong> Wait for ready, inspect retrieval, then generate.</p></li>
              </ol>
            </div>

            <div className="terminal-card">
              <div className="terminal-header">
                <div><i /><i /><i /></div>
                <span>~/og-rag</span>
                <CopyCommand command={quickstartCommand} />
              </div>
              <pre><code><span className="prompt">$</span> git clone {repositoryUrl} og-rag{"\n"}<span className="prompt">$</span> cd og-rag{"\n"}<span className="prompt">$</span> docker build -t og-rag .{"\n"}<span className="prompt">$</span> docker run --rm --init \{"\n"}    --name og-rag \{"\n"}    --stop-timeout 120 \{"\n"}    -p 127.0.0.1:3000:3000 \{"\n"}    -v og-rag-data:/app/data \{"\n"}    og-rag</code></pre>
              <div className="terminal-success">
                <span>●</span>
                <p><strong>Local RAG is running</strong><small>http://localhost:3000</small></p>
              </div>
            </div>
          </div>
        </section>

        <section className="closing-section section-shell">
          <p>THE TAKEAWAY</p>
          <h2>
            Retrieval quality is a system design problem.
            <span> OG RAG makes every decision inspectable.</span>
          </h2>
          <a className="button button-primary" href="#top">
            Back to the top <span aria-hidden="true">↑</span>
          </a>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-inner">
          <a className="footer-mark" href="#top">R/</a>
          <p>OG RAG · A local-first hybrid retrieval project.</p>
          <p>React · Bun · OpenAI · LanceDB · SQLite</p>
        </div>
      </footer>
    </>
  );
}
