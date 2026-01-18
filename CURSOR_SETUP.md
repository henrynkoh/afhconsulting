# Cursor Auto-Approval Setup Guide

## The Problem

Even with `.cursorrules`, Cursor may still ask you to click "Run" for each command. This is because Cursor's security system requires explicit approval.

## The Solution: Use "Allowlist" Feature

When you see the permission prompt with buttons:
- **"Skip"** - Skips the command
- **"Allowlist"** - ⭐ **USE THIS ONE** - Permanently allows similar commands
- **"Run"** - Runs once, asks again next time

### Step-by-Step Instructions

1. **When you see the first prompt**, click **"Allowlist"** (not "Run")
2. **Select what to allowlist**:
   - ✅ Git operations (git status, add, commit, push)
   - ✅ Directory navigation (cd, pwd)
   - ✅ File operations in this directory
3. **Confirm** - This will remember your choice

### What "Allowlist" Does

- **Permanently remembers** your approval for similar commands
- **Reduces future prompts** for the same type of operations
- **Applies to this project** (safe, project-specific)

## Alternative: Use the Helper Script

Instead of asking me to run multiple git commands, you can use the script directly:

```bash
cd /Users/henryoh/Documents/AFHadmintraining/AFH_bizconsulting
./scripts/git-push.sh "Your commit message"
```

This runs all git operations in one go, requiring only **one** permission approval.

## Quick Reference

### For Git Operations
**Best approach**: Click "Allowlist" on the first git command, then future git commands will be auto-approved.

### For Other Operations
- **File reads**: Usually auto-approved
- **File writes**: May need approval (click "Allowlist" once)
- **Network operations**: May need approval (click "Allowlist" once)

## Troubleshooting

### If "Allowlist" Doesn't Appear
1. Check Cursor version (update if needed)
2. Check Cursor settings for "Allowlist" feature
3. Try restarting Cursor after creating `.cursorrules`

### If Still Getting Multiple Prompts
1. Use the helper script instead: `./scripts/git-push.sh`
2. Or batch your requests: "Push all changes" (I'll batch commands)

## Current Setup Files

- `.cursorrules` - Tells AI to batch operations
- `.cursor/allowlist.json` - Suggested allowlist configuration (may need manual setup in Cursor UI)
- `scripts/git-push.sh` - One-command solution

---

**Remember**: Click "Allowlist" (not "Run") to reduce future prompts!

