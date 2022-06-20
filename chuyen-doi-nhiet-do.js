function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}

/*
<form>
    <h1>Temprature Converter</h1>
    <p>độ F :
        <input id="inputFahrenheit" onchange="temperatureConverter(this.value)" placeholder="nhap do" type="number">
    </p>
    <p>độ C :
        <span id="outputCelsius"></span>
    </p>
</form>
 */