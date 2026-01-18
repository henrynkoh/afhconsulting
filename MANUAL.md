# AFH Success Consultant Curriculum - Complete Manual

## Table of Contents
1. [Introduction](#introduction)
2. [System Requirements](#system-requirements)
3. [Installation Guide](#installation-guide)
4. [Configuration](#configuration)
5. [User Guide](#user-guide)
6. [Module Descriptions](#module-descriptions)
7. [Troubleshooting](#troubleshooting)
8. [Advanced Features](#advanced-features)
9. [Best Practices](#best-practices)
10. [FAQ](#faq)

## Introduction

The AFH Success Consultant Curriculum is a comprehensive web-based training platform designed to educate consultants on operating financially successful Adult Family Homes (AFH). This manual provides complete documentation for using, understanding, and maximizing the value of this curriculum.

### Purpose

This curriculum transforms caregivers into business administrators by teaching:
- Financial strategy and profit maximization
- Strategic site selection and market analysis
- Premium pricing and competitive positioning
- Private-pay marketing and sales
- Compliance and billing best practices
- Long-term financial health management

### Target Audience

- Prospective AFH consultants
- Current AFH owners seeking to improve profitability
- Business advisors specializing in senior care
- Training organizations in the healthcare industry

## System Requirements

### Minimum Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Node.js**: Version 18.0 or higher
- **npm**: Version 9.0 or higher (comes with Node.js)
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 500MB free space

### Recommended Requirements
- **Node.js**: Version 20.0 or higher
- **RAM**: 8GB or more
- **Storage**: 1GB free space
- **Internet**: Stable connection for initial setup

## Installation Guide

### Step 1: Verify Prerequisites

Check if Node.js is installed:
```bash
node --version
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### Step 2: Clone or Download Project

If using Git:
```bash
git clone [repository-url]
cd AFH_bizconsulting
```

If downloading as ZIP, extract to your desired location.

### Step 3: Install Dependencies

Navigate to project directory:
```bash
cd AFH_bizconsulting
npm install
```

This installs all required packages (Next.js, React, Tailwind CSS, etc.)

### Step 4: Verify Installation

Check that all dependencies installed correctly:
```bash
npm list --depth=0
```

### Step 5: Start Development Server

```bash
npm run dev
```

You should see:
```
✓ Ready in [time]
○ Local: http://localhost:3000
```

### Step 6: Access Application

Open your browser and navigate to:
```
http://localhost:3000
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory for custom configurations:

```env
# Application Settings
NEXT_PUBLIC_APP_NAME=AFH Success Consultant
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Customization

#### Changing Colors/Branding

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color scheme
      },
    },
  },
}
```

#### Modifying Content

All content is in the `app/` directory:
- Module content: `app/module-[1-6]/page.tsx`
- Resources: `app/[resource-name]/page.tsx`
- Global styles: `app/globals.css`

## User Guide

### Navigation

#### Main Menu
- **Home**: Overview of all modules and resources
- **Handbook**: Complete reference guide
- **Certification Exam**: Final assessment

#### Module Navigation
Each module page includes:
- Previous/Next module buttons
- Back to Home link
- Module number and title
- Progress indicators

### Using the Curriculum

#### Recommended Learning Path

1. **Start with Module 1**: Build foundation in business principles
2. **Complete Modules Sequentially**: Each builds on previous knowledge
3. **Use Resources**: Refer to checklists and templates as needed
4. **Take Notes**: Print or save important sections
5. **Complete Exam**: Validate your understanding

#### Study Tips

- **Time Commitment**: 2-3 hours per module
- **Take Breaks**: Review in 30-45 minute sessions
- **Practice**: Use templates with real scenarios
- **Review**: Revisit modules before taking exam

### Interactive Features

#### Certification Exam
- Located at `/exam`
- 8 multiple-choice and essay questions
- Case study component
- Immediate scoring and feedback
- Passing score: 85%+ for Master Consultant

#### Checklists
- Printable format
- Interactive checkboxes
- Phase-based organization
- Use during actual consultations

#### Templates
- Market Analysis: Fillable tables
- Marketing Scripts: Copy-paste ready
- Menu & Activities: Customizable samples

## Module Descriptions

### Module 1: Business Foundation & Profit Maximization
**Duration**: 2-3 hours
**Key Topics**:
- Medicaid vs. Private Pay financial comparison
- Owner's draw calculation
- Scalability mindset
- Case studies

**Learning Objectives**:
- Understand profit margins
- Calculate financial goals
- Transition from caregiver to administrator mindset

### Module 2: Strategic Site Selection
**Duration**: 2-3 hours
**Key Topics**:
- 5-Mile Rule
- Wealth mapping
- Competitor analysis
- High-acuity specialization

**Learning Objectives**:
- Identify profitable locations
- Analyze market saturation
- Recognize opportunities

### Module 3: Pricing Strategies
**Duration**: 2-3 hours
**Key Topics**:
- Level-of-care pricing
- Competitive positioning
- Daily rate calculation
- Psychological pricing

**Learning Objectives**:
- Implement tiered pricing
- Position competitively
- Calculate daily rates

### Module 4: Marketing to Private Pay
**Duration**: 2-3 hours
**Key Topics**:
- Referral networks
- Premium tours
- Value comparison
- Financial screening

**Learning Objectives**:
- Build referral relationships
- Conduct successful tours
- Close premium clients

### Module 5: Disclosures & Billing
**Duration**: 2-3 hours
**Key Topics**:
- WAC compliance
- Admission fees
- Invoicing best practices
- Level-of-care increases

**Learning Objectives**:
- Create compliant disclosures
- Implement billing systems
- Handle rate changes

### Module 6: Long-Term Financial Health
**Duration**: 2-3 hours
**Key Topics**:
- Medicaid conversion
- Prepaid charges
- Annual rate increases
- Financial metrics

**Learning Objectives**:
- Maintain compliance
- Manage financial health
- Plan for sustainability

## Troubleshooting

### Common Issues

#### Port Already in Use
**Error**: `Port 3000 is already in use`

**Solution**:
```bash
# Find process using port 3000
lsof -ti:3000

# Kill process (replace PID with actual process ID)
kill -9 PID

# Or use different port
PORT=3001 npm run dev
```

#### Module Not Found Errors
**Error**: `Cannot find module`

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
**Error**: Build fails with TypeScript errors

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

#### Styling Issues
**Error**: Tailwind classes not working

**Solution**:
- Verify `tailwind.config.ts` includes correct paths
- Check `postcss.config.js` is present
- Restart development server

### Performance Issues

#### Slow Loading
- Clear browser cache
- Check internet connection
- Close other applications
- Restart development server

#### Memory Issues
- Close unused browser tabs
- Increase Node.js memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run dev`

## Advanced Features

### Customization

#### Adding New Modules
1. Create directory: `app/module-7/`
2. Create `page.tsx` with ModuleLayout component
3. Update home page navigation
4. Add to handbook

#### Modifying Styles
- Global styles: `app/globals.css`
- Component styles: Inline Tailwind classes
- Custom components: `components/` directory

### Deployment

#### Production Build
```bash
npm run build
npm start
```

#### Environment Setup
- Set `NODE_ENV=production`
- Configure environment variables
- Set up domain and SSL
- Configure CDN if needed

## Best Practices

### For Consultants
1. **Complete modules sequentially** - Don't skip ahead
2. **Take notes** - Document key insights
3. **Practice templates** - Use with real scenarios
4. **Review regularly** - Refresh knowledge monthly
5. **Stay updated** - Check for curriculum updates

### For Administrators
1. **Regular backups** - Save progress and notes
2. **Version control** - Track customizations
3. **User feedback** - Collect and implement improvements
4. **Security** - Keep dependencies updated
5. **Documentation** - Maintain custom modifications

## FAQ

### General Questions

**Q: How long does it take to complete the curriculum?**
A: Approximately 12-18 hours for all 6 modules, plus exam time.

**Q: Can I skip modules?**
A: Not recommended. Each module builds on previous knowledge.

**Q: Is there a certificate?**
A: The exam provides a certification level (Master/Junior/Care-Giver Mindset).

**Q: Can I use this offline?**
A: After initial setup, the app runs locally. Some features may require internet.

### Technical Questions

**Q: What if I encounter errors?**
A: See Troubleshooting section. Common issues are documented.

**Q: Can I customize the content?**
A: Yes, all content is in the `app/` directory and can be modified.

**Q: How do I update the curriculum?**
A: Pull latest changes from repository or manually update files.

**Q: Is there a mobile app?**
A: The web app is responsive and works on mobile browsers.

### Content Questions

**Q: Are the pricing examples current?**
A: Examples are illustrative. Verify current market rates in your area.

**Q: Is this specific to Washington State?**
A: Some regulations (WAC, RCW) are Washington-specific. Adapt to your state.

**Q: Can I share this with others?**
A: Check license terms. Generally, personal use is permitted.

## Support and Resources

### Additional Resources
- Module pages contain detailed information
- Handbook provides comprehensive reference
- Checklists offer practical tools
- Templates are ready to use

### Getting Help
1. Review this manual
2. Check module-specific content
3. Review FAQ section
4. Consult handbook for detailed guidance

## Version History

- **v1.0.0** (Current): Initial release with 6 modules, exam, and resources

## License

This curriculum is designed for training AFH Success Consultants. Refer to license terms for usage rights.

---

**Last Updated**: 2024
**Manual Version**: 1.0.0

