document.getElementById('formPage').addEventListener('submit', savePage);

function savePage(e){

    let fecha = document.getElementById('fecha').value;
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;
    let foto = document.getElementById('foto').value;

    const page = {
        fecha,
        titulo,
        descripcion,
        foto
    };

    if (localStorage.getItem('pages') == null) {

        let pages = [];
        pages.push(page);
        localStorage.setItem('pages', JSON.stringify(pages));

    } else{
        let pages = JSON.parse(localStorage.getItem('pages'));
        pages.push(page);
        localStorage.setItem('pages', JSON.stringify(pages))

    }

    getPages();
    e.preventDefault();
}
function getPages(){
    let pages = JSON.parse(localStorage.getItem('pages'));
    let pagesView = document.getElementById('pages');
    
    pagesView.innerHTML = '';

    for(let i = 0; i < pages.length; i++) {
        let fecha = pages[i].fecha;
        let titulo = pages[i].titulo;
        let descripcion = pages[i].descripcion;
        let foto = pages[i].foto;
        
        pagesView.innerHTML += `<div class="card">
        <div class="card-body">
            <p>${fecha} - ${titulo} - ${descripcion} - ${foto}</p>
        </div>
        </div>`
    };
};

getPages();