---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2022-10-24
type: landing

design:
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle

  - block: markdown
    content:
      title: 'Clinical & Research Focus'
      subtitle: ''
      text: |-
        I am a Gastroenterology Fellow at Istanbul University, Istanbul Faculty of Medicine.

        **Clinical focus:** inflammatory bowel disease (IBD) and advanced endoscopy.

        **Research focus:** real-world outcomes in gastroenterology/hepatology, noninvasive assessment of liver disease, and **AI in endoscopy** and GI clinical decision support.

        If you would like to collaborate, feel free to reach out via email.
    design:
      columns: '1'

  - block: collection
    id: publications
    content:
      title: Selected Publications
      text: ''
      filters:
        folders:
          - publications
        # Show featured items first; if you don't have featured flags yet, it will still work.
        exclude_featured: false
    design:
      view: citation
      columns: 1

  # Optional sections (enable later when you add content)
  # - block: collection
  #   id: talks
  #   content:
  #     title: Talks
  #     filters:
  #       folders:
  #         - events
  #   design:
  #     view: card
  #
  # - block: collection
  #   id: news
  #   content:
  #     title: News
  #     page_type: blog
  #     count: 6
  #     order: desc
  #   design:
  #     view: card
  #     spacing:
  #       padding: [0, 0, 0, 0]
---
