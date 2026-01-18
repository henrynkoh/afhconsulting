#!/bin/bash

# Git Push Helper Script for AFH Success Consultant Project
# This script automates the git push process with safety checks

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_DIR="/Users/henryoh/Documents/AFHadmintraining/AFH_bizconsulting"
REPO_URL="git@github.com:henrynkoh/afhconsulting.git"
BRANCH="main"

echo -e "${YELLOW}=== AFH Success Consultant - Git Push Helper ===${NC}\n"

# Step 1: Verify we're in the correct directory
echo -e "${YELLOW}[1/6]${NC} Verifying project directory..."
CURRENT_DIR=$(pwd)
if [ "$CURRENT_DIR" != "$PROJECT_DIR" ]; then
    echo -e "${RED}ERROR: Not in correct directory!${NC}"
    echo -e "Current: $CURRENT_DIR"
    echo -e "Expected: $PROJECT_DIR"
    echo -e "\n${YELLOW}Changing to correct directory...${NC}"
    cd "$PROJECT_DIR"
fi
echo -e "${GREEN}✓${NC} Directory verified: $(pwd)\n"

# Step 2: Check if git repository exists
echo -e "${YELLOW}[2/6]${NC} Checking git repository..."
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing git repository...${NC}"
    git init
fi
echo -e "${GREEN}✓${NC} Git repository ready\n"

# Step 3: Verify remote configuration
echo -e "${YELLOW}[3/6]${NC} Checking remote configuration..."
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || echo "")
if [ "$CURRENT_REMOTE" != "$REPO_URL" ]; then
    if [ -z "$CURRENT_REMOTE" ]; then
        echo -e "${YELLOW}Adding remote origin...${NC}"
        git remote add origin "$REPO_URL"
    else
        echo -e "${YELLOW}Updating remote URL...${NC}"
        git remote set-url origin "$REPO_URL"
    fi
fi
echo -e "${GREEN}✓${NC} Remote configured: $REPO_URL\n"

# Step 4: Check git status
echo -e "${YELLOW}[4/6]${NC} Checking git status..."
git status --short
echo ""

# Step 5: Stage and commit changes
echo -e "${YELLOW}[5/6]${NC} Staging changes..."
CHANGED_FILES=$(git status --porcelain | wc -l | tr -d ' ')

if [ "$CHANGED_FILES" -eq 0 ]; then
    echo -e "${GREEN}✓${NC} No changes to commit\n"
else
    echo -e "${YELLOW}Found $CHANGED_FILES changed file(s)${NC}"
    git add .
    
    # Generate commit message
    if [ -z "$1" ]; then
        COMMIT_MSG="Update: $(date '+%Y-%m-%d %H:%M:%S')"
    else
        COMMIT_MSG="$1"
    fi
    
    echo -e "${YELLOW}Committing changes...${NC}"
    git commit -m "$COMMIT_MSG"
    echo -e "${GREEN}✓${NC} Changes committed\n"
fi

# Step 6: Push to GitHub
echo -e "${YELLOW}[6/6]${NC} Pushing to GitHub..."
git push -u origin "$BRANCH" 2>&1
echo -e "${GREEN}✓${NC} Successfully pushed to $REPO_URL\n"

# Final status
echo -e "${GREEN}=== Push Complete ===${NC}"
echo -e "Repository: $REPO_URL"
echo -e "Branch: $BRANCH"
echo -e "Status: $(git status --short | wc -l | tr -d ' ') uncommitted changes"
echo ""

