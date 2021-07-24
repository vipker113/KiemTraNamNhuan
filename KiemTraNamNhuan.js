function check() {
    let nam= parseInt(document.getElementById("year").value);
    console.log(nam)
    if(nam % 4 == 0){
        if(nam % 100 == 0){
            if(nam %400 == 0) {
                document.getElementById("result").innerHTML="Năm " + nam+ " là năm nhuận"
            }
            else document.getElementById("result").innerHTML="Năm " + nam+ " không phải là năm nhuận"
        }
        else document.getElementById("result").innerHTML="Năm " + nam+ " là năm nhuận"
    }
    else document.getElementById("result").innerHTML="Năm " + nam+ " không phải là năm nhuận"
}