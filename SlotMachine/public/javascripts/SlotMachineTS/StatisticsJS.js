alert("statistics");
function processForm(){
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.subString(1);
    var queries = queryString.split("&");

    document.write(queries[0] + "<br>");
    document.write(queries[1]);
}

processForm();