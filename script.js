let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
]

let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");
let btn2 = document.getElementById("addBtn")
let fname = document.getElementById("fname");
let profession = document.getElementById("profession");
let age = document.getElementById("age");


// function to filter by profession 
function filterByProfession() {
    result.innerHTML = "";

    let dropdownValue = dropdown.value;

    // if the value is profession, then alert the user to select a profession
    if (dropdownValue == "profession") {
        alert("Please select a profession");
        return;
    }

    // looping through the array and checking if the profession matches the dropdown value
    arr.forEach((item) => {

        if (item.profession === dropdownValue) {
            let table = document.createElement("table");
            let row = document.createElement("tr");
            let data1 = document.createElement("td");
            let data2 = document.createElement("td");
            let data3 = document.createElement("td");
            let data4 = document.createElement("td");
            table.style.border = "1px solid white";
            table.style.width="26vw";
            table.style.height="5vh";
            table.style.padding="20vw";
            table.style.marginBottom="2vh";
            table.style.alignItems="center";
            table.style.borderRadius="10px";
            row.style.paddingLeft="1vw";
            data1.style.paddingLeft="0.5vw";
            data1.innerText = item.id+".";
            data2.innerText = "Name: " + item.name;
            data3.innerText = "Profession: " + item.profession;
            data4.innerText = "Age: " + item.age;
            row.append(data1);
            row.append(data2);
            row.append(data3);
            row.append(data4);
            table.append(row);
            result.append(table);
        }
    })

}

// adding event listener to the button
btn.addEventListener("click", filterByProfession);


//function to add new users 
function addNewUser(){
    result.innerHTML = "";
    arr.push({id:arr.length+1, name:fname.value, profession:profession.value, age:age.value});
    console.log(arr);
    
    arr.forEach((item) => {
            let div = document.createElement("div");
            div.innerText = item.id + ".  Name: " + item.name + "    Profession: " + item.profession + "    Age: " + item.age;
            result.append(div);
    })
}

//adding event listener to the button
btn2.addEventListener("click", addNewUser);


