from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Verify Main Page
    page.goto("http://localhost:3000")
    page.screenshot(path="jules-scratch/verification/main-page.png")

    # Verify Blog Page
    page.goto("http://localhost:3000/blog")
    page.screenshot(path="jules-scratch/verification/blog-page.png")

    # Verify Blog Post Page
    page.click('a[href="/blog/5-tips-membersihkan-rumah-dengan-cepat"]')
    page.wait_for_load_state('networkidle')
    page.screenshot(path="jules-scratch/verification/blog-post-page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
