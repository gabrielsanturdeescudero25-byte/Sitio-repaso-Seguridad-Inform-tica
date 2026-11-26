const topics = [
  {
    title: "La importancia de proteger la información", group: "fundamentos", label: "Fundamentos", source: "La importancia de mantener la información segura(2).pdf", file: "libfile_4771a144d6e48191b8dcfcca9937b1b5", repoPdf: "01-informacion-segura.pdf",
    intro: "La información es un activo: perderla, divulgarla o alterarla puede causar daños económicos, legales y de reputación.",
    explain: ["La seguridad de la información busca mantener tres propiedades: confidencialidad (solo acceden quienes están autorizados), integridad (los datos no se modifican sin permiso) y disponibilidad (se puede acceder cuando se necesita). A esta triada se la conoce como CIA.", "El documento también explica el no repudio: aportar pruebas de quién envió o recibió una comunicación para que después no pueda negar su participación. Para proteger la información se combinan autenticación, autorización, cifrado, firewall, copias de seguridad y antimalware."],
    example: "Cifrar una base de datos protege su confidencialidad; una firma digital ayuda a comprobar su integridad; tener un servidor redundante mejora la disponibilidad.",
    exam: "Nombra y explica las tres propiedades de la triada CIA. No confundas confidencialidad (quién puede leer) con integridad (si los datos han cambiado)."
  },
  {
    title: "Seguridad física y seguridad lógica", group: "fundamentos", label: "Fundamentos", source: "Diferencias entre seguridad física y lógica (b)(1).pdf", file: "libfile_669b2161727c81919d2bb0e94f7f3484", repoPdf: "02-seguridad-fisica-logica.pdf",
    intro: "La física protege equipos e instalaciones; la lógica protege sistemas, cuentas y datos. Las dos se necesitan.",
    explain: ["La seguridad física usa cerraduras, racks, cámaras, control de acceso y protección frente a incendios o inundaciones. La seguridad lógica aplica contraseñas, permisos, ACL, antivirus, cortafuegos y cifrado.", "No son alternativas. Si una persona puede tocar el servidor, puede desconectar discos o intentar arrancar desde otro dispositivo y saltarse parte de los controles digitales. Por eso se combinan en capas y se revisan periódicamente."],
    example: "Un rack cerrado y una cuenta con permisos mínimos protegen el mismo servidor frente a riesgos distintos.",
    exam: "Compara ambas clases de seguridad y termina explicando por qué un fallo físico puede comprometer la seguridad lógica."
  },
  {
    title: "Por qué proteger físicamente los sistemas", group: "fisica", label: "Seguridad física", source: "Necesidad de proteger físicamente los sistemas (d)(2).pdf", file: "libfile_078bcbe8d80881919427f2bf0c33798a", repoPdf: "03-proteccion-fisica.pdf",
    intro: "El acceso físico no autorizado puede facilitar el robo, el sabotaje o la evasión de controles digitales.",
    explain: ["La protección empieza en el perímetro y continúa hasta el puesto de trabajo: puertas y tarjetas de acceso, vigilancia, racks con llave, anclaje de equipos y bloqueo de puertos o del arranque externo.", "También hay que gestionar visitantes: registrarlos, limitar las zonas a las que entran y acompañarlos. Las entradas al CPD y las revisiones de seguridad deben quedar documentadas."],
    example: "Si alguien deja un USB sin supervisión en una sala abierta, puede conectar un dispositivo malicioso o copiar información.",
    exam: "Organiza la respuesta desde el edificio hasta el equipo: acceso, vigilancia, racks/puestos y gestión de visitantes. Añade un riesgo concreto."
  },
  {
    title: "Ubicación y condiciones ambientales", group: "fisica", label: "Seguridad física", source: "Ubicación física y condiciones ambientales (c)(1).pdf", file: "libfile_f952595e5000819185765e1c12f351e1", repoPdf: "04-ubicacion-condiciones-ambientales.pdf",
    intro: "La sala de los servidores afecta a su disponibilidad y vida útil; un CPD debe controlar entorno, energía y acceso.",
    explain: ["El material recomienda controlar la temperatura y la humedad, mantener la circulación de aire, ordenar el cableado y separar alimentación de datos. También propone una sala dedicada, acceso restringido y evitar lugares expuestos a inundaciones, vibraciones, polvo o luz solar directa.", "La protección incluye detectores, alarmas, extinción adecuada para equipos electrónicos, tomas dedicadas, puesta a tierra, protección contra sobretensiones y SAI. Las condiciones y alarmas se deben revisar y registrar."],
    example: "Un CPD con sensores de humedad y climatización redundante puede detectar una condición peligrosa y mantener el servicio si falla un equipo de climatización.",
    exam: "Explica cómo la ubicación, el clima, el aire, el fuego y la alimentación eléctrica influyen en la continuidad del CPD."
  },
  {
    title: "Medidas de seguridad pasiva", group: "pasiva", label: "Seguridad pasiva", source: "MEDIDAS DE SEGURIDAD PASIVA(2).pdf", file: "libfile_6f621fe3bf948191bbcdfd9115bf5ad9", repoPdf: "05-medidas-seguridad-pasiva.pdf",
    intro: "La seguridad pasiva reduce el daño y facilita volver a funcionar cuando la prevención no ha bastado.",
    explain: ["Entre las medidas del documento están las copias de seguridad, el cifrado, el almacenamiento externo o en la nube, las particiones y la desinfección del malware. No todas hacen exactamente lo mismo: unas permiten recuperar datos, otras dificultan que se lean y otras ayudan a contener o eliminar una infección.", "La medida se elige según el entorno. Por ejemplo, los datos críticos requieren copias probadas y separadas; los datos confidenciales requieren cifrado y control de acceso."],
    example: "Tras un ransomware, una copia desconectada y comprobada puede permitir restaurar los datos sin pagar al atacante.",
    exam: "Define seguridad pasiva como recuperación o reducción del daño y explica dos medidas indicando qué aporta cada una."
  },
  {
    title: "Copias de seguridad: tipos y estrategia", group: "pasiva", label: "Seguridad pasiva", source: "Copias de seguridad(2).pdf", file: "libfile_30162304af108191bd2aa92d393999ed", repoPdf: "06-copias-de-seguridad.pdf",
    intro: "Un backup permite recuperar información tras un fallo, un borrado accidental, malware, robo o desastre.",
    explain: ["Completa: copia todos los datos seleccionados; ocupa más y suele tardar más, pero la restauración es sencilla. Incremental: copia lo modificado desde la copia anterior; ahorra tiempo y espacio, pero para restaurar se necesita la completa y la cadena de incrementales. Diferencial: copia lo cambiado desde la última completa; su restauración requiere la completa y la última diferencial.", "Las copias pueden guardarse en discos, cintas o nube. Cada medio tiene ventajas y límites de coste, rapidez, capacidad, disponibilidad y confidencialidad. La regla 3-2-1 resume una estrategia habitual: tres copias, en dos tipos de soporte, con una fuera de la ubicación principal. Las copias se deben probar: una copia que no se puede restaurar no resuelve el problema."],
    example: "Si se pierde un servidor, una copia completa más la diferencial más reciente permite recuperar el estado alcanzado desde la última completa.",
    exam: "Compara completa, incremental y diferencial diciendo qué cambios guarda y qué conjunto necesitas para restaurar. Es la diferencia clave."
  },
  {
    title: "Hacer y recuperar una copia en Windows Server", group: "pasiva", label: "Seguridad pasiva", source: "Cómo hacer copias de seguridad en Windows Server(2).pdf", file: "libfile_730bc6a179bc819190d67e707be2b6ab", repoPdf: "07-backup-windows-server.pdf",
    intro: "Windows Server Backup permite elegir qué proteger, dónde guardar la copia y qué restaurar después.",
    explain: ["En Windows Server se instala la característica Copias de seguridad de Windows Server desde el Administrador del servidor. La herramienta permite ejecutar una copia puntual o programarla. Al crearla se elige servidor completo o personalizada, se seleccionan volúmenes, carpetas o archivos y se define el destino local o compartido.", "Para recuperar, se selecciona el origen y la fecha de la copia, se decide si se restauran volúmenes, aplicaciones o archivos y se indica la ubicación de destino. Si un archivo ya existe, se elige si se crea otra copia, se reemplaza o se omite. Al final se comprueba que el dato se ha restaurado."],
    example: "Para recuperar una versión anterior de un documento, se selecciona la fecha de backup y ese archivo, y se restaura en una ubicación controlada.",
    exam: "Describe el proceso en dos fases: configuración/realización y recuperación/verificación. Menciona selección, destino y política ante archivos existentes."
  },
  {
    title: "Congelación del sistema y puntos de restauración", group: "pasiva", label: "Seguridad pasiva", source: "SEGURIDAD PASIVA (II)(2).pdf", file: "libfile_7fd715350d988191a05fecd0e5d4c0ef", repoPdf: "08-congelacion-puntos-restauracion.pdf",
    intro: "La congelación permite devolver el sistema a un estado conocido y descartar cambios posteriores.",
    explain: ["El software toma una instantánea de una configuración estable. Después, el administrador puede anular los cambios realizados, por ejemplo al reiniciar un ordenador compartido, para que el siguiente usuario encuentre el equipo limpio.", "Los puntos de restauración de Windows se parecen, pero el documento señala una diferencia importante: restauran archivos del sistema y configuración, no los documentos personales. Conviene crear un punto antes de cambios importantes. No sustituyen a una copia de seguridad de los datos."],
    example: "En un aula informática, se puede restaurar la configuración del equipo después de que un usuario instale programas o cambie ajustes.",
    exam: "Diferencia congelación, punto de restauración y copia de seguridad: estado del sistema frente a recuperación de documentos."
  },
  {
    title: "Nube y chequeo preventivo de discos", group: "pasiva", label: "Seguridad pasiva", source: "SEGURIDAD PASIVA (III)(2).pdf", file: "libfile_8fc3f4836b408191943222a1e1437ae7", repoPdf: "09-nube-chequeo-discos.pdf",
    intro: "La nube aporta una ubicación separada para los datos; revisar discos ayuda a anticipar algunos fallos.",
    explain: ["La sincronización en la nube facilita acceder a archivos desde varios dispositivos y conserva una copia fuera de la oficina. A cambio, se depende del proveedor y de Internet, y hay que proteger la confidencialidad de los datos.", "Para prevenir fallos de disco se puede consultar S.M.A.R.T., que vigila parámetros y puede avisar de fallos futuros; usar utilidades del fabricante; o ejecutar herramientas del sistema como chkdsk en Windows y fsck en Linux. Un aviso predictivo no reemplaza una copia de seguridad."],
    example: "Si SMART avisa de un posible fallo, se debe respaldar la información y planificar el reemplazo del disco, no esperar a que deje de funcionar.",
    exam: "Expón una ventaja y un inconveniente de la nube y explica qué detecta SMART y qué no garantiza."
  },
  {
    title: "Malware: qué es y cómo se propaga", group: "fundamentos", label: "Fundamentos", source: "MALWARE.pdf", file: "libfile_bef8b73946188191ba3a1ac95fe0be3a", repoPdf: "10-malware.pdf",
    intro: "Malware es software malicioso que puede alterar un equipo o robar, borrar y modificar información.",
    explain: ["Puede aprovechar vulnerabilidades técnicas del sistema o de las aplicaciones, y también errores humanos: abrir un adjunto, instalar algo no confiable o confiar en un mensaje engañoso. No afecta solo a un sistema operativo.", "El material distingue familias según cómo se propagan, como virus, gusanos y troyanos, y también clasifica la peligrosidad por el daño, la facilidad de propagación y el alcance. La defensa combina actualizaciones, prudencia, antimalware, permisos limitados y copias de seguridad."],
    example: "Un virus necesita que se ejecute un archivo infectado para propagarse a otros ficheros; un engaño de phishing puede convencer a la persona para que lo ejecute.",
    exam: "Define malware, explica las dos grandes vías de propagación y cierra con medidas de prevención y recuperación."
  },
  {
    title: "SAI: funcionamiento y tipos", group: "pasiva", label: "Seguridad pasiva", source: "Funcionamiento de los SAI (e)(2).pdf", file: "libfile_69494fbfbd248191a983d8a50ae26c63", repoPdf: "11-funcionamiento-sai.pdf",
    intro: "Un SAI mantiene temporalmente la alimentación y protege los equipos frente a cortes y variaciones eléctricas.",
    explain: ["Su batería permite que el equipo siga funcionando un tiempo cuando falla la red y da margen para guardar el trabajo o apagar correctamente. También puede proteger frente a sobretensiones.", "Offline: económico, conmuta a batería cuando detecta un corte y puede tener un pequeño tiempo de conmutación. Interactivo: añade regulación automática de tensión (AVR) y encaja con ordenadores y pequeños equipos. Online o doble conversión: transforma continuamente la energía, ofrece la protección más alta y no tiene tiempo de conmutación, pero cuesta más."],
    example: "En un CPD, un SAI online puede mantener los servidores durante el corte y permitir un apagado controlado.",
    exam: "Compara los tres tipos por funcionamiento, nivel de protección y uso recomendado; explica que el SAI da autonomía limitada, no energía ilimitada."
  },
  {
    title: "Dónde conectar un SAI", group: "pasiva", label: "Seguridad pasiva", source: "Selección de puntos de aplicación de SAI (f)(2).pdf", file: "libfile_45731bf2e1b08191bb3cf64b83f03d38", repoPdf: "12-seleccion-sai.pdf",
    intro: "Hay que reservar la autonomía del SAI para equipos cuya caída afectaría a servicios importantes.",
    explain: ["Se priorizan servidores, almacenamiento y equipos principales de red, como switches o routers centrales. Las impresoras y periféricos suelen tener menor prioridad.", "Se calcula el consumo y la autonomía, se distribuye la carga para no sobrepasar el SAI y se registra qué está conectado a cada unidad. También se realizan pruebas de corte y de apagado controlado."],
    example: "Mantener el switch central y el servidor durante un corte puede conservar la red y los servicios; conectar impresoras puede gastar autonomía sin proteger la operación crítica.",
    exam: "Justifica la selección según criticidad, consumo, autonomía y dependencias entre servicios; no respondas solo con una lista de equipos."
  },
  {
    title: "Sistemas biométricos", group: "accesos", label: "Control de acceso", source: "Sistemas biométricos (i)(2).pdf", file: "libfile_fd3ba8c5ee4c8191801c4efaf73c31a5", repoPdf: "13-sistemas-biometricos.pdf",
    intro: "La biometría autentica a una persona mediante rasgos físicos o de comportamiento.",
    explain: ["Puede usar huella, iris, rostro, voz o patrones de comportamiento. Es cómoda y el rasgo no se olvida, pero puede existir suplantación y los datos biométricos plantean riesgos de privacidad: si una plantilla se roba, no se cambia como una contraseña.", "FAR es la tasa de aceptación de impostores; FRR es la tasa de rechazo de usuarios legítimos. Las plantillas deben cifrarse y protegerse. El documento recomienda usar biometría como complemento y auditar el sistema."],
    example: "Un lector de huella puede reforzar el acceso a un CPD, combinado con una tarjeta o una segunda verificación.",
    exam: "Explica el método, sus ventajas y riesgos, y diferencia FAR (deja pasar impostores) de FRR (rechaza usuarios legítimos)."
  },
  {
    title: "Política de contraseñas", group: "accesos", label: "Control de acceso", source: "Política de contraseñas (h)(2).pdf", file: "libfile_d6bfeeb4717c8191a7b9e87ddd48f17a", repoPdf: "14-politica-contrasenas.pdf",
    intro: "Una política define cómo crear y proteger contraseñas para reducir accesos no autorizados.",
    explain: ["El documento propone contraseñas largas y difíciles de adivinar, evitar reutilizarlas, limitar los intentos fallidos y almacenar las credenciales de forma segura (nunca en texto plano). Un gestor ayuda a usar claves distintas.", "MFA añade otro factor, como una aplicación o un token. Así, una contraseña filtrada por sí sola no basta para entrar. La formación también importa: los usuarios deben reconocer phishing y no compartir credenciales."],
    example: "Si una contraseña se filtra, la autenticación multifactor puede bloquear al atacante porque no dispone del segundo factor.",
    exam: "Describe una política completa: creación, almacenamiento, intentos de acceso, MFA y formación del usuario."
  },
  {
    title: "ACL y principio de mínimo privilegio", group: "accesos", label: "Control de acceso", source: "Política de seguridad con ACL (g)(2).pdf", file: "libfile_b4d98e180bf48191bb588f0979d5a5df", repoPdf: "15-politica-acl.pdf",
    intro: "Una ACL indica qué usuarios o grupos pueden usar un recurso y qué acciones tienen permitidas.",
    explain: ["Las reglas pueden conceder lectura, escritura, ejecución o eliminación, según el sistema. Se aplican a carpetas, bases de datos, routers y cortafuegos.", "El principio de mínimo privilegio significa conceder únicamente los permisos que cada persona necesita para trabajar. Las ACL se revisan para retirar permisos antiguos o excesivos, y se registran los cambios importantes."],
    example: "En una carpeta compartida, los usuarios pueden tener lectura mientras que solo el grupo de administradores puede modificar o borrar archivos.",
    exam: "Define ACL, explica cómo asigna permisos y relaciona su uso con el mínimo privilegio y las revisiones periódicas."
  }
];

