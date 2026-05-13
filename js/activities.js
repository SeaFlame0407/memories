const data = {
    2025: {
        12: [
            {day:"12-01", name:"Raid Night", note:"滅團 32 次"},
            {day:"12-08", name:"漁師活動", note:"釣魚發呆"}
        ]
    },
    2026: {
        1: [
            {day:"01-05", name:"零式開荒", note:"補師崩潰"},
            {day:"01-20", name:"Meme Night", note:"全員發病"}
        ]
    }
};

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
