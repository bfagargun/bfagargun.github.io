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
        text: Download CV (updated Sep 2026)
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
      map_url: https://maps.google.com/?q=Istanbul+University+Istanbul+Faculty+of+Medicine
      show_form: false
---
