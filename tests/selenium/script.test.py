from selenium import webdriver
from selenium.webdriver.chrome.service import Service

# Path to ChromeDriver
driver_path = "e:/chromedriver/chromedriver.exe"

# Initialize WebDriver with the new syntax
service = Service(executable_path=driver_path)
driver = webdriver.Chrome(service=service)

# Open a webpage
driver.get("https://www.google.com")

# Close the browser
driver.quit()