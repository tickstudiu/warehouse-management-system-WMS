// Global vatiable
var tableOrder = $('#tableOrder');
var amountOrder = [];
var curentId = 0;
var strDate = '';

// when website on loading will query database at firebase
window.onload = function() {

  // Get current
  getId();

  // Get current amount each order
  getAmountOrder();

  // Get date
  getDateNow();

  // Get datebase of Product
  getDataOrder();

  // Set state of input
  setState();

}

function getAmountOrder(){

  // On Product
  var dbProductRef = firebase.database().ref("products");

  dbProductRef.once('value').then(function(dataSnap){
    // On Product -> (key)

    dataSnap.forEach(function(dataChildSnap) {
      // On Product -> (key) -> Child

      // Get key and value at child node
      var keyValue = dataChildSnap.key;
      var allValue = dataChildSnap.val();

      // Extend value object to get infomation
      var amount = allValue.amount;

      // Push variable to array
      amountOrder.push(amount);

    });
  });
}

function getId(){

  // On Infomation
  var dbInfoRef = firebase.database().ref("informations");

  dbInfoRef.once('value').then(function(dataChildSnap){
    // On Infomation -> Child

    // Get key and value at child node
    var keyValue = dataChildSnap.key;
    var allValue = dataChildSnap.val();

    // Extend value object to get infomation
    curentId = allValue.curentId;
  });
}

function getDataOrder(){

  // Clear data
  tableOrder.empty();

  // On Order
  var dbOrderRef = firebase.database().ref("orders").orderByChild('date');

  dbOrderRef.once('value').then(function(dataSnap){
    // On Order -> (key)

    dataSnap.forEach(function(dataChildSnap) {
      // On Order -> (key) -> Child

      // Get key and value at child node
      var keyValue = dataChildSnap.key;
      var allValue = dataChildSnap.val();

      // Extend value object to get infomation
      var id = allValue.id;
      var date = allValue.date;
      var idOrder = allValue.idOrder;
      var note = allValue.note;
      var order = allValue.order;
      var paid = allValue.paid;
      var sent = allValue.sent;
      var total = allValue.total;

      // log to see what happen when website on loading
      console.log(id, idOrder, note, order, paid, sent, total, strDate, keyValue);

      // Push data to table
      tableOrder.append("<tr>")
      tableOrder.append("<th scope='row'>" + id + "</th>");
      tableOrder.append("<td>" + date + "</td>");
      tableOrder.append("<td>" + order + "</td>");
      tableOrder.append("<td>" + note + "</td>");
      tableOrder.append("<td>" + paid + "</td>");
      tableOrder.append("<td>" + sent + "</td>");
      tableOrder.append("<td>" + idOrder + "</td>");
      tableOrder.append("<td>" + total + "</td>");
      tableOrder.append("<td><a class='btn btn-primary' href='#' onclick='moveOrder(" + id + ")'>done</a></td>");
      tableOrder.append("</tr>");

    });
  });
}

function getDateNow(){

  // Get new date
  var d = new Date();

  // Get year mouth and day
  var year = d.getFullYear();
  var mouth = d.getMonth()+1;
    if (mouth < 10) {
      mouth = "0" + mouth;
    }

  var day = d.getDate();
    if (day < 10) {
      day = "0" + day;
    }

  // Add to strDate
  strDate = year + "-" + mouth + "-" + day;
}

function moveOrder(id){

  // On Order
  var dbOrderRef = firebase.database().ref("orders").orderByChild('id').equalTo(id);

  dbOrderRef.once('value').then(function(dataSnap){
    // On Order -> (key)

    dataSnap.forEach(function(dataChildSnap) {
      // On Order -> (key) -> Child

      // Get key and value at child node
      var keyValue = dataChildSnap.key;
      var allValue = dataChildSnap.val();

      // Extend value object to get infomation
      var id = allValue.id;
      var date = allValue.date;
      var idOrder = allValue.idOrder;
      var note = allValue.note;
      var order = allValue.order;
      var paid = allValue.paid;
      var sent = allValue.sent;
      var total = allValue.total;

      // log to see what happen when website on loading
      console.log(id, idOrder, note, order, paid, sent, total, strDate);

      // Set data to reports
      setReport(id, date, idOrder, note, order, paid, sent, total);

      // After set data delete this row out of orders
      delOrder(keyValue);
    });
  });
}

function setReport(id, date, idOrder, note, order, paid, sent, total){

  // On Report
  var dbReportRef = firebase.database().ref("reports");

  // Push all data to firebase
  dbReportRef.push({
    id: id,
    date: date,
    idOrder: idOrder,
    note: note,
    order: order,
    paid: paid,
    sent: sent,
    total: total,
    finish: strDate,
  })

  // Affter send date will show data at log again
  getDataOrder();
}

function delOrder(key){

  // On Order
  var dbOrderRef = firebase.database().ref("orders/" + key);

  // Remove order
  dbOrderRef.remove().then(function() {
    console.log("Remove succeeded");
  }).catch(function(error) {
    console.log("Error failded: " + error.message);
  })
}

function setOrder(){

  // Get variable
  var inputSent = document.getElementById('inputSent');
  var inputNote = document.getElementById('inputNote');
  var inputPaid = document.getElementById('inputPaid');
  var inputOrderId = document.getElementById('inputOrderId');

  var input1 = document.getElementById('input1');
  var input2 = document.getElementById('input2');
  var input3 = document.getElementById('input3');
  var input4 = document.getElementById('input4');
  var input5 = document.getElementById('input5');
  var input6 = document.getElementById('input6');
  var input7 = document.getElementById('input7');
  var input8 = document.getElementById('input8');
  var input9 = document.getElementById('input9');
  var input10 = document.getElementById('input10');

  var input11 = document.getElementById('input11');
  var input12 = document.getElementById('input12');
  var input13 = document.getElementById('input13');
  var input14 = document.getElementById('input14');
  var input15 = document.getElementById('input15');
  var input16 = document.getElementById('input16');
  var input17 = document.getElementById('input17');
  var input18 = document.getElementById('input18');
  var input19 = document.getElementById('input19');
  var input20 = document.getElementById('input20');

  var input21 = document.getElementById('input21');
  var input22 = document.getElementById('input22');

  var checkbox1 = document.getElementById('checkbox1');
  var checkbox2 = document.getElementById('checkbox2');
  var checkbox3 = document.getElementById('checkbox3');
  var checkbox4 = document.getElementById('checkbox4');
  var checkbox5 = document.getElementById('checkbox5');
  var checkbox6 = document.getElementById('checkbox6');
  var checkbox7 = document.getElementById('checkbox7');
  var checkbox8 = document.getElementById('checkbox8');
  var checkbox9 = document.getElementById('checkbox9');
  var checkbox10 = document.getElementById('checkbox10');

  var checkbox11 = document.getElementById('checkbox11');
  var checkbox12 = document.getElementById('checkbox12');
  var checkbox13 = document.getElementById('checkbox13');
  var checkbox14 = document.getElementById('checkbox14');
  var checkbox15 = document.getElementById('checkbox15');
  var checkbox16 = document.getElementById('checkbox16');
  var checkbox17 = document.getElementById('checkbox17');
  var checkbox18 = document.getElementById('checkbox18');
  var checkbox19 = document.getElementById('checkbox19');
  var checkbox20 = document.getElementById('checkbox20');

  var checkbox21 = document.getElementById('checkbox21');
  var checkbox21 = document.getElementById('checkbox21');

  var amount = 0;
  var total = 0;
  var strOrder = '';

  // On Order
  var dbOrderRef = firebase.database().ref("orders");

  // Event when input order list
  if(checkbox1.checked) {
    strOrder = strOrder + " #1:" +input1.value;
    amount = amount + parseInt(input1.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }


  if(checkbox2.checked) {
    strOrder = strOrder + " #2:" +input2.value;
    amount = amount + parseInt(input2.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox3.checked) {
    strOrder = strOrder + " #3:" +input3.value;
    amount = amount + parseInt(input3.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox4.checked) {
    strOrder = strOrder + " #4:" +input4.value;
    amount = amount + parseInt(input4.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox5.checked) {
    strOrder = strOrder + " #5:" +input5.value;
    amount = amount + parseInt(input5.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox6.checked) {
    strOrder = strOrder + " #2:" +input6.value;
    amount = amount + parseInt(input6.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox7.checked) {
    strOrder = strOrder + " #2:" +input7.value;
    amount = amount + parseInt(input7.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox8.checked) {
    strOrder = strOrder + " #2:" +input8.value;
    amount = amount + parseInt(input8.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox9.checked) {
    strOrder = strOrder + " #2:" +input9.value;
    amount = amount + parseInt(input9.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox10.checked) {
    strOrder = strOrder + " #2:" +input10.value;
    amount = amount + parseInt(input10.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }


  if(checkbox11.checked) {
    strOrder = strOrder + " #2:" +input11.value;
    amount = amount + parseInt(input11.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }


  if(checkbox12.checked) {
    strOrder = strOrder + " #2:" +input12.value;
    amount = amount + parseInt(input12.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }


  if(checkbox13.checked) {
    strOrder = strOrder + " #2:" +input13.value;
    amount = amount + parseInt(input13.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox14.checked) {
    strOrder = strOrder + " #2:" +input14.value;
    amount = amount + parseInt(input14.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox15.checked) {
    strOrder = strOrder + " #2:" +input15.value;
    amount = amount + parseInt(input15.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox16.checked) {
    strOrder = strOrder + " #2:" +input16.value;
    amount = amount + parseInt(input16.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox17.checked) {
    strOrder = strOrder + " #2:" +input17.value;
    amount = amount + parseInt(input17.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox18.checked) {
    strOrder = strOrder + " #2:" +input18.value;
    amount = amount + parseInt(input18.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox19.checked) {
    strOrder = strOrder + " #2:" +input19.value;
    amount = amount + parseInt(input19.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox20.checked) {
    strOrder = strOrder + " #2:" +input20.value;
    amount = amount + parseInt(input20.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox21.checked) {
    strOrder = strOrder + " #2:" +input21.value;
    amount = amount + parseInt(input21.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  if(checkbox22.checked) {
    strOrder = strOrder + " #2:" +input22.value;
    amount = amount + parseInt(input22.value);
  }
  else {
    strOrder = strOrder;
    amount = amount;
  }

  // Create new id
  var newCurentId = curentId + 1;
  curentId = newCurentId;

  // Sum total order price
  if (amount != 0) {
    total = 90 * amount;
  }

  // Push all data to firebase
  dbOrderRef.push({
    id: newCurentId,
    date: strDate,
    idOrder: inputOrderId.value,
    note: inputNote.value,
    order: strOrder,
    paid: inputPaid.value,
    sent: inputSent.value,
    total: total,
  })

  // Update
  updateId();

  // Affter send date will show data at log again
  getDataOrder();
}

function updateId(){

  // On Infomation
  var dbInfoRef = firebase.database().ref("informations");

  dbInfoRef.update({
    curentId: curentId,
  })

}

function hanndleOnChangeCheckBox(position){

  if (position == 1) {
    $('#checkbox1').change(function() {
        if(this.checked) {
            console.log("checked");
            $('#input1').removeAttr("disabled");
        }
        else {
          console.log("unchecked");
          $('#input1').prop("value","0");
          $('#input1').prop("disabled","true");
        }
    });
  }

  if (position == 2) {
    $('#checkbox2').change(function() {
        if(this.checked) {
            console.log("checked 2");
            $('#input2').removeAttr("disabled");
        }
        else {
          console.log("unchecked 2");
          $('#input2').prop("value","0");
          $('#input2').prop("disabled","true");
        }
    });
  }

  if (position == 3) {
    $('#checkbox3').change(function() {
        if(this.checked) {
            console.log("checked 3");
            $('#input3').removeAttr("disabled");
        }
        else {
          console.log("unchecked 3");
          $('#input3').prop("value","0");
          $('#input3').prop("disabled","true");
        }
    });
  }

  if (position == 4) {
    $('#checkbox4').change(function() {
        if(this.checked) {
            console.log("checked 4");
            $('#input4').removeAttr("disabled");
        }
        else {
          console.log("unchecked 4");
          $('#input4').prop("value","0");
          $('#input4').prop("disabled","true");
        }
    });
  }

  if (position == 5) {
    $('#checkbox5').change(function() {
        if(this.checked) {
            console.log("checked 5");
            $('#input5').removeAttr("disabled");
        }
        else {
          console.log("unchecked 5");
          $('#input5').prop("value","0");
          $('#input5').prop("disabled","true");
        }
    });
  }

  if (position == 6) {
    $('#checkbox6').change(function() {
        if(this.checked) {
            console.log("checked 6");
            $('#input6').removeAttr("disabled");
        }
        else {
          console.log("unchecked 6");
          $('#input6').prop("value","0");
          $('#input6').prop("disabled","true");
        }
    });
  }

  if (position == 7) {
    $('#checkbox7').change(function() {
        if(this.checked) {
            console.log("checked 7");
            $('#input7').removeAttr("disabled");
        }
        else {
          console.log("unchecked 7");
          $('#input7').prop("value","0");
          $('#input7').prop("disabled","true");
        }
    });
  }

  if (position == 8) {
    $('#checkbox8').change(function() {
        if(this.checked) {
            console.log("checked 8");
            $('#input8').removeAttr("disabled");
        }
        else {
          console.log("unchecked 8");
          $('#input8').prop("value","0");
          $('#input8').prop("disabled","true");
        }
    });
  }

  if (position == 9) {
    $('#checkbox9').change(function() {
        if(this.checked) {
            console.log("checked 9");
            $('#input9').removeAttr("disabled");
        }
        else {
          console.log("unchecked 9");
          $('#input9').prop("value","0");
          $('#input9').prop("disabled","true");
        }
    });
  }

  if (position == 10) {
    $('#checkbox10').change(function() {
        if(this.checked) {
            console.log("checked 10");
            $('#input10').removeAttr("disabled");
        }
        else {
          console.log("unchecked 10");
          $('#input10').prop("value","0");
          $('#input10').prop("disabled","true");
        }
    });
  }

  if (position == 11) {
    $('#checkbox11').change(function() {
        if(this.checked) {
            console.log("checked 11");
            $('#input11').removeAttr("disabled");
        }
        else {
          console.log("unchecked 11");
          $('#input11').prop("value","0");
          $('#input11').prop("disabled","true");
        }
    });
  }

  if (position == 12) {
    $('#checkbox12').change(function() {
        if(this.checked) {
            console.log("checked 12");
            $('#input12').removeAttr("disabled");
        }
        else {
          console.log("unchecked 12");
          $('#input12').prop("value","0");
          $('#input12').prop("disabled","true");
        }
    });
  }

  if (position == 13) {
    $('#checkbox13').change(function() {
        if(this.checked) {
            console.log("checked 13");
            $('#input13').removeAttr("disabled");
        }
        else {
          console.log("unchecked 13");
          $('#input13').prop("value","0");
          $('#input13').prop("disabled","true");
        }
    });
  }

  if (position == 14) {
    $('#checkbox14').change(function() {
        if(this.checked) {
            console.log("checked 14");
            $('#input14').removeAttr("disabled");
        }
        else {
          console.log("unchecked 14");
          $('#input14').prop("value","0");
          $('#input14').prop("disabled","true");
        }
    });
  }

  if (position == 15) {
    $('#checkbox15').change(function() {
        if(this.checked) {
            console.log("checked 15");
            $('#input15').removeAttr("disabled");
        }
        else {
          console.log("unchecked 15");
          $('#input15').prop("value","0");
          $('#input15').prop("disabled","true");
        }
    });
  }

  if (position == 16) {
    $('#checkbox16').change(function() {
        if(this.checked) {
            console.log("checked 16");
            $('#input16').removeAttr("disabled");
        }
        else {
          console.log("unchecked 16");
          $('#input16').prop("value","0");
          $('#input16').prop("disabled","true");
        }
    });
  }

  if (position == 17) {
    $('#checkbox17').change(function() {
        if(this.checked) {
            console.log("checked 17");
            $('#input17').removeAttr("disabled");
        }
        else {
          console.log("unchecked 17");
          $('#input17').prop("value","0");
          $('#input17').prop("disabled","true");
        }
    });
  }

  if (position == 18) {
    $('#checkbox18').change(function() {
        if(this.checked) {
            console.log("checked 18");
            $('#input18').removeAttr("disabled");
        }
        else {
          console.log("unchecked 18");
          $('#input18').prop("value","0");
          $('#input18').prop("disabled","true");
        }
    });
  }

  if (position == 19) {
    $('#checkbox19').change(function() {
        if(this.checked) {
            console.log("checked 19");
            $('#input19').removeAttr("disabled");
        }
        else {
          console.log("unchecked 19");
          $('#input19').prop("value","0");
          $('#input19').prop("disabled","true");
        }
    });
  }

  if (position == 20) {
    $('#checkbox20').change(function() {
        if(this.checked) {
            console.log("checked 20");
            $('#input20').removeAttr("disabled");
        }
        else {
          console.log("unchecked 20");
          $('#input20').prop("value","0");
          $('#input20').prop("disabled","true");
        }
    });
  }

  if (position == 21) {
    $('#checkbox21').change(function() {
        if(this.checked) {
            console.log("checked 21");
            $('#input21').removeAttr("disabled");
        }
        else {
          console.log("unchecked 21");
          $('#input21').prop("value","0");
          $('#input21').prop("disabled","true");
        }
    });
  }

  if (position == 22) {
    $('#checkbox22').change(function() {
        if(this.checked) {
            console.log("checked 22");
            $('#input22').removeAttr("disabled");
        }
        else {
          console.log("unchecked 22");
          $('#input22').prop("value","0");
          $('#input22').prop("disabled","true");
        }
    });
  }

}

function setState(){

  //set initial state.
  $('#input1').prop("disabled","true");
  $('#input2').prop("disabled","true");
  $('#input3').prop("disabled","true");
  $('#input4').prop("disabled","true");
  $('#input5').prop("disabled","true");
  $('#input6').prop("disabled","true");
  $('#input7').prop("disabled","true");
  $('#input8').prop("disabled","true");
  $('#input9').prop("disabled","true");
  $('#input10').prop("disabled","true");
  $('#input11').prop("disabled","true");
  $('#input12').prop("disabled","true");
  $('#input13').prop("disabled","true");
  $('#input14').prop("disabled","true");
  $('#input15').prop("disabled","true");
  $('#input16').prop("disabled","true");
  $('#input17').prop("disabled","true");
  $('#input18').prop("disabled","true");
  $('#input19').prop("disabled","true");
  $('#input20').prop("disabled","true");
  $('#input21').prop("disabled","true");
  $('#input22').prop("disabled","true");
}
