function nhapSO(a,b) {
    if(a >  b) {
        alert('so thu nhat lớn hơn so thu 2');
    }else {
        return a + b;
    }
}
let a = +prompt('nhap so thu nhat');
let b = +prompt('nhap so thu 2');
let sum = nhapSO(a,b)
alert(sum)