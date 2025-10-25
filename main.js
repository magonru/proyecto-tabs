const mytabsHead = document.getElementById('mytabsHead');
const mytabsBody = document.getElementById('mytabsBody');
let tabContent = document.getElementById('tabContent');

// Información de los tabs
contador = 1;
const tabsInfo = [
    {id: 0, title: 'Primera pestaña', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, tempore doloremque. Incidunt dicta quia deleniti eaque? Libero dignissimos dolorum perferendis magnam consectetur sed ratione dolor mollitia incidunt expedita ipsam doloribus eos modi accusantium inventore odit voluptatum esse magni, deleniti voluptates?'},
    {id: 1, title: 'Segunda pestaña', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo tenetur vitae, modi officiis non labore fuga deserunt tempore eum fugit incidunt laudantium omnis? Nihil possimus, iste quis molestias est deserunt? Molestias nostrum fugit illum, doloribus vitae sequi?'},
    {id: 2, title: 'Tercera pestaña', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, culpa vero magnam cum quisquam dolores pariatur eligendi non mollitia dolorum reiciendis corrupti voluptates fuga! Rerum, dolorum dolores voluptates quam officiis adipisci nostrum accusamus doloremque harum assumenda repellat, cum dolore, ea repudiandae expedita a nemo!'},
    {id: 3, title: 'Cuarta pestaña', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptas perspiciatis necessitatibus aspernatur totam inventore, id natus quasi voluptatem dolore vel ullam obcaecati laborum iusto alias maiores in?'}
    
];



tabsInfo.forEach((tab)=>{
    // Creando y agregando los tabs en el encabezado
    let tabItem = document.createElement('div');
    tabItem.classList.add("mytabs__tab");
    tabItem.dataset.id = contador - 1;
    tabItem.innerHTML = `Tab ${contador}`;
    mytabsHead.append(tabItem);
    contador++;
    
    // Cambiando el texto del contenido
    tabItem.addEventListener('click', (e)=>{
        let tabId = parseInt(e.target.dataset.id);
        agregarContenido(tabId)
        
        let tabs = [...document.querySelectorAll('.mytabs__tab')];
        tabs.forEach((tab)=>{
            tab.classList.remove('active')
        })

        // Activando la clase "active"
        e.target.classList.add('active');
        
    })
});

// Contenido por defecto
function agregarContenido(numeroItem){
    tabContent.innerHTML = `
        <h2>${tabsInfo[numeroItem].title}</h2>
        <p>${tabsInfo[numeroItem].text}</p>
    `;
}
agregarContenido(0)

// Agregando la clase active al primer tab
document.querySelector('.mytabs__tab').classList.add('active')
