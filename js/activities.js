let data = {};

fetch("../data/activities.json")
    .then(res => res.json())
    .then(json => {
        data = json;
        init();
    });

function init(){
    renderAll();
}

let selectedYear = "2026";
let selectedMonth = "1";

const yearBox = document.getElementById("yearBox");
const monthBox = document.getElementById("monthBox");
const tableBody = document.getElementById("tableBody");

function renderYears(){
    yearBox.innerHTML = "";
    Object.keys(data).forEach(y=>{
        const el = document.createElement("div");
        el.className = "pill" + (y===selectedYear?" active":"");
        el.innerText = y;

        el.onclick = ()=>{
            selectedYear = y;
            selectedMonth = Object.keys(data[y])[0];
            renderAll();
        };

        yearBox.appendChild(el);
    });
}

function renderMonths(){
    monthBox.innerHTML = "";
    Object.keys(data[selectedYear]).forEach(m=>{
        const el = document.createElement("div");
        el.className = "pill" + (m===selectedMonth?" active":"");
        el.innerText = m + "月";

        el.onclick = ()=>{
            selectedMonth = m;
            renderAll();
        };

        monthBox.appendChild(el);
    });
}

function renderTable(){
    tableBody.innerHTML = "";

    const list = data[selectedYear][selectedMonth] || [];

    list.forEach(item=>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.day}</td>
            <td>${item.name}</td>
            <td>${item.note}</td>
        `;
        tableBody.appendChild(tr);
    });
}

function renderAll(){
    renderYears();
    renderMonths();
    renderTable();
}

renderAll();
