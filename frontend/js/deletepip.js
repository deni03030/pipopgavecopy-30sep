function deletepip(id){
    var check = document.getElementById('checkbox');
    if(check.checked) {
        mysql_query("delete from pips where pipid='{$_GET['pipid']}'");
    }};