---
layout: home
title: Home
description: >-
  CLIMB is the UK's cloud computing infrastructure for microbial
  bioinformatics - JupyterLab environments, storage and workflows, with pricing
  and specs up front.
---

<section class="hero" id="top">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">The UK infrastructure for microbial bioinformatics</span>
      <h1>Cloud resources for <span class="rotating-word" id="hero-rotator"></span> bioinformatics.</h1>
      <p class="lede">
        JupyterLab environments, shared storage and Nextflow support for genomics,
        metagenomics and pathogen surveillance run by researchers, for
        researchers. Four months free trial, specs and prices up
        front.
      </p>
      <div class="cta-row">
        <a class="btn primary" href="{{ site.bryn_register_url }}" target="_blank" rel="noopener noreferrer">Register on Bryn</a>
        <a class="btn secondary" href="{{ '/pricing/' | relative_url }}">See pricing &amp; specs</a>
      </div>
      <div class="hero-links">
        <a class="link-card" href="{{ site.docs_site }}" target="_blank" rel="noopener noreferrer">
          <small>Documentation</small>
          <strong>docs.climb.ac.uk</strong>
          <span class="desc">Technical docs, tutorials and onboarding for working on CLIMB.</span>
        </a>
        <a class="link-card" href="{{ site.bryn_url }}" target="_blank" rel="noopener noreferrer">
          <small>User portal</small>
          <strong>bryn.climb.ac.uk</strong>
          <span class="desc">Login, access requests, notebook launch and support tickets.</span>
        </a>
      </div>
    </div>
    <aside class="hero-panel" aria-label="Free trial highlights">
      <div class="metric-strip">
        <div class="metric"><span>Active since</span><strong>2014</strong></div>
        <div class="metric"><span>Research groups</span><strong>300+</strong></div>
        <div class="metric"><span>Institutes</span><strong>80+</strong></div>
      </div>
      <div class="spec-panel">
        <p class="spec-title">What's in the free 4-months trial (from Oct '26)</p>
        <div class="spec-row"><span>Notebook CPUs</span><span class="val">8 vCPU</span></div>
        <div class="spec-row"><span>Notebook RAM</span><span class="val">64 GB memory</span></div>
        <div class="spec-row"><span>Team storage (SSD)</span><span class="val">500 GB</span></div>
        <div class="spec-row"><span>S3 object storage</span><span class="val">1 TB</span></div>
        <div class="spec-row"><span>Cost</span><span class="val">&pound;0</span></div>
      </div>
    </aside>
  </div>
</section>

