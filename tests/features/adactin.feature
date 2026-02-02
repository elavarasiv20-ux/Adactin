Feature: Validating the Adactin hotel booking application

# @adactin
Scenario: Login with valid Credentials
Given navigate to adaction application
When enter the username in username field
And enter the password in password field
Then click the login button and it navigate to search hotel page

# @adactinAll
# Scenario Outline: Login with multiple user
# Given navigate to adaction application
# When enter the "<username>" in username field
# And enter the "<password>" in password field
# Then click the login button and it navigate to search hotel page

# Examples:
# |username||password|
# |Thendral1996||9C8889|
# |manishbro||manish@123|

# Scenario: Search Hotel In Adactin Application
When Select the Location
And Select the Hotel Name
And Select the Room Type
And Select the Number Of Rooms
And Enter the Check In Date
And Enter the Check Out Date
And Select the Adults per Room
And Select the Children per Roo
Then Click the Search Button And It Navigates to Select Hotel Page

# # Scenario: Select A Specific Hotel From The Search Results
When Click The checkbox
Then Click The Continue Button And It Navigates to Personal Detail page

# Scenario: User Fill Personal Details in Book hotel page
When Enter The First Name
And Enter The Last Name
And Enter The Billing Address
And Enter The Credit Card Number
And Select The Credit Card Type
And Select The Expiry Date Of Credit Cards Month
And Select The Expiry Date Of Credit Cards Year
And Enter CCV Number
Then Click The Book Now Button And It Navigate To Booking Confirmation Page

# Scenario: Confrim The Hotel Booking
Then Click My Itinerary Button And It Navigate To Booked Itinerary Page

# Scenario: Logout The page
When Select The Particular Order Id
Then Click The Logout Button And It Will Logout The Page






