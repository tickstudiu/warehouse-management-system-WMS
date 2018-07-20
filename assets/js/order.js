// Global vatiable
var tableOrder = $('#tableOrder');
var curentId = 0;
var strDate = '';

// when website on loading will query database at firebase
window.onload = function() {

  // Get date
  getDateNow();

  // Get datebase of Product
  getDataOrder();

  // Set state of input
  setState();

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

      curentId = id;

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

  var amount = 0;
  var total = 0;
  var strOrder = '';

  // Event when input order list
  $('#checkbox1').change(function() {
      if(this.checked) {
        strOrder = strOrder + " order 1:" +input1.value;
        amount = amount + parseInt(input1.value);
      }
      else {
        strOrder = strOrder;
        amount = amount;
      }
  });


  $('#checkbox2').change(function() {
      if(this.checked) {
        strOrder = strOrder + " order 2:" +input2.value;
        amount = amount + parseInt(input2.value);
      }
      else {
        strOrder = strOrder;
        amount = amount;
      }
  });

  // Create new id
  var newCurentId = curentId + 1;
  curentId = newCurentId;

  // Sum total order price
  total = 90 * amount;

  // On Order
  var dbOrderRef = firebase.database().ref("orders");

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

  // Affter send date will show data at log again
  getDataOrder();
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
