// Estado global
let templates = [];

const form = document.getElementById("template-form");
const listContainer = document.getElementById("templates-list");

// Función para renderizar TODAS las plantillas (estado global)
function renderTemplates() {
  listContainer.innerHTML = "";
  templates.forEach((tpl, index) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = tpl.render();

    // Botón eliminar
    wrapper.querySelector(".delete").addEventListener("click", () => {
      removeTemplate(index);
    });

    listContainer.appendChild(wrapper);
  });
}

// Agregar plantilla al estado global
function addTemplate(template) {
  templates.push(template);
  renderTemplates();
}

// Eliminar plantilla del estado global
function removeTemplate(index) {
  templates.splice(index, 1);
  renderTemplates();
}

// Captura del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const mensaje = document.getElementById("mensaje").value;
  const hashtag = document.getElementById("hashtag").value;
  const categoria = document.getElementById("categoria").value;
  const autor = document.getElementById("autor").value;

  const nuevaPlantilla = new Template(titulo, mensaje, hashtag, categoria, autor);
  addTemplate(nuevaPlantilla);

  form.reset();
});
