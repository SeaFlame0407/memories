function loadComponent(id, file){
    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}

loadComponent("header", "layout/header.html");
loadComponent("footer", "layout/footer.html");
