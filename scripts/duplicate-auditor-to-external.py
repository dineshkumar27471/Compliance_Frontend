#!/usr/bin/env python3
"""
Script to duplicate all auditor pages to external-auditor with route updates.
Run this script to create all remaining external-auditor pages.
"""

import os
import re
from pathlib import Path

# Define all auditor pages that need duplication
AUDITOR_PAGES = [
    "compliance-domains/page.tsx",
    "ComplianceAssessment/submitted/page.tsx",
    "ComplianceAssessment/sent-back/page.tsx",
    "compliance-sendback-confirm/page.tsx",
    "compliance-sendback-success/page.tsx",
    "statistical-assessment/submitted/page.tsx",
    "statistical-assessment/sent-back/page.tsx",
    "statistical-sendback-confirm/page.tsx",
    "statistical-sendback-success/page.tsx",
    "assessment-success/page.tsx",
    "statistical-success/page.tsx",
    "review-assessment/page.tsx",
    "statistical-principles/review/page.tsx"
]

def convert_routes(content):
    """Convert all /auditor/ routes to /external-auditor/"""
    # Replace hrefs
    content = re.sub(r'href="/auditor/', r'href="/external-auditor/', content)
    # Replace router.push
    content = re.sub(r"push\('/auditor/", r"push('/external-auditor/", content)
    content = re.sub(r'push\("/auditor/', r'push("/external-auditor/', content)
    # Replace Link components
    content = re.sub(r'<Link href="/auditor/', r'<Link href="/external-auditor/', content)
    return content

def main():
    print("Duplicating auditor pages to external-auditor...")
    print(f"Total pages: {len(AUDITOR_PAGES)}")
    
    for page_path in AUDITOR_PAGES:
        source = f"app/auditor/{page_path}"
        dest = f"app/external-auditor/{page_path}"
        
        print(f"Processing: {source} -> {dest}")
        
        # Create directory structure
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        
        # Read, convert, and write
        try:
            with open(source, 'r') as f:
                content = f.read()
            
            converted_content = convert_routes(content)
            
            with open(dest, 'w') as f:
                f.write(converted_content)
            
            print(f"  ✓ Created: {dest}")
        except Exception as e:
            print(f"  ✗ Error: {e}")
    
    print("\nDone! All external-auditor pages created.")

if __name__ == "__main__":
    main()
