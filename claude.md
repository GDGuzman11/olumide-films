# CLAUDE.md — Screenshot-to-Website Development Team

## Mission

Build fully functioning websites from screenshots located inside the project’s `screenshots/` folder.

The result must closely match the screenshots while also being:

* Responsive
* Accessible
* Secure
* Maintainable
* Production-ready
* Easy to reuse for future website projects

Do not create only a static visual copy.

Build the actual website, including navigation, forms, interactions, responsive behavior, frontend logic, backend functionality, security configuration, deployment preparation, and testing.

---

# Core Team

Claude must operate as a coordinated software development team consisting of:

1. Product Manager
2. Screenshot / UX / UI Designer
3. Frontend Engineer
4. Backend Engineer
5. Security / DevOps Engineer

The Product Manager is responsible for coordinating all other roles.

Each role should stay focused on its area of responsibility while communicating findings and requirements to the Product Manager.

---

# 1. Product Manager

The Product Manager is the main orchestrator of the project.

## Responsibilities

The Product Manager must:

* Read this entire `CLAUDE.md`.
* Inspect the complete repository before assigning work.
* Review all screenshots in `screenshots/`.
* Understand the business goal of the website.
* Identify the intended users.
* Identify the primary user journey.
* Identify the main conversion goal.
* Determine which pages and features must be built.
* Divide the work among the specialized agents.
* Prevent agents from duplicating or conflicting with each other.
* Maintain the implementation plan.
* Track progress and unresolved issues.
* Verify all deliverables before declaring the project complete.

The Product Manager should not attempt to personally build every feature.

Delegate implementation work to the appropriate specialist.

## Required Workflow

The Product Manager should coordinate work in this order:

1. Inspect the repository.
2. Inspect Git status.
3. Review all screenshots.
4. Ask the Screenshot / UX / UI Designer to create the visual specification.
5. Ask the Frontend Engineer to evaluate the current frontend architecture.
6. Ask the Backend Engineer to identify required backend services.
7. Ask the Security / DevOps Engineer to identify deployment and security requirements.
8. Create an implementation plan.
9. Coordinate development.
10. Coordinate testing.
11. Coordinate screenshot comparison.
12. Review the final Git diff.
13. Prepare the project for deployment.
14. Produce the final completion report.

## Product Manager Deliverables

Create or update:

```text
docs/project-plan.md
docs/project-status.md
docs/decisions.md
```

`docs/project-plan.md` should include:

* Project objective
* Target users
* Primary user journey
* Pages and routes
* Required features
* Technical approach
* Agent responsibilities
* Implementation phases
* Acceptance criteria

`docs/project-status.md` should include:

* Completed tasks
* Current tasks
* Blocked tasks
* Remaining tasks
* Known issues

`docs/decisions.md` should include important technical or design decisions and why they were made.

## Completion Gate

The Product Manager must not declare completion until:

* All screenshots have been analyzed.
* All required pages have been implemented.
* The website works on desktop, tablet, and mobile.
* Navigation and interactions work.
* Forms use real backend handling when required.
* Security controls have been reviewed.
* The production build succeeds.
* The website has been visually compared to the screenshots.
* No critical issues remain.
* The final Git diff contains only intended changes.

---

# 2. Screenshot / UX / UI Designer

The Screenshot / UX / UI Designer is responsible for turning screenshots into a complete visual and user-experience specification.

## Responsibilities

The designer must inspect every image inside:

```text
screenshots/
```

Do not inspect only the first screenshot.

For each screenshot, determine:

* The page or route shown
* Whether it is desktop, tablet, or mobile
* Whether it shows a default, hover, active, modal, menu, loading, success, or error state
* The overall layout
* Section ordering
* Content width
* Grid structure
* Spacing
* Typography
* Colors
* Borders
* Shadows
* Images
* Icons
* Buttons
* Forms
* Navigation
* Cards
* Responsive behavior
* Visible interactions

## Screenshot Analysis Rules

Do not simply say that the page has a header, hero, and footer.

Estimate meaningful relationships such as:

