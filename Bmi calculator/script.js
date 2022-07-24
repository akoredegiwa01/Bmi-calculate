function yourBmi(){
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;
    let h2 = h * h
    let bMI = w / h2;
    let BMI = Math.round(bMI);
    document.getElementById("solution").value = BMI;
}