<section class="section">
  <div class="container">
    <img src="{{ '/assets/img/climb-notebook.svg' | relative_url }}" alt="CLIMB notebook file browser and interface preview" style="width:100%; border-radius:var(--radius-lg); box-shadow:var(--shadow-lg);" />
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="tag teal">What you get</span>
        <h2>Everything you need to analyse microbial data, in one place.</h2>
      </div>
      <p>CLIMB bundles the infrastructure, tools and support that researchers reach for most, so you can spend time on your science rather than on setup.</p>
    </div>
    <div class="grid-3">
      <div class="card">
        <h3>Notebook servers</h3>
        <p>JupyterLab, RStudio and a terminal, with flexible CPU/GPU allocation. Access from any browser — nothing to install, nothing to patch.</p>
      </div>
      <div class="card">
        <h3>Built for bioinformatics</h3>
        <p>Pre-installed bioinformatics tools, reference databases and Nextflow pipelines for microbial genomics and metagenomics — and we listen when you need something we don't have yet.</p>
      </div>
      <div class="card">
        <h3>Team storage &amp; sharing</h3>
        <p>Fast shared team storage and S3 object storage, with role-based access so you control who sees what.</p>
      </div>
      <div class="card">
        <h3>Nextflow on Kubernetes</h3>
        <p>Run nf-core and custom pipelines against dedicated compute, separate from your interactive notebook resources.</p>
      </div>
      <div class="card">
        <h3>Secure by default</h3>
        <p>Two-factor authentication is mandatory across accounts, with UK-based data storage and role-based team permissions.</p>
      </div>
      <div class="card">
        <h3>Support</h3>
        <p>Documentation, a support ticketing system and a team that has run the infrastructure since 2014.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="pricing">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="tag teal">Pricing</span>
        <h2>Choose the plan that fits your work.</h2>
      </div>
      <p>Every plan starts from the same infrastructure. Pick the shape that matches what you're doing — research, teaching, surveillance, or just trying it out.</p>
    </div>
    <div class="plan-grid">
      <div class="plan-card trial">
        <span class="tag teal">Start here</span>
        <div class="plan-name">Trial</div>
        <div class="plan-price">Free</div>
        <div class="plan-note">4 months, no card required</div>
        <ul>
          <li>8 CPUs, 64 GB memory</li>
          <li>500GB Team Shared</li>
          <li>1TB S3</li>
        </ul>
        <a class="btn secondary" href="{{ '/pricing/trial/' | relative_url }}">Trial details</a>
      </div>
      <div class="plan-card">
        <div class="plan-name">Research</div>
        <div class="plan-price">from £1,300/year</div>
        <div class="plan-note">For labs &amp; individual researchers</div>
        <ul>
          <li>8 CPUs, 64GB memory</li>
          <li>500 GB Team Shared Storage</li>
          <li>1 TB S3 Storage</li>
        </ul>
        <a class="btn secondary" href="{{ '/pricing/research/' | relative_url }}">Research pricing</a>
      </div>
      <div class="plan-card">
        <div class="plan-name">Training</div>
        <div class="plan-price">from £35pp per week</div>
        <div class="plan-note">Sandboxed environments</div>
        <ul>
          <li>Per-cohort setup</li>
          <li>Pre-loaded materials</li>
          <li>No SSH hassle for attendees</li>
        </ul>
        <a class="btn secondary" href="{{ '/pricing/training/' | relative_url }}">Training pricing</a>
      </div>
      <div class="plan-card">
        <div class="plan-name">Surveillance</div>
        <div class="plan-price">Contact us</div>
        <div class="plan-note">For public health &amp; agency programmes</div>
        <ul>
          <li>Dedicated capacity</li>
          <li>Multi-institution access</li>
          <li>Rapid scale-up</li>
        </ul>
        <a class="btn secondary" href="{{ '/pricing/surveillance/' | relative_url }}">Surveillance pricing</a>
      </div>
    </div>
  </div>
</section>

<section class="section" id="about">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="tag teal">About</span>
        <h2>A decade of national microbial bioinformatics.</h2>
      </div>
      <p>CLIMB started as an MRC-funded initiative and grew into the reference infrastructure for microbial genomics in the UK — and the backbone of the country's COVID-19 genomic surveillance.</p>
    </div>
    <div class="grid-3">
      <div class="card">
        <h3>1,000+ researchers</h3>
        <p>Used CLIMB across 300+ research groups and 80+ UK institutions.</p>
      </div>
      <div class="card">
        <h3>80+ publications a year</h3>
        <p>Acknowledging CLIMB infrastructure.</p>
      </div>
      <div class="card">
        <h3>National surveillance backbone</h3>
        <p>Core computing infrastructure for UK COVID-19 genomic surveillance, PATH-SAFE and mSCAPE.</p>
      </div>
    </div>
    <p><a href="{{ '/docs/case-studies/' | relative_url }}">Read the case studies &rarr;</a></p>
    <p><a href="{{ '/about/history/' | relative_url }}">Read the full history &rarr;</a></p>
  </div>
</section>

<section class="section" id="news">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="tag teal">News</span>
        <h2>Latest from CLIMB.</h2>
      </div>
      <p>Announcements, funding updates and stories from the CLIMB community.</p>
    </div>
    <div class="news-grid">
      {% for post in site.posts limit: 3 %}
      <a class="news-card" href="{{ post.url | relative_url }}">
        <div class="news-meta">
          <span>{{ post.category | default: 'News' }}</span>
          <span>{{ post.date | date: "%-d %b %Y" }}</span>
        </div>
        <h3>{{ post.title }}</h3>
        {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>{% endif %}
      </a>
      {% endfor %}
    </div>
    <p><a href="{{ '/blog/' | relative_url }}">All news &rarr;</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="callout">
      <div>
        <span class="tag teal">Navigation</span>
        <h3>Keep the two key destinations close.</h3>
        <p>Documentation and user login live elsewhere — here's where to read more or sign in.</p>
      </div>
      <div class="cta-row" style="margin-bottom:0; justify-content:flex-start; align-items:center;">
        <a class="btn primary" href="{{ site.docs_site }}" target="_blank" rel="noopener noreferrer">Open docs</a>
        <a class="btn secondary" href="{{ site.bryn_url }}" target="_blank" rel="noopener noreferrer">Open Bryn</a>
      </div>
    </div>
  </div>
</section>
