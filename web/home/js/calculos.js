// Definir campos para modificadores
const Modificadorcarisma = document.querySelector(
  'input[name="personagem_modificador_carisma"]'
);
const Modificadorsabedoria = document.querySelector(
  'input[name="personagem_modificador_sabedoria"]'
);
const Modificadorinteligencia = document.querySelector(
  'input[name="personagem_modificador_inteligencia"]'
);
const Modificadorconstituicao = document.querySelector(
  'input[name="personagem_modificador_constituicao"]'
);
const Modificadordestreza = document.querySelector(
  'input[name="personagem_modificador_destreza"]'
);
const Modificadorforca = document.querySelector(
  'input[name="personagem_modificador_forca"]'
);
const proficiencia = document.querySelector(
  'input[name="personagem_proficiencia"]'
);

// Função alteração de campos
function campoAlterado(campo) {
  // Alterar modificadores
  if (campo.name === "personagem_forca") {
    const modificador = Math.floor((parseInt(campo.value) - 10) / 2);
    if (modificador >= 0) {
      Modificadorforca.value = "+" + modificador;
    } else {
      Modificadorforca.value = modificador;
    }
  } else if (campo.name === "personagem_destreza") {
    const modificador = Math.floor((parseInt(campo.value) - 10) / 2);
    if (modificador >= 0) {
      Modificadordestreza.value = "+" + modificador;
    } else {
      Modificadordestreza.value = modificador;
    }
  } else if (campo.name === "personagem_constituicao") {
    const modificador = Math.floor((parseInt(campo.value) - 10) / 2);
    if (modificador >= 0) {
      Modificadorconstituicao.value = "+" + modificador;
    } else {
      Modificadorconstituicao.value = modificador;
    }
  } else if (campo.name === "personagem_inteligencia") {
    const modificador = Math.floor((parseInt(campo.value) - 10) / 2);
    if (modificador >= 0) {
      Modificadorinteligencia.value = "+" + modificador;
    } else {
      Modificadorinteligencia.value = modificador;
    }
  } else if (campo.name === "personagem_sabedoria") {
    const modificador = Math.floor((parseInt(campo.value) - 10) / 2);
    if (modificador >= 0) {
      Modificadorsabedoria.value = "+" + modificador;
    } else {
      Modificadorsabedoria.value = modificador;
    }
  } else if (campo.name === "personagem_carisma") {
    const modificador = Math.floor((parseInt(campo.value) - 10) / 2);
    if (modificador >= 0) {
      Modificadorcarisma.value = "+" + modificador;
    } else {
      Modificadorcarisma.value = modificador;
    }
  }

  // Experiencia, Nível e Iniciativa
  if (campo.name === "personagem_xp") {
    const nivel = document.querySelector('input[name="personagem_nivel"]');
    const xpPlus = document.querySelector('input[name="personagem_xp_plus"]');
    const { nivel: nivelCalc, xpFaltanteProximoNivel } = verificarNivel(
      parseInt(campo.value)
    );
    nivel.value = nivelCalc;
    xpPlus.value = xpFaltanteProximoNivel;
    // Definir Proficiência
    if (nivelCalc < 5) {
      proficiencia.value = "+2";
    } else if (nivelCalc < 9 && nivelCalc >= 5) {
      proficiencia.value = "+3";
    } else if (nivelCalc < 13 && nivelCalc >= 9) {
      proficiencia.value = "+4";
    } else if (nivelCalc < 17 && nivelCalc >= 13) {
      proficiencia.value = "+5";
    } else if (nivelCalc >= 17) {
      proficiencia.value = "+6";
    }
  }

  // set 0
  if (campo.name === "personagem_equip_arma_extra" && campo.value === "") {
    campo.value = 0;
  }
  if (campo.name.includes("personagem_moeda") && campo.value === "") {
    campo.value = 0;
  }

  // Indice de alteração
  const indiceCampo = document.getElementsByName(campo.name);
  for (let i = 0; i < indiceCampo.length; i++) {
    if (indiceCampo[i] === campo) {
      calcBA(i);
    }
  }

  // Chamar funções
  calcIniciativa();
  deslocamentosExtras();
  calcPericias();
  calcCA();
  calcMoedas();
  recalcularCarga();
}

// Definir Deslocamentos Diferentes
function deslocamentosExtras() {
  const base = document.querySelector(
    'input[name="personagem_deslocamento_base"]'
  );
  const nado = document.querySelector(
    'input[name="personagem_deslocamento_nado"]'
  );
  const escalada = document.querySelector(
    'input[name="personagem_deslocamento_escalada"]'
  );
  const saltoh = document.querySelector(
    'input[name="personagem_deslocamento_saltoh"]'
  );
  const saltov = document.querySelector(
    'input[name="personagem_deslocamento_saltov"]'
  );
  const forca = document.querySelector('input[name="personagem_forca"]');
  const destreza = document.querySelector('input[name="personagem_destreza"]');
  const constituicao = document.querySelector(
    'input[name="personagem_constituicao"]'
  );
  base.value = Math.floor((3 + 0.6 * destreza.value) / 1.5) * 1.5 + "m";
  nado.value =
    Math.floor((forca.value * 0.3 + destreza.value * 0.3) / 1.5) * 1.5 + "m";
  escalada.value =
    Math.floor((forca.value * 0.2 + constituicao.value * 0.3) / 1.5) * 1.5 +
    "m";
  saltoh.value = Math.floor((0.3 * forca.value) / 0.25) * 0.25 + "m";
  saltov.value =
    Math.floor((1 + 0.3 * Modificadorforca.value) / 0.25) * 0.25 + "m";
}

// Calcular Nível e XP pra subir de nível
function verificarNivel(xp) {
  const xplvlup = [
    0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
    120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000,
  ];
  for (let i = 0; i < xplvlup.length; i++) {
    if (xp < xplvlup[i]) {
      const nivelAtual = i;
      const xpNecessarioProximoNivel = xplvlup[i] - xp;
      return {
        nivel: nivelAtual,
        xpFaltanteProximoNivel: xpNecessarioProximoNivel,
      };
    }
  }
  return { nivel: xplvlup.length, xpFaltanteProximoNivel: 0 };
  // Se não estiver em nenhum intervalo, é o nível 20
}

// Calcular Iniciativa
function calcIniciativa() {
  const iniciativa = document.querySelector(
    'input[name="personagem_iniciativa"]'
  );
  iniciativa.value = Modificadordestreza.value;
}

// Definir Bônus das perícias
function calcPericias() {
  const proficiencia = document.querySelector(
    'input[name="personagem_proficiencia"]'
  );

  const Atletismo = document.querySelector(
    'input[name="personagem_bonus_atletismo"]'
  );
  const profAtletismo = document.querySelector(
    'select[name="personagem_prof_atletismo"]'
  );
  bonusAtletismo =
    parseInt(Modificadorforca.value) +
    profAtletismo.value * parseInt(proficiencia.value);
  if (Modificadorforca.value >= 0) {
    Atletismo.value = "+" + bonusAtletismo;
  } else {
    Atletismo.value = bonusAtletismo;
  }

  const Acrobacia = document.querySelector(
    'input[name="personagem_bonus_acrobacia"]'
  );
  const profAcrobacia = document.querySelector(
    'select[name="personagem_prof_acrobacia"]'
  );
  bonusAcrobacia =
    parseInt(Modificadordestreza.value) +
    profAcrobacia.value * parseInt(proficiencia.value);
  if (Modificadordestreza.value >= 0) {
    Acrobacia.value = "+" + bonusAcrobacia;
  } else {
    Acrobacia.value = bonusAcrobacia;
  }

  const Furtividade = document.querySelector(
    'input[name="personagem_bonus_furtividade"]'
  );
  const profFurtividade = document.querySelector(
    'select[name="personagem_prof_furtividade"]'
  );
  bonusFurtividade =
    parseInt(Modificadordestreza.value) +
    profFurtividade.value * parseInt(proficiencia.value);
  if (Modificadordestreza.value >= 0) {
    Furtividade.value = "+" + bonusFurtividade;
  } else {
    Furtividade.value = bonusFurtividade;
  }

  const Prestidigitacao = document.querySelector(
    'input[name="personagem_bonus_prestidigitacao"]'
  );
  const profPrestidigitacao = document.querySelector(
    'select[name="personagem_prof_prestidigitacao"]'
  );
  bonusPrestidigitacao =
    parseInt(Modificadordestreza.value) +
    profPrestidigitacao.value * parseInt(proficiencia.value);
  if (Modificadordestreza.value >= 0) {
    Prestidigitacao.value = "+" + bonusPrestidigitacao;
  } else {
    Prestidigitacao.value = bonusPrestidigitacao;
  }

  const Arcanismo = document.querySelector(
    'input[name="personagem_bonus_arcanismo"]'
  );
  const profArcanismo = document.querySelector(
    'select[name="personagem_prof_arcanismo"]'
  );
  bonusArcanismo =
    parseInt(Modificadorinteligencia.value) +
    profArcanismo.value * parseInt(proficiencia.value);
  if (Modificadorinteligencia.value >= 0) {
    Arcanismo.value = "+" + bonusArcanismo;
  } else {
    Arcanismo.value = bonusArcanismo;
  }

  const Historia = document.querySelector(
    'input[name="personagem_bonus_historia"]'
  );
  const profHistoria = document.querySelector(
    'select[name="personagem_prof_historia"]'
  );
  bonusHistoria =
    parseInt(Modificadorinteligencia.value) +
    profHistoria.value * parseInt(proficiencia.value);
  if (Modificadorinteligencia.value >= 0) {
    Historia.value = "+" + bonusHistoria;
  } else {
    Historia.value = bonusHistoria;
  }

  const Investigacao = document.querySelector(
    'input[name="personagem_bonus_investigacao"]'
  );
  const profInvestigacao = document.querySelector(
    'select[name="personagem_prof_investigacao"]'
  );
  bonusInvestigacao =
    parseInt(Modificadorinteligencia.value) +
    profInvestigacao.value * parseInt(proficiencia.value);
  if (Modificadorinteligencia.value >= 0) {
    Investigacao.value = "+" + bonusInvestigacao;
  } else {
    Investigacao.value = bonusInvestigacao;
  }

  const Natureza = document.querySelector(
    'input[name="personagem_bonus_natureza"]'
  );
  const profNatureza = document.querySelector(
    'select[name="personagem_prof_natureza"]'
  );
  bonusNatureza =
    parseInt(Modificadorinteligencia.value) +
    profNatureza.value * parseInt(proficiencia.value);
  if (Modificadorinteligencia.value >= 0) {
    Natureza.value = "+" + bonusNatureza;
  } else {
    Natureza.value = bonusNatureza;
  }

  const Religiao = document.querySelector(
    'input[name="personagem_bonus_religiao"]'
  );
  const profReligiao = document.querySelector(
    'select[name="personagem_prof_religiao"]'
  );
  bonusReligiao =
    parseInt(Modificadorinteligencia.value) +
    profReligiao.value * parseInt(proficiencia.value);
  if (Modificadorinteligencia.value >= 0) {
    Religiao.value = "+" + bonusReligiao;
  } else {
    Religiao.value = bonusReligiao;
  }

  const Intuicao = document.querySelector(
    'input[name="personagem_bonus_intuicao"]'
  );
  const profIntuicao = document.querySelector(
    'select[name="personagem_prof_intuicao"]'
  );
  bonusIntuicao =
    parseInt(Modificadorsabedoria.value) +
    profIntuicao.value * parseInt(proficiencia.value);
  if (Modificadorsabedoria.value >= 0) {
    Intuicao.value = "+" + bonusIntuicao;
  } else {
    Intuicao.value = bonusIntuicao;
  }

  const animais = document.querySelector(
    'input[name="personagem_bonus_animais"]'
  );
  const profanimais = document.querySelector(
    'select[name="personagem_prof_animais"]'
  );
  bonusanimais =
    parseInt(Modificadorsabedoria.value) +
    profanimais.value * parseInt(proficiencia.value);
  if (Modificadorsabedoria.value >= 0) {
    animais.value = "+" + bonusanimais;
  } else {
    animais.value = bonusanimais;
  }

  const Medicina = document.querySelector(
    'input[name="personagem_bonus_medicina"]'
  );
  const profMedicina = document.querySelector(
    'select[name="personagem_prof_medicina"]'
  );
  bonusMedicina =
    parseInt(Modificadorsabedoria.value) +
    profMedicina.value * parseInt(proficiencia.value);
  if (Modificadorsabedoria.value >= 0) {
    Medicina.value = "+" + bonusMedicina;
  } else {
    Medicina.value = bonusMedicina;
  }

  const Percepcao = document.querySelector(
    'input[name="personagem_bonus_percepcao"]'
  );
  const profPercepcao = document.querySelector(
    'select[name="personagem_prof_percepcao"]'
  );
  bonusPercepcao =
    parseInt(Modificadorsabedoria.value) +
    profPercepcao.value * parseInt(proficiencia.value);
  if (Modificadorsabedoria.value >= 0) {
    Percepcao.value = "+" + bonusPercepcao;
  } else {
    Percepcao.value = bonusPercepcao;
  }

  const Sobrevivencia = document.querySelector(
    'input[name="personagem_bonus_sobrevivencia"]'
  );
  const profSobrevivencia = document.querySelector(
    'select[name="personagem_prof_sobrevivencia"]'
  );
  bonusSobrevivencia =
    parseInt(Modificadorsabedoria.value) +
    profSobrevivencia.value * parseInt(proficiencia.value);
  if (Modificadorsabedoria.value >= 0) {
    Sobrevivencia.value = "+" + bonusSobrevivencia;
  } else {
    Sobrevivencia.value = bonusSobrevivencia;
  }

  const Atuacao = document.querySelector(
    'input[name="personagem_bonus_atuacao"]'
  );
  const profAtuacao = document.querySelector(
    'select[name="personagem_prof_atuacao"]'
  );
  bonusAtuacao =
    parseInt(Modificadorcarisma.value) +
    profAtuacao.value * parseInt(proficiencia.value);
  if (Modificadorcarisma.value >= 0) {
    Atuacao.value = "+" + bonusAtuacao;
  } else {
    Atuacao.value = bonusAtuacao;
  }

  const Manipulacao = document.querySelector(
    'input[name="personagem_bonus_manipulacao"]'
  );
  const profManipulacao = document.querySelector(
    'select[name="personagem_prof_manipulacao"]'
  );
  bonusManipulacao =
    parseInt(Modificadorcarisma.value) +
    profManipulacao.value * parseInt(proficiencia.value);
  if (Modificadorcarisma.value >= 0) {
    Manipulacao.value = "+" + bonusManipulacao;
  } else {
    Manipulacao.value = bonusManipulacao;
  }

  const Intimidacao = document.querySelector(
    'input[name="personagem_bonus_intimidacao"]'
  );
  const profIntimidacao = document.querySelector(
    'select[name="personagem_prof_intimidacao"]'
  );
  bonusIntimidacao =
    parseInt(Modificadorcarisma.value) +
    profIntimidacao.value * parseInt(proficiencia.value);
  if (Modificadorcarisma.value >= 0) {
    Intimidacao.value = "+" + bonusIntimidacao;
  } else {
    Intimidacao.value = bonusIntimidacao;
  }

  const Persuasao = document.querySelector(
    'input[name="personagem_bonus_persuasao"]'
  );
  const profPersuasao = document.querySelector(
    'select[name="personagem_prof_persuasao"]'
  );
  bonusPersuasao =
    parseInt(Modificadorcarisma.value) +
    profPersuasao.value * parseInt(proficiencia.value);
  if (Modificadorcarisma.value >= 0) {
    Persuasao.value = "+" + bonusPersuasao;
  } else {
    Persuasao.value = bonusPersuasao;
  }
}

// Definir CA
function calcCA() {
  const caTotal = document.querySelector('input[name="personagem_ca_total"]');
  const caBase = document.querySelector('input[name="personagem_ca_base"]');
  const caHabilidade = document.querySelector(
    'select[name="personagem_ca_habilidade"]'
  );
  const cabonus = document.querySelector('input[name="personagem_ca_bonus"]');
  if (caHabilidade.value === "for") {
    caTotal.value =
      parseInt(caBase.value) +
      parseInt(Modificadorforca.value) +
      parseInt(cabonus.value);
    return;
  } else if (caHabilidade.value === "des") {
    caTotal.value =
      parseInt(caBase.value) +
      parseInt(Modificadordestreza.value) +
      parseInt(cabonus.value);
    return;
  } else if (caHabilidade.value === "con") {
    caTotal.value =
      parseInt(caBase.value) +
      parseInt(Modificadorconstituicao.value) +
      parseInt(cabonus.value);
    return;
  } else if (caHabilidade.value === "int") {
    caTotal.value =
      parseInt(caBase.value) +
      parseInt(Modificadorinteligencia.value) +
      parseInt(cabonus.value);
    return;
  } else if (caHabilidade.value === "sab") {
    caTotal.value =
      parseInt(caBase.value) +
      parseInt(Modificadorsabedoria.value) +
      parseInt(cabonus.value);
    return;
  } else if (caHabilidade.value === "car") {
    caTotal.value =
      parseInt(caBase.value) +
      parseInt(Modificadorcarisma.value) +
      parseInt(cabonus.value);
    return;
  } else if (caHabilidade.value === "0") {
    caTotal.value = parseInt(caBase.value) + parseInt(cabonus.value);
    return;
  }
}

// Bônus de ataques
function calcBA(id) {
  const ataqueBonusInput = document.querySelectorAll(
    'input[name="personagem_equip_arma_bonus"'
  )[id];
  const ataqueHabilidade = document.querySelectorAll(
    'select[name="personagem_equip_arma_habilidade"'
  )[id].value;
  const ataqueProf = document.querySelectorAll(
    'select[name="personagem_equip_arma_profiencia"'
  )[id].value;
  const ataqueExtra = document.querySelectorAll(
    'input[name="personagem_equip_arma_extra"'
  )[id].value;

  let ataqueBonus = parseInt(ataqueBonusInput).value;
  if (ataqueProf == 1) {
    if (ataqueHabilidade == "for") {
      ataqueBonus =
        parseInt(proficiencia.value) +
        parseInt(Modificadorforca.value) +
        parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "des") {
      ataqueBonus =
        parseInt(proficiencia.value) +
        parseInt(Modificadordestreza.value) +
        parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "con") {
      ataqueBonus =
        parseInt(proficiencia.value) +
        parseInt(Modificadorconstituicao.value) +
        parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "int") {
      ataqueBonus =
        parseInt(proficiencia.value) +
        parseInt(Modificadorinteligencia.value) +
        parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "sab") {
      ataqueBonus =
        parseInt(proficiencia.value) +
        parseInt(Modificadorsabedoria.value) +
        parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "car") {
      ataqueBonus =
        parseInt(proficiencia.value) +
        parseInt(Modificadorcarisma.value) +
        parseInt(ataqueExtra);
    } else if (ataqueHabilidade == 0) {
      ataqueBonus = parseInt(proficiencia.value) + parseInt(ataqueExtra);
    }
  } else if (ataqueProf == 0) {
    if (ataqueHabilidade == "for") {
      ataqueBonus = parseInt(Modificadorforca.value) + parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "des") {
      ataqueBonus = parseInt(Modificadordestreza.value) + parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "con") {
      ataqueBonus =
        parseInt(Modificadorconstituicao.value) + parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "int") {
      ataqueBonus =
        parseInt(Modificadorinteligencia.value) + parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "sab") {
      ataqueBonus =
        parseInt(Modificadorsabedoria.value) + parseInt(ataqueExtra);
    } else if (ataqueHabilidade == "car") {
      ataqueBonus = parseInt(Modificadorcarisma.value) + parseInt(ataqueExtra);
    } else if (ataqueHabilidade == 0) {
      ataqueBonus = parseInt(ataqueExtra);
    }
  }

  ataqueBonusInput.value = ataqueBonus;
}

