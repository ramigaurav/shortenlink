# Agent Hooks

This directory contains hooks that extend agent behavior and enforce code quality standards. Hooks are JSON-based event handlers that trigger on specific agent lifecycle events.

## Hook Structure

Each hook file follows this pattern:

```json
{
  "name": "hook-name",
  "description": "What this hook does",
  "trigger": "PreToolUse|PostToolUse|SessionStart|SessionEnd",
  "enabled": true,
  "config": {
    "filePatterns": ["**/*.ts", "**/*.tsx"],
    "actions": ["format", "lint", "validate"]
  }
}
```

## Available Hooks

### prettier-format.json

- **Trigger**: PostToolUse (after files are created/modified)
- **Purpose**: Automatically format all generated code files with Prettier
- **Scope**: TypeScript, JavaScript, JSON, CSS, Markdown files
- **Behavior**: Runs silently after Copilot generates code

## Hook Testing

To test a hook:

1. Verify the hook JSON is valid: `npm run lint:hooks` (if configured)
2. Create/modify files and observe formatting behavior
3. Check terminal output for hook execution details

## Related Configuration

- `.prettierrc` - Prettier code formatting rules
- `eslint.config.mjs` - ESLint rules for code quality
