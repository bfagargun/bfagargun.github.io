---
title: ""
summary: ""
date: 2022-10-24
type: landing

design:
  spacing: "2.5rem"

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ""
      button:
        text: Download CV
        url: uploads/resume-.pdf
      headings:
        about: About
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

  - block: markdown
    content:
      title: "Research Focus"
      text: |-
        My clinical and academic work focuses on inflammatory bowel disease (IBD),
        metabolic dysfunction–associated steatotic liver disease (MASLD), advanced endoscopy,
        and artificial intelligence applications in gastroenterology.
    design:
      columns: "1"

  - block: collection
    content:
      title: "Selected Publications"
      filters:
        folders:
          - publications
        featured_only: false
    design:
      view: citation
---
