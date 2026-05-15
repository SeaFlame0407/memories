async function loadMembers() {
    const res = await fetch("../data/members.json");
    const members = await res.json();

    const container = document.getElementById("list");
    container.innerHTML = "";

    members.forEach(m => {

        container.innerHTML += `
            <div class="member-card">
                
                <div class="member-avatar">
                    <img src="${m.avatar}" alt="${m.name}">
                </div>

                <div class="member-info">
                    <h3>${m.name}</h3>

                    <span class="badge">${m.job}</span>
                    <span class="badge role">${m.role}</span>

                    <p>${m.desc ?? ""}</p>
                </div>

            </div>
        `;
    });
}
