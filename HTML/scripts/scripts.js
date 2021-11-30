function validateForm() {
    document.getElementById("nameMessage").innerHTML = "";
    document.getElementById("weightMessage").innerHTML = "";
    let empName = document.forms["frmCollectWeights"]["empName"];
    let empWeight = document.forms["frmCollectWeights"]["empWeight"];
    let alphaOnly = /^[A-Za-z]+$/;
    //
    if (empName.value == "") {
        document.getElementById("nameMessage").innerHTML = "Name cannot be empty!";
        empName.focus();
        return false;
    }
    if (!empName.value.match(alphaOnly)) {
        document.getElementById("nameMessage").innerHTML = "Name cannot contain numbers!";
        empName.focus();
        return false;
    }
    if (empName.value.length < 3 && empName.value != "") {
        document.getElementById("nameMessage").innerHTML = "Name too short!";
        empName.focus();
        return false;
    }
    if (empWeight.value == "") {
        document.getElementById("weightMessage").innerHTML = "Weight cannot be empty!";
        empWeight.focus();
        return false;
    }
    if (isNaN(empWeight.value)) {
        document.getElementById("weightMessage").innerHTML = "Weight must be a number";
        empWeight.focus();
        return false;
    }
    //
    return true;
}

function getWithoutPromiseData() {
    fetch("http:/localhost:8080/getemployees")
        .then((res) => (res.json())
        ).then((data) => displayData(data)
        ).catch((err) => console.log(err)
        );
}
//
function displayData(arr) {
    let outHTML = "";
    for (let i = 0; i < arr.length; i++) {
        outHTML += "<div>" + arr[i].empName + " password is " + arr[i].empPass + " </div>";
    }
    document.getElementById("records").innerHTML = outHTML;

}

async function getWithPromiseData() {
    try {
        const res = await fetch("https://workspaces-ws-rr5l7-app2.eu10.trial.applicationstudio.cloud.sap/getemployees");
        const data = await res.json();
        displayData(data);
    } catch (err) {
        console.log(err);

    }

}