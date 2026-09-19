import type React from "react"

const writing = [
  {
    title: "A Return to the Beginning",
    href: "https://seansimonini.substack.com/p/a-return-to-the-beginning",
    note: "An honest examination of what I am doing, and why I am here.",
  },
  {
    title: "Making a Synthetic Cell",
    href: "https://seansimonini.substack.com/p/making-a-synthetic-cell",
    note: "Observations and ideas for how to build life from the bottom-up.",
  },
  {
    title: "Avoiding the Gerontocene",
    href: "https://norngroup.substack.com/p/avoiding-the-gerontocene",
    note: "Averting an end to the Endless Frontier.",
  },
]

function Section({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default function Home() {
  return (
    <div className="page-shell">
      <header className="masthead">
        <h1>Sean Simonini</h1>
        <span>Mind Mending</span>
      </header>

      <main>
        <Section title="About me" className="intro">
          <p className="lede">
            Raison d&apos;être: reduce human suffering. Tangibly, that means ending the immutability of neuronal loss. Optimizing for time to turn “# of lives saved” from 0 → 1. Bio convert with a policy past life.
          </p>
        </Section>

        <Section title="Currently">
          <p>Creating the sequel to human neuroscience.</p>
        </Section>

        <Section title="Previously">
          <ul>
            <li>Ph.D. at UCSF (on leave) engineering neurons and transplanting them to treat ALS.</li>
            <li>Research at USC engineering cells and transplanting them to treat stroke.</li>
            <li>Research at Harvard making brain organoids really old, then using them for drug-hunting in ALS.</li>
            <li>Research at UMass Medical School figuring out why neurons in ALS die in an awfully similar way to TBI.</li>
          </ul>
        </Section>

        <Section title="Non-scientific">
          <ul>
            <li>Accelerating American science through various policy initiatives.</li>
            <li>Supporting the next generation of ambitious biotechnologists with the Aging Initiative.</li>
            <li>Mentoring young, unusually agentic operators from underserved backgrounds.</li>
          </ul>
        </Section>

        <Section title="Writing" className="writing">
          <ul>
            {writing.map((item) => (
              <li key={item.title}>
                <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
                <span className="note">{item.note}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Things I select for">
          <ul className="criteria">
            <li>Passion for truth over power.</li>
            <li>Assumption of responsibility for the welfare of humanity.</li>
            <li>High emotional intelligence — generally, just being kind.</li>
            <li>Bullish on humankind.</li>
          </ul>
        </Section>

        <Section title="Contact" className="contact">
          <p>seanrsimonini {"{at}"} gmail {"{dot}"} com</p>
        </Section>
      </main>
    </div>
  )
}

