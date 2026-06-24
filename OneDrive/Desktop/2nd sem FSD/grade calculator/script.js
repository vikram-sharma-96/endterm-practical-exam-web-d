function grade() {
    let m = document.getElementById("marks").value;
    let result = document.getElementById("result");

    if (m === "" || m < 0 || m > 100) {
        result.innerHTML = "Enter valid marks!";
        return;
    }

    let g = m >= 90 ? "A+" :
            m >= 80 ? "A" :
            m >= 70 ? "B" :
            m >= 60 ? "C" :
            m >= 50 ? "D" : "F";

    result.innerHTML = "Grade: " + g;
}