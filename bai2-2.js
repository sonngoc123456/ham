let R = +prompt('enter the number');
function DienTich(R) {
    return Math.PI*R*R;
}
let result1 = DienTich(R);
alert('Dien tich : ' + result1.toFixed(2));

function ChuVi(R) {
    return Math.PI*2*R;
}
let result2 = ChuVi(R);
alert('Chu vi : ' + result2.toFixed(2));