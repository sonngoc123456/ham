let number = +prompt('enter the number');
function GiaiThua(number) {
    if(number == 2)
        return 2
     return number * GiaiThua(number - 1)

}
let result = GiaiThua(number);
alert(result);