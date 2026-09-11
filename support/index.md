---
title: Support
eyebrow: Support
lede: We're here to help you make the most of CLIMB.
permalink: /support/
---

<div class="grid-3">
  <div class="card">
    <h3>Email</h3>
    <p><a href="mailto:{{ site.support_email }}">{{ site.support_email }}</a> — for anything not covered below.</p>
  </div>
  <div class="card">
    <h3>Ticketing system</h3>
    <p>To track and follow up on support requests.</p>
  </div>
  <div class="card">
    <h3>Office hours</h3>
    <p>Virtual meetings for direct, real-time help.</p>
  </div>
</div>

<!-- MAINTAINER NOTE: Slack community link and ticketing system URL to be
     added once confirmed (flagged as open in source doc). -->

## Frequently asked questions

**How do I access my JupyterLab environment?**
Log in to Bryn, go to **Compute &rarr; JupyterLab**, launch a JupyterLab environment, and click the URL provided. See the [quick start guide]({{ site.docs_site }}4.Documentation/) on docs.climb.ac.uk.

**What if I forget my two-factor authentication device?**
Use your backup codes if you set them up. If not, contact <a href="mailto:{{ site.support_email }}">{{ site.org_email }}</a>.

**Can I install custom software?**
Yes — install software within your environment using package managers like Conda. See [Installing software with Conda]({{ site.docs_site }}/4.Documentation/4.1.JupyterLab/4.1.7.conda/) on docs.climb.ac.uk.

**How do I share data with my team members?**
Use the shared team storage mounted at `~/shared-team/`, accessible to all team members — or use S3 buckets and share the link.

**What happens if I exceed my storage quota?**
You'll see restricted write access. Contact us to discuss increasing your quota.

<div class="callout">
  <p>Didn't find your answer? See the <a href="{{ site.docs_site }}">documentation</a> on docs.climb.ac.uk. or <a href="{{ '/contact/' | relative_url }}">contact us</a> directly.</p>
</div>
