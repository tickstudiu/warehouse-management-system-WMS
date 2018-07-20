// Global vatiable

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
      else if (keyValue == 3) {
        setCard3(title, information, amount, sub);
      }
      else if (keyValue == 4) {
        setCard4(title, information, amount, sub);
      }
      else if (keyValue == 5) {
        setCard5(title, information, amount, sub);
      }
      else if (keyValue == 6) {
        setCard6(title, information, amount, sub);
      }
      else if (keyValue == 6) {
        setCard6(title, information, amount, sub);
      }
      else if (keyValue == 7) {
        setCard7(title, information, amount, sub);
      }
      else if (keyValue == 8) {
        setCard8(title, information, amount, sub);
      }
      else if (keyValue == 9) {
        setCard9(title, information, amount, sub);
      }
      else if (keyValue == 10) {
        setCard10(title, information, amount, sub);
      }
      else if (keyValue == 11) {
        setCard11(title, information, amount, sub);
      }
      else if (keyValue == 12) {
        setCard12(title, information, amount, sub);
      }
      else if (keyValue == 13) {
        setCard13(title, information, amount, sub);
      }
      else if (keyValue == 14) {
        setCard14(title, information, amount, sub);
      }
      else if (keyValue == 15) {
        setCard15(title, information, amount, sub);
      }
      else if (keyValue == 16) {
        setCard16(title, information, amount, sub);
      }
      else if (keyValue == 17) {
        setCard17(title, information, amount, sub);
      }
      else if (keyValue == 18) {
        setCard18(title, information, amount, sub);
      }
      else if (keyValue == 19) {
        setCard19(title, information, amount, sub);
      }
      else if (keyValue == 20) {
        setCard20(title, information, amount, sub);
      }
      else if (keyValue == 21) {
        setCard21(title, information, amount, sub);
      }
      else if (keyValue == 22) {
        setCard22(title, information, amount, sub);
      }


    });
  });
}

function setCard1(title, info, amount, sub){

  // Card1
  var titleCard1 = $('#title1');
  var subCard1 = $('#sub1');
  var infomationCard1 = $('#infomation1');
  var numberCard1 = $('#number1');

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

  // Card2
  var titleCard2 = $('#title2');
  var subCard2 = $('#sub2');
  var infomationCard2 = $('#infomation2');
  var numberCard2 = $('#number2');

  titleCard2.html(title);
  infomationCard2.html(info);
  subCard2.html(sub);

  if(amount == 0){
    numberCard2.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard2.addClass("text-warning");
  }

  numberCard2.html(amount + " Piece");
}

function setCard3(title, info, amount, sub){

  // Card3
  var titleCard3 = $('#title3');
  var subCard3 = $('#sub3');
  var infomationCard3 = $('#infomation3');
  var numberCard3 = $('#number3');

  titleCard3.html(title);
  infomationCard3.html(info);
  subCard3.html(sub);

  if(amount == 0){
    numberCard3.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard3.addClass("text-warning");
  }

  numberCard3.html(amount + " Piece");
}

function setCard4(title, info, amount, sub){

  // Card3
  var titleCard4 = $('#title4');
  var subCard4 = $('#sub4');
  var infomationCard4 = $('#infomation4');
  var numberCard4 = $('#number4');

  titleCard4.html(title);
  infomationCard4.html(info);
  subCard4.html(sub);

  if(amount == 0){
    numberCard4.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard4.addClass("text-warning");
  }

  numberCard4.html(amount + " Piece");
}

function setCard4(title, info, amount, sub){

  // Card3
  var titleCard4 = $('#title4');
  var subCard4 = $('#sub4');
  var infomationCard4 = $('#infomation4');
  var numberCard4 = $('#number4');

  titleCard4.html(title);
  infomationCard4.html(info);
  subCard4.html(sub);

  if(amount == 0){
    numberCard4.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard4.addClass("text-warning");
  }

  numberCard4.html(amount + " Piece");
}

function setCard5(title, info, amount, sub){

  // Card5
  var titleCard5 = $('#title5');
  var subCard5 = $('#sub5');
  var infomationCard5 = $('#infomation5');
  var numberCard5 = $('#number5');

  titleCard5.html(title);
  infomationCard5.html(info);
  subCard5.html(sub);

  if(amount == 0){
    numberCard5.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard5.addClass("text-warning");
  }

  numberCard5.html(amount + " Piece");
}

function setCard6(title, info, amount, sub){

  // Card6
  var titleCard6 = $('#title6');
  var subCard6 = $('#sub6');
  var infomationCard6 = $('#infomation6');
  var numberCard6 = $('#number6');

  titleCard6.html(title);
  infomationCard6.html(info);
  subCard6.html(sub);

  if(amount == 0){
    numberCard6.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard6.addClass("text-warning");
  }

  numberCard6.html(amount + " Piece");
}

function setCard7(title, info, amount, sub){

  // Card7
  var titleCard7 = $('#title7');
  var subCard7 = $('#sub7');
  var infomationCard7 = $('#infomation7');
  var numberCard7 = $('#number7');

  titleCard7.html(title);
  infomationCard7.html(info);
  subCard7.html(sub);

  if(amount == 0){
    numberCard7.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard7.addClass("text-warning");
  }

  numberCard7.html(amount + " Piece");
}

function setCard8(title, info, amount, sub){

  // Card8
  var titleCard8 = $('#title8');
  var subCard8 = $('#sub8');
  var infomationCard8 = $('#infomation8');
  var numberCard8 = $('#number8');

  titleCard8.html(title);
  infomationCard8.html(info);
  subCard8.html(sub);

  if(amount == 0){
    numberCard8.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard8.addClass("text-warning");
  }

  numberCard8.html(amount + " Piece");
}

function setCard9(title, info, amount, sub){

  // Card9
  var titleCard9 = $('#title9');
  var subCard9 = $('#sub9');
  var infomationCard9 = $('#infomation9');
  var numberCard9 = $('#number9');

  titleCard9.html(title);
  infomationCard9.html(info);
  subCard9.html(sub);

  if(amount == 0){
    numberCard9.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard9.addClass("text-warning");
  }

  numberCard9.html(amount + " Piece");
}

function setCard10(title, info, amount, sub){

  // Card10
  var titleCard10 = $('#title10');
  var subCard10 = $('#sub10');
  var infomationCard10 = $('#infomation10');
  var numberCard10 = $('#number10');

  titleCard10.html(title);
  infomationCard10.html(info);
  subCard10.html(sub);

  if(amount == 0){
    numberCard10.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard10.addClass("text-warning");
  }

  numberCard10.html(amount + " Piece");
}

function setCard11(title, info, amount, sub){

  // Card11
  var titleCard11 = $('#title11');
  var subCard11 = $('#sub11');
  var infomationCard11 = $('#infomation11');
  var numberCard11 = $('#number11');

  titleCard11.html(title);
  infomationCard11.html(info);
  subCard11.html(sub);

  if(amount == 0){
    numberCard11.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard11.addClass("text-warning");
  }

  numberCard11.html(amount + " Piece");
}

function setCard12(title, info, amount, sub){

  // Card12
  var titleCard12 = $('#title12');
  var subCard12 = $('#sub12');
  var infomationCard12 = $('#infomation12');
  var numberCard12 = $('#number12');

  titleCard12.html(title);
  infomationCard12.html(info);
  subCard12.html(sub);

  if(amount == 0){
    numberCard12.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard12.addClass("text-warning");
  }

  numberCard12.html(amount + " Piece");
}

function setCard13(title, info, amount, sub){

  // Card13
  var titleCard13 = $('#title13');
  var subCard13 = $('#sub13');
  var infomationCard13 = $('#infomation13');
  var numberCard13 = $('#number13');

  titleCard13.html(title);
  infomationCard13.html(info);
  subCard13.html(sub);

  if(amount == 0){
    numberCard13.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard13.addClass("text-warning");
  }

  numberCard13.html(amount + " Piece");
}

function setCard14(title, info, amount, sub){

  // Card14
  var titleCard14 = $('#title14');
  var subCard14 = $('#sub14');
  var infomationCard14 = $('#infomation14');
  var numberCard14 = $('#number14');

  titleCard14.html(title);
  infomationCard14.html(info);
  subCard14.html(sub);

  if(amount == 0){
    numberCard14.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard14.addClass("text-warning");
  }

  numberCard14.html(amount + " Piece");
}

function setCard15(title, info, amount, sub){

  // Card15
  var titleCard15 = $('#title15');
  var subCard15 = $('#sub15');
  var infomationCard15 = $('#infomation15');
  var numberCard15 = $('#number15');

  titleCard15.html(title);
  infomationCard15.html(info);
  subCard15.html(sub);

  if(amount == 0){
    numberCard15.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard15.addClass("text-warning");
  }

  numberCard15.html(amount + " Piece");
}

function setCard16(title, info, amount, sub){

  // Card16
  var titleCard16 = $('#title16');
  var subCard16 = $('#sub16');
  var infomationCard16 = $('#infomation16');
  var numberCard16 = $('#number16');

  titleCard16.html(title);
  infomationCard16.html(info);
  subCard16.html(sub);

  if(amount == 0){
    numberCard16.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard16.addClass("text-warning");
  }

  numberCard16.html(amount + " Piece");
}

function setCard17(title, info, amount, sub){

  // Card17
  var titleCard17 = $('#title17');
  var subCard17 = $('#sub17');
  var infomationCard17 = $('#infomation17');
  var numberCard17 = $('#number17');

  titleCard17.html(title);
  infomationCard17.html(info);
  subCard17.html(sub);

  if(amount == 0){
    numberCard17.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard17.addClass("text-warning");
  }

  numberCard17.html(amount + " Piece");
}

function setCard18(title, info, amount, sub){

  // Card18
  var titleCard18 = $('#title18');
  var subCard18 = $('#sub18');
  var infomationCard18 = $('#infomation18');
  var numberCard18 = $('#number18');

  titleCard18.html(title);
  infomationCard18.html(info);
  subCard18.html(sub);

  if(amount == 0){
    numberCard18.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard18.addClass("text-warning");
  }

  numberCard18.html(amount + " Piece");
}

function setCard19(title, info, amount, sub){

  // Card19
  var titleCard19 = $('#title19');
  var subCard19 = $('#sub19');
  var infomationCard19 = $('#infomation19');
  var numberCard19 = $('#number19');

  titleCard19.html(title);
  infomationCard19.html(info);
  subCard19.html(sub);

  if(amount == 0){
    numberCard19.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard19.addClass("text-warning");
  }

  numberCard19.html(amount + " Piece");
}

function setCard20(title, info, amount, sub){

  // Card20
  var titleCard20 = $('#title20');
  var subCard20 = $('#sub20');
  var infomationCard20 = $('#infomation20');
  var numberCard20 = $('#number20');

  titleCard20.html(title);
  infomationCard20.html(info);
  subCard20.html(sub);

  if(amount == 0){
    numberCard20.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard20.addClass("text-warning");
  }

  numberCard20.html(amount + " Piece");
}

function setCard21(title, info, amount, sub){

  // Card21
  var titleCard21 = $('#title21');
  var subCard21 = $('#sub21');
  var infomationCard21 = $('#infomation21');
  var numberCard21 = $('#number21');

  titleCard21.html(title);
  infomationCard21.html(info);
  subCard21.html(sub);

  if(amount == 0){
    numberCard21.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard21.addClass("text-warning");
  }

  numberCard21.html(amount + " Piece");
}

function setCard22(title, info, amount, sub){

  // Card22
  var titleCard22 = $('#title22');
  var subCard22 = $('#sub22');
  var infomationCard22 = $('#infomation22');
  var numberCard22 = $('#number22');

  titleCard22.html(title);
  infomationCard22.html(info);
  subCard22.html(sub);

  if(amount == 0){
    numberCard22.addClass("text-danger");
  }
  else if (amount <= 5) {
    numberCard22.addClass("text-warning");
  }

  numberCard22.html(amount + " Piece");
}
