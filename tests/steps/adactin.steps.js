import{Given,When,Then} from '@cucumber/cucumber';
 import { LoginPage } from '../Pages/LoginPage.js';
 import { SearchHotel } from '../Pages/SearchHotel.js';
 import { SelectHotel } from '../Pages/SelectHotel.js';
 import { BookHotelPage } from '../Pages/BookHotelPage.js';
 import { ConfirmPage } from '../Pages/ConfirmPage.js';
 import { LogoutPage } from '../Pages/LogoutPage.js';

 let loginpage;
 let searchhotel;
 let selecthotel;
 let bookhotelpage;
 let bookconfirm;
 let logoutpage;

Given('navigate to adaction application', async function () {
          loginpage =new LoginPage(this.page);
          await loginpage.Launch();
         });
When('enter the username in username field',async function () {
           await loginpage.enterUserName('Thendral1996')
         });  
          When('enter the {string} in username field',async function (string) {
          await loginpage.enterUserName(string) 
         });
When('enter the password in password field',async function () {
         await loginpage.enterPassword('9C8889')
         });
          When('enter the {string} in password field',async function (string) {
          await loginpage.enterPassword(string)
         });
Then('click the login button and it navigate to search hotel page',async function () {
           await loginpage.submitButton()
         })

When('Select the Location',async function () {
          searchhotel = new SearchHotel(this.page);
          await searchhotel.selectLocation({index: 1})
         });
 When('Select the Hotel Name',async function () {
           await searchhotel.selectHotel({index: 1})
         });
 When('Select the Room Type',async function () {
          await searchhotel.selectRoomType({index: 1})
         });
 When('Select the Number Of Rooms',async function () {
           await searchhotel.numberOfRooms({index: 1})
         });
 When('Enter the Check In Date',async function () {
            await searchhotel.checkInDate('10/2/2026')
         });
When('Enter the Check Out Date',async function () {
            await searchhotel.checkOutDate('12/2/2026')
         });
 When('Select the Adults per Room',async function () {
           await searchhotel.adultPerRoom({index: 1})
         });
When('Select the Children per Roo',async function () {
          await searchhotel.childrenPerRoom({index: 1})
         });
Then('Click the Search Button And It Navigates to Select Hotel Page',async function () {
         await searchhotel.searchbutton()
         });
 When('Click The checkbox',async function () {
       selecthotel = new SelectHotel(this.page);
       await selecthotel.radioButton()
         });
Then('Click The Continue Button And It Navigates to Personal Detail page',async function () {
           await selecthotel.continueButton()
         });
   When('Enter The First Name',async function () {
    bookhotelpage = new BookHotelPage(this.page);
    await bookhotelpage.firstName('Thendral')
         });
    When('Enter The Last Name',async function () {
           await bookhotelpage.lastName('v')
         });              
When('Enter The Billing Address',async function () {
           await bookhotelpage.address('sholinganallur,chennai')
         });
 When('Enter The Credit Card Number',async function () {
        await bookhotelpage.creditCardNumber('1234567890123456')
         });
 When('Select The Credit Card Type',async function () {
           await bookhotelpage.creditCardType({index: 1})
         });
When('Select The Expiry Date Of Credit Cards Month',async function () {
          await bookhotelpage.expiryMonth({index: 1})
         });
 When('Select The Expiry Date Of Credit Cards Year',async function () {
           await bookhotelpage.expiryYear({index: 18})
         });

 When('Enter CCV Number',async function () {
          await bookhotelpage.cvvNumber('123')
         });
 Then('Click The Book Now Button And It Navigate To Booking Confirmation Page',async function () {
          await bookhotelpage.bookNow()
         }); 
 Then('Click My Itinerary Button And It Navigate To Booked Itinerary Page',async function () {
          bookconfirm =new ConfirmPage(this.page);
await bookconfirm.Itinerary()
         });
  When('Select The Particular Order Id',async function () {
           logoutpage =new LogoutPage(this.page);
           await logoutpage.checkBox()
         });
Then('Click The Logout Button And It Will Logout The Page',async function () {
          await logoutpage.logOutPage()
         });