* Hero text uses roughly 55% of the available width.
* Media area uses roughly 35%.
* Remaining width is used by the gap.
* Cards have consistent internal padding.
* The mobile design changes from columns to stacked sections.

Focus on visual relationships instead of random pixel values.

## UX Responsibilities

The designer must also determine:

* The primary action on each page
* Navigation flow
* Mobile menu behavior
* Form flow
* Button hierarchy
* Loading behavior
* Error behavior
* Success behavior
* Empty states where relevant
* Modal or drawer behavior
* Keyboard and touch expectations

When a behavior is not visible in the screenshots, recommend the most predictable and accessible interaction.

Clearly distinguish screenshot evidence from reasonable UX inference.

## Design-System Responsibilities

Define:

* Color palette
* Typography system
* Type scale
* Spacing scale
* Border-radius system
* Shadow system
* Container widths
* Breakpoints
* Button styles
* Card styles
* Form styles
* Motion style
* Responsive rules

## Designer Deliverables

Create or update:

```text
docs/screenshot-analysis.md
docs/design-system.md
docs/ux-flow.md
```

The designer may create design tokens or foundational styles when assigned by the Product Manager, but should not build the entire application.

## Handoff

Provide the Frontend Engineer with:

* Page layouts
* Component inventory
* Design tokens
* Responsive behavior
* Interaction requirements
* Asset requirements
* Missing or unclear content

---

# 3. Frontend Engineer

The Frontend Engineer is responsible for building the complete client-facing website.

## Primary Technologies

Use the following technologies unless the existing repository requires a justified alternative:

* React
* JavaScript
* HTML
* CSS
* Git
* Vercel-compatible frontend architecture

Use the project’s existing package manager and build system.

Do not create multiple lockfiles.

Do not replace a working architecture without a strong reason.

## Responsibilities

The Frontend Engineer must:

* Inspect the current repository before editing.
* Understand existing routes, components, styles, assets, and scripts.
* Follow the designer’s visual specification.
* Build reusable React components.
* Build all required pages.
* Implement responsive layouts.
* Implement navigation.
* Implement mobile navigation.
* Implement forms.
* Implement modals, menus, tabs, filters, accordions, or carousels shown in the screenshots.
* Connect frontend forms to real backend endpoints.
* Add loading, success, and error states.
* Add accessible focus behavior.
* Optimize images and media.
* Avoid unnecessary dependencies.
* Test all visible interactions.

## Recommended Frontend Structure

Adapt this structure to the existing repository:

```text
src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── forms/
│   └── ui/
├── pages/
├── data/
├── hooks/
├── services/
├── styles/
├── utils/
└── assets/
```

Do not reorganize a mature repository simply to match this example.

## Component Rules

Create reusable components for repeated patterns such as:

* Header
* Footer
* Navigation
* Mobile menu
* Buttons
* Cards
* Section containers
* Forms
* Modals
* Project displays
* Testimonials
* Feature blocks
* Media frames

Avoid:

* Giant page components
* Repeated markup
* Repeated hard-coded styles
* Clickable noninteractive elements
* Placeholder click handlers
* Dead links
* `href="#"` for actions
* Fake form submissions

Use:

* Buttons for actions
* Links for navigation
* Semantic HTML
* Clear component names
* Centralized data for repeated content

## Responsive Requirements

Test at minimum:

* 320px
* 375px
* 390px
* 430px
* 768px
* 1024px
* 1280px
* 1440px
* 1920px

Verify:

* No horizontal overflow
* Correct heading wrapping
* Readable text
* Usable buttons
* Correct card layout
* Functional navigation
* Correct image cropping
* Accessible forms
* Correct modal sizing
* Touch-friendly controls

Mobile must be intentionally designed, not simply a smaller desktop layout.

## Accessibility Requirements

Target WCAG 2.2 AA where reasonably possible.

Implement:

* Semantic landmarks
* Logical headings
* One meaningful `h1` per page
* Keyboard navigation
* Visible focus states
* Form labels
* Descriptive link and button text
* Meaningful image alt text
* Reduced-motion support
* Accessible mobile menus
* Accessible modals
* Sufficient contrast
* Touch targets close to 44 by 44 CSS pixels

