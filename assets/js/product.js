// Global vatiable
  // Card1
  var titleCard1 = $('#title1');
  var subCard1 = $('#sub1');
  var infomationCard1 = $('#infomation1');
  var numberCard1 = $('#number1');

  // Card2
  var titleCard2 = $('#title2');
  var subCard2 = $('#sub2');
  var infomationCard2 = $('#infomation2');
  var numberCard2 = $('#number2');

  // Card3
  var titleCard3 = $('#title3');
  var subCard3 = $('#sub3');
  var infomationCard3 = $('#infomation1');
  var numberCard3 = $('#number3');

// when website on loading will query database at firebase
window.onload = function() {
  // Get datebase of Product
  getDataProduct();

}

function getDataProduct(){
  // On Product
  var dbProductRef = firebase.database().ref("products");

  dbProductRef.once('value').then(function(dataSnap){
    // On Buget -> (key)

    dataSnap.forEach(function(dataChildSnap) {
      // On Buget -> (key) -> Child

      // Get key and value at child node
      var keyValue = dataChildSnap.key;
      var allValue = dataChildSnap.val();

      // Extend value object to get infomation
      var title = allValue.title;
      var amount = allValue.amount;
      var information = allValue.information;
      var sub = allValue.subtitle;

      // log to see what happen when website on loading
      console.log(title, amount, information, sub);


      // Set data to each card in product
      if (keyValue == 1) {
        setCard1(title, information, amount, sub);
      }
      else if (keyValue == 2) {
        setCard2(title, information, amount, sub);
      }

    });
  });
}

function setCard1(title, info, amount, sub){
  titleCard1.html(title);
  infomationCard1.html(info);
  subCard1.html(sub);

  if(amount == 0){
    numberCard1.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard1.addClass("text-warning");
  }

  numberCard1.html(amount + " Piece");
}

function setCard2(title, info, amount, sub){
  titleCard2.html(title);
  infomationCard2.html(info);
  subCard2.html(sub);

  if(amount < 10){
    numberCard2.addClass("text-warning");
  }

  numberCard2.html(amount + " Piece");
}
