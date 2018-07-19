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

  var strOrder = '';
  var amount = 0;
  var total = 0;

  // On Order
  var dbOrderRef = firebase.database().ref("orders");

  // Event when input order list
  if (input1 != "") {
    strOrder = strOrder + " Order number 1:" +input1.value;
    amount = amount + parseInt(input1.value);
  }

  if (input2 != "") {
    strOrder = strOrder + " Order number 2:" +input2.value;
    amount = amount + parseInt(input2.value);
  }

  // Create new id
  var newCurentId = curentId + 1;
  curentId = newCurentId;

  // Sum total order price
  var total = 90 * amount;

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
}

function setState(){

  //set initial state.
  $('#input1').prop("disabled","true");
  $('#input2').prop("disabled","true");
}