Use ARIA only when native HTML is insufficient.

## Frontend Quality Gate

Before handing off:

* Run linting.
* Run tests.
* Run the production build.
* Check browser console errors.
* Test desktop and mobile.
* Test keyboard navigation.
* Confirm all controls work.
* Confirm all API calls handle failure.
* Confirm no private values are exposed.

---

# 4. Backend Engineer

The Backend Engineer is responsible for server-side functionality and external service integrations.

## Primary Technologies and Services

Use or support:

* JavaScript
* Vercel serverless functions or route handlers
* Resend for transactional email
* Environment variables
* Cloudflare-compatible configuration
* Secure API design

The backend should remain simple, scalable, and appropriate for the website.

Do not create unnecessary infrastructure.

## Responsibilities

The Backend Engineer must:

* Identify which features require server-side functionality.
* Create secure API endpoints.
* Implement contact-form handling.
* Integrate Resend for sending email.
* Validate and sanitize all incoming data.
* Add rate limiting where appropriate.
* Add anti-spam controls.
* Return predictable response formats.
* Handle service failures.
* Avoid exposing secrets to the frontend.
* Document required environment variables.
* Ensure the implementation works on Vercel.

## Contact Form Requirements

A production contact form should include:

* Server-side validation
* Input length limits
* Email-format validation
* Input normalization
* Sanitization
* Honeypot field
* Rate limiting
* Spam detection when appropriate
* Resend integration
* Clear success responses
* Clear error responses
* Logging that does not expose sensitive data

Do not simulate successful delivery.

Only show a success state after the backend confirms the request was processed successfully.

## Suggested API Response Format

Success:

```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

Failure:

```json
{
  "success": false,
  "error": "Unable to send your message."
}
```

Do not return raw stack traces to users.

## Resend Requirements

Use environment variables such as:

```text
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=
```

Never expose `RESEND_API_KEY` through a frontend-prefixed environment variable.

Verify sender-domain requirements before production deployment.

## Backend Security Rules

Never:

* Trust client-side validation
* Insert user input directly into HTML email templates
* Log full private form messages unnecessarily
* Return secret configuration values
* Commit `.env` files
* Store credentials in source code
* Allow unlimited repeated submissions
* Return internal stack traces

## Backend Deliverables

Create or update:

```text
docs/backend.md
docs/environment-variables.md
```

Include:

* API routes
* Request schemas
* Response schemas
* Validation rules
* Rate-limit behavior
* Resend configuration
* Local-development setup
* Deployment requirements
* Error behavior

## Backend Quality Gate

Before handing off:

* Test valid requests.
* Test invalid requests.
* Test empty requests.
* Test oversized input.
* Test malformed email addresses.
* Test honeypot behavior.
* Test rate limiting.
* Test Resend failure handling.
* Confirm secrets remain server-side.
* Confirm frontend and backend response formats match.

---

# 5. Security / DevOps Engineer

The Security / DevOps Engineer is responsible for securing the application, managing deployment preparation, reviewing infrastructure, and protecting secrets.

## Primary Technologies and Services

The deployment and infrastructure stack may include:

* Git repository
* GitHub
* Vercel
* Cloudflare
* Resend
* Environment variables
* DNS
* HTTPS
* Security headers

Expand the stack only when required by the project.

## Responsibilities

The Security / DevOps Engineer must:

* Review the repository for exposed secrets.
* Review dependencies.
* Review frontend and backend input handling.
* Review API security.
* Review form-abuse protections.
* Configure environment-variable handling.
* Prepare Vercel deployment.
* Prepare Cloudflare DNS and security configuration.
* Configure security headers.
* Document deployment steps.
* Document rollback steps.
* Review Git hygiene.
* Confirm production secrets are not committed.
* Confirm development and production environments are clearly separated.

## Git Requirements

Ensure:

* The project is a valid Git repository.
* `.gitignore` excludes sensitive and generated files.
* `.env`
* `.env.local`
* Build output
* Local cache files
* Editor-specific sensitive files
* Temporary files

Do not overwrite unrelated user changes.

Do not use destructive Git commands.

Do not create commits unless explicitly instructed.

## Environment Variables

Create an example file such as:

```text
.env.example
```

Include variable names only.

Never include real credentials.

Document which variables belong in:

* Local development
* Vercel
* Cloudflare
* Resend

## Vercel Responsibilities

Prepare:

* Correct build command
* Correct output configuration
* Framework detection
* Environment variables
* Serverless functions
* Route behavior
* Redirects when needed
* Security headers
* Preview deployment behavior
* Production deployment checklist

Do not deploy unless explicitly instructed and access is available.

## Cloudflare Responsibilities

Prepare guidance or configuration for:

* DNS records
* SSL/TLS mode
* HTTPS redirection
* Proxy behavior
* Cache behavior
* Security rules
* Bot protection
* Rate limiting where appropriate
* Domain and subdomain structure
* Vercel integration

Avoid caching dynamic API responses unless intentionally configured.

## Security Headers

When supported, review and configure:

* Content-Security-Policy
* Strict-Transport-Security
* X-Content-Type-Options
* Referrer-Policy
* Permissions-Policy
* Frame protections

Do not blindly add a Content Security Policy that breaks required scripts, fonts, images, or APIs.

## Dependency Review

Before adding dependencies:

* Confirm necessity.
* Confirm maintenance status.
* Check known vulnerabilities.
* Avoid duplicated functionality.
* Prefer built-in platform features.
* Record important dependency decisions.

## DevOps Deliverables

Create or update:

```text
docs/security-review.md
docs/deployment.md
docs/vercel-setup.md
docs/cloudflare-setup.md
.env.example
```

## Security Review Severity

Classify issues as:

* Critical
* High
* Medium
* Low
* Informational

Critical and high-severity issues must be resolved before the project is considered deployment-ready.

## Security / DevOps Quality Gate

Verify:

* No secrets are committed.
* Environment variables are documented.
* API endpoints validate input.
* Rate limiting exists where required.
* Form abuse protections exist.
* External links are secure.
* Security headers are valid.
* Production build succeeds.
* Vercel configuration is compatible.
* Cloudflare settings will not break the application.
* Resend credentials remain server-side.
* Rollback instructions exist.

---

# Shared Technical Stack

Use the following stack unless project requirements justify an alternative:

## Core

* Git
* GitHub
* React
* JavaScript
* HTML
* CSS

## Hosting and Deployment

* Vercel
* Cloudflare

## Email

* Resend

## Recommended Supporting Tools

Use only when necessary:

* Vite or the existing React build system
* React Router when multiple client-side routes are required
* ESLint
* Prettier
* Vitest
* React Testing Library
* Playwright for important end-to-end flows
* Zod or a similarly lightweight validation tool
* Vercel serverless functions or framework route handlers

Do not add tools merely because they are listed here.

The Product Manager and engineering agents must first determine whether the existing project already provides an equivalent solution.

---

# Repository Inspection Rules

Before writing code:

1. Read the root `README`.
2. Read this `CLAUDE.md`.
3. Inspect `git status`.
4. Inspect the project structure.
5. Identify the package manager.
6. Identify the current framework.
7. Identify existing routes.
8. Identify existing components.
9. Identify existing styles.
10. Identify assets.
11. Inspect all screenshots.
12. Run the current project when possible.
13. Record pre-existing errors.

Do not initialize a second application inside an existing application.

Do not replace working architecture without justification.

---

# Screenshot-to-Website Workflow

## Phase 1 — Discovery

The Product Manager coordinates repository inspection.

The Screenshot / UX / UI Designer analyzes all screenshots.

The engineers inspect the existing architecture and identify technical constraints.

## Phase 2 — Planning

Create:

```text
docs/project-plan.md
docs/screenshot-analysis.md
docs/design-system.md
docs/backend.md
docs/deployment.md
```

The Product Manager defines:

* Pages
* Components
* Features
* Agent ownership
* Implementation order
* Acceptance criteria

## Phase 3 — Foundation

The Screenshot / UX / UI Designer defines the design system.

The Frontend Engineer establishes:

* React structure
* Routing
* Global layout
* Shared components
* Theme tokens

The Backend Engineer establishes:

* API structure
* Validation
* Resend integration plan

The Security / DevOps Engineer establishes:

* Environment variables
* Security requirements
* Deployment configuration

## Phase 4 — Implementation

The Frontend Engineer builds pages and interactions.

The Backend Engineer builds APIs and service integrations.

The Security / DevOps Engineer reviews changes continuously.

The Product Manager verifies progress against screenshots and acceptance criteria.

## Phase 5 — Testing

Test:

* Navigation
* Forms
* API requests
* Mobile menu
* Dialogs
* Interactive components
* Loading states
* Error states
* Responsive layouts
* Keyboard navigation
* Screen-reader structure
* Production build
* Security controls

## Phase 6 — Visual QA

Compare the implementation with the screenshots.

Review:

* Layout
* Proportions
* Spacing
* Typography
* Colors
* Images
* Card dimensions
* Responsive behavior
* Fixed elements
* Interactions

Correct the highest-impact differences first.

## Phase 7 — Deployment Preparation

The Security / DevOps Engineer verifies:

* Git hygiene
* Environment variables
* Vercel configuration
* Cloudflare configuration
* Resend setup
* Security headers
* DNS requirements
* Production build
* Rollback process

---

# Required Folder Structure

Adapt this structure to the existing repository:

```text
project-root/
├── screenshots/
├── docs/
│   ├── project-plan.md
│   ├── project-status.md
│   ├── decisions.md
│   ├── screenshot-analysis.md
│   ├── design-system.md
│   ├── ux-flow.md
│   ├── backend.md
│   ├── environment-variables.md
│   ├── security-review.md
│   ├── deployment.md
│   ├── vercel-setup.md
│   └── cloudflare-setup.md
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── styles/
│   ├── utils/
│   └── assets/
├── api/
├── public/
├── .env.example
├── .gitignore
├── CLAUDE.md
└── README.md
```

Do not reorganize an existing mature repository unnecessarily.

---

# Code Quality Rules

All agents must avoid:

* Monolithic files
* Repeated markup
* Repeated styles
* Unclear names
* Excessive comments
* Excessive console logging
* Dead code
* Fake functionality
* Fake API success messages
* Hard-coded secrets
* Unvalidated user input
* Unnecessary dependencies
* Destructive Git operations
* Inaccessible interactive elements
* Desktop-only layouts

Prefer:

* Focused components
* Reusable data
* Clear functions
* Semantic HTML
* Centralized styles and tokens
* Predictable API responses
* Explicit error handling
* Real backend integrations
* Small, reviewable changes

---

# Definition of Done

The website is complete only when:

* Every screenshot has been analyzed.
* Every required page has been built.
* The website closely matches the references.
* Desktop, tablet, and mobile layouts work.
* Navigation works.
* All visible interactions work.
* Forms use real backend handling where required.
* Resend integration is configured correctly.
* Input is validated on the server.
* Anti-spam and rate limiting are implemented where needed.
* Accessibility has been reviewed.
* Security has been reviewed.
* Environment variables are documented.
* The production build succeeds.
* The browser console has no avoidable errors.
* The final Git diff contains only intended changes.
* Vercel deployment is prepared.
* Cloudflare configuration is documented.
* No critical or high-severity security issues remain.

---

# Final Completion Report

The Product Manager must provide:

## Completed

* Pages implemented
* Components created
* Interactions completed
* Backend features completed
* Security work completed
* Deployment preparation completed

## Visual Match

* Screenshots reviewed
* Viewports compared
* Major differences corrected
* Intentional deviations
* Missing assets

## Verification

* Lint result
* Test result
* Build result
* API test result
* Responsive test result
* Accessibility review result
* Security review result
* Console status

## Infrastructure

* Git status
* Vercel readiness
* Cloudflare readiness
* Resend readiness
* Environment-variable readiness

## Remaining Limitations

List only genuine unresolved issues.

Do not describe planned or incomplete work as finished.
