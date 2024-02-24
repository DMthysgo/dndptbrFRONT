// Função para adicionar novo ataque
function addAttack() {
  var fieldset = document.getElementById("attackSet");
  var clone = fieldset.cloneNode(true);
  fieldset.parentNode.appendChild(clone);
}

// Função para remover ataque
function removeAttack(event) {
  var fieldset = event.target.closest(".repeating_attacks");
  if (fieldset.parentNode.children.length > 1) {
    fieldset.parentNode.removeChild(fieldset);
  }
}

// Delegar evento para remover ataque
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("removerAtaque")) {
    removeAttack(event);
  }
});

// Inventário novo item
document
  .getElementById("addItemButton")
  .addEventListener("click", adicionarItem);

// Adicionar item
function adicionarItem() {
  var table = document.getElementById("tabelaInventario");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var removeCell = row.insertCell(0);
  var nameCell = row.insertCell(1);
  var massCell = row.insertCell(2);
  var quantityCell = row.insertCell(3);

  removeCell.innerHTML =
    '<button type="button" class="removerItem noto-emoji">❌</button>';
  nameCell.innerHTML =
    '<input class="sheet-long-text-input" style="width: 100%" type="text" name="personagem_inventario_nome"/>';
  massCell.innerHTML =
    '<input class="sheet-numbox" style="width: 100%" type="number" name="personagem_inventario_massa" min="0" value="0" step="0.1" onchange="recalcularCarga()"/>';
  quantityCell.innerHTML =
    '<input class="sheet-numbox" style="width: 100%" type="number" name="personagem_inventario_quantidade" min="0" value="1" onchange="recalcularCarga()"/>';
  RelacionarBotoesRemover(); // Atualiza os event listeners dos botões de remover
}

// Função para atualizar os event listeners dos botões de remover dos itens do inventario
function RelacionarBotoesRemover() {
  var removeButtons = document.querySelectorAll(".removerItem");
  removeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var row = this.parentNode.parentNode; // Obtém a linha atual
      row.parentNode.removeChild(row); // Remove a linha
      recalcularCarga(); // Recalcula a carga após a remoção
    });
  });
}

// Novo Pet
document.getElementById("addPetButton").addEventListener("click", criarPet());
function criarPet() {
  var table = document.getElementById("tabelaPets");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var createPet = row.insertCell(0);

  createPet.innerHTML = `
  <!-- PET -->
  <div
    class="sheet-repeated-entry sheet-subsection-nontable-row compendium-drop-target"
    style="border-radius: 5%; background-color: bisque"
  >
    <!-- Nome e especie -->
    <div class="sheet-subsection-nontable-row">
      <!-- Nome do Pet -->
      <div class="sheet-inline">
        <div class="sheet-undertext">Nome</div>
        <input
          style="width: 9em"
          type="text"
          name="personagem_pet_nome"
        />
      </div>

      <!-- Especie do Pet -->
      <div class="sheet-inline">
        <div class="sheet-undertext">Espécie</div>
        <input
          style="width: 9em"
          type="text"
          name="personagem_pet_especie"
        />
      </div>
    </div>

    <!-- Dados gerais-->
    <div class="sheet-subsection-nontable-row">
      <!-- Classe de armadura -->
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          CA
        </div>
        <input
          class="sheet-numbox"
          type="number"
          name="personagem_pet_ca"
          step="1"
          value="10"
        />
      </div>

      <!-- Pontos de vida -->
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          Pontos de vida
        </div>
        <div style="padding: 0px">
          <input
            class="sheet-numbox"
            type="number"
            name="personagem_pet_pv_atual"
            step="1"
            value="1"
          />
          /
          <input
            class="sheet-numbox"
            type="number"
            name="personagem_pet_pv_max"
            step="1"
            min="1"
            value="1"
          />
        </div>
      </div>
      <br/>
      <!-- Deslocamento -->
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          Deslocamento
        </div>
        <input
          style="width: 100%"
          type="text"
          name="personagem_pet_deslocamento"
        />
      </div>
    </div>

    <!-- Habilidades -->
    <div class="sheet-subsection-nontable-row">
      <!-- Força -->
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          Força
        </div>
        <input
          class="sheet-numbox"
          style="width: 4.5em"
          type="number"
          name="personagem_pet_forca"
          min="0"
          value="8"
        />
      </div>
      <!-- Destreza -->
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          Destreza
        </div>
        <input
          class="sheet-numbox"
          style="width: 4.5em"
          type="number"
          name="personagem_pet_destreza"
          min="0"
          value="8"
        />
      </div>
      <!-- Constituição -->
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          Constituição
        </div>
        <input
          class="sheet-numbox"
          style="width: 4.5em"
          type="number"
          name="personagem_pet_constituicao"
          min="0"
          value="8"
        />
      </div>
      <br />
      <!-- Inteligência -->
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          Inteligência
        </div>
        <input
          class="sheet-numbox"
          style="width: 4.5em"
          type="number"
          name="personagem_pet_inteligencia"
          min="0"
          value="8"
        />
      </div>
      <!-- Sabedoria -->
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          Sabedoria
        </div>
        <input
          class="sheet-numbox"
          style="width: 4.5em"
          type="number"
          name="personagem_pet_sabedoria"
          min="0"
          value="8"
        />
      </div>
      <!-- Carisma -->
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          Carisma
        </div>
        <input
          class="sheet-numbox"
          style="width: 4.5em"
          type="number"
          name="personagem_pet_carisma"
          min="0"
          value="8"
        />
      </div>
    </div>

    <!-- Descrições extras -->
    <div class="sheet-subsection-nontable-row">
      <div class="sheet-undertext">
        Características, ataques, itens carregados,
        etc.
      </div>
      <textarea
        class="sheet-paragraph-box"
        name="personagem_pet_descricao"
      ></textarea>
    </div>
    <button style="width: 100%" type="button" class="removerPet">Remover</button>
  </div>
  
  <hr/>
  `;

  // Adiciona um event listener para o botão de remover
  row.querySelector(".removerPet").addEventListener("click", function () {
    var rowIndex = this.parentNode.parentNode.rowIndex;
    table.deleteRow(rowIndex);
  });
}

