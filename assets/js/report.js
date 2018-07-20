// Global vatiable
var tableReport = $('#tableReport');

// when website on loading will query database at firebase
window.onload = function() {

  // Get datebase of Product
  getDataOrder();

}

function getDataOrder(){
  // Clear data
  tableReport.empty();

  // On Report
  var dbReportRef = firebase.database().ref("reports").orderByChild('date');

  dbReportRef.once('value').then(function(dataSnap){
    // On Report -> (key)

    dataSnap.forEach(function(dataChildSnap) {
      // On Report -> (key) -> Child

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
      var finish = allValue.finish;

      // log to see what happen when website on loading
      console.log(id, idOrder, note, order, paid, sent, total, keyValue);

      // Push data to table
      tableReport.append("<tr>")
      tableReport.append("<th scope='row'>" + id + "</th>");
      tableReport.append("<td>" + date + "</td>");
      tableReport.append("<td>" + order + "</td>");
      tableReport.append("<td>" + note + "</td>");
      tableReport.append("<td>" + paid + "</td>");
      tableReport.append("<td>" + sent + "</td>");
      tableReport.append("<td>" + idOrder + "</td>");
      tableReport.append("<td>" + total + "</td>");
      tableReport.append("<td>" + finish + "</td>");
      tableReport.append("</tr>");

    });
  });
}
