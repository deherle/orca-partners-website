import heroPnw from "@/assets/hero-pnw.jpg";
import orcaIcon from "@/assets/orca-icon.png";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <a href="#" className="flex items-center gap-3">
        <img src={orcaIcon} alt="Orca Partners" width={36} height={36} className="invert brightness-200" />
        <span className="font-display text-xl font-semibold tracking-wide text-primary-foreground">
          Orca Partners
        </span>
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {["Services", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium tracking-wide text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroPnw}
      alt="Pacific Northwest coastline"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 container mx-auto px-6 text-center">
      <h1 className="animate-fade-up font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-primary-foreground leading-tight">
        Strategic Consulting,
        <br />
        <span className="italic font-normal text-forest-light">Deliberately Different</span>
      </h1>
      <p className="animate-fade-up-delay mt-6 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed">
        Orca Partners helps ambitious companies navigate GTM strategy, AI transformation,
        and systems engineering with clarity and conviction.
      </p>
      <a
        href="#contact"
        className="animate-fade-up-delay-2 mt-10 inline-block rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold tracking-widest uppercase text-accent-foreground transition-all hover:bg-forest-light"
      >
        Start a Conversation
      </a>
    </div>
  </section>
);

const services = [
  {
    title: "Go-to-Market Strategy",
    description:
      "Market positioning, sales playbooks, channel strategy, and launch planning that gets products into the right hands.",
  },
  {
    title: "Agentic AI & AI-Assisted Development",
    description:
      "Practical AI adoption — from agentic workflows to AI-assisted engineering — that drives real productivity gains.",
  },
  {
    title: "Sales & Marketing Operations",
    description:
      "Pipeline optimization, demand generation, and the operational rigor to turn marketing spend into revenue.",
  },
  {
    title: "Product Engineering",
    description:
      "Technical leadership and engineering strategy for teams building complex software products.",
  },
  {
    title: "CRM & Business Systems",
    description:
      "Salesforce, HubSpot, and Rippling implementations that your teams will actually use — designed around how you work.",
  },
  {
    title: "Systems & Cloud Engineering",
    description:
      "Infrastructure architecture, cloud migrations, and platform engineering built for scale and reliability.",
  },
];

const Services = () => (
  <section id="services" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <p className="text-sm font-semibold tracking-[0.25em] uppercase text-accent mb-3">
        Expertise
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
        What We Do
      </h2>
      <div className="section-divider mt-8 mb-16" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
        {services.map((s) => (
          <div key={s.title} className="group">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
              {s.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-28 bg-sand">
    <div className="container mx-auto px-6 max-w-3xl">
      <p className="text-sm font-semibold tracking-[0.25em] uppercase text-accent mb-3">
        About
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
        Darin Herle
      </h2>
      <div className="section-divider mt-8 mb-10" />
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Orca Partners is the consultancy of <strong className="text-foreground font-medium">Darin Herle</strong> — a 
          technology leader and serial founder with more than 20 years of experience turning complex 
          engineering challenges into strategic business outcomes.
        </p>
        <p>
          Based in British Columbia, Darin combines deep technical expertise with hands-on 
          go-to-market experience across SaaS, AI, and enterprise technology. He has led teams 
          through product launches, scaling challenges, and digital transformations — always with 
          a bias toward action and measurable results.
        </p>
        <p>
          Whether it's architecting a CRM rollout, defining an AI adoption roadmap, or building 
          the GTM engine for a new product, Darin brings the strategic clarity and operational 
          depth that only comes from having done it before.
        </p>
      </div>
      <a
        href="https://www.linkedin.com/in/darinherle/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-forest-light transition-colors"
      >
        Connect on LinkedIn
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-28 bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-[0.25em] uppercase text-forest-light mb-3">
        Get in Touch
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
        Let's Talk
      </h2>
      <p className="mt-6 text-primary-foreground/70 leading-relaxed">
        Every engagement starts with a conversation. Reach out to discuss how 
        Orca Partners can help you move faster and build smarter.
      </p>
      <a
        href="mailto:darin@orcapartners.ca"
        className="mt-10 inline-block rounded-sm border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
      >
        darin@orcapartners.ca
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary border-t border-primary-foreground/10 py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Orca Partners. All rights reserved.
      </span>
      <span className="text-xs text-primary-foreground/30">
        Victoria, British Columbia
      </span>
    </div>
  </footer>
);

const Index = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
  </>
);

export default Index;
