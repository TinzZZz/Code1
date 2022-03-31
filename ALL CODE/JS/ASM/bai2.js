function changeHomeWork(tonghop) {
  // lây tất cả các thẻ có chứa class baitap
  var baitap = document.getElementsByClassName("baitap");

  // xoa het tat ca class active bai tap
  //   thay giá trị mặc định thành i, i ngày càng tăng i ++

  for (let i = 0; i < baitap.length; i++) {
        baitap[i].classList.remove("active-baitap");
  }
  // add them class active bai tap vao 'the bai tap' can hien thi vao the
  // tonghop là tham số khi mình truyền vao funtion,
  baitap[tonghop].classList.add("active-baitap");
}
function changeProduct(){
    // var product = document.getElementsByTagName()
     var getSelect = document.getElementsByClassName("select");
     
    //  console.log(getSelect);
    //  getSelect[0].value
     console.log(getSelect[0].value);
     var getImg = document.getElementById('img-bai2');
     getImg.src = "nike3.webp";
     var getName = document.getElementById("ten")
     getName.innerHTML = "Sản phẩm ";
     var getPrice = document.getElementById("gia")
     getPrice.innerHTML = "Giá tiền";
     if(getSelect[0].value =="sp1"
     ){
        
        getName.innerHTML = "Tên sản phẩm : Giày";
        getPrice.innerHTML = "Giá tiền: 200.000";
        
        getImg.src = "nike1.png";
        // console.log(getSlect);
     }else if(getSelect[0].value =="sp2"){
        document.getElementById("ten").innerHTML = "Sản phẩm: Giày";
        document.getElementById("gia").innerHTML = "Giá tiền: 200.000VND";
         getImg.src ="nike2.jpg"
     }else if(getSelect[0].value =="sp3"){
        document.getElementById("ten").innerHTML = "Sản phẩm: Giày";
        document.getElementById("gia").innerHTML = "Giá tiền: 300.000VND";
         getImg.src ="nike3.webp"
     }else{
        document.getElementById("ten").innerHTML = "Chọn tên sản phẩm";
        document.getElementById("gia").innerHTML = "Giá tiền";
         getImg.src = "anhtrang.jpg"
     }
     
     
}
