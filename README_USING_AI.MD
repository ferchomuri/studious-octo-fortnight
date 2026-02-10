# AI Tools Usage Log

## Project Setup – Tailwind CSS & shadcn/ui Installation

**Goal:**  
Get Tailwind CSS and shadcn/ui up and running in a Next.js 16 project, making sure styles work smoothly with the App Router and global CSS setup.

**AI Tool Used:**  
Warp (terminal-level AI suggestions)

**Prompt/Approach:**  
I didn’t write a formal prompt for this step. While installing Tailwind CSS and shadcn/ui, I ran into a build error in the terminal related to the global CSS file. Warp automatically suggested a possible fix after analyzing the error output. Instead of applying it immediately, I took some time to read the error carefully, review the current setup, and follow the import chain to understand what was actually going wrong.

**Result:**  
The problem turned out to be a wrong import in the global stylesheet, which caused Tailwind to fail during the build process. Warp’s suggestion helped narrow down where to look, but I only applied the fix after confirming the root cause myself. Once the incorrect import was corrected, the build passed and both Tailwind CSS and shadcn/ui worked as expected across the app.

```text
⨯ ./app/globals.css
Error evaluating Node.js code
CssSyntaxError: tailwindcss: C:\even-app\app\globals.css:1:1: Can't resolve 'tw-animate-css' in 'C:\even-app\app'
    [at Input.error (turbopack:///[project]/node_modules/postcss/lib/input.js:135:16)]
    [at Root.error (turbopack:///[project]/node_modules/postcss/lib/node.js:146:32)]
    [at Object.Once (C:\even-app\node_modules\@tailwindcss\postcss\dist\index.js:10:6911)]
    [at process.processTicksAndRejections (node:internal/process/task_queues:95:5)]
    [at async LazyResult.runAsync (turbopack:///[project]/node_modules/postcss/lib/lazy-result.js:293:11)]
    [at async transform (turbopack:///[turbopack-node]/transforms/postcss.ts:70:34)]
    [at async run (turbopack:///[turbopack-node]/ipc/evaluate.ts:92:23)]

Import trace:
  Client Component Browser:
    ./app/globals.css [Client Component Browser]
    ./app/layout.tsx [Server Component]
```

**Learning:**  
This step reminded me how easy it is for small CSS details to break the whole build, especially when working with the App Router. It also showed that terminal-based AI hints are great for speeding up debugging, but they shouldn’t replace understanding what’s actually happening. I’d approach this the same way again: use AI as a guide, but always double-check before making changes.

---

## Domain Types and Mock Data Definition

**Goal:**  
Create simple and clear TypeScript domain models with realistic mock data for the main dashboard sections, so UI work could move forward without worrying about APIs or backend details.

**AI Tool Used:**  
Antigravity – Gemini 3 Pro

**Prompt/Approach:**  
I asked the AI to focus only on defining domain types and mock data for the dashboard, keeping the scope very tight. I clearly stated that I didn’t want any React, UI code, comments, or backend concepts—just clean TypeScript. I also described exactly which fields each domain needed and stressed that the data should feel believable for an independent music artist, not like random placeholder values.

**Result:**  
The AI generated interfaces and mock data for releases, sales analytics, and fan engagement. I treated this as a starting point and made small tweaks to names, structure, and values so everything fit naturally with the rest of the project. This gave me a solid and realistic data foundation without overthinking the domain layer or slowing down UI development.

**Learning:**  
This showed me how helpful AI can be early on to quickly shape a project’s data model. Being very explicit about what _not_ to include turned out to be just as important as defining what I wanted. Next time, I’d probably share a bit more about my folder structure or naming style upfront to reduce small follow-up edits.

---

## Home Dashboard Charts Layout and Visualization

**Goal:**  
Improve the home dashboard by adding multiple charts that clearly show performance, trends, and top releases, while keeping the layout clean and easy to scan.

**AI Tool Used:**  
Antigravity – Gemini 3 Pro

**Prompt/Approach:**  
I asked the AI to help expand the existing dashboard by adding more Recharts-based visualizations using shadcn/ui. I pointed to the first chart I had already built as a reference and explained what each new chart should communicate. I also set clear layout rules—one chart taking one-third of the width, another two-thirds, and a full-width chart on the next row—so the focus stayed on structure and clarity instead of experimenting with random designs.

**Result:**  
The AI suggested a chart layout that respected those proportions and made each metric easy to understand at a glance. I used its output mainly as a layout and composition reference, then fine-tuned things like spacing, data wiring, and small visual details to better match my existing components. The end result felt cohesive and fit naturally into the home page.

**Learning:**  
This step made it clear that AI works best for UI work when you clearly explain both the data story and the layout constraints. Treating AI as a partner for structure—not as a final designer—helped me move faster while keeping full control over the final look. If I did this again, I’d probably include a quick sketch or layout description to reduce back-and-forth even more.

---

## Unit Testing Setup for shadcn/ui Components

**Goal:**  
Set up simple and readable unit tests for shadcn/ui components, focusing only on what users can actually see or interact with.

**AI Tool Used:**  
Antigravity – Gemini 3 Pro

**Prompt/Approach:**  
I asked the AI to generate unit tests for shadcn/ui components following the project’s existing structure and placing them in a `__tests__` folder. I explicitly referenced a custom `skills.md` file that defines how tests should be written—keeping them small, readable, and focused on observable behavior, with everything external properly mocked.

**Result:**  
The AI generated Jest-based test examples that checked basic rendering and visible states without digging into implementation details or third-party internals. I reviewed the tests and made small adjustments to match real file paths and component names in the project. The final tests were easy to read, easy to maintain, and gave confidence without adding unnecessary complexity.

**Learning:**  
This confirmed that AI is very effective for generating test boilerplate when clear rules are provided. Sharing the testing philosophy upfront prevented overly complex or fragile tests. If I were to repeat this, I’d include a real component example in the prompt to reduce even the small amount of manual adjustment needed afterward.

# Reflection Questions

## a) AI Strategy

- I used AI mainly when I wanted to accelerate **setup, structure, or exploration**, such as defining domain types, generating mock data, scaffolding tests, or thinking through dashboard layouts. These are areas where speed and iteration matter more than originality.
- I chose to code from scratch when the task required **project-specific decisions**, fine-grained control, or when I already had a clear mental model of the solution (for example, wiring components together or adjusting layout behavior).
- There were moments where AI was not very helpful, especially for **highly contextual UI tweaks** or small layout fixes. In those cases, explaining the context to the AI would take more time than just solving the problem directly in code.

---

## b) Code Ownership

- I made sure I understood all AI-generated code by reviewing it line by line and asking myself whether I could explain each part without looking back at the prompt. If something felt unclear or unnecessary, I rewrote it.
- A concrete example was the initial set of AI-generated domain types and mock data. While the structure was correct, I modified naming, adjusted value ranges, and simplified some shapes to better match how the data would actually be consumed by the dashboard components. This ensured consistency and avoided carrying over assumptions that didn’t belong to my project.

---

## c) Productivity Impact

- Overall, AI saved me roughly **2–3 hours** across the project, mainly by reducing time spent on boilerplate and first-pass implementations.
- Without AI tools, I would have still reached the same result, but I would have spent more time setting up repetitive structures, writing initial test files, create the custom css from scratch, and iterating on data shapes before getting to the UI. AI helped me move faster to the parts where human judgment mattered more.

---

## d) Quality Assurance

- I validated AI-generated code by running the application, executing tests, and checking behavior directly in the browser. I also reviewed the code for readability, alignment with project conventions, and unnecessary complexity.
- Yes, I did catch issues from AI suggestions. For example, some generated snippets included assumptions about imports or data shape that didn’t match my actual setup. Catching and fixing these reinforced the idea that AI output should be treated as a draft, not a final answer.
- In general, I treated AI as a helpful collaborator, but not as an authority. AI was my co-programer. Final responsibility for correctness and quality always stayed with me.

# One Detailed Example

## Creating Fans, Analytics, and Releases Pages (App Router)

### Why I picked this example

I chose this because it’s a real, visible feature in Next.js that touches routing, page composition, and layout consistency. It clearly shows how I used AI to speed up repetitive work while still keeping full ownership of the structure, style, and final decisions.

---

### Initial Prompt (v1)

Create Fans, Analytics, and Releases pages using the Next.js App Router.  
Use the existing Home page as a reference to maintain consistent layout, spacing, and CSS styling.  
All pages should follow the same structural pattern and visual hierarchy.

---

### Iterations

**v2 (more specific about structure and constraints)**  
Create `app/fans/page.tsx`, `app/analytics/page.tsx`, and `app/releases/page.tsx`.

- Use the Home page as the style reference (same container spacing, headings, section wrappers).
- Keep layout consistent across pages (same header/title pattern and grid spacing).
- Only scaffold the page structure and placeholders (no complex new components yet).
- Use Tailwind + shadcn/ui primitives that are already in the project.
- Keep the code minimal and readable.

**v3 (add guardrails to avoid overbuilding)**  
Do not introduce new abstractions or helper utilities.  
Do not refactor the Home page.  
Just replicate the pattern cleanly and keep each page focused on its own content.

---

### My thought process

- I already had a Home page that defined the visual language of the dashboard (spacing, typography, grid rules).
- The goal was consistency, not inventing new UI patterns.
- I used AI to quickly scaffold similar pages, but kept control over structure, naming, and layout rules.
- Every generated file was reviewed and adjusted to match the existing codebase.

---

### Before / After (what I changed)

#### Before (AI output – simplified example)

```tsx
// app/fans/page.tsx (AI draft)
export default function FansPage() {
  return (
    <div className="p-6">
      <h1>Fans</h1>
      <div className="grid grid-cols-3 gap-4">{/* content */}</div>
    </div>
  );
}
```

#### After (my version – aligned with Home’s layout pattern)

```tsx
// app/fans/page.tsx (final)
export default function FansPage() {
  return (
    <div className="container mx-auto space-y-6 py-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Fans</h1>
        <p className="text-sm text-muted-foreground">
          Engagement overview and recent activity.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* placeholder cards/sections matching Home’s spacing */}
      </section>
    </div>
  );
}
```

**What changed and why**

- I aligned the page wrapper (container, spacing, vertical rhythm) with the Home page so all pages feel part of the same product.
- I standardized the structure and typography for consistency.
- I adjusted grid rules to match the responsive behavior already used on Home.
- I avoided introducing new abstractions to keep the change easy to reason about.

---

### Reflection on AI help quality

- AI was very effective for generating the initial scaffolding of repetitive pages.
- The first drafts didn’t fully match my existing layout conventions, so manual refinement was necessary.
- Treating the AI output as a draft rather than final code ensured consistency and maintainability.
- Overall, AI significantly reduced setup time while final quality still depended on careful human review.

---

### What I’d do differently next time

- I would include a small excerpt of the Home page layout directly in the prompt.
- I would list the exact Tailwind classes used for containers and headers to reduce manual adjustments.
- This would help the first AI-generated version align even closer with the final desired structure.

## Mini Technical Before / After – Domain Types and Mock Data

As part of this feature, I also used AI to generate an initial version of my domain types and mock data. The goal was to get a quick starting point, not a final dataset.

### Before (AI-generated baseline)

```ts
export interface MusicRelease {
  id: string;
  title: string;
  coverImageUrl: string;
  releaseDate: string;
  type: "single" | "ep" | "album";
}

export interface SalesAnalytics {
  period: string;
  value: number;
}

export interface FanEngagement {
  label: string;
  value: number;
}

export const recentReleases = [
  {
    id: "1",
    title: "Neon Horizon",
    coverImageUrl:
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    releaseDate: "2024-03-15T00:00:00.000Z",
    type: "single",
  },
  // repeated entries with the same title and date
];

export const salesAnalytics = [
  { period: "Jan", value: 45 },
  { period: "Feb", value: 52 },
  { period: "Mar", value: 48 },
  { period: "Oct", value: 79000 },
];

export const fanEngagement = [
  { label: "Total Followers", value: 12500 },
  { label: "Engagement Rate", value: 5.8 },
];
```

At this stage, the AI output was useful for shape and structure, but the data itself was clearly placeholder-like: repeated values, unrealistic spikes, and IDs that wouldn’t scale well.

---

### After (refined and used in the project)

```ts
export const recentReleases: MusicRelease[] = [
  {
    id: "rel_001",
    title: "Neon Horizon",
    coverImageUrl:
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    releaseDate: "2024-03-15T00:00:00.000Z",
    type: "single",
  },
  {
    id: "rel_002",
    title: "Midnight Echoes",
    coverImageUrl:
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&q=80",
    releaseDate: "2024-02-01T00:00:00.000Z",
    type: "ep",
  },
  {
    id: "rel_003",
    title: "Urban Dreams",
    coverImageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    releaseDate: "2023-11-20T00:00:00.000Z",
    type: "album",
  },
];

export const salesAnalytics: SalesAnalytics[] = [
  { period: "Jan", value: 4500 },
  { period: "Feb", value: 5200 },
  { period: "Mar", value: 4800 },
  { period: "Apr", value: 6100 },
];

export const fanEngagement: FanEngagement[] = [
  { label: "Total Followers", value: 12500 },
  { label: "Monthly Listeners", value: 45000 },
  { label: "Engagement Rate", value: 5.8 },
  { label: "New Subscribers", value: 320 },
];
```

---

### Why I changed it

- I kept the **interfaces exactly the same**, since they already matched the domain needs well.
- I refined the mock data to feel more realistic and internally consistent.
- I replaced numeric IDs with prefixed IDs to better reflect how real data usually looks.
- I removed unrealistic spikes in analytics values so charts would tell a believable story.
- I diversified release titles, dates, and types to better support UI scenarios like lists and comparisons.

This approach allowed me to keep the speed benefits of AI while ensuring the data actually supported meaningful UI development and realistic visualizations.
