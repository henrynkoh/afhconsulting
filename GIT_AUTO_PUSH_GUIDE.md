# Git Auto-Push Setup Guide

## Overview

This guide explains how to enable automatic git operations in Cursor and use the helper scripts for streamlined GitHub pushes.

## What Was Created

### 1. `.cursorrules` File
This file tells Cursor AI how to handle git operations:
- Automatically request permissions for git operations
- Batch git commands together
- Verify repository location before executing

### 2. `.cursor/settings.json` File
Cursor configuration for auto-approving git operations (if supported by your Cursor version).

### 3. `scripts/git-push.sh` Script
A bash script that automates the entire git push process with safety checks.

## How to Use

### Option 1: Ask Cursor AI (Recommended)

Simply ask me:
```
"Push all changes to GitHub"
```

I will now:
1. ✅ Automatically request `['all']` permissions upfront
2. ✅ Verify we're in the correct directory
3. ✅ Check git status
4. ✅ Stage all files
5. ✅ Commit with appropriate message
6. ✅ Push to GitHub

The `.cursorrules` file helps me do this automatically.

### Option 2: Use the Helper Script

Run the script directly:

```bash
cd /Users/henryoh/Documents/AFHadmintraining/AFH_bizconsulting
./scripts/git-push.sh "Your commit message here"
```

Or with auto-generated message:
```bash
./scripts/git-push.sh
```

## Understanding the Permission System

### Why Permissions Are Needed

Cursor uses a sandbox system for security. Git operations require explicit permission because they:
- Modify files
- Access network (GitHub)
- Change repository state

### The Permission Flow

1. **I request permission**: `required_permissions: ['all']`
2. **You approve**: Click the approval button (one time)
3. **I execute**: All git commands run automatically
4. **Future requests**: May require approval again (Cursor security)

### Minimizing Prompts

The `.cursorrules` file helps by:
- Requesting permissions upfront
- Batching operations together
- Reducing the number of separate requests

## Troubleshooting

### If Scripts Don't Work

1. **Check script permissions**:
   ```bash
   chmod +x scripts/git-push.sh
   ```

2. **Verify directory**:
   ```bash
   pwd
   # Should be: /Users/henryoh/Documents/AFHadmintraining/AFH_bizconsulting
   ```

3. **Check git remote**:
   ```bash
   git remote -v
   # Should show: git@github.com:henrynkoh/afhconsulting.git
   ```

### If Cursor Still Asks for Permission

This is normal! Cursor's security system requires approval for:
- First-time operations
- Operations after a period of inactivity
- Potentially risky operations

The `.cursorrules` file helps minimize these, but cannot eliminate them entirely for security reasons.

## Manual Git Operations (If Needed)

If you prefer to do it manually:

```bash
cd /Users/henryoh/Documents/AFHadmintraining/AFH_bizconsulting
git status
git add .
git commit -m "Your message"
git push origin main
```

## Best Practices

1. **Always verify directory** before git operations
2. **Check git status** to see what will be committed
3. **Use descriptive commit messages**
4. **Review changes** before pushing (especially for important updates)

## Files Created

- `.cursorrules` - Cursor AI behavior rules
- `.cursor/settings.json` - Cursor IDE settings
- `scripts/git-push.sh` - Automated push script
- `scripts/README.md` - Script documentation
- `GIT_AUTO_PUSH_GUIDE.md` - This guide

## Notes

- The `.cursor/` directory is in `.gitignore` (personal settings)
- The `.cursorrules` file can be committed (project-wide rules)
- Scripts are in `scripts/` directory and can be committed

---

**Remember**: Even with these tools, Cursor may still ask for permission occasionally for security. This is by design and protects your repository.