// Calcular quantidade total de moedas, valor em ouro e massa de moedas
function calcMoedas() {
  const moedaCobre = document.querySelector(
    'input[name="personagem_moeda_cobre"]'
  );
  const moedaPrata = document.querySelector(
    'input[name="personagem_moeda_prata"]'
  );
  const moedaElectro = document.querySelector(
    'input[name="personagem_moeda_electro"]'
  );
  const moedaOuro = document.querySelector(
    'input[name="personagem_moeda_ouro"]'
  );
  const moedaPlatina = document.querySelector(
    'input[name="personagem_moeda_platina"]'
  );
  const moedaTotal = document.querySelector(
    'input[name="personagem_moeda_total_quantidade"]'
  );
  const moedaValor = document.querySelector(
    'input[name="personagem_moeda_total_valor"]'
  );
  const moedaMassa = document.querySelector(
    'input[name="personagem_moeda_total_massa"]'
  );

  moedaTotal.value =
    parseInt(moedaCobre.value) +
    parseInt(moedaPrata.value) +
    parseInt(moedaElectro.value) +
    parseInt(moedaOuro.value) +
    parseInt(moedaPlatina.value);

  moedaValor.value =
    Math.floor(
      (parseInt(moedaCobre.value) * 0.01 +
        parseInt(moedaPrata.value) * 0.1 +
        parseInt(moedaElectro.value) * 0.5 +
        parseInt(moedaOuro.value) * 1 +
        parseInt(moedaPlatina.value) * 10) *
        100
    ) / 100;

  moedaMassa.value = Math.floor(parseInt(moedaTotal.value) * 0.005 * 100) / 100;
}

// Calcular carga
function recalcularCarga() {
  var cargaAtual = 0;
  var massasInventario = document.getElementsByName(
    "personagem_inventario_massa"
  );
  var quantidadesInventario = document.getElementsByName(
    "personagem_inventario_quantidade"
  );
  cargaAtual +=
    parseFloat(
      document.querySelector('input[name="personagem_moeda_total_massa"]')
        .value * 100
    ) / 100;
  for (var i = 0; i < massasInventario.length; i++) {
    var mass = parseFloat(massasInventario[i].value);
    var quantity = parseInt(quantidadesInventario[i].value);
    cargaAtual += mass * quantity;
  }
  document.getElementById("cargaTotal").value = cargaAtual;

  // Capacidades máximas
  const sobreCarga = document.getElementById("cargaSobrecarga");
  const ultraCarga = document.getElementById("cargaUltracarga");
  const puxar = document.getElementById("cargaPuxar");
  const forca = document.querySelector('input[name="personagem_forca"]').value;

  sobreCarga.value = forca * 5;
  ultraCarga.value = forca * 7.5;
  puxar.value = forca * 15;
}
