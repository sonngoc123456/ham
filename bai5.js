let star1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
let star2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]
function checkStar(star) {
    let index = -1;
    let result = "";
    for (let i = 0; i < star1.length; i++) {
        if (star1[i] == star) {
            index = i;
            break;
        }
    }
    if(index ===-1) {
        result = "khong co chom sao nay";
        return result;
    }else {
        result = "Chom sao : " + star2[index];
        return result;
    }
}
let star = prompt('nhap vao ngoi sao');
document.write(checkStar(star));
