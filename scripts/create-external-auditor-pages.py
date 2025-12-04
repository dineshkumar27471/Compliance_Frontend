# Script to duplicate auditor pages to external-auditor
# This script systematically reads auditor files and creates external-auditor equivalents

import os
import re

# Define all auditor pages that need to be duplicated
auditor_pages = [
    "ComplianceAssessment/page.tsx",
    "ComplianceAssessment/submitted/page.tsx",
    "ComplianceAssessment/sent-back/page.tsx",
    "assessment-success/page.tsx",
    "compliance-domains/page.tsx",
    "compliance-sendback-confirm/page.tsx",
    "compliance-sendback-success/page.tsx",
    "dashboard/page.tsx",
    "review-assessment/page.tsx",
    "stakeholder/page.tsx",
    "statistical-assessment/page.tsx",
    "statistical-assessment/submitted/page.tsx",
    "statistical-assessment/sent-back/page.tsx",
    "statistical-principles/page.tsx",
    "statistical-principles/review/page.tsx",
    "statistical-sendback-confirm/page.tsx",
    "statistical-sendback-success/page.tsx",
    "statistical-success/page.tsx"
]

def convert_auditor_to_external(content):
    """Convert all auditor routes to external-auditor routes"""
    # Replace all instances of /auditor/ with /external-auditor/
    content = re.sub(r'href="/auditor/', r'href="/external-auditor/', content)
    content = re.sub(r'push\(\'/auditor/', r'push(\'/external-auditor/', content)
    content = re.sub(r'router\.push\("/auditor/', r'router.push("/external-auditor/', content)
    
    return content

print("External auditor pages creation script")
print(f"Total pages to duplicate: {len(auditor_pages)}")
