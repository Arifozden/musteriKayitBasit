function musteriKayit(){
    const musteri = {
        isim : $("#isim").val(),
        adres : $("#adres").val()
    }
    $.get("/kaydet", musteri,function (cevir){
        hepsiniGetir();
    });
    $("#isim").val("");
    $("#adres").val("");
};

function hepsiniGetir(){
    $.get("/hepsiniGetir", function (data){
        bilgiDuzenle(data);
    });
};

function bilgiDuzenle(musteriler){
    var yaz="<table class='table table-striped'>"+
        "<tr>"+
        "<th>Isim</th><th>Adres</th>"+
        "</tr>";
    for(let i in musteriler){
        yaz+="<tr><td>"+musteriler[i].isim+"</td><td>"+musteriler[i].adres+"</td></tr>"
    }
    $("#musteriler").html(yaz);
}

function hepsiniSil(){
    $.get("/hepsiniSil",function (data){
        hepsiniGetir();
    });
};