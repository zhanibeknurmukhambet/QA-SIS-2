# Test Code Review

## Review Summary

The project contains five automated UI tests implemented with JavaScript and Playwright Test.

## Review Results

- **TC1 — Registration:** Uses a unique email address for each run and checks for a registration confirmation.
- **TC2 — Login:** Checks successful login with valid credentials and rejection of invalid credentials.
- **TC3 — Product Purchase:** Checks that a product can be added to the cart, appears in the cart, and the checkout flow can be accessed.
- **TC4 — Product Comparison:** Checks that two product names differ and that both product pages display a price.
- **TC5 — Password Reset:** Submits a password reset request and checks for a confirmation message.

## Improvements Made

- Removed unnecessary debugging output from the login test.
- Retrieved the product name before opening its product page in the purchase test.
- Improved the checks that ensure displayed prices are not empty.

## Limitations

- The tests depend on the availability and current behavior of the demo website.
- The login test uses a predefined demo account.
- The registration test uses a generated email address, but successful registration depends on the website accepting the submitted test data.
- TC4 checks that both products display prices but does not verify that the prices are numerically different.
- TC3 checks access to the checkout flow but does not complete a purchase.

## Conclusion

The tests cover registration, login, cart functionality, product information, and password reset. They provide basic automated UI coverage, but additional assertions would be required for more comprehensive end-to-end validation.