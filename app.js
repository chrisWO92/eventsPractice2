const container = document.querySelector(".container");
const gridContainer = document.querySelector(".grid-container");
const btnSubmit = document.querySelector(".btn-submit");
const studentName = document.querySelector(".name");
const studentEmail = document.querySelector(".email");
const studentSubject = document.querySelector(".subject");
const studentWeek = document.querySelector(".week");

let alumnos = [
    {
        name: "Cristian Pineda",
        email: "chriswo92@gmail.com",
        subject: "Programing"
    },
    {
        name: "Juan Cruz",
        email: "juan2@gmail.com",
        subject: "Biology"
    },
    {
        name: "Francisco Navarro",
        email: "cfran85@gmail.com",
        subject: "Math"
    },
    {
        name: "Cesar Barahona",
        email: "ceair98@gmail.com",
        subject: "Physics"
    },
    {
        name: "Andrés Jafit",
        email: "andres@gmail.com",
        subject: "Programming"
    },
    {
        name: "María Sofía",
        email: "sofi@gmail.com",
        subject: "Music"
    }
];

for (let alumno in alumnos){

    gridContainer.innerHTML += 
        `
        <div class="grid-item name">${alumnos[alumno]["name"]}</div>
        <div class="grid-item email">${alumnos[alumno]["email"]}</div>
        <div class="grid-item subject">${alumnos[alumno]["subject"]}</div>
        <div class="grid-item week">
            <select name="selected-week" class="selected-week">
                <option value="Week 1" class="week-option">Week 1</option> 
                <option value="Week 2" class="week-option">Week 2</option> 
             </select>
        </div>
        `;

};

btnSubmit.addEventListener("click", () => {

    let weeks = document.querySelectorAll(".week");
    let selectedWeeks = document.querySelectorAll(".selected-week");

    let confirmation = confirm("Are you sure you want to submit?");

    if (confirmation == true){
        container.removeChild(btnSubmit);
        for (week in weeks){
            weeks[week].innerHTML = selectedWeeks[week].value;
        }
    }
    else {
        alert("Submit Cancelled");
    }

})



