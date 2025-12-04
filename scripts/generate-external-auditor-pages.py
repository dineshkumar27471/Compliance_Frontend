"""
Automated script to generate all external-auditor pages
This script reads auditor pages and converts them to external-auditor versions
"""

import os
import re

def convert_auditor_to_external(content):
    """Convert all auditor paths to external-auditor paths"""
    # Replace all /auditor/ occurrences with /external-auditor/
    content = re.sub(r'/auditor/', '/external-auditor/', content)
    return content

# This script will be run by v0 to generate all remaining pages
print("Ready to generate external-auditor pages from auditor templates")