const questions = [
  { prompt: "Explica la triada CIA y pon un ejemplo de cada propiedad.", tag: "Fundamentos", answer: "La triada CIA reúne tres objetivos de seguridad. La confidencialidad limita el acceso a personas autorizadas; por ejemplo, cifrar una base de datos. La integridad evita modificaciones no autorizadas; por ejemplo, comprobar una firma digital. La disponibilidad asegura que sistemas y datos estén accesibles cuando se necesitan; por ejemplo, disponer de redundancia o copias para recuperarse de un fallo. Las tres propiedades se complementan: proteger solo una no basta para mantener segura la información." },
  { prompt: "Compara las copias completas, incrementales y diferenciales e indica cómo se restaura cada una.", tag: "Copias de seguridad", answer: "La copia completa guarda todos los datos seleccionados y es la más sencilla de restaurar, aunque consume más tiempo y espacio. La incremental guarda los cambios desde la copia inmediatamente anterior; ahorra recursos, pero para restaurar se necesita la completa y cada incremental posterior. La diferencial guarda los cambios desde la última completa; para restaurar se usa esa completa y la diferencial más reciente. La elección depende del equilibrio entre espacio, rapidez de copia y facilidad de recuperación." },
  { prompt: "Explica los tipos de SAI y recomienda uno para un servidor crítico.", tag: "Continuidad eléctrica", answer: "El SAI protege frente a cortes y variaciones y mantiene el equipo funcionando durante un tiempo limitado. El tipo offline es el más básico y económico; conmuta a batería cuando detecta un corte. El interactivo incorpora regulación automática de tensión. El online transforma continuamente la energía y ofrece protección alta sin tiempo de conmutación, por lo que es adecuado para servidores críticos o un CPD. La elección debe tener en cuenta la carga y la autonomía necesaria." },
  { prompt: "Diferencia la seguridad física de la lógica y explica por qué deben combinarse.", tag: "Seguridad física", answer: "La seguridad física protege equipos e instalaciones mediante cerraduras, racks, cámaras, control de acceso y protección ambiental. La seguridad lógica protege cuentas, datos y servicios mediante contraseñas, permisos, cifrado, antivirus y cortafuegos. Deben combinarse porque un atacante con acceso físico puede robar o conectar dispositivos al equipo y sortear controles digitales. Por ejemplo, un servidor necesita tanto una sala restringida y un rack cerrado como cuentas con permisos mínimos." },
  { prompt: "¿Qué es una ACL? Explica cómo se relaciona con el mínimo privilegio.", tag: "Control de acceso", answer: "Una ACL, o lista de control de acceso, contiene reglas que indican qué usuarios o grupos pueden acceder a un recurso y con qué permisos, como lectura, escritura o eliminación. Aplicar mínimo privilegio significa conceder a cada usuario solo las acciones necesarias para su trabajo. Por ejemplo, en una carpeta compartida, un grupo puede tener lectura y solo los administradores escritura. Las reglas deben revisarse para retirar permisos que ya no sean necesarios." },
  { prompt: "Explica qué es la biometría y comenta sus ventajas, riesgos y métricas.", tag: "Autenticación", answer: "La biometría autentica mediante características físicas o de comportamiento, como huella, iris, rostro o voz. Es cómoda y no depende de recordar una clave, pero puede haber suplantación y una filtración de datos biométricos afecta a la privacidad; además, el rasgo no se puede cambiar fácilmente. FAR mide con qué frecuencia se acepta por error a un impostor; FRR mide con qué frecuencia se rechaza a una persona legítima. Por eso se protegen las plantillas y se recomienda combinar la biometría con otras medidas." },
  { prompt: "Define seguridad pasiva y explica cómo ayudan las copias de seguridad y la congelación del sistema.", tag: "Recuperación", answer: "La seguridad pasiva reúne medidas para reducir el daño y facilitar la recuperación cuando ocurre un incidente. Una copia de seguridad conserva datos para poder restaurarlos después de un borrado, fallo o ataque. La congelación guarda una instantánea de una configuración y permite descartar cambios posteriores, algo útil en equipos compartidos. No son iguales: la copia respalda datos seleccionados y la congelación devuelve el sistema a un estado conocido; un punto de restauración tampoco sustituye una copia de documentos personales." }
];

