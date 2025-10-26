from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = browser.new_page()

    # Go to the home page
    page.goto("http://localhost:3000")

    # Wait for the hero section to be visible to ensure the page is loaded
    page.wait_for_selector('h1:has-text("Kebersihan Profesional, Hasil Maksimal")')

    # Take a screenshot
    page.screenshot(path="jules-scratch/final-verification/final_render.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
