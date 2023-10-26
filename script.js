document.addEventListener('DOMContentLoaded', function () {
    CollectJS.configure({
      'callback': function (response) {
        document.getElementById("paymentTokenInfo").innerHTML =
          '<b>Payment Token:</b> ' + response.token +
          '<br><b>Card:</b> ' + response.card.number +
          '<br><b>BIN/EIN:</b> ' + response.card.bin +
          '<br><b>Expiration:</b> ' + response.card.exp +
          '<br><b>Hash:</b> ' + response.card.hash +
          '<br><b>Card Type:</b> ' + response.card.type +
          '<br><b>Check Account Name:</b> ' + response.check.name +
          '<br><b>Check Account Number:</b> ' + response.check.account +
          '<br><b>Check Account Hash:</b> ' + response.check.hash +
          '<br><b>Check Routing Number:</b> ' + response.check.aba;
      },
      variant: 'inline',
      googleFont: 'Poppins',
      invalidCss: {
        color: '#FF3838'
      },
      validCss: {
        color: '#14855F'
      },
      customCss: {
        'border-color': '#FFFFFF',
        'border-style': 'solid'
      },
      focusCss: {
        'border-color': '#548B59',
        'border-style': 'solid',
        'border-width': '1px',
        'box-shadow': '0px 4px 4px 0px rgba(84, 139, 89, 0.20)'
      },
      fields: {
        cvv: {
          placeholder: 'CVV'
        },
        ccnumber: {
            placeholder: 'Credit Card'
        },
        ccexp: {
            placeholder: 'MM / YY'
        }
      }
    });
  });  