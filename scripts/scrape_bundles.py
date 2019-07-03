# GOAL OF THIS SOFTWARE: print 'Bundles of Pelican Town with their Contents:' &c, in Terminal
## please install PYTHON3, CHROMEDRIVER, SELENIUM, then proceed
### run this in Terminal by: ```python3 bundles.py```
#### have a nice day

from selenium import webdriver 
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC 
from selenium.common.exceptions import TimeoutException

# make sure you also add CHROMEDRIVER to system path (or to this folder ;)
driver = webdriver.Chrome('./chromedriver')

# surfs Incognito => scrapes better ^_^
option = webdriver.ChromeOptions()
option.add_argument("--incognito")

# launches Chrome
browser = webdriver.Chrome(executable_path='./chromedriver', chrome_options=option)

# surfs to this URL
browser.get("https://stardewvalleywiki.com/Bundles")


###
##
# internet lag timeout (error handling)
timeout = 30
try:
	# checking for element in nav to load (the only <li> with id='pt-createaccount' )
	WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, "//li[@id='pt-createaccount']")))
except TimeoutException:
	print("Page takes too long to load-- try again")
	browser.quit()
#
##
###



# scraping Bundle info; 2 metadata elements: name & image alt 

# scraping bundle name from id; each bundle has its own table heading element 
results = browser.find_elements_by_xpath("//th[@colspan='4']")
# parsing returned objects into desired items ('list comprehension')
bundle_name = [x.get_attribute('id') for x in results]

# scraping bundle images; which are the only element w width='136'
results = browser.find_elements_by_xpath("//img[@width='136']")
# parsing returned objects into desired items ('list comprehension')
bundle_img = [x.get_attribute('alt') for x in results]


# display results in Terminal
print('Bundles of Pelican Town:')

## combine and match array elements, displaying entire list
### next step is to save images to files
for bundle_name, bundle_img in zip(bundle_name, bundle_img):
	print("Let's save " + bundle_img + " as ==> " + bundle_name +".png")


