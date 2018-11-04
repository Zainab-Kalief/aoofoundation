function payWithPaystack(email, amount, phoneNumber) {
  var handler = PaystackPop.setup({
    key: "pk_live_581c2678dad6df6a22deb1361d3304498b5dfc12",
    email: email, //put your customer's email here
    amount: amount + "00", //amount the customer is supposed to pay
    metadata: {
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: phoneNumber //customer's mobile number
        }
      ]
    },
    callback: function(response) {
      console.log(response);
      if (response.status == "success") {
        window.location.reload(true);
      }
    },
    onClose: function() {
      //when the user close the payment modal
      //   alert("Transaction cancelled");
    }
  });
  handler.openIframe(); //open the paystack's payment modal
}

function isNumberKey(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

  return true;
}
