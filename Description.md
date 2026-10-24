# Automated Testing — Practice Software Testing

## Project Description

This project contains automated UI tests for [Practice Software Testing](https://practicesoftwaretesting.com/) using JavaScript and Playwright.

## Test Cases

### TC1 — Customer Registration
Verify that a new customer can complete the registration form and receive a success confirmation.

### TC2 — Valid and Invalid Login
Verify that a registered customer can log in with valid credentials and that invalid credentials are rejected.

### TC3 — Add Product to Cart and Checkout
Verify that a product can be added to the shopping cart, that the product appears in the cart, and that the checkout flow can be accessed.

### TC4 — Compare Two Products
Verify that two different products have different names and that a price is displayed for each product.

### TC5 — Password Reset
Verify that a customer can submit a password reset request and receives a confirmation message.

## Tools and Technologies

- JavaScript
- Playwright Test
- Node.js
- Chromium
- Visual Studio Code

## Execution

Run all tests:

```bash
npx playwright test
```

Run tests with a visible browser:

```bash
npx playwright test --headed
```

Generate an HTML report:

```bash
npx playwright test --reporter=html
npx playwright show-report
```