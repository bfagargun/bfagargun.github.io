---
title: ""
summary: ""
date: 2022-10-24
type: landing

design:
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ""
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: About
        education: Education
        interests: Research Interests
    design:
      background:
        gradient_mesh:
          enable: false
      name:
        size: lg
      avatar:
        size: medium
        shape: rounded

  - block: markdown
    content:
      title: "Research Focus"
      text: |-
        My clinical and academic work focuses on inflammatory bowel disease (IBD),
        metabolic dysfunction–associated steatotic liver disease (MASLD), advanced endoscopy,
        and artificial intelligence applications in gastroenterology.

        I am particularly interested in real-world data analysis, elastography-based risk stratification,
        and AI-driven endoscopic quality improvement.
    design:
      columns: "1"

  - block: collection
    content:
      title: "Selected Publications"
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: citation
---
