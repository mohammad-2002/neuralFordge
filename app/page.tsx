"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  Layers3,
  Menu,
  MessageCircle,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  [
    "Strategy",
    "Clarify the story, audience, and action your site needs to drive.",
    Layers3,
  ],
  [
    "Design",
    "A considered visual system that makes your offer feel as good as it is.",
    Sparkles,
  ],
  [
    "Build",
    "Fast, accessible, conversion-ready development without the template feel.",
    ArrowRight,
  ],
];

const deliverables = [
  "Positioning and page strategy",
  "Responsive visual design",
  "Conversion-focused copy direction",
  "Custom web development",
  "SEO and performance foundations",
  "Launch support and handoff",
];
const process = [
  [
    "01",
    "Discover",
    "We unpack the offer, audience, and opportunity so every decision has a job.",
  ],
  [
    "02",
    "Shape",
    "You get a clear page direction, visual language, and content structure to react to.",
  ],
  [
    "03",
    "Build",
    "I turn the approved direction into a polished, responsive site that feels effortless to use.",
  ],
  [
    "04",
    "Launch",
    "We refine the details, connect the essentials, and get your new front door ready for traffic.",
  ],
];
const faqs = [
  [
    "Do you work with early-stage businesses?",
    "Yes. The best time to invest in a clear digital presence is before you are losing good opportunities to a confusing one.",
  ],
  [
    "Can you work with my existing brand?",
    "Absolutely. I can extend a visual identity you already trust or create the missing pieces needed for the web.",
  ],
  [
    "What happens after I enquire?",
    "I will review your brief and get back to you with a few focused questions and a recommendation for the right next step.",
  ],
  [
    "Do you offer ongoing support?",
    "Yes. We can keep the relationship focused on launch, or continue with thoughtful improvements as the business evolves.",
  ],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Please add your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      nextErrors.email = "Please add a valid email.";
    if (!form.message.trim())
      nextErrors.message = "Tell me a little about the project.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.dispatchEvent(
        new CustomEvent("lead_submitted", {
          detail: { ...form, utm: window.location.search },
        }),
      );
    }, 700);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            onClick={() => scrollToId("top")}
            className="font-mono text-sm font-bold tracking-[-0.06em]"
            aria-label="Back to top"
          >
            NeuralFordge
          </button>
          <nav
            className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"
            aria-label="Main navigation"
          >
            <button onClick={() => scrollToId("work")}>Work</button>
            <button onClick={() => scrollToId("process")}>Process</button>
            <button onClick={() => scrollToId("contact")}>Contact</button>
          </nav>
          <button
            onClick={() => scrollToId("contact")}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85 md:block"
          >
            Start a project <ArrowUpRight className="ml-1 inline size-4" />
          </button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-border px-5 py-5 text-sm md:hidden">
            <button
              onClick={() => {
                scrollToId("work");
                setMenuOpen(false);
              }}
            >
              Work
            </button>
            <button
              onClick={() => {
                scrollToId("process");
                setMenuOpen(false);
              }}
            >
              Process
            </button>
            <button
              onClick={() => {
                scrollToId("contact");
                setMenuOpen(false);
              }}
            >
              Contact
            </button>
          </nav>
        )}
      </header>

      <section
        id="top"
        className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-28 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:px-8 lg:pb-32 lg:pt-40"
      >
        <div className="absolute inset-x-0 top-20 -z-0 h-px bg-border/70" />
        <div className="relative z-10">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Independent web design + development
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[.95] tracking-[-0.07em] sm:text-7xl lg:text-[7.6rem]">
            Your website should make the next step{" "}
            <span className="text-accent">obvious.</span>
          </h1>
          <p className="mt-9 max-w-xl text-pretty text-lg leading-7 text-muted-foreground">
            I help ambitious small businesses turn a vague online presence into
            a clear, credible front door for better opportunities.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              Tell me about your project{" "}
              <ArrowRight className="ml-2 inline size-4" />
            </button>
            <button
              onClick={() => scrollToId("work")}
              className="rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition hover:bg-muted"
            >
              See selected work
            </button>
          </div>
        </div>
        <div className="relative z-10 flex min-h-72 items-end justify-between overflow-hidden rounded-[2rem] bg-primary p-7 text-primary-foreground lg:min-h-[31rem] lg:p-10">
          <div className="absolute right-[-12%] top-[-9%] size-72 rounded-full border border-primary-foreground/20" />
          <div className="absolute right-[8%] top-[8%] size-44 rounded-full border border-primary-foreground/20" />
          <div>
            <p className="mb-16 max-w-[13rem] text-2xl font-medium leading-tight tracking-[-0.04em]">
              Less explaining. More getting it.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
              A sharper digital presence
            </p>
          </div>
          <ArrowDownRight className="size-12 stroke-[1]" />
        </div>
      </section>

      <section className="border-y border-border bg-muted/45">
        <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-8">
          {services.map(([title, text, Icon]) => (
            <div
              key={title as string}
              className="flex gap-5 py-8 lg:px-8 lg:first:pl-0"
            >
              <Icon className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <h2 className="font-semibold">{title as string}</h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                  {text as string}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-36">
        <div>
          <p className="eyebrow">The problem</p>
          <h2 className="section-title mt-5">
            Good businesses get overlooked when their website makes people work.
          </h2>
        </div>
        <div className="grid gap-8 text-lg leading-8 text-muted-foreground">
          <p>
            Maybe your site was built in a hurry. Maybe the business has
            outgrown the story it tells. Or maybe it says all the right things,
            but nothing sticks.
          </p>
          <p>
            The result is the same: interested people hesitate, compare you to
            someone clearer, and move on before they ever start a conversation.
          </p>
          <p className="font-medium text-foreground">
            A better website does not need to shout. It needs to make sense
            quickly.
          </p>
        </div>
      </section>

      <section id="work" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow text-primary-foreground/60">The shift</p>
              <h2 className="section-title mt-5">
                From “what do you do?” to “how do we start?”
              </h2>
              <p className="mt-7 max-w-sm leading-7 text-primary-foreground/65">
                Clarity is not a copywriting trick. It is the sum of a strong
                offer, an intentional experience, and enough confidence to let
                the right people move.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="min-h-64 rounded-3xl bg-primary-foreground p-7 text-primary">
                <p className="eyebrow text-primary/50">Before</p>
                <p className="mt-20 text-2xl font-medium tracking-tight">
                  “We do a bit of everything.”
                </p>
                <p className="mt-5 text-sm leading-6 text-primary/60">
                  Too broad to remember. Too unclear to act on.
                </p>
              </div>
              <div className="min-h-64 rounded-3xl bg-accent p-7 text-accent-foreground">
                <p className="eyebrow text-accent-foreground/50">After</p>
                <p className="mt-20 text-2xl font-medium tracking-tight">
                  “This is exactly what I need.”
                </p>
                <p className="mt-5 text-sm leading-6 text-accent-foreground/70">
                  A focused story that makes the right fit feel obvious.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What you get</p>
            <h2 className="section-title mt-5 max-w-2xl">
              A website built to earn trust before the first call.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            No mystery deliverables. No decorative work for its own sake.
            Everything is designed to help your next customer understand,
            believe, and act.
          </p>
        </div>
        <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-border bg-muted/20 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, i) => (
            <div
              key={item}
              className="flex min-h-64 flex-col justify-between border-border bg-background p-8 transition-colors hover:bg-muted/35 sm:min-h-72 lg:min-h-64 lg:p-9 [&:nth-child(n+2)]:border-t sm:[&:nth-child(2n+2)]:border-l sm:[&:nth-child(n+3)]:border-t lg:[&:nth-child(2n+2)]:border-l-0 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+3)]:border-l"
            >
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <h3 className="max-w-xs text-lg font-medium leading-7 tracking-tight">
                {item}
              </h3>
              <Check
                className="size-5 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title mt-5">
                Made to feel like you, only clearer.
              </h2>
            </div>
            <ExternalLink className="hidden size-6 md:block" />
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground lg:col-span-2 lg:min-h-[27rem]">
              <div className="flex justify-between">
                <span className="font-mono text-xs text-primary-foreground/60">
                  01 / Brand studio
                </span>
                <MoveUpRight className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="mt-36">
                <h3 className="text-3xl font-medium tracking-tight">
                  A considered online home for considered work.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/60">
                  Strategy, art direction, and a digital experience built around
                  the quality of the studio.
                </p>
              </div>
            </div>
            <div className="group rounded-3xl border border-border bg-background p-7 lg:min-h-[27rem]">
              <div className="flex justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  02 / Specialist service
                </span>
                <MoveUpRight className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="mt-36">
                <h3 className="text-3xl font-medium tracking-tight">
                  Making expertise easier to buy.
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  A clearer offer, a warmer first impression, and a path to
                  enquire that feels natural.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Selected work shown as representative directions. Case studies
            available on request.
          </p>
        </div>
      </section>

      <section
        id="process"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36"
      >
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="section-title mt-5">
              Thoughtful, direct, and built around momentum.
            </h2>
          </div>
          <div className="divide-y divide-border">
            {process.map(([number, title, text]) => (
              <div
                key={number}
                className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-mono text-sm text-accent">{number}</span>
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-2 max-w-lg leading-7 text-muted-foreground">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-accent-foreground/55">
                A sensible investment
              </p>
              <h2 className="section-title mt-5">
                The right scope is better than a random number.
              </h2>
              <p className="mt-7 max-w-md leading-7 text-accent-foreground/70">
                Every project is shaped around what you need to communicate and
                where you are going next. We will find the version that earns
                its place in the budget.
              </p>
            </div>
            <div className="rounded-3xl bg-accent-foreground p-7 text-accent lg:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
                Custom project scope
              </p>
              <p className="mt-7 text-4xl font-semibold tracking-[-0.07em]">
                Scoped to fit
                <span className="text-xl font-normal opacity-60">
                  {" "}
                  your goals
                </span>
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <p className="flex gap-3">
                  <Check className="size-4 shrink-0" /> Scope agreed around your
                  actual goals
                </p>
                <p className="flex gap-3">
                  <Check className="size-4 shrink-0" /> Clear stages and
                  decisions, no guesswork
                </p>
                <p className="flex gap-3">
                  <Check className="size-4 shrink-0" /> A useful asset, not just
                  a launch moment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-36">
        <div>
          <p className="eyebrow">A few answers</p>
          <h2 className="section-title mt-5">Before you ask.</h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-5 py-6 text-left font-medium"
              >
                <span>{q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 transition ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <p className="max-w-xl pb-6 leading-7 text-muted-foreground">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-36">
          <div>
            <p className="eyebrow text-primary-foreground/60">
              Start a conversation
            </p>
            <h2 className="section-title mt-5">Have a good project in mind?</h2>
            <p className="mt-7 max-w-sm leading-7 text-primary-foreground/65">
              Give me the useful bits. I will come back with a considered
              response, not a sales sequence.
            </p>
            <div className="mt-12 grid gap-4 text-sm text-primary-foreground/65">
              <div className="flex items-center gap-3">
                <Clock3 className="size-4" /> Replies within 2 business days
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <a
                  href="https://wa.me/919537206754"
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:text-primary-foreground hover:underline"
                >
                  WhatsApp: +91 95372 06754
                </a>
                <a
                  href="https://www.instagram.com/its.mk____/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:text-primary-foreground hover:underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-primary-foreground p-6 text-primary sm:p-10">
            {submitted ? (
              <div className="flex min-h-96 flex-col justify-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-accent">
                  <Check className="size-5" />
                </div>
                <h3 className="mt-7 text-3xl font-semibold tracking-tight">
                  Thanks, I have the brief.
                </h3>
                <p className="mt-4 max-w-md leading-7 text-primary/60">
                  I will be in touch soon. In the meantime, you can explore the
                  work or book a short discovery call.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    View work
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className="rounded-full border border-primary/20 px-5 py-3 text-sm font-semibold"
                  >
                    Book a call
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={submitForm} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    Name *
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="field"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <span className="text-xs text-destructive">
                        {errors.name}
                      </span>
                    )}
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Email *
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="field"
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <span className="text-xs text-destructive">
                        {errors.email}
                      </span>
                    )}
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Company
                    <input
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="field"
                      placeholder="Company name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Budget range
                    <select
                      value={form.budget}
                      onChange={(e) =>
                        setForm({ ...form, budget: e.target.value })
                      }
                      className="field"
                    >
                      <option value="">Select a range</option>
                      <option>less than $1k</option>
                      <option>$1k–$3k</option>
                      <option>$3k–$5k</option>
                      <option>$5k–$8k</option>
                      <option>$8k+</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                </div>
                <label className="mt-6 grid gap-2 text-sm font-medium">
                  What are you working on? *
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="field min-h-32 resize-y"
                    placeholder="A few lines is perfect."
                  />
                  {errors.message && (
                    <span className="text-xs text-destructive">
                      {errors.message}
                    </span>
                  )}
                </label>
                <button
                  disabled={loading}
                  className="mt-7 w-full rounded-full bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground transition hover:brightness-95 disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send project details"}{" "}
                  <ArrowRight className="ml-2 inline size-4" />
                </button>
                <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-primary/50">
                  <ShieldCheck className="size-3.5" /> Your details stay private
                  and are only used to reply.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="font-mono text-xs">
          NeuralFordge — Web design & development
        </p>
        <div className="flex gap-5">
          <a href="mailto:hello@example.com" className="hover:text-foreground">
            Email
          </a>
          <a
            href="https://wa.me/919537206754"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/its.mk____/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Instagram
          </a>
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#top" className="hover:text-foreground">
            Back to top
          </a>
        </div>
      </footer>
      <a
        href="#contact"
        className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg md:hidden"
      >
        <MessageCircle className="size-4" /> Start a project
      </a>
    </main>
  );
}
