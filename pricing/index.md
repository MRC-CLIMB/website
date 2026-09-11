---
title: Pricing
eyebrow: Pricing
lede: >-
  Every plan runs on the same infrastructure. Start free, then pick the
  package that matches what you're doing.
permalink: /pricing/
---

<div class="callout">
  <p>Public list pricing for paid packages is available and usually updated yearly. The figures are usually published in December each year with new prices being applied from April the next year.
  The figues below are what's confirmed today (prices from 1st April 2026) — everything else routes to
  <a href="{{ '/contact/' | relative_url }}">a quote</a>, and we reply with
  a quote wherever we can, or with a request for some additional details where we feel we need some extra information.</p>
</div>

<div class="plan-grid">
  <div class="plan-card trial">
    <span class="tag teal">Start here</span>
    <div class="plan-name">Trial</div>
    <div class="plan-price">Free</div>
    <div class="plan-note">4 months</div>
    <ul>
      <li>8 vCPUs (1:8 CPU:GB memory ratio)</li>
      <li>Flexible allocation between JuputerLab and Nextflow</li>
      <li>500GB team + 1TB S3</li>
    </ul>
    <a class="btn secondary" href="{{ '/pricing/trial/' | relative_url }}">Details</a>
  </div>
  <div class="plan-card">
    <div class="plan-name">Research</div>
    <div class="plan-price">from £1,300/year</div>
    <div class="plan-note">Individual researchers &amp; small labs</div>
    <ul>
      <li>8 vCPUs, 64GB memory</li>
      <li>500 GB Team Shared + 1TB S3</li>
      <li>Multi-year options</li>
    </ul>
    <a class="btn secondary" href="{{ '/pricing/research/' | relative_url }}">Details</a>
  </div>
  <div class="plan-card">
    <div class="plan-name">Training</div>
    <div class="plan-price">from £35/week per participant</div>
    <div class="plan-note">Courses &amp; workshops</div>
    <ul>
      <li>Per-cohort sandboxes</li>
      <li>Short-term, fixed dates</li>
      <li>Pre-loaded materials</li>
    </ul>
    <a class="btn secondary" href="{{ '/pricing/training/' | relative_url }}">Details</a>
  </div>
  <div class="plan-card">
    <div class="plan-name">Surveillance</div>
    <div class="plan-price">Contact us</div>
    <div class="plan-note">Public health &amp; agency programmes</div>
    <ul>
      <li>Dedicated capacity</li>
      <li>Multi-institution access</li>
      <li>Rapid scale-up</li>
    </ul>
    <a class="btn secondary" href="{{ '/pricing/surveillance/' | relative_url }}">Details</a>
  </div>
</div>

## How quotas work

<table>
  <thead>
    <tr><th>Resource</th><th>What it's for</th><th class="num">Included in free trial</th></tr>
  </thead>
  <tbody>
    <tr><td>CPU</td><td>Interactive JupyterLab / RStudio sessions / Nextflow / Pipeline execution on Kubernetes </td><td class="num">8 vCPU</td></tr>
    <tr><td>Memory</td><td>Paired with CPU allocation; fixed 1:8 CPU:GB memory ratio</td><td class="num">64 GB</td></tr>
    <tr><td>Team storage (SSD)</td><td>Fast shared storage, mounted at <code>/shared/team/</code></td><td class="num">500 GB</td></tr>
    <tr><td>S3 object storage</td><td>Long-term data archiving, bucket sharing</td><td class="num">1TB</td></tr>
    <tr><td>Home directory</td><td>Personal workspace — kept small; use team/S3 storage for data</td><td class="num">20 GB</td></tr>
  </tbody>
</table>

<p>Need more than the free trial provides? Additional CPU/GPU, expanded
storage, priority support and custom training are all available — please look at the Research Package for more details, or
<a href="{{ '/contact/' | relative_url }}">get in touch</a> and we'll come
back to you.</p>

<h2>Industrial &amp; commercial use</h2>
<p>We are working to extend access to CLIMB to commercial researchers under separate terms and pricing. <a href="{{ '/contact/' | relative_url }}">Contact us</a> to
discuss your requirements.</p>
