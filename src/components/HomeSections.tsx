const faqs = [
  {
    question: "What is the minimum order quantity?",
    // TODO: Replace this placeholder answer with your current MOQ policy.
    answer: "Minimum quantities depend on the product and production requirements. Contact us to discuss your project.",
  },
  {
    question: "What is the typical lead time?",
    // TODO: Replace this placeholder answer with your current lead-time guidance.
    answer: "Lead time varies with design complexity, component availability, and order size.",
  },
  {
    question: "Can you develop a custom product?",
    // TODO: Replace this placeholder answer with your custom-development process.
    answer: "Yes, share your use case and requirements so we can assess a suitable development approach.",
  },
  {
    question: "How do you approach pricing?",
    // TODO: Replace this placeholder answer with your quotation and pricing policy.
    answer: "Pricing is scoped according to specifications, components, development effort, and quantity.",
  },
  {
    question: "Do you provide after-sales support?",
    // TODO: Replace this placeholder answer with your support terms and contact process.
    answer: "Support arrangements depend on the product and project. Please include your product and issue when contacting us.",
  },
];

const reasons = [
  ["Locally Engineered", "Designed and developed in Satara, Maharashtra, with local needs in mind."],
  ["Repairable by Design", "We value maintainable solutions and practical serviceability."],
  ["Affordable", "We consider cost and component choices throughout the design process."],
  ["Custom Solutions", "Products and systems can be shaped around your application."],
];

const industries = ["Residential", "Industrial", "Agricultural"];
const workflow = ["Idea", "Design", "Prototype", "Production"];

export default function HomeSections() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Our approach</p>
          <h2>Why Choose Us</h2>
          <div className="card-grid four-column">
            {reasons.map(([title, description]) => (
              <article className="info-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <p className="eyebrow">From idea to implementation</p>
          <h2>How We Work</h2>
          <ol className="work-timeline">
            {workflow.map((step, index) => (
              <li className="timeline-step" key={step}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Built for real applications</p>
          <h2>Industries We Serve</h2>
          <div className="card-grid three-column">
            {industries.map((industry) => (
              <article className="industry-card" key={industry}>
                <h3>{industry}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner faq-inner">
          <p className="eyebrow">Frequently asked questions</p>
          <h2>Questions, answered</h2>
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details className="faq-item" key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
