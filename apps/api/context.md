# Xtopay – API & Payment Form Context

This document provides context for how the Xtopay backend API (`apps/api`) interacts with the payment form (`apps/pay`) to process payment initiation securely.

---

## 🔁 Overview

The `apps/pay` app is the **public payment form** used by end customers.

The `apps/api` app is the **secure backend API** that:
- Authenticates businesses using API credentials.
- Initiates payment requests.
- Verifies business identity before allowing payment.

---

## 🧩 Key Flow: Payment Initiation

1. **Business Integrates Xtopay Form**
   - Business embeds a script or iframe that loads the payment form from `pay.xtopay.com`.
   - They pass the following:
     - `business_id`
     - `Authorization` header: `Basic base64(api_id:api_key)`

2. **Payment Form Loads**
   - On load, the form sends a POST request to the Xtopay API:
     ```
     POST https://api.xtopay.com/v1/business/info
     ```
     with:
     ```json
     {
       "business_id": "080000"
     }
     ```

3. **API Authenticates Request**
   - The API decodes the `Authorization` header.
   - It checks the `business_id`, `api_id`, and `api_key` against the database.
   - If valid, it returns:
     ```json
     {
       "name": "Green Market",
       "logo": "https://cdn.xtopay.com/logos/green-market.png"
     }
     ```

4. **Form Displays Business Info**
   - The form renders the business name/logo to assure customers.

5. **User Enters Payment Details**
   - Name, phone number, amount, payment method.

6. **Form Calls Payment Initiation API**

POST [https://api.xtopay.com/v1/payment/initiate](https://api.xtopay.com/v1/payment/initiate)

```
With payload:
```
{
  "business_id": "080000",
  "amount": 50,
  "phone": "0541234567",
  "channel": "mtn",
  "reference": "ORDER-2390"
}
```

7. **API Forwards to xtopay-engine**

   * API calls `xtopay-engine` (internal service) to handle payment routing.
   * If successful, the engine returns a `transaction_id`, `status`, and `redirect_url` if needed.

8. **Form Shows Confirmation or Redirects**

---

## 🔐 Security Notes

* All business verification is done on the backend (`apps/api`).
* `xtopay-engine` is **not** exposed publicly.
* All requests to `xtopay-engine` use internal tokens or secrets.

---

## 📁 Key Files

| File                  | Location                                     | Description                                             |
| --------------------- | -------------------------------------------- | ------------------------------------------------------- |
| `business/info.ts`    | `apps/api/src/routes/v1/business/info.ts`    | Validates API credentials and returns business metadata |
| `payment/initiate.ts` | `apps/api/src/routes/v1/payment/initiate.ts` | Handles payment request and forwards to engine          |
| `Form.tsx`            | `apps/pay/components/Form.tsx`               | Renders UI and initiates requests                       |
| `engine/index.ts`     | `xtopay-engine/src/index.ts`                 | Internal processing service                             |

---

## 🔮 Future Plans

* Add signature verification or JWT tokens for better security.
* Add webhook support for status updates.
* Add retry queue and analytics.

---

## 👨‍💻 Maintainers

* Collins Joe – Founder & Lead Engineer
* [Add other maintainers here]

