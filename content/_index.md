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
        - **Society memberships** — European Society of Gastrointestinal Endoscopy (ESGE), American Society for Gastrointestinal Endoscopy (ASGE), European Crohn's and Colitis Organisation (ECCO), Crohn's & Colitis Foundation (USA)
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
      subtitle: ""
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
