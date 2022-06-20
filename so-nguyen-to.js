check();
function check() {
    let num=+prompt('Enter a number');
    let flag = true;
    if (num < 2) {
        flag=false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = true;
                break;
            }
        }
        if (flag == true) {
            alert(num + ' khong là số nguyên tố');
        } else {
            alert(num + ' là số nguyên tố');
        }
    }
}