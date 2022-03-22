function bai2() {
    var x = parseInt(prompt("Nhập số: "));
    if (isNaN(x) == false) {
        alert("Đây là một số")

    } else {
        alert("đây không phải là số,vui lòng nhập lại")
        bai2();

    }
}