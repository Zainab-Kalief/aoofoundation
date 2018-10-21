function payWithPaystack(email, amount, phoneNumber) {
  var handler = PaystackPop.setup({
    key: "pk_test_a55f0109eeab8fd7bac960dff5b442a755bc983b", //put your public key here
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
      //after the transaction have been completed
      //make post call  to the server with to verify payment
      //using transaction reference as post data
      $.post("verify.php", { reference: response.reference }, function(status) {
        // if (status == "success")
        //   //successful transaction
        //   alert("Transaction was successful");
        // //transaction failed
        // else alert(response);
      });
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
