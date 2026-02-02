import { Before,After, setDefaultTimeout } from "@cucumber/cucumber";
import { LoginPage } from "../Pages/LoginPage.js";
import { SearchHotel } from "../Pages/SearchHotel.js";
import { SelectHotel } from "../Pages/SelectHotel.js";
import { BookHotelPage } from "../Pages/BookHotelPage.js";
import { ConfirmPage } from "../Pages/ConfirmPage.js";
import { LogoutPage } from "../Pages/LogoutPage.js";

setDefaultTimeout(60000);

Before(async function() {
    await this.openBrowser();
    this.LoginPage = new LoginPage(this.page)
    this.SearchHotel = new SearchHotel(this.page)
    this.SelectHotel = new SelectHotel(this.page)
    this.BookHotelPage = new BookHotelPage(this.page)
    this.ConfirmPage = new ConfirmPage(this.page)
    this.LogoutPage = new LogoutPage(this.page)
});

After(async function() {
    await this.closeBrowser();

})
