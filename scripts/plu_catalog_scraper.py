import requests
from bs4 import BeautifulSoup
import json
import re

CATALOG_URL = "https://www.plu.edu/catalog-2025-2026/undergraduate-program/program-curriculum-information/"

# Helper to clean up whitespace
def clean(text):
    return re.sub(r'\s+', ' ', text).strip()

def get_department_links():
    resp = requests.get(CATALOG_URL)
    soup = BeautifulSoup(resp.text, 'html.parser')
    links = set()
    for a in soup.find_all('a', href=True):
        href = a['href']
        if '/undergraduate-program/program-curriculum-information/' in href and not href.endswith('program-curriculum-information/'):  # avoid self-link
            links.add(href)
    return sorted(links)

def extract_courses_from_page(url):
    resp = requests.get(url)
    soup = BeautifulSoup(resp.text, 'html.parser')
    courses = []
    # Search all text nodes for course patterns (e.g., CSCI 144 : Title)
    course_pattern = re.compile(r'([A-Z]{2,5} ?[0-9]{3}[A-Z]?) ?: ?(.{3,100})')
    seen = set()
    for tag in soup.find_all(True):
        text = tag.get_text(separator=' ', strip=True)
        for line in text.split('\n'):
            for match in course_pattern.finditer(line):
                code = clean(match.group(1))
                title = clean(match.group(2))
                key = (code, title)
                if key in seen:
                    continue
                seen.add(key)
                # Try to get description (next sibling or next tag)
                desc = ''
                next_tag = tag.find_next_sibling()
                if next_tag:
                    desc = clean(next_tag.get_text())
                courses.append({
                    'code': code,
                    'title': title,
                    'description': desc,
                    'department_url': url
                })
    return courses

def main():
    print("Fetching department links...")
    dept_links = get_department_links()
    print(f"Found {len(dept_links)} department/program pages.")
    all_courses = []
    for link in dept_links:
        print(f"Scraping {link} ...")
        try:
            courses = extract_courses_from_page(link)
            if courses:
                all_courses.extend(courses)
        except Exception as e:
            print(f"Error scraping {link}: {e}")
    print(f"Extracted {len(all_courses)} courses.")
    with open("plu_courses.json", "w") as f:
        json.dump(all_courses, f, indent=2)
    print("Saved plu_courses.json")

if __name__ == "__main__":
    main()
