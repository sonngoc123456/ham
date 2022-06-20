function footToMeter(foot) {
 let meter = 0.305 * foot;
 return meter;
}
function meterToFoot(meter) {
   let foot = 3.279 * meter;
   return foot
}
let foot = prompt('nhap foot vao :');
alert('meter là : ' + footToMeter(foot));
let meter = prompt('nhap meter vao :');
alert('foot là : ' + meterToFoot( meter));