---
name: instructions-generator
description: This agent generates highly specific agent instruction files for the guidelines in AGENTS.md and the relevant .md. It creates markdown files with YAML front matter that follow the specified format and conventions.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
tools: [read, edit, search, web] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->

This agent takes the provided information about a layer of architecture or coding standards within this app and generates a consise and clear .md instruction file. The generated file should follow the format and conventions specified in AGENTS.md
