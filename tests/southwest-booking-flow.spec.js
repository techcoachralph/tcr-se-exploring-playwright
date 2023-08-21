import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.southwest.com');

    //Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Southwest Airlines/);

    // choose LGA for departure
    const departureInputField = page.locator('#LandingAirBookingSearchForm_originationAirportCode');
    const destinationInputField = page.locator("#LandingAirBookingSearchForm_destinationAirportCode");
    await departureInputField.fill("LGA");
    // choose LAX for destination
    await destinationInputField.fill("LAX")
    // choose dates
    //departure date => next month second friday
    await page.locator("#LandingAirBookingSearchForm_departureDate").fill("9/08")


    // return date
    // third tuesday
    await page.locator("#LandingAirBookingSearchForm_returnDate").fill("9/12")
    //click search button
    await page.locator("#LandingAirBookingSearchForm_submit-button").click()

    // validate that depart heading shows up
    await expect(page).toHaveTitle(/Select Flights/)
    // click the first business select departing flight


    //click the first business select returning flight

    //click continue button

    //verify header title of trip & price details

    // click continue

    // fill out form
    //name, middle name, last name
    //dob, gender

    //contact method, phone number

    //enter billing info
    //card type, cc #, exp date, cvv code, first/last name on card

    //enter billing address
    // street address, city, state, zip
    // phone number

    //email address for receipt

    // click purchase button


});