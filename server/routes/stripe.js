const router = require("express").Router();
const KEY =
  "sk_test_51K6wdTFUcgfXJqjz1bh7z2YRFcD26QLPsI2yuIShfv6Uq1HsZkXMhUr3lZkKaXp8qgOjWUyA5WlYpCmgmuZOpwxf000V9VDSlt";
const stripe = require("stripe")(
  "sk_test_51K6wdTFUcgfXJqjz1bh7z2YRFcD26QLPsI2yuIShfv6Uq1HsZkXMhUr3lZkKaXp8qgOjWUyA5WlYpCmgmuZOpwxf000V9VDSlt"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
