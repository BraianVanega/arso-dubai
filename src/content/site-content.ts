// src/content/site-content.en.ts
// English content for ARSOPA Solutions S.A. — Dubai / international deployment.
// Mirrors the structure of site-content.ts (Spanish). Do not invent clients, figures,
// certifications, or testimonials — same governance rule as the Spanish version.

export const siteContentEn = {
  meta: {
    title: "ARSOPA Solutions S.A. | B2B Digital Marketing Services",
    description:
      "We design, implement, and manage digital growth strategies for emerging, small, and medium-sized businesses expanding into new markets.",
  },

  header: {
    brandName: "ARSOPA SOLUTIONS S.A.",
    tagline: "B2B Digital Marketing Services",
    nav: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "How We Work", href: "#methodology" },
      { label: "Compliance", href: "#compliance" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Request a Consultation",
  },

  hero: {
    headline: "Digital strategies to scale your business into new markets.",
    subtext:
      "We help emerging, small, and medium-sized businesses digitalize their commercial processes, capture new clients, and expand through results-driven digital marketing strategies.",
    primaryCta: "Explore our services",
    secondaryCta: "Request a consultation",
    entityCard: {
      title: "ARSOPA Solutions S.A.",
      details: [
        "Dubai · Business Bay",
        "B2B digital marketing services company",
      ],
    },
    trustBadges: [
      {
        title: "Formalized Contracts",
        description: "Every engagement is defined by a clear scope and terms.",
      },
      {
        title: "Data-Driven Strategy",
        description: "Decisions backed by metrics, not promises.",
      },
      {
        title: "Specialized B2B Focus",
        description: "Built for emerging, small, and medium-sized businesses.",
      },
      {
        title: "International Reach",
        description: "Strategies designed for multiple markets.",
      },
    ],
  },

  about: {
    eyebrow: "Company Background",
    title: "About ARSOPA Solutions S.A.",
    body: "ARSOPA Solutions S.A. is a Dubai-based services company dedicated to providing digital marketing services internationally, under a business-to-business (B2B) model. We work with emerging, small, and medium-sized businesses that need solutions for digitalizing their commercial processes, capturing clients, and expanding into new markets.",
    // representative: {
    //   label: "Legal Representative",
    //   name: "Kevin",
    //   role: "Registered Legal Representative",
    // },
    teamNote:
      "Interdisciplinary consulting team — presented only with true, verifiable information.",
  },

  services: {
    eyebrow: "Service Catalog",
    title: "Digital Marketing Solutions for Businesses",
    subtitle:
      "We design, implement, and manage digital strategies focused on the commercial growth of emerging, small, and medium-sized businesses.",
    items: [
      "Design and implementation of digital growth strategies",
      "Digital marketing campaigns",
      "Lead generation",
      "Sales automation",
      "Digital positioning",
      "Commercial channel management",
      "Client acquisition process optimization",
    ],
    scopeNote:
      "We work under a business-to-business (B2B) model, serving emerging, small, and medium-sized businesses.",
  },

  methodology: {
    eyebrow: "Our Process",
    title: "A 6-Phase Working Methodology",
    subtitle:
      "We ensure full traceability and methodological rigor from the first point of contact through to the final report.",
    steps: [
      {
        number: "01",
        title: "Initial Meeting",
        description:
          "A first conversation to understand the client's context and needs.",
      },
      {
        number: "02",
        title: "Needs Assessment",
        description:
          "Review of the client's commercial processes and digitalization goals.",
      },
      {
        number: "03",
        title: "Proposal & Scope",
        description:
          "Formal definition of scope, responsibilities, and terms of service.",
      },
      {
        number: "04",
        title: "Analysis",
        description: "Review of channels, audience, and market opportunities.",
      },
      {
        number: "05",
        title: "Delivery of Recommendations",
        description:
          "Presentation of findings and concrete recommendations to the client.",
      },
      {
        number: "06",
        title: "Follow-up",
        description: "Ongoing support after delivery, where applicable.",
      },
    ],
  },

  growthAreas: {
    eyebrow: "Scope of Service",
    title: "Strategic Areas of Intervention",
    subtitle:
      "We work on the variables that determine a business's commercial growth in digital markets.",
    disclaimer:
      "ARSOPA delivers strategy, implementation, and follow-up — results depend on joint execution and market conditions.",
    items: [
      {
        title: "Strategy & Positioning",
        description: "Defining the business's digital value proposition.",
      },
      {
        title: "Demand Generation",
        description: "Capturing qualified leads through targeted campaigns.",
      },
      {
        title: "Commercial Automation",
        description: "Automated sales and follow-up processes.",
      },
      {
        title: "Expansion into New Markets",
        description: "Strategies adapted for international markets.",
      },
      {
        title: "Measurement & Optimization",
        description: "Continuous campaign adjustment based on real metrics.",
      },
    ],
  },

  transparencyBanner: {
    label: "Transparency & Results Clause",
    text: "ARSOPA Solutions S.A. delivers digital marketing strategy, implementation, and management services under formal contracts. The company does NOT guarantee specific campaign results, nor does it manage third-party advertising budgets beyond what is expressly authorized by contract.",
  },

  compliance: {
    eyebrow: "Regulatory Framework",
    title: "Compliance, Transparency & Contractual Rigor",
    intro:
      "ARSOPA Solutions S.A. delivers its services under principles of transparency and contractual discipline. Every project is formalized through a proposal or contract that defines its scope, deliverables, responsibilities, and terms.",
    items: [
      {
        title: "Formalized Contracts & Confidentiality",
        description:
          "Every service is formalized through a proposal or contract with clear scope and terms.",
      },
      {
        title: "Defined Scope & Deliverables",
        description:
          "Every campaign or strategy is scoped to measurable objectives and deliverables.",
      },
      {
        title: "Confidentiality Agreements",
        description:
          "Client information is protected under strict confidentiality agreements.",
      },
      {
        title: "Verifiability & Traceability",
        description:
          "Every deliverable can be substantiated with verifiable documentation and contracts.",
      },
    ],
  },

  contact: {
    eyebrow: "Institutional Channel",
    title: "Contact & Information Request",
    subtitle:
      "Start a confidential conversation with our team to schedule a discovery session.",
    officeLabel: "Head Office",
    officeDetails: {
      address: "Dubai, United Arab Emirates", // TODO: confirm exact official address
      email: "contact@arsopa.com", // TODO: corporate email
      phone: "", // TODO: corporate phone
      hours: "", // TODO: business hours
    },
    form: {
      fields: [
        { name: "fullName", label: "Full Name", type: "text", required: true },
        {
          name: "company",
          label: "Company / Organization",
          type: "text",
          required: false,
        },
        {
          name: "clientType",
          label: "Client Type",
          type: "select",
          required: true,
          options: [
            "Emerging business",
            "Small business",
            "Medium-sized business",
          ],
        },
        {
          name: "email",
          label: "Corporate Email",
          type: "email",
          required: true,
        },
        { name: "phone", label: "Contact Phone", type: "tel", required: false },
        {
          name: "message",
          label: "Message / Specific Requirement",
          type: "textarea",
          required: true,
        },
      ],
      submitLabel: "Send Information Request",
      // TODO: wire up real form submission (Resend or similar) — validation-only for now
    },
  },

  footer: {
    columns: [
      {
        title: "ARSOPA Solutions",
        items: ["About Us", "Consulting Team", "Compliance"],
      },
      {
        title: "Services",
        items: [
          "Digital Marketing",
          "Sales Automation",
          "International Expansion",
        ],
      },
      {
        title: "Contact & Hours",
        items: [], // TODO: fill in with real email, phone, hours
      },
      {
        title: "Legal & Compliance",
        items: ["Privacy Notice", "Terms of Use"],
      },
    ],
    legalLine:
      "ARSOPA Solutions S.A. · Dubai, United Arab Emirates. All rights reserved.",
  },
} as const;

export type SiteContentEn = typeof siteContentEn;
export const siteContent = siteContentEn;
export type SiteContent = SiteContentEn;
