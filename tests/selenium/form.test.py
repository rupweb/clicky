from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

# Initialize the WebDriver (example uses Chrome)
driver = webdriver.Chrome()

# Replace with the URL where your form is located
url = "http://localhost:3000/contact"
driver.get(url)

# Allow time for the page to load
time.sleep(3)

# Find form fields and fill them out
name_input = driver.find_element(By.ID, "name")
name_input.send_keys("John Doe")

email_input = driver.find_element(By.ID, "email")
email_input.send_keys("johndoe@example.com")

message_input = driver.find_element(By.ID, "message")
message_input.send_keys("Hello, this is a test message.")

# Submit the form
submit_button = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
submit_button.click()

# Allow time for the form to be submitted
time.sleep(3)

# Close the browser
driver.quit()
