# Git Helper Scripts

## git-push.sh

Automated script to push changes to GitHub with safety checks.

### Usage

```bash
# Basic usage (auto-generates commit message)
./scripts/git-push.sh

# With custom commit message
./scripts/git-push.sh "Your custom commit message here"
```

### What it does

1. ✅ Verifies correct project directory
2. ✅ Initializes git if needed
3. ✅ Configures remote repository
4. ✅ Checks git status
5. ✅ Stages and commits changes
6. ✅ Pushes to GitHub

### Safety Features

- Verifies directory location before operations
- Checks remote URL configuration
- Shows status before committing
- Prevents accidental pushes to wrong repository

### Example

```bash
cd /Users/henryoh/Documents/AFHadmintraining/AFH_bizconsulting
./scripts/git-push.sh "Added new marketing materials"
```

## Integration with Cursor

The `.cursorrules` file tells Cursor AI to:
- Automatically request permissions for git operations
- Batch git commands together
- Verify repository location before executing

The `.cursor/settings.json` file configures Cursor to:
- Auto-approve git operations (if supported)
- Batch git operations
- Configure sandbox permissions