// Nova Magia
document.getElementById("criarMagia").addEventListener("click", criarMagia());
function criarMagia() {
  var table = document.getElementById("tabelaMagias");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var criarMagia = row.insertCell(0);

  criarMagia.innerHTML = `<div
  class="sheet-repeated-entry sheet-subsection-nontable-row compendium-drop-target"
  style="border: none"
  >
  <div
    class="sheet-inline sheet-text-align-center"
  >
    <div class="sheet-undertext">P</div>
    <input
      type="checkbox"
      name="personagem_magias_preparada"
    />
  </div>
  <div class="sheet-inline">
    <div
      class="sheet-undertext sheet-text-align-center"
    >
      Nível
    </div>
    <select
      class="sheet-numbox"
      style="width: 3em"
      name="personagem_magias_nivel"
      accept="Level"
    >
      <option value="0">T</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
  </div>
  <div class="sheet-inline">
    <div class="sheet-undertext">Nome</div>
    <input
      class="sheet-long-text-input"
      style="width: 10em"
      type="text"
      name="personagem_magias_nome"
    />
  </div>
  <div class="sheet-inline">
    <div
      class="sheet-undertext sheet-text-align-center"
    >
      Tempo de conjuração
    </div>
    <input
      style="width: 7.5em"
      type="text"
      name="personagem_magias_tempo"
    />
  </div>
  <div class="sheet-inline">
    <div
      class="sheet-undertext sheet-text-align-center"
    >
      Distancia
    </div>
    <input
      style="width: 3.5em"
      type="text"
      name="personagem_magias_distancia"
    />
  </div>
  <div class="sheet-inline">
    <div
      class="sheet-undertext sheet-text-align-center"
    >
      Componentes
    </div>
    <input
      style="width: 4em"
      type="text"
      name="personagem_magias_componentes"
      value="VSM"
    />
  </div>
  <div class="sheet-inline">
    <div
      class="sheet-undertext sheet-text-align-center"
    >
      Duração
    </div>
    <input
      style="width: 4em"
      type="text"
      name="personagem_magias_duracao"
    />
  </div>
  <div
    class="sheet-inline sheet-text-align-center"
  >
    <div class="sheet-undertext">Ritual</div>
    <input
      type="checkbox"
      name="personagem_magias_ritual"
    />
  </div>
  <div
    class="sheet-inline sheet-text-align-center"
  >
    <div class="sheet-undertext">Conc.</div>
    <input
      type="checkbox"
      name="personagem_magias_concentracao"
    />
  </div>
  <span
    class="sheet-undertext"
    style="vertical-align: bottom"
    >&#8505;</span
  ><input
    class="sheet-spell-info-button"
    style="vertical-align: bottom"
    type="checkbox"
  />
  <div class="sheet-spell-info">
    <!-- more spell info -->
    <div style="padding: 4px">
      <div
        class="sheet-inline sheet-text-align-center"
      >
        <div class="sheet-undertext">
          Referência/pg.
        </div>
        <input
          style="width: 7em"
          type="text"
          name="personagem_magias_referencia"
        />
      </div>
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-center"
        >
          Escola da Magia
        </div>
        <input
          style="width: 10em"
          type="text"
          name="personagem_magias_escola"
        />
      </div>
      <div class="sheet-inline">
        <div
          class="sheet-undertext sheet-text-align-left"
        >
          Materiais (se necessário)
        </div>
        <input
          style="width: 350px"
          type="text"
          name="personagem_magias_materiais"
        />
      </div>
    </div>
    <textarea
      class="sheet-spell-paragraph-box"
      name="personagem_magias_descricao"
    ></textarea>
  </div>
  <button type="button" class="removerMagia noto-emoji">❌</button>
  </div>`;

  // Adiciona um event listener para o botão de remover
  row.querySelector(".removerMagia").addEventListener("click", function () {
    var rowIndex = this.parentNode.parentNode.rowIndex;
    table.deleteRow(rowIndex);
  });
}