const grid = document.querySelector("#topic-grid");
const search = document.querySelector("#search");
const count = document.querySelector("#result-count");
const empty = document.querySelector("#empty-state");
const assetRoot = new URL(".", document.currentScript.src);
let activeFilter = "todos";

function renderTopics() {
  const query = search.value.trim().toLocaleLowerCase("es");
  const shown = topics.filter(topic => {
    const matchesFilter = activeFilter === "todos" || topic.group === activeFilter;
    const haystack = [topic.title, topic.label, topic.intro, ...topic.explain, topic.example, topic.exam].join(" ").toLocaleLowerCase("es");
    return matchesFilter && haystack.includes(query);
  });
  count.textContent = `${shown.length} ${shown.length === 1 ? "tema" : "temas"}`;
  empty.hidden = shown.length > 0;
  grid.innerHTML = shown.map((topic, i) => `
    <article class="topic-card">
      <div class="card-top"><span class="topic-tag tag-${topic.group}">${topic.label}</span><span class="card-open" aria-hidden="true">+</span></div>
      <h3>${topic.title}</h3><p class="topic-intro">${topic.intro}</p>
      <details class="topic-details"><summary>Entender este tema <span>＋</span></summary>
        <div class="detail-content">${topic.explain.map(paragraph => `<p>${paragraph}</p>`).join("")}
          <div class="example-box"><b>Ejemplo</b><p>${topic.example}</p></div>
          <div class="exam-box"><b>Pista para el examen</b><p>${topic.exam}</p></div>
          <div class="pdf-links"><a class="pdf-link" href="https://chatgpt.com/api/library/files/${topic.file}/download" target="_blank" rel="noopener">Consultar PDF original</a><a class="pdf-link repo-pdf-link" href="${new URL(`pdfs/${topic.repoPdf}`, assetRoot).href}" target="_blank" rel="noopener" hidden>PDF del repositorio</a></div>
        </div>
      </details>
    </article>`).join("");
  grid.querySelectorAll(".repo-pdf-link").forEach(link => {
    fetch(link.href, { method: "HEAD" }).then(response => { if (response.ok) link.hidden = false; }).catch(() => {});
  });
}

function renderQuestions() {
  document.querySelector("#question-list").innerHTML = questions.map((item, index) => `
    <details class="question-item"><summary><span class="question-index">${String(index + 1).padStart(2, "0")}</span><span class="question-text">${item.prompt}<small>${item.tag}</small></span><span class="question-toggle">+</span></summary><div class="model-answer"><span>RESPUESTA MODELO</span><p>${item.answer}</p></div></details>`).join("");
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active"); activeFilter = button.dataset.filter; renderTopics();
}));
search.addEventListener("input", renderTopics);
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); }
  if (event.key === "Escape" && document.activeElement === search) { search.value = ""; search.blur(); renderTopics(); }
});
document.querySelector("#copy-template").addEventListener("click", async event => {
  const button = event.currentTarget;
  try { await navigator.clipboard.writeText("[Concepto] es… Su función es… Se diferencia de… porque… Por ejemplo, en…"); button.innerHTML = "Copiado <span>✓</span>"; setTimeout(() => button.innerHTML = "Copiar frase <span>⧉</span>", 1600); }
  catch { button.textContent = "Selecciona la plantilla de arriba"; }
});

renderTopics();
renderQuestions();
