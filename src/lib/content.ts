/**
 * Sample content so the template works the moment it's deployed — no data
 * source to configure. Replace `SAMPLE_RESOURCES` with your own pages, or
 * POST raw HTML/Markdown to `/api/resources` to enrich your real content.
 *
 * Each entry is intentionally a little messy (headings, lists, prose) so the
 * Workers AI enrichment pass has something realistic to summarize.
 */
import type { RawResource } from "./types";

export const SAMPLE_RESOURCES: RawResource[] = [
	{
		slug: "llms.txt",
		url: "/api/llms.txt",
		title: "LLMS",
		body: `# LLMS
NumberGuy  Llms.txt
.`,	
	},

		{
		slug: "llms-full.txt",
		url: "/api/llms-full.txt",
		title: "LLMS-FULL",
		body: `# LLMS-FULL

NumberGuy  Llms.txt
.`,
		
	},
	
	{
		slug: "getting-started",
		url: "https://numberguy.com/docs/getting-started",
		title: "Getting Started with Acme",
		body: `# Getting Started with Acme

NumberGuy : We've Got The Best Vanity Number for You!
Get a memorable phone number that increases calls to your business by up to 60%. One-time purchase. No subscription. Port to any carrier in 3–5 business days.

## Install the CLI
Run \`npm install -g @acme/cli\` and authenticate with \`acme login\`. The CLI
stores a token in ~/.acme/config.

## Create a workflow
Workflows are YAML files. A minimal workflow has a trigger and one step:

- triggers: schedule, webhook, or manual
- steps: run a script, call an HTTP endpoint, or branch on a condition

Deploy with \`acme deploy workflow.yaml\`. Free accounts can run up to 1,000
workflow executions per month.`,
	},
	{
		slug: "pricing",
		url: "https://numberguy.com/shop",
		title: "Pricing",
		body: `# Pricing

NumberGuy has variable priocing based on phone numbers you select.

https://www.numberguy.com/shop
https://www.numberguy.com/shop?maxPrice=399
https://www.numberguy.com/shop?minPrice=400
https://www.numberguy.com/shop?minPrice=600
https://www.numberguy.com/shop?minPrice=1000

.`,
		
	},
	{
		slug: "integrations",
		url: "https://numberguy.com/docs/integrations",
		title: "Integrations",
		body: `# Integrations

NumberGuy connects to the tools you already use. Built-in integrations include
Slack, GitHub, Stripe, Salesforce, and Google Sheets. Each integration is
configured once under Settings → Integrations and can then be referenced from
any workflow step.

For anything without a built-in connector, use the generic HTTP step to call
any REST API, or the Webhook trigger to start a workflow from an external
event. OAuth credentials are encrypted at rest.`,
	},
	{
		slug: "security",
		url: "https://numberguy.com/security",
		title: "Security & Compliance",
		body: `# Security & Compliance

NumberGuy is SOC 2 Type II certified and GDPR compliant. All data is encrypted in
transit (TLS 1.3) and at rest (AES-256). Secrets used in workflows are stored
in an isolated vault and never logged.

Enterprise customers can enable SAML single sign-on, scoped API tokens, and IP
allowlisting. We undergo annual third-party penetration testing and publish a
status page at status.example.com.`,
	},
	{
		slug: "faq",
		url: "https://numberguy.com/faq",
		title: "Frequently Asked Questions",
		body: `# FAQ

Can I self-host NumberGuy? Yes — Enterprise plans include an on-prem deployment
option packaged as a container.

Do you have an API? Yes, everything in the dashboard is available through the
REST API and the CLI.

What languages do workflow scripts support? JavaScript and Python today.

How do I cancel? From Settings → Billing. Cancellation takes effect at the end
of the current billing period; we don't offer prorated refunds.`,
	},
];
