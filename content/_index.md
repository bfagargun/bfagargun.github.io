---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: About
        education: Education
        interests: Research Interests
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: true

      # Name heading sizing to accommodate long or short names
      name:
        size: md # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: rounded # Options: circle (default), square, rounded
  - block: markdown
    content:
      title: 'Research Focus'
      subtitle: ''
      text: |-
         My clinical and academic work focuses on inflammatory bowel disease (IBD), 
        metabolic dysfunction–associated steatotic liver disease (MASLD), advanced endoscopy, 
        and artificial intelligence applications in gastroenterology.

        I am particularly interested in real-world data analysis, elastography-based risk stratification, 
        and AI-driven endoscopic quality improvement.

        Please reach out to collaborate 😃
    design:
      columns: '1'
   
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
