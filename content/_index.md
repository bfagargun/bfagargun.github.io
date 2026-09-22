---
title: ""
summary: ""
date: 2026-09-22
type: landing

design:
  spacing: "1rem"

sections:
  - block: resume-biography-3
    id: home-bio
    content:
      username: me
      text: |-
        My clinical and academic work focuses on inflammatory bowel disease (IBD),
        metabolic dysfunction–associated steatotic liver disease (MASLD), advanced endoscopy,
        and artificial intelligence applications in gastroenterology.
      button:
        text: Download CV
        url: uploads/Agargun-CV-2026-09.pdf
      headings:
        about: Research Focus
        education: Education
        interests: Research Interests
    design:
      background:
        gradient_mesh:
          enable: false
      name:
        size: md
      avatar:
        size: medium
        shape: circle

  - block: research-areas
    id: projects
    content:
      title: Research Projects
      text: Ongoing and recent projects in inflammatory bowel disease, hepatology and AI/NLP for gastroenterology.
      items:
        - name: ELASTIBD
          description: Transient elastography (FibroScan, CAP) study of liver fibrosis and steatosis in patients with inflammatory bowel disease compared with matched controls. Baseline cross-sectional results were published in Hepatology Research (2026); a prospective phase is in preparation. Role — coordinating investigator.
          icon: hero/heart
          status: active
          topics:
            - Inflammatory Bowel Disease
            - MASLD
            - Transient Elastography
          cta:
            text: Read the paper
            url: /publications/agargun-2026-elastibd/
        - name: Colonoscopy Report NLP
          description: Natural-language processing over more than 11,000 colonoscopy reports — automated bowel-preparation quality classification (~92% accuracy) and its association with adenoma detection rate. Late-breaking oral at UEG Week 2025; DDW 2026 poster selected for the AGA Innovation Themed Walking Tour. Role — scientific lead.
          icon: hero/document-magnifying-glass
          status: active
          topics:
            - NLP
            - Colonoscopy Quality
            - Adenoma Detection Rate
          cta:
            text: See the talks
            url: /events/
        - name: UC Endoscopic–Histologic Discordance
          description: Rule-based NLP pipelines that extract the Mayo Endoscopic Score and the Nancy Histological Index from Turkish endoscopy and pathology reports, used to quantify persistent histologic activity in endoscopic remission in ulcerative colitis. Manuscript under review; the pipelines are openly available.
          icon: hero/code-bracket
          status: active
          topics:
            - Ulcerative Colitis
            - Histologic Remission
            - Open-source NLP
          cta:
            text: Code on GitHub
            url: https://github.com/bfagargun/uc-nlp-pipelines
        - name: National IBD Epidemiology in Türkiye
          description: Nationwide epidemiology of Crohn's disease and ulcerative colitis based on national health-system data (ICD-10 K50/K51), including regional variation in incidence, prevalence and care. Funded by the Health Institutes of Türkiye (TÜSEB), project 2026-A4-54032, with Prof. Filiz Akyüz.
          icon: hero/globe-europe-africa
          status: active
          topics:
            - Epidemiology
            - Real-world Data
            - Health Services
        - name: AI-CrohnET
          description: An enterography-centred artificial-intelligence programme for Crohn's disease covering strictures and fibrostenosis, inflammatory activity, transmural healing, endoscopic–radiologic discordance, postoperative recurrence and prognosis. In collaboration with the Bagci Lab, Northwestern University.
          icon: hero/cpu-chip
          status: planning
          topics:
            - Crohn's Disease
            - MR/CT Enterography
            - Deep Learning
        - name: LLM-based Montreal Classification
          description: Automated extraction of the Montreal classification of Crohn's disease and ulcerative colitis from endoscopy reports using NLP and large language models. Accepted as a poster at UEG Week 2026.
          icon: hero/sparkles
          status: active
          topics:
            - Large Language Models
            - IBD Phenotyping
            - Structured Reporting
          cta:
            text: UEG Week 2026
            url: /events/ueg-week-2026-barcelona/
      cta:
        text: Çapa Gastroenterology research group
        url: /capagastro/
    design:
      layout: cards

  - block: resume-experience
    id: home-experience
    content:
      username: me
    design:
      date_format: '2006'
      is_education_first: false

  - block: markdown
    id: service
    content:
      title: Academic Service & Memberships
      text: |-
        - **Peer reviewer** — *American Journal of Gastroenterology*, *Inflammatory Bowel Diseases*, *Journal of Clinical Gastroenterology*
        - **Society memberships** — European Society of Gastrointestinal Endoscopy (ESGE), American Society for Gastrointestinal Endoscopy (ASGE), European Crohn's and Colitis Organisation (ECCO), Crohn's & Colitis Foundation, Turkish Inflammatory Bowel Disease Association (IBHD), Turkish Association for the Study of the Liver (TKAD)
        - **Young Co-Chair** — UEG Week 2026, moderated poster session "Therapeutics in IBD: Real-world experience (I)"
        - Moderator and lead presenter in 20+ journal clubs and departmental academic sessions
    design:
      columns: '1'

  - block: collection
    id: home-pubs
    content:
      title: Selected Publications
      text: ""
      count: 5
      filters:
        folders:
          - publications
        featured_only: true
      archive:
        enable: true
        text: All publications
        link: /publications/
    design:
      view: citation

  - block: collection
    id: home-talks
    content:
      title: Talks & Presentations
      count: 3
      filters:
        folders:
          - events
        exclude_future: false
        exclude_past: false
      archive:
        enable: true
        text: All talks
        link: /events/
    design:
      view: date-title-summary

  - block: resume-awards
    id: home-awards
    content:
      title: Awards
      username: me

  - block: contact-info
    id: contact
    content:
      title: Contact
      subtitle: "**Open to collaboration** — datasets, multicentre studies, AI/NLP validation and clinical research. Get in touch by e-mail."
      visit_title: Clinic
      connect_title: Connect
      address:
        lines:
          - Division of Gastroenterology & Hepatology
          - Department of Internal Medicine
          - Istanbul University, Istanbul Faculty of Medicine
          - Çapa, Fatih, Istanbul, Türkiye
      email: bfagargun@istanbul.edu.tr
      social:
        - icon: academicons/orcid
          url: https://orcid.org/0000-0002-3933-1881
        - icon: academicons/google-scholar
          url: https://scholar.google.com/citations?hl=en&user=MeNxgD4AAAAJ
        - icon: brands/linkedin
          url: https://www.linkedin.com/in/besim-fazil-agargun
        - icon: brands/github
          url: https://github.com/bfagargun
        - icon: brands/instagram
          url: https://www.instagram.com/bfagargun/
        - icon: brands/x
          url: https://x.com/bfagargun
      map_url: https://maps.app.goo.gl/Ey4eb2UkBD5aQzT97
      show_form: false
---
