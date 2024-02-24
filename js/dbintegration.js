async function carregarFicha() {
  const nome = document.querySelector('input[name="personagem_nome"]').value;
  try {
    const response = await fetch(`https://dndptbr.vercel.app/ficha/${nome}`, {
      method: "GET",
    });

    const fichaData = await response.json();
    if (response.ok) {
      atualizarFicha(fichaData);
    } else {
      console.log(response.msg);
    }
  } catch (error) {
    console.error("Erro ao acessar a ficha de personagem:", error);
  }
}

function atualizarFicha(Data) {
  const {
    user,
    nome,
    especie,
    subespecie,
    classe,
    subclasse,
    experiencia,
    inspiracao,
    alinhamento,
    deslocamentoVoo,
    forca,
    destreza,
    constituicao,
    inteligencia,
    sabedoria,
    carisma,
    profAtletismo,
    profAcrobacia,
    profFurtividade,
    profprestidigitacao,
    profArcanismo,
    profHistoria,
    profInvestigacao,
    profNatureza,
    profReligiao,
    profIntuicao,
    profAnimais,
    profMedicina,
    profPercepcao,
    profSobrevivencia,
    profAtuacao,
    profManipulacao,
    profIntimidacao,
    profPersuasao,
    profIdiomaComum,
    profIdiomaAnao,
    profIdiomaElfico,
    profIdiomaGigante,
    profIdiomaGnomico,
    profIdiomaGoblin,
    profIdiomaHalfling,
    profIdiomaOrc,
    profIdiomaAbissal,
    profIdiomaCelestial,
    profIdiomaSubterraneo,
    profIdiomaDraconici,
    profIdiomaInfernal,
    profIdiomaPrimordial,
    profIdiomaSilvestre,
    profIdiomaSubcomum,
    profItensArmaduraLeve,
    profItensArmaduraMedia,
    profItensArmaduraPesada,
    profItensArmaSimplesCAC,
    profItensArmaSimplesAD,
    profItensArmaMarcialCAC,
    profItensArmaMarcialAD,
    profItensInstrumentos,
    profItensDisfarce,
    profItensFalsificacao,
    profItensHerbalismo,
    profItensVeneno,
    profItensBaralho,
    profItensDados,
    profItensXadrez,
    profItensLadrao,
    profItensNavegacao,
    profItensOutros,
    antecedentes,
    personalidade,
    ideais,
    vinculos,
    defeitos,
    genero,
    idade,
    tamanho,
    massa,
    pele,
    olhos,
    cabelo,
    tattoo,
    barba,
    deficiencia,
    aparenciaDescricao,
    caracteristicas,
    habilidades,
    caBase,
    caHabilidade,
    caBonus,
    armadura,
    escudo,
    pvTemp,
    pvAtual,
    pvTotal,
    testeMorteSucesso1,
    testeMorteSucesso2,
    testeMorteSucesso3,
    testeMorteFalha1,
    testeMorteFalha2,
    testeMorteFalha3,
    armas,
    bonusExtraAtaque,
    armaHabilidade,
    armaProf,
    armaDescricao,
    itensMagicos,
    municaoNome,
    municaoQuantidade,
    pecasCobre,
    pecasPrata,
    pecasElectro,
    pecasOuro,
    pecasPlatina,
    itemNome,
    itemMassa,
    itemQuantidade,
    petNome,
    petEspecie,
    petCA,
    petPVatual,
    petPVmax,
    petDeslocamento,
    petForca,
    petDestreza,
    petConstituicao,
    petInteligencia,
    petSabedoria,
    petCarisma,
    petDescricao,
    riquezas,
    magiaHabilidade,
    magiaCD,
    magiaBonus,
    magiaPreparada,
    espacoMagia0atual,
    espacoMagia1atual,
    espacoMagia2atual,
    espacoMagia3atual,
    espacoMagia4atual,
    espacoMagia5atual,
    espacoMagia6atual,
    espacoMagia7atual,
    espacoMagia8atual,
    espacoMagia9atual,
    espacoMagia1total,
    espacoMagia2total,
    espacoMagia3total,
    espacoMagia4total,
    espacoMagia5total,
    espacoMagia6total,
    espacoMagia7total,
    espacoMagia8total,
    espacoMagia9total,
    listaMagiaPreparada,
    listaMagiaNivel,
    listaMagiaNome,
    listaMagiaTempo,
    listaMagiaDistancia,
    listaMagiaComponentes,
    listaMagiaDuracao,
    listaMagiaRital,
    listaMagiaConcentracao,
    listaMagiaReferencia,
    listaMagiaEscola,
    listaMagiaMateriais,
    listaMagiaDescricao,
    contatos,
    anotacoes,
  } = Data;

  const HTMLnome = document.querySelector('input[name="personagem_nome"]');
  const HTMLespecie = document.querySelector(
    'select[name="personagem_especie"]'
  );
  const HTMLsubespecie = document.querySelector(
    'select[name="personagem_sub_especie"]'
  );
  const HTMLclasse = document.querySelector('select[name="personagem_classe"]');
  const HTMLsubclasse = document.querySelector(
    'select[name="personagem_sub_classe"]'
  );
  const HTMLexperiencia = document.querySelector('input[name="personagem_xp"]');
  const HTMLinspiracao = document.querySelector(
    'input[name="personagem_inspiracao"]'
  );
  const HTMLalinhamento = document.querySelector(
    'select[name="personagem_alinhamento"]'
  );
  const HTMLdeslocamentoVoo = document.querySelector(
    'input[name="personagem_deslocamento_voo"]'
  );
  const HTMLforca = document.querySelector('input[name="personagem_forca"]');
  const HTMLdestreza = document.querySelector(
    'input[name="personagem_destreza"]'
  );
  const HTMLconstituicao = document.querySelector(
    'input[name="personagem_constituicao"]'
  );
  const HTMLinteligencia = document.querySelector(
    'input[name="personagem_inteligencia"]'
  );
  const HTMLsabedoria = document.querySelector(
    'input[name="personagem_sabedoria"]'
  );
  const HTMLcarisma = document.querySelector(
    'input[name="personagem_carisma"]'
  );
  const HTMLprofAtletismo = document.querySelector(
    'select[name="personagem_prof_atletismo"]'
  );
  const HTMLprofAcrobacia = document.querySelector(
    'select[name="personagem_prof_acrobacia"]'
  );
  const HTMLprofFurtividade = document.querySelector(
    'select[name="personagem_prof_furtividade"]'
  );
  const HTMLprofprestidigitacao = document.querySelector(
    'select[name="personagem_prof_prestidigitacao"]'
  );
  const HTMLprofArcanismo = document.querySelector(
    'select[name="personagem_prof_arcanismo"]'
  );
  const HTMLprofHistoria = document.querySelector(
    'select[name="personagem_prof_historia"]'
  );
  const HTMLprofInvestigacao = document.querySelector(
    'select[name="personagem_prof_investigacao"]'
  );
  const HTMLprofNatureza = document.querySelector(
    'select[name="personagem_prof_natureza"]'
  );
  const HTMLprofReligiao = document.querySelector(
    'select[name="personagem_prof_religiao"]'
  );
  const HTMLprofIntuicao = document.querySelector(
    'select[name="personagem_prof_intuicao"]'
  );
  const HTMLprofAnimais = document.querySelector(
    'select[name="personagem_prof_animais"]'
  );
  const HTMLprofMedicina = document.querySelector(
    'select[name="personagem_prof_medicina"]'
  );
  const HTMLprofPercepcao = document.querySelector(
    'select[name="personagem_prof_percepcao"]'
  );
  const HTMLprofSobrevivencia = document.querySelector(
    'select[name="personagem_prof_sobrevivencia"]'
  );
  const HTMLprofAtuacao = document.querySelector(
    'select[name="personagem_prof_atuacao"]'
  );
  const HTMLprofManipulacao = document.querySelector(
    'select[name="personagem_prof_manipulacao"]'
  );
  const HTMLprofIntimidacao = document.querySelector(
    'select[name="personagem_prof_intimidacao"]'
  );
  const HTMLprofPersuasao = document.querySelector(
    'select[name="personagem_prof_persuasao"]'
  );
  const HTMLprofIdiomaComum = document.querySelector(
    'input[name="personagem_prof_idioma_comum"]'
  );
  const HTMLprofIdiomaAnao = document.querySelector(
    'input[name="personagem_prof_idioma_anao"]'
  );
  const HTMLprofIdiomaElfico = document.querySelector(
    'input[name="personagem_prof_idioma_elfico"]'
  );
  const HTMLprofIdiomaGigante = document.querySelector(
    'input[name="personagem_prof_idioma_gigante"]'
  );
  const HTMLprofIdiomaGnomico = document.querySelector(
    'input[name="personagem_prof_idioma_gnomico"]'
  );
  const HTMLprofIdiomaGoblin = document.querySelector(
    'input[name="personagem_prof_idioma_goblin"]'
  );
  const HTMLprofIdiomaHalfling = document.querySelector(
    'input[name="personagem_prof_idioma_halfling"]'
  );
  const HTMLprofIdiomaOrc = document.querySelector(
    'input[name="personagem_prof_idioma_orc"]'
  );
  const HTMLprofIdiomaAbissal = document.querySelector(
    'input[name="personagem_prof_idioma_abissal"]'
  );
  const HTMLprofIdiomaCelestial = document.querySelector(
    'input[name="personagem_prof_idioma_celestial"]'
  );
  const HTMLprofIdiomaSubterraneo = document.querySelector(
    'input[name="personagem_prof_idioma_subterraneo"]'
  );
  const HTMLprofIdiomaDraconici = document.querySelector(
    'input[name="personagem_prof_idioma_draconico"]'
  );
  const HTMLprofIdiomaInfernal = document.querySelector(
    'input[name="personagem_prof_idioma_infernal"]'
  );
  const HTMLprofIdiomaPrimordial = document.querySelector(
    'input[name="personagem_prof_idioma_primordial"]'
  );
  const HTMLprofIdiomaSilvestre = document.querySelector(
    'input[name="personagem_prof_idioma_silvestre"]'
  );
  const HTMLprofIdiomaSubcomum = document.querySelector(
    'input[name="personagem_prof_idioma_subcomum"]'
  );
  const HTMLprofItensArmaduraLeve = document.querySelector(
    'input[name="personagem_prof_armadura_leve"]'
  );
  const HTMLprofItensArmaduraMedia = document.querySelector(
    'input[name="personagem_prof_armadura_media"]'
  );
  const HTMLprofItensArmaduraPesada = document.querySelector(
    'input[name="personagem_prof_armadura_pesada"]'
  );
  const HTMLprofItensArmaSimplesCAC = document.querySelector(
    'input[name="personagem_prof_arma_simplescac"]'
  );
  const HTMLprofItensArmaSimplesAD = document.querySelector(
    'input[name="personagem_prof_arma_simplesdistancia"]'
  );
  const HTMLprofItensArmaMarcialCAC = document.querySelector(
    'input[name="personagem_prof_arma_marcialcac"]'
  );
  const HTMLprofItensArmaMarcialAD = document.querySelector(
    'input[name="personagem_prof_arma_marcialdistancia"]'
  );
  const HTMLprofItensInstrumentos = document.querySelector(
    'input[name="personagem_prof_ferramenta_instrumento"]'
  );
  const HTMLprofItensDisfarce = document.querySelector(
    'input[name="personagem_prof_ferramenta_kit_disfarce"]'
  );
  const HTMLprofItensFalsificacao = document.querySelector(
    'input[name="personagem_prof_ferramenta_kit_falsificacao"]'
  );
  const HTMLprofItensHerbalismo = document.querySelector(
    'input[name="personagem_prof_ferramenta_kit_herbalismo"]'
  );
  const HTMLprofItensVeneno = document.querySelector(
    'input[name="personagem_prof_ferramenta_kit_veneno"]'
  );
  const HTMLprofItensBaralho = document.querySelector(
    'input[name="personagem_prof_ferramenta_baralho"]'
  );
  const HTMLprofItensDados = document.querySelector(
    'input[name="personagem_prof_ferramenta_dados"]'
  );
  const HTMLprofItensXadrez = document.querySelector(
    'input[name="personagem_prof_ferramenta_xadrez"]'
  );
  const HTMLprofItensLadrao = document.querySelector(
    'input[name="personagem_prof_ferramenta_ladrao"]'
  );
  const HTMLprofItensNavegacao = document.querySelector(
    'input[name="personagem_prof_ferramenta_navegacao"]'
  );
  const HTMLprofItensOutros = document.querySelector(
    'textarea[name="personagem_prof_outros"]'
  );
  const HTMLantecedentes = document.querySelector(
    'input[name="personagem_antecedente"]'
  );
  const HTMLpersonalidade = document.querySelector(
    'textarea[name="persongem_personalidade"]'
  );
  const HTMLideais = document.querySelector(
    'textarea[name="personagem_ideais"]'
  );
  const HTMLvinculos = document.querySelector(
    'textarea[name="personagem_vinculos"]'
  );
  const HTMLdefeitos = document.querySelector(
    'textarea[name="personagem_defeitos"]'
  );
  const HTMLgenero = document.querySelector('input[name="personagem_genero"]');
  const HTMLidade = document.querySelector('input[name="personagem_idade"]');
  const HTMLtamanho = document.querySelector(
    'input[name="personagem_tamanho"]'
  );
  const HTMLmassa = document.querySelector('input[name="personagem_peso"]');
  const HTMLpele = document.querySelector('input[name="personagem_cor_pele"]');
  const HTMLolhos = document.querySelector(
    'input[name="personagem_cor_olhos"]'
  );
  const HTMLcabelo = document.querySelector(
    'input[name="personagem_cor_cabelo"]'
  );
  const HTMLtattoo = document.querySelector(
    'input[name="personagem_tem_tattoo"]'
  );
  const HTMLbarba = document.querySelector(
    'input[name="personagem_tem_barba"]'
  );
  const HTMLdeficiencia = document.querySelector(
    'input[name="personagem_tem_deficiencia"]'
  );
  const HTMLaparenciaDescricao = document.querySelector(
    'textarea[name="personagem_aparencia"]'
  );
  const HTMLcaracteristicas = document.querySelector(
    'textarea[name="personagem_caracteristicas"]'
  );
  const HTMLhabilidades = document.querySelector(
    'textarea[name="personagem_habilidades"]'
  );
  const HTMLcaBase = document.querySelector('input[name="personagem_ca_base"]');
  const HTMLcaHabilidade = document.querySelector(
    'select[name="personagem_ca_habilidade"]'
  );
  const HTMLcaBonus = document.querySelector(
    'input[name="personagem_ca_bonus"]'
  );
  const HTMLarmadura = document.querySelector(
    'select[name="personagem_equip_armadura"]'
  );
  const HTMLescudo = document.querySelector(
    'select[name="personagem_equip_escudo"]'
  );
  const HTMLpvTemp = document.querySelector(
    'input[name="personagem_pv_temporario"]'
  );
  const HTMLpvAtual = document.querySelector(
    'input[name="personagem_pv_atual"]'
  );
  const HTMLpvTotal = document.querySelector('input[name="personagem_pv_max"]');
  const HTMLtesteMorteSucesso1 = document.querySelector(
    'input[name="personagem_teste_morte_sucesso1"]'
  );
  const HTMLtesteMorteSucesso2 = document.querySelector(
    'input[name="personagem_teste_morte_sucesso2"]'
  );
  const HTMLtesteMorteSucesso3 = document.querySelector(
    'input[name="personagem_teste_morte_sucesso3"]'
  );
  const HTMLtesteMorteFalha1 = document.querySelector(
    'input[name="personagem_teste_morte_falha1"]'
  );
  const HTMLtesteMorteFalha2 = document.querySelector(
    'input[name="personagem_teste_morte_falha2"]'
  );
  const HTMLtesteMorteFalha3 = document.querySelector(
    'input[name="personagem_teste_morte_falha3"]'
  );
  const HTMLarmas = document.querySelector(
    'select[name="personagem_equip_arma_tipo"]'
  );
  const HTMLbonusExtraAtaque = document.querySelector(
    'input[name="personagem_equip_arma_extra"]'
  );
  const HTMLarmaHabilidade = document.querySelector(
    'select[name="personagem_equip_arma_habilidade"]'
  );
  const HTMLarmaProf = document.querySelector(
    'select[name="personagem_equip_arma_profiencia"]'
  );
  const HTMLarmaDescricao = document.querySelector(
    'textarea[name="personagem_equip_arma_descricao"]'
  );
  const HTMLitensMagicos = document.querySelector(
    'textarea[name="personagem_equip_itens_magicos"]'
  );
  const HTMLmunicaoNome = document.querySelector(
    'input[name="personagem_equip_municao_nome"]'
  );
  const HTMLmunicaoQuantidade = document.querySelector(
    'input[name="personagem_equip_municao_quantidade"]'
  );
  const HTMLpecasCobre = document.querySelector(
    'input[name="personagem_moeda_cobre"]'
  );
  const HTMLpecasPrata = document.querySelector(
    'input[name="personagem_moeda_prata"]'
  );
  const HTMLpecasElectro = document.querySelector(
    'input[name="personagem_moeda_electro"]'
  );
  const HTMLpecasOuro = document.querySelector(
    'input[name="personagem_moeda_ouro"]'
  );
  const HTMLpecasPlatina = document.querySelector(
    'input[name="personagem_moeda_platina"]'
  );
  const HTMLitemNome = document.querySelector(
    'input[name="personagem_inventario_nome"]'
  );
  const HTMLitemMassa = document.querySelector(
    'input[name="personagem_inventario_massa"]'
  );
  const HTMLitemQuantidade = document.querySelector(
    'input[name="personagem_inventario_quantidade"]'
  );
  const HTMLpetNome = document.querySelector(
    'input[name="personagem_pet_nome"]'
  );
  const HTMLpetEspecie = document.querySelector(
    'input[name="personagem_pet_especie"]'
  );
  const HTMLpetCA = document.querySelector('input[name="personagem_pet_ca"]');
  const HTMLpetPVatual = document.querySelector(
    'input[name="personagem_pet_pv_atual"]'
  );
  const HTMLpetPVmax = document.querySelector(
    'input[name="personagem_pet_pv_max"]'
  );
  const HTMLpetDeslocamento = document.querySelector(
    'input[name="personagem_pet_deslocamento"]'
  );
  const HTMLpetForca = document.querySelector(
    'input[name="personagem_pet_forca"]'
  );
  const HTMLpetDestreza = document.querySelector(
    'input[name="personagem_pet_destreza"]'
  );
  const HTMLpetConstituicao = document.querySelector(
    'input[name="personagem_pet_constituicao"]'
  );
  const HTMLpetInteligencia = document.querySelector(
    'input[name="personagem_pet_inteligencia"]'
  );
  const HTMLpetSabedoria = document.querySelector(
    'input[name="personagem_pet_sabedoria"]'
  );
  const HTMLpetCarisma = document.querySelector(
    'input[name="personagem_pet_carisma"]'
  );
  const HTMLpetDescricao = document.querySelector(
    'textarea[name="personagem_pet_descricao"]'
  );
  const HTMLriquezas = document.querySelector(
    'textarea[name="personagem_riquezas"]'
  );
  const HTMLmagiaHabilidade = document.querySelector(
    'select[name="personagem_conjuracao_habilidade"]'
  );
  const HTMLmagiaCD = document.querySelector(
    'input[name="personagem_conjuracao_cd"]'
  );
  const HTMLmagiaBonus = document.querySelector(
    'input[name="personagem_conjuracao_bonus"]'
  );
  const HTMLmagiaPreparada = document.querySelector(
    'input[name="personagem_conjuracao_preparadas"]'
  );
  const HTMLespacoMagia0atual = document.querySelector(
    'input[name="personagem_magias_espaco0_total"]'
  );
  const HTMLespacoMagia1atual = document.querySelector(
    'input[name="personagem_magias_espaco1_atual"]'
  );
  const HTMLespacoMagia2atual = document.querySelector(
    'input[name="personagem_magias_espaco2_atual"]'
  );
  const HTMLespacoMagia3atual = document.querySelector(
    'input[name="personagem_magias_espaco3_atual"]'
  );
  const HTMLespacoMagia4atual = document.querySelector(
    'input[name="personagem_magias_espaco4_atual"]'
  );
  const HTMLespacoMagia5atual = document.querySelector(
    'input[name="personagem_magias_espaco5_atual"]'
  );
  const HTMLespacoMagia6atual = document.querySelector(
    'input[name="personagem_magias_espaco6_atual"]'
  );
  const HTMLespacoMagia7atual = document.querySelector(
    'input[name="personagem_magias_espaco7_atual"]'
  );
  const HTMLespacoMagia8atual = document.querySelector(
    'input[name="personagem_magias_espaco8_atual"]'
  );
  const HTMLespacoMagia9atual = document.querySelector(
    'input[name="personagem_magias_espaco9_atual"]'
  );
  const HTMLespacoMagia1total = document.querySelector(
    'input[name="personagem_magias_espaco1_total"]'
  );
  const HTMLespacoMagia2total = document.querySelector(
    'input[name="personagem_magias_espaco2_total"]'
  );
  const HTMLespacoMagia3total = document.querySelector(
    'input[name="personagem_magias_espaco3_total"]'
  );
  const HTMLespacoMagia4total = document.querySelector(
    'input[name="personagem_magias_espaco4_total"]'
  );
  const HTMLespacoMagia5total = document.querySelector(
    'input[name="personagem_magias_espaco5_total"]'
  );
  const HTMLespacoMagia6total = document.querySelector(
    'input[name="personagem_magias_espaco6_total"]'
  );
  const HTMLespacoMagia7total = document.querySelector(
    'input[name="personagem_magias_espaco7_total"]'
  );
  const HTMLespacoMagia8total = document.querySelector(
    'input[name="personagem_magias_espaco8_total"]'
  );
  const HTMLespacoMagia9total = document.querySelector(
    'input[name="personagem_magias_espaco9_total"]'
  );
  const HTMLlistaMagiaPreparada = document.querySelector(
    'input[name="personagem_magias_preparada"]'
  );
  const HTMLlistaMagiaNivel = document.querySelector(
    'select[name="personagem_magias_nivel"]'
  );
  const HTMLlistaMagiaNome = document.querySelector(
    'input[name="personagem_magias_nome"]'
  );
  const HTMLlistaMagiaTempo = document.querySelector(
    'input[name="personagem_magias_tempo"]'
  );
  const HTMLlistaMagiaDistancia = document.querySelector(
    'input[name="personagem_magias_distancia"]'
  );
  const HTMLlistaMagiaComponentes = document.querySelector(
    'input[name="personagem_magias_componentes"]'
  );
  const HTMLlistaMagiaDuracao = document.querySelector(
    'input[name="personagem_magias_duracao"]'
  );
  const HTMLlistaMagiaRital = document.querySelector(
    'input[name="personagem_magias_ritual"]'
  );
  const HTMLlistaMagiaConcentracao = document.querySelector(
    'input[name="personagem_magias_concentracao"]'
  );
  const HTMLlistaMagiaReferencia = document.querySelector(
    'input[name="personagem_magias_referencia"]'
  );
  const HTMLlistaMagiaEscola = document.querySelector(
    'input[name="personagem_magias_escola"]'
  );
  const HTMLlistaMagiaMateriais = document.querySelector(
    'input[name="personagem_magias_materiais"]'
  );
  const HTMLlistaMagiaDescricao = document.querySelector(
    'textarea[name="personagem_magias_descricao"]'
  );
  const HTMLcontatos = document.querySelector(
    'textarea[name="personagem_contatos"]'
  );
  const HTMLanotacoes = document.querySelector(
    'textarea[name="personagem_anotacoes"]'
  );

  HTMLnome.value = nome;
  HTMLespecie.value = especie;
  HTMLsubespecie.value = subespecie;
  HTMLclasse.value = classe;
  HTMLsubclasse.value = subclasse;
  HTMLexperiencia.value = experiencia;
  HTMLinspiracao.value = inspiracao;
  HTMLalinhamento.value = alinhamento;
  HTMLdeslocamentoVoo.value = deslocamentoVoo;
  HTMLforca.value = forca;
  HTMLdestreza.value = destreza;
  HTMLconstituicao.value = constituicao;
  HTMLinteligencia.value = inteligencia;
  HTMLsabedoria.value = sabedoria;
  HTMLcarisma.value = carisma;
  HTMLprofAtletismo.value = profAtletismo;
  HTMLprofAcrobacia.value = profAcrobacia;
  HTMLprofFurtividade.value = profFurtividade;
  HTMLprofprestidigitacao.value = profprestidigitacao;
  HTMLprofArcanismo.value = profArcanismo;
  HTMLprofHistoria.value = profHistoria;
  HTMLprofInvestigacao.value = profInvestigacao;
  HTMLprofNatureza.value = profNatureza;
  HTMLprofReligiao.value = profReligiao;
  HTMLprofIntuicao.value = profIntuicao;
  HTMLprofAnimais.value = profAnimais;
  HTMLprofMedicina.value = profMedicina;
  HTMLprofPercepcao.value = profPercepcao;
  HTMLprofSobrevivencia.value = profSobrevivencia;
  HTMLprofAtuacao.value = profAtuacao;
  HTMLprofManipulacao.value = profManipulacao;
  HTMLprofIntimidacao.value = profIntimidacao;
  HTMLprofPersuasao.value = profPersuasao;
  HTMLprofIdiomaComum.checked = profIdiomaComum;
  HTMLprofIdiomaAnao.checked = profIdiomaAnao;
  HTMLprofIdiomaElfico.checked = profIdiomaElfico;
  HTMLprofIdiomaGigante.checked = profIdiomaGigante;
  HTMLprofIdiomaGnomico.checked = profIdiomaGnomico;
  HTMLprofIdiomaGoblin.checked = profIdiomaGoblin;
  HTMLprofIdiomaHalfling.checked = profIdiomaHalfling;
  HTMLprofIdiomaOrc.checked = profIdiomaOrc;
  HTMLprofIdiomaAbissal.checked = profIdiomaAbissal;
  HTMLprofIdiomaCelestial.checked = profIdiomaCelestial;
  HTMLprofIdiomaSubterraneo.checked = profIdiomaSubterraneo;
  HTMLprofIdiomaDraconici.checked = profIdiomaDraconici;
  HTMLprofIdiomaInfernal.checked = profIdiomaInfernal;
  HTMLprofIdiomaPrimordial.checked = profIdiomaPrimordial;
  HTMLprofIdiomaSilvestre.checked = profIdiomaSilvestre;
  HTMLprofIdiomaSubcomum.checked = profIdiomaSubcomum;
  HTMLprofItensArmaduraLeve.checked = profItensArmaduraLeve;
  HTMLprofItensArmaduraMedia.checked = profItensArmaduraMedia;
  HTMLprofItensArmaduraPesada.checked = profItensArmaduraPesada;
  HTMLprofItensArmaSimplesCAC.checked = profItensArmaSimplesCAC;
  HTMLprofItensArmaSimplesAD.checked = profItensArmaSimplesAD;
  HTMLprofItensArmaMarcialCAC.checked = profItensArmaMarcialCAC;
  HTMLprofItensArmaMarcialAD.checked = profItensArmaMarcialAD;
  HTMLprofItensInstrumentos.checked = profItensInstrumentos;
  HTMLprofItensDisfarce.checked = profItensDisfarce;
  HTMLprofItensFalsificacao.checked = profItensFalsificacao;
  HTMLprofItensHerbalismo.checked = profItensHerbalismo;
  HTMLprofItensVeneno.checked = profItensVeneno;
  HTMLprofItensBaralho.checked = profItensBaralho;
  HTMLprofItensDados.checked = profItensDados;
  HTMLprofItensXadrez.checked = profItensXadrez;
  HTMLprofItensLadrao.checked = profItensLadrao;
  HTMLprofItensNavegacao.checked = profItensNavegacao;
  HTMLprofItensOutros.value = profItensOutros;
  HTMLantecedentes.value = antecedentes;
  HTMLpersonalidade.value = personalidade;
  HTMLideais.value = ideais;
  HTMLvinculos.value = vinculos;
  HTMLdefeitos.value = defeitos;
  HTMLgenero.value = genero;
  HTMLidade.value = idade;
  HTMLtamanho.value = tamanho;
  HTMLmassa.value = massa;
  HTMLpele.value = pele;
  HTMLolhos.value = olhos;
  HTMLcabelo.value = cabelo;
  HTMLtattoo.value = tattoo;
  HTMLbarba.value = barba;
  HTMLdeficiencia.value = deficiencia;
  HTMLaparenciaDescricao.value = aparenciaDescricao;
  HTMLcaracteristicas.value = caracteristicas;
  HTMLhabilidades.value = habilidades;
  HTMLcaBase.value = caBase;
  HTMLcaHabilidade.value = caHabilidade;
  HTMLcaBonus.value = caBonus;
  HTMLarmadura.value = armadura;
  HTMLescudo.value = escudo;
  HTMLpvTemp.value = pvTemp;
  HTMLpvAtual.value = pvAtual;
  HTMLpvTotal.value = pvTotal;
  HTMLtesteMorteSucesso1.checked = testeMorteSucesso1;
  HTMLtesteMorteSucesso2.checked = testeMorteSucesso2;
  HTMLtesteMorteSucesso3.checked = testeMorteSucesso3;
  HTMLtesteMorteFalha1.checked = testeMorteFalha1;
  HTMLtesteMorteFalha2.checked = testeMorteFalha2;
  HTMLtesteMorteFalha3.checked = testeMorteFalha3;
  HTMLarmas.value = armas;
  HTMLbonusExtraAtaque.value = bonusExtraAtaque;
  HTMLarmaHabilidade.value = armaHabilidade;
  HTMLarmaProf.value = armaProf;
  HTMLarmaDescricao.value = armaDescricao;
  HTMLitensMagicos.value = itensMagicos;
  HTMLmunicaoNome.value = municaoNome;
  HTMLmunicaoQuantidade.value = municaoQuantidade;
  HTMLpecasCobre.value = pecasCobre;
  HTMLpecasPrata.value = pecasPrata;
  HTMLpecasElectro.value = pecasElectro;
  HTMLpecasOuro.value = pecasOuro;
  HTMLpecasPlatina.value = pecasPlatina;
  HTMLitemNome.value = itemNome;
  HTMLitemMassa.value = itemMassa;
  HTMLitemQuantidade.value = itemQuantidade;
  HTMLpetNome.value = petNome;
  HTMLpetEspecie.value = petEspecie;
  HTMLpetCA.value = petCA;
  HTMLpetPVatual.value = petPVatual;
  HTMLpetPVmax.value = petPVmax;
  HTMLpetDeslocamento.value = petDeslocamento;
  HTMLpetForca.value = petForca;
  HTMLpetDestreza.value = petDestreza;
  HTMLpetConstituicao.value = petConstituicao;
  HTMLpetInteligencia.value = petInteligencia;
  HTMLpetSabedoria.value = petSabedoria;
  HTMLpetCarisma.value = petCarisma;
  HTMLpetDescricao.value = petDescricao;
  HTMLriquezas.value = riquezas;
  HTMLmagiaHabilidade.value = magiaHabilidade;
  HTMLmagiaCD.value = magiaCD;
  HTMLmagiaBonus.value = magiaBonus;
  HTMLmagiaPreparada.value = magiaPreparada;
  HTMLespacoMagia0atual.value = espacoMagia0atual;
  HTMLespacoMagia1atual.value = espacoMagia1atual;
  HTMLespacoMagia2atual.value = espacoMagia2atual;
  HTMLespacoMagia3atual.value = espacoMagia3atual;
  HTMLespacoMagia4atual.value = espacoMagia4atual;
  HTMLespacoMagia5atual.value = espacoMagia5atual;
  HTMLespacoMagia6atual.value = espacoMagia6atual;
  HTMLespacoMagia7atual.value = espacoMagia7atual;
  HTMLespacoMagia8atual.value = espacoMagia8atual;
  HTMLespacoMagia9atual.value = espacoMagia9atual;
  HTMLespacoMagia1total.value = espacoMagia1total;
  HTMLespacoMagia2total.value = espacoMagia2total;
  HTMLespacoMagia3total.value = espacoMagia3total;
  HTMLespacoMagia4total.value = espacoMagia4total;
  HTMLespacoMagia5total.value = espacoMagia5total;
  HTMLespacoMagia6total.value = espacoMagia6total;
  HTMLespacoMagia7total.value = espacoMagia7total;
  HTMLespacoMagia8total.value = espacoMagia8total;
  HTMLespacoMagia9total.value = espacoMagia9total;
  HTMLlistaMagiaPreparada.value = listaMagiaPreparada;
  HTMLlistaMagiaNivel.value = listaMagiaNivel;
  HTMLlistaMagiaNome.value = listaMagiaNome;
  HTMLlistaMagiaTempo.value = listaMagiaTempo;
  HTMLlistaMagiaDistancia.value = listaMagiaDistancia;
  HTMLlistaMagiaComponentes.value = listaMagiaComponentes;
  HTMLlistaMagiaDuracao.value = listaMagiaDuracao;
  HTMLlistaMagiaRital.value = listaMagiaRital;
  HTMLlistaMagiaConcentracao.value = listaMagiaConcentracao;
  HTMLlistaMagiaReferencia.value = listaMagiaReferencia;
  HTMLlistaMagiaEscola.value = listaMagiaEscola;
  HTMLlistaMagiaMateriais.value = listaMagiaMateriais;
  HTMLlistaMagiaDescricao.value = listaMagiaDescricao;
  HTMLcontatos.value = contatos;
  HTMLanotacoes.value = anotacoes;
}

async function salvarFicha() {
  const HTMLnome = document.querySelector('input[name="personagem_nome"]');
  const HTMLespecie = document.querySelector(
    'select[name="personagem_especie"]'
  );
  const HTMLsubespecie = document.querySelector(
    'select[name="personagem_sub_especie"]'
  );
  const HTMLclasse = document.querySelector('select[name="personagem_classe"]');
  const HTMLsubclasse = document.querySelector(
    'select[name="personagem_sub_classe"]'
  );
  const HTMLexperiencia = document.querySelector('input[name="personagem_xp"]');
  const HTMLinspiracao = document.querySelector(
    'input[name="personagem_inspiracao"]'
  );
  const HTMLalinhamento = document.querySelector(
    'select[name="personagem_alinhamento"]'
  );
  const HTMLdeslocamentoVoo = document.querySelector(
    'input[name="personagem_deslocamento_voo"]'
  );
  const HTMLforca = document.querySelector('input[name="personagem_forca"]');
  const HTMLdestreza = document.querySelector(
    'input[name="personagem_destreza"]'
  );
  const HTMLconstituicao = document.querySelector(
    'input[name="personagem_constituicao"]'
  );
  const HTMLinteligencia = document.querySelector(
    'input[name="personagem_inteligencia"]'
  );
  const HTMLsabedoria = document.querySelector(
    'input[name="personagem_sabedoria"]'
  );
  const HTMLcarisma = document.querySelector(
    'input[name="personagem_carisma"]'
  );
  const HTMLprofAtletismo = document.querySelector(
    'select[name="personagem_prof_atletismo"]'
  );
  const HTMLprofAcrobacia = document.querySelector(
    'select[name="personagem_prof_acrobacia"]'
  );
  const HTMLprofFurtividade = document.querySelector(
    'select[name="personagem_prof_furtividade"]'
  );
  const HTMLprofprestidigitacao = document.querySelector(
    'select[name="personagem_prof_prestidigitacao"]'
  );
  const HTMLprofArcanismo = document.querySelector(
    'select[name="personagem_prof_arcanismo"]'
  );
  const HTMLprofHistoria = document.querySelector(
    'select[name="personagem_prof_historia"]'
  );
  const HTMLprofInvestigacao = document.querySelector(
    'select[name="personagem_prof_investigacao"]'
  );
  const HTMLprofNatureza = document.querySelector(
    'select[name="personagem_prof_natureza"]'
  );
  const HTMLprofReligiao = document.querySelector(
    'select[name="personagem_prof_religiao"]'
  );
  const HTMLprofIntuicao = document.querySelector(
    'select[name="personagem_prof_intuicao"]'
  );
  const HTMLprofAnimais = document.querySelector(
    'select[name="personagem_prof_animais"]'
  );
  const HTMLprofMedicina = document.querySelector(
    'select[name="personagem_prof_medicina"]'
  );
  const HTMLprofPercepcao = document.querySelector(
    'select[name="personagem_prof_percepcao"]'
  );
  const HTMLprofSobrevivencia = document.querySelector(
    'select[name="personagem_prof_sobrevivencia"]'
  );
  const HTMLprofAtuacao = document.querySelector(
    'select[name="personagem_prof_atuacao"]'
  );
  const HTMLprofManipulacao = document.querySelector(
    'select[name="personagem_prof_manipulacao"]'
  );
  const HTMLprofIntimidacao = document.querySelector(
    'select[name="personagem_prof_intimidacao"]'
  );
  const HTMLprofPersuasao = document.querySelector(
    'select[name="personagem_prof_persuasao"]'
  );
  const HTMLprofIdiomaComum = document.querySelector(
    'input[name="personagem_prof_idioma_comum"]'
  );
  const HTMLprofIdiomaAnao = document.querySelector(
    'input[name="personagem_prof_idioma_anao"]'
  );
  const HTMLprofIdiomaElfico = document.querySelector(
    'input[name="personagem_prof_idioma_elfico"]'
  );
  const HTMLprofIdiomaGigante = document.querySelector(
    'input[name="personagem_prof_idioma_gigante"]'
  );
  const HTMLprofIdiomaGnomico = document.querySelector(
    'input[name="personagem_prof_idioma_gnomico"]'
  );
  const HTMLprofIdiomaGoblin = document.querySelector(
    'input[name="personagem_prof_idioma_goblin"]'
  );
  const HTMLprofIdiomaHalfling = document.querySelector(
    'input[name="personagem_prof_idioma_halfling"]'
  );
  const HTMLprofIdiomaOrc = document.querySelector(
    'input[name="personagem_prof_idioma_orc"]'
  );
  const HTMLprofIdiomaAbissal = document.querySelector(
    'input[name="personagem_prof_idioma_abissal"]'
  );
  const HTMLprofIdiomaCelestial = document.querySelector(
    'input[name="personagem_prof_idioma_celestial"]'
  );
  const HTMLprofIdiomaSubterraneo = document.querySelector(
    'input[name="personagem_prof_idioma_subterraneo"]'
  );
  const HTMLprofIdiomaDraconici = document.querySelector(
    'input[name="personagem_prof_idioma_draconico"]'
  );
  const HTMLprofIdiomaInfernal = document.querySelector(
    'input[name="personagem_prof_idioma_infernal"]'
  );
  const HTMLprofIdiomaPrimordial = document.querySelector(
    'input[name="personagem_prof_idioma_primordial"]'
  );
  const HTMLprofIdiomaSilvestre = document.querySelector(
    'input[name="personagem_prof_idioma_silvestre"]'
  );
  const HTMLprofIdiomaSubcomum = document.querySelector(
    'input[name="personagem_prof_idioma_subcomum"]'
  );
  const HTMLprofItensArmaduraLeve = document.querySelector(
    'input[name="personagem_prof_armadura_leve"]'
  );
  const HTMLprofItensArmaduraMedia = document.querySelector(
    'input[name="personagem_prof_armadura_media"]'
  );
  const HTMLprofItensArmaduraPesada = document.querySelector(
    'input[name="personagem_prof_armadura_pesada"]'
  );
  const HTMLprofItensArmaSimplesCAC = document.querySelector(
    'input[name="personagem_prof_arma_simplescac"]'
  );
  const HTMLprofItensArmaSimplesAD = document.querySelector(
    'input[name="personagem_prof_arma_simplesdistancia"]'
  );
  const HTMLprofItensArmaMarcialCAC = document.querySelector(
    'input[name="personagem_prof_arma_marcialcac"]'
  );
  const HTMLprofItensArmaMarcialAD = document.querySelector(
    'input[name="personagem_prof_arma_marcialdistancia"]'
  );
  const HTMLprofItensInstrumentos = document.querySelector(
    'input[name="personagem_prof_ferramenta_instrumento"]'
  );
  const HTMLprofItensDisfarce = document.querySelector(
    'input[name="personagem_prof_ferramenta_kit_disfarce"]'
  );
  const HTMLprofItensFalsificacao = document.querySelector(
    'input[name="personagem_prof_ferramenta_kit_falsificacao"]'
  );
  const HTMLprofItensHerbalismo = document.querySelector(
    'input[name="personagem_prof_ferramenta_kit_herbalismo"]'
  );
  const HTMLprofItensVeneno = document.querySelector(
    'input[name="personagem_prof_ferramenta_kit_veneno"]'
  );
  const HTMLprofItensBaralho = document.querySelector(
    'input[name="personagem_prof_ferramenta_baralho"]'
  );
  const HTMLprofItensDados = document.querySelector(
    'input[name="personagem_prof_ferramenta_dados"]'
  );
  const HTMLprofItensXadrez = document.querySelector(
    'input[name="personagem_prof_ferramenta_xadrez"]'
  );
  const HTMLprofItensLadrao = document.querySelector(
    'input[name="personagem_prof_ferramenta_ladrao"]'
  );
  const HTMLprofItensNavegacao = document.querySelector(
    'input[name="personagem_prof_ferramenta_navegacao"]'
  );
  const HTMLprofItensOutros = document.querySelector(
    'textarea[name="personagem_prof_outros"]'
  );
  const HTMLantecedentes = document.querySelector(
    'input[name="personagem_antecedente"]'
  );
  const HTMLpersonalidade = document.querySelector(
    'textarea[name="persongem_personalidade"]'
  );
  const HTMLideais = document.querySelector(
    'textarea[name="personagem_ideais"]'
  );
  const HTMLvinculos = document.querySelector(
    'textarea[name="personagem_vinculos"]'
  );
  const HTMLdefeitos = document.querySelector(
    'textarea[name="personagem_defeitos"]'
  );
  const HTMLgenero = document.querySelector('input[name="personagem_genero"]');
  const HTMLidade = document.querySelector('input[name="personagem_idade"]');
  const HTMLtamanho = document.querySelector(
    'input[name="personagem_tamanho"]'
  );
  const HTMLmassa = document.querySelector('input[name="personagem_peso"]');
  const HTMLpele = document.querySelector('input[name="personagem_cor_pele"]');
  const HTMLolhos = document.querySelector(
    'input[name="personagem_cor_olhos"]'
  );
  const HTMLcabelo = document.querySelector(
    'input[name="personagem_cor_cabelo"]'
  );
  const HTMLtattoo = document.querySelector(
    'input[name="personagem_tem_tattoo"]'
  );
  const HTMLbarba = document.querySelector(
    'input[name="personagem_tem_barba"]'
  );
  const HTMLdeficiencia = document.querySelector(
    'input[name="personagem_tem_deficiencia"]'
  );
  const HTMLaparenciaDescricao = document.querySelector(
    'textarea[name="personagem_aparencia"]'
  );
  const HTMLcaracteristicas = document.querySelector(
    'textarea[name="personagem_caracteristicas"]'
  );
  const HTMLhabilidades = document.querySelector(
    'textarea[name="personagem_habilidades"]'
  );
  const HTMLcaBase = document.querySelector('input[name="personagem_ca_base"]');
  const HTMLcaHabilidade = document.querySelector(
    'select[name="personagem_ca_habilidade"]'
  );
  const HTMLcaBonus = document.querySelector(
    'input[name="personagem_ca_bonus"]'
  );
  const HTMLarmadura = document.querySelector(
    'select[name="personagem_equip_armadura"]'
  );
  const HTMLescudo = document.querySelector(
    'select[name="personagem_equip_escudo"]'
  );
  const HTMLpvTemp = document.querySelector(
    'input[name="personagem_pv_temporario"]'
  );
  const HTMLpvAtual = document.querySelector(
    'input[name="personagem_pv_atual"]'
  );
  const HTMLpvTotal = document.querySelector('input[name="personagem_pv_max"]');
  const HTMLtesteMorteSucesso1 = document.querySelector(
    'input[name="personagem_teste_morte_sucesso1"]'
  );
  const HTMLtesteMorteSucesso2 = document.querySelector(
    'input[name="personagem_teste_morte_sucesso2"]'
  );
  const HTMLtesteMorteSucesso3 = document.querySelector(
    'input[name="personagem_teste_morte_sucesso3"]'
  );
  const HTMLtesteMorteFalha1 = document.querySelector(
    'input[name="personagem_teste_morte_falha1"]'
  );
  const HTMLtesteMorteFalha2 = document.querySelector(
    'input[name="personagem_teste_morte_falha2"]'
  );
  const HTMLtesteMorteFalha3 = document.querySelector(
    'input[name="personagem_teste_morte_falha3"]'
  );
  const HTMLarmas = document.querySelector(
    'select[name="personagem_equip_arma_tipo"]'
  );
  const HTMLbonusExtraAtaque = document.querySelector(
    'input[name="personagem_equip_arma_extra"]'
  );
  const HTMLarmaHabilidade = document.querySelector(
    'select[name="personagem_equip_arma_habilidade"]'
  );
  const HTMLarmaProf = document.querySelector(
    'select[name="personagem_equip_arma_profiencia"]'
  );
  const HTMLarmaDescricao = document.querySelector(
    'textarea[name="personagem_equip_arma_descricao"]'
  );
  const HTMLitensMagicos = document.querySelector(
    'textarea[name="personagem_equip_itens_magicos"]'
  );
  const HTMLmunicaoNome = document.querySelector(
    'input[name="personagem_equip_municao_nome"]'
  );
  const HTMLmunicaoQuantidade = document.querySelector(
    'input[name="personagem_equip_municao_quantidade"]'
  );
  const HTMLpecasCobre = document.querySelector(
    'input[name="personagem_moeda_cobre"]'
  );
  const HTMLpecasPrata = document.querySelector(
    'input[name="personagem_moeda_prata"]'
  );
  const HTMLpecasElectro = document.querySelector(
    'input[name="personagem_moeda_electro"]'
  );
  const HTMLpecasOuro = document.querySelector(
    'input[name="personagem_moeda_ouro"]'
  );
  const HTMLpecasPlatina = document.querySelector(
    'input[name="personagem_moeda_platina"]'
  );
  const HTMLitemNome = document.querySelector(
    'input[name="personagem_inventario_nome"]'
  );
  const HTMLitemMassa = document.querySelector(
    'input[name="personagem_inventario_massa"]'
  );
  const HTMLitemQuantidade = document.querySelector(
    'input[name="personagem_inventario_quantidade"]'
  );
  const HTMLpetNome = document.querySelector(
    'input[name="personagem_pet_nome"]'
  );
  const HTMLpetEspecie = document.querySelector(
    'input[name="personagem_pet_especie"]'
  );
  const HTMLpetCA = document.querySelector('input[name="personagem_pet_ca"]');
  const HTMLpetPVatual = document.querySelector(
    'input[name="personagem_pet_pv_atual"]'
  );
  const HTMLpetPVmax = document.querySelector(
    'input[name="personagem_pet_pv_max"]'
  );
  const HTMLpetDeslocamento = document.querySelector(
    'input[name="personagem_pet_deslocamento"]'
  );
  const HTMLpetForca = document.querySelector(
    'input[name="personagem_pet_forca"]'
  );
  const HTMLpetDestreza = document.querySelector(
    'input[name="personagem_pet_destreza"]'
  );
  const HTMLpetConstituicao = document.querySelector(
    'input[name="personagem_pet_constituicao"]'
  );
  const HTMLpetInteligencia = document.querySelector(
    'input[name="personagem_pet_inteligencia"]'
  );
  const HTMLpetSabedoria = document.querySelector(
    'input[name="personagem_pet_sabedoria"]'
  );
  const HTMLpetCarisma = document.querySelector(
    'input[name="personagem_pet_carisma"]'
  );
  const HTMLpetDescricao = document.querySelector(
    'textarea[name="personagem_pet_descricao"]'
  );
  const HTMLriquezas = document.querySelector(
    'textarea[name="personagem_riquezas"]'
  );
  const HTMLmagiaHabilidade = document.querySelector(
    'select[name="personagem_conjuracao_habilidade"]'
  );
  const HTMLmagiaCD = document.querySelector(
    'input[name="personagem_conjuracao_cd"]'
  );
  const HTMLmagiaBonus = document.querySelector(
    'input[name="personagem_conjuracao_bonus"]'
  );
  const HTMLmagiaPreparada = document.querySelector(
    'input[name="personagem_conjuracao_preparadas"]'
  );
  const HTMLespacoMagia0atual = document.querySelector(
    'input[name="personagem_magias_espaco0_total"]'
  );
  const HTMLespacoMagia1atual = document.querySelector(
    'input[name="personagem_magias_espaco1_atual"]'
  );
  const HTMLespacoMagia2atual = document.querySelector(
    'input[name="personagem_magias_espaco2_atual"]'
  );
  const HTMLespacoMagia3atual = document.querySelector(
    'input[name="personagem_magias_espaco3_atual"]'
  );
  const HTMLespacoMagia4atual = document.querySelector(
    'input[name="personagem_magias_espaco4_atual"]'
  );
  const HTMLespacoMagia5atual = document.querySelector(
    'input[name="personagem_magias_espaco5_atual"]'
  );
  const HTMLespacoMagia6atual = document.querySelector(
    'input[name="personagem_magias_espaco6_atual"]'
  );
  const HTMLespacoMagia7atual = document.querySelector(
    'input[name="personagem_magias_espaco7_atual"]'
  );
  const HTMLespacoMagia8atual = document.querySelector(
    'input[name="personagem_magias_espaco8_atual"]'
  );
  const HTMLespacoMagia9atual = document.querySelector(
    'input[name="personagem_magias_espaco9_atual"]'
  );
  const HTMLespacoMagia1total = document.querySelector(
    'input[name="personagem_magias_espaco1_total"]'
  );
  const HTMLespacoMagia2total = document.querySelector(
    'input[name="personagem_magias_espaco2_total"]'
  );
  const HTMLespacoMagia3total = document.querySelector(
    'input[name="personagem_magias_espaco3_total"]'
  );
  const HTMLespacoMagia4total = document.querySelector(
    'input[name="personagem_magias_espaco4_total"]'
  );
  const HTMLespacoMagia5total = document.querySelector(
    'input[name="personagem_magias_espaco5_total"]'
  );
  const HTMLespacoMagia6total = document.querySelector(
    'input[name="personagem_magias_espaco6_total"]'
  );
  const HTMLespacoMagia7total = document.querySelector(
    'input[name="personagem_magias_espaco7_total"]'
  );
  const HTMLespacoMagia8total = document.querySelector(
    'input[name="personagem_magias_espaco8_total"]'
  );
  const HTMLespacoMagia9total = document.querySelector(
    'input[name="personagem_magias_espaco9_total"]'
  );
  const HTMLlistaMagiaPreparada = document.querySelector(
    'input[name="personagem_magias_preparada"]'
  );
  const HTMLlistaMagiaNivel = document.querySelector(
    'select[name="personagem_magias_nivel"]'
  );
  const HTMLlistaMagiaNome = document.querySelector(
    'input[name="personagem_magias_nome"]'
  );
  const HTMLlistaMagiaTempo = document.querySelector(
    'input[name="personagem_magias_tempo"]'
  );
  const HTMLlistaMagiaDistancia = document.querySelector(
    'input[name="personagem_magias_distancia"]'
  );
  const HTMLlistaMagiaComponentes = document.querySelector(
    'input[name="personagem_magias_componentes"]'
  );
  const HTMLlistaMagiaDuracao = document.querySelector(
    'input[name="personagem_magias_duracao"]'
  );
  const HTMLlistaMagiaRital = document.querySelector(
    'input[name="personagem_magias_ritual"]'
  );
  const HTMLlistaMagiaConcentracao = document.querySelector(
    'input[name="personagem_magias_concentracao"]'
  );
  const HTMLlistaMagiaReferencia = document.querySelector(
    'input[name="personagem_magias_referencia"]'
  );
  const HTMLlistaMagiaEscola = document.querySelector(
    'input[name="personagem_magias_escola"]'
  );
  const HTMLlistaMagiaMateriais = document.querySelector(
    'input[name="personagem_magias_materiais"]'
  );
  const HTMLlistaMagiaDescricao = document.querySelector(
    'textarea[name="personagem_magias_descricao"]'
  );
  const HTMLcontatos = document.querySelector(
    'textarea[name="personagem_contatos"]'
  );
  const HTMLanotacoes = document.querySelector(
    'textarea[name="personagem_anotacoes"]'
  );

  const nome = document.querySelector('input[name="personagem_nome"]').value;

  const Ficha = {
    user: nome,
    nome: HTMLnome.value,
    especie: HTMLespecie.value,
    subespecie: HTMLsubespecie.value,
    classe: HTMLclasse.value,
    subclasse: HTMLsubclasse.value,
    experiencia: HTMLexperiencia.value,
    inspiracao: HTMLinspiracao.value,
    alinhamento: HTMLalinhamento.value,
    deslocamentoVoo: HTMLdeslocamentoVoo.value,
    forca: HTMLforca.value,
    destreza: HTMLdestreza.value,
    constituicao: HTMLconstituicao.value,
    inteligencia: HTMLinteligencia.value,
    sabedoria: HTMLsabedoria.value,
    carisma: HTMLcarisma.value,
    profAtletismo: HTMLprofAtletismo.value,
    profAcrobacia: HTMLprofAcrobacia.value,
    profFurtividade: HTMLprofFurtividade.value,
    profprestidigitacao: HTMLprofprestidigitacao.value,
    profArcanismo: HTMLprofArcanismo.value,
    profHistoria: HTMLprofHistoria.value,
    profInvestigacao: HTMLprofInvestigacao.value,
    profNatureza: HTMLprofNatureza.value,
    profReligiao: HTMLprofReligiao.value,
    profIntuicao: HTMLprofIntuicao.value,
    profAnimais: HTMLprofAnimais.value,
    profMedicina: HTMLprofMedicina.value,
    profPercepcao: HTMLprofPercepcao.value,
    profSobrevivencia: HTMLprofSobrevivencia.value,
    profAtuacao: HTMLprofAtuacao.value,
    profManipulacao: HTMLprofManipulacao.value,
    profIntimidacao: HTMLprofIntimidacao.value,
    profPersuasao: HTMLprofPersuasao.value,
    profIdiomaComum: HTMLprofIdiomaComum.checked,
    profIdiomaAnao: HTMLprofIdiomaAnao.checked,
    profIdiomaElfico: HTMLprofIdiomaElfico.checked,
    profIdiomaGigante: HTMLprofIdiomaGigante.checked,
    profIdiomaGnomico: HTMLprofIdiomaGnomico.checked,
    profIdiomaGoblin: HTMLprofIdiomaGoblin.checked,
    profIdiomaHalfling: HTMLprofIdiomaHalfling.checked,
    profIdiomaOrc: HTMLprofIdiomaOrc.checked,
    profIdiomaAbissal: HTMLprofIdiomaAbissal.checked,
    profIdiomaCelestial: HTMLprofIdiomaCelestial.checked,
    profIdiomaSubterraneo: HTMLprofIdiomaSubterraneo.checked,
    profIdiomaDraconici: HTMLprofIdiomaDraconici.checked,
    profIdiomaInfernal: HTMLprofIdiomaInfernal.checked,
    profIdiomaPrimordial: HTMLprofIdiomaPrimordial.checked,
    profIdiomaSilvestre: HTMLprofIdiomaSilvestre.checked,
    profIdiomaSubcomum: HTMLprofIdiomaSubcomum.checked,
    profItensArmaduraLeve: HTMLprofItensArmaduraLeve.checked,
    profItensArmaduraMedia: HTMLprofItensArmaduraMedia.checked,
    profItensArmaduraPesada: HTMLprofItensArmaduraPesada.checked,
    profItensArmaSimplesCAC: HTMLprofItensArmaSimplesCAC.checked,
    profItensArmaSimplesAD: HTMLprofItensArmaSimplesAD.checked,
    profItensArmaMarcialCAC: HTMLprofItensArmaMarcialCAC.checked,
    profItensArmaMarcialAD: HTMLprofItensArmaMarcialAD.checked,
    profItensInstrumentos: HTMLprofItensInstrumentos.checked,
    profItensDisfarce: HTMLprofItensDisfarce.checked,
    profItensFalsificacao: HTMLprofItensFalsificacao.checked,
    profItensHerbalismo: HTMLprofItensHerbalismo.checked,
    profItensVeneno: HTMLprofItensVeneno.checked,
    profItensBaralho: HTMLprofItensBaralho.checked,
    profItensDados: HTMLprofItensDados.checked,
    profItensXadrez: HTMLprofItensXadrez.checked,
    profItensLadrao: HTMLprofItensLadrao.checked,
    profItensNavegacao: HTMLprofItensNavegacao.checked,
    profItensOutros: HTMLprofItensOutros.value,
    antecedentes: HTMLantecedentes.value,
    personalidade: HTMLpersonalidade.value,
    ideais: HTMLideais.value,
    vinculos: HTMLvinculos.value,
    defeitos: HTMLdefeitos.value,
    genero: HTMLgenero.value,
    idade: HTMLidade.value,
    tamanho: HTMLtamanho.value,
    massa: HTMLmassa.value,
    pele: HTMLpele.value,
    olhos: HTMLolhos.value,
    cabelo: HTMLcabelo.value,
    tattoo: HTMLtattoo.value,
    barba: HTMLbarba.value,
    deficiencia: HTMLdeficiencia.value,
    aparenciaDescricao: HTMLaparenciaDescricao.value,
    caracteristicas: HTMLcaracteristicas.value,
    habilidades: HTMLhabilidades.value,
    caBase: HTMLcaBase.value,
    caHabilidade: HTMLcaHabilidade.value,
    caBonus: HTMLcaBonus.value,
    armadura: HTMLarmadura.value,
    escudo: HTMLescudo.value,
    pvTemp: HTMLpvTemp.value,
    pvAtual: HTMLpvAtual.value,
    pvTotal: HTMLpvTotal.value,
    testeMorteSucesso1: HTMLtesteMorteSucesso1.checked,
    testeMorteSucesso2: HTMLtesteMorteSucesso2.checked,
    testeMorteSucesso3: HTMLtesteMorteSucesso3.checked,
    testeMorteFalha1: HTMLtesteMorteFalha1.checked,
    testeMorteFalha2: HTMLtesteMorteFalha2.checked,
    testeMorteFalha3: HTMLtesteMorteFalha3.checked,
    armas: HTMLarmas.value,
    bonusExtraAtaque: HTMLbonusExtraAtaque.value,
    armaHabilidade: HTMLarmaHabilidade.value,
    armaProf: HTMLarmaProf.value,
    armaDescricao: HTMLarmaDescricao.value,
    itensMagicos: HTMLitensMagicos.value,
    municaoNome: HTMLmunicaoNome.value,
    municaoQuantidade: HTMLmunicaoQuantidade.value,
    pecasCobre: HTMLpecasCobre.value,
    pecasPrata: HTMLpecasPrata.value,
    pecasElectro: HTMLpecasElectro.value,
    pecasOuro: HTMLpecasOuro.value,
    pecasPlatina: HTMLpecasPlatina.value,
    itemNome: HTMLitemNome.value,
    itemMassa: HTMLitemMassa.value,
    itemQuantidade: HTMLitemQuantidade.value,
    petNome: HTMLpetNome.value,
    petEspecie: HTMLpetEspecie.value,
    petCA: HTMLpetCA.value,
    petPVatual: HTMLpetPVatual.value,
    petPVmax: HTMLpetPVmax.value,
    petDeslocamento: HTMLpetDeslocamento.value,
    petForca: HTMLpetForca.value,
    petDestreza: HTMLpetDestreza.value,
    petConstituicao: HTMLpetConstituicao.value,
    petInteligencia: HTMLpetInteligencia.value,
    petSabedoria: HTMLpetSabedoria.value,
    petCarisma: HTMLpetCarisma.value,
    petDescricao: HTMLpetDescricao.value,
    riquezas: HTMLriquezas.value,
    magiaHabilidade: HTMLmagiaHabilidade.value,
    magiaCD: HTMLmagiaCD.value,
    magiaBonus: HTMLmagiaBonus.value,
    magiaPreparada: HTMLmagiaPreparada.value,
    espacoMagia0atual: HTMLespacoMagia0atual.value,
    espacoMagia1atual: HTMLespacoMagia1atual.value,
    espacoMagia2atual: HTMLespacoMagia2atual.value,
    espacoMagia3atual: HTMLespacoMagia3atual.value,
    espacoMagia4atual: HTMLespacoMagia4atual.value,
    espacoMagia5atual: HTMLespacoMagia5atual.value,
    espacoMagia6atual: HTMLespacoMagia6atual.value,
    espacoMagia7atual: HTMLespacoMagia7atual.value,
    espacoMagia8atual: HTMLespacoMagia8atual.value,
    espacoMagia9atual: HTMLespacoMagia9atual.value,
    espacoMagia1total: HTMLespacoMagia1total.value,
    espacoMagia2total: HTMLespacoMagia2total.value,
    espacoMagia3total: HTMLespacoMagia3total.value,
    espacoMagia4total: HTMLespacoMagia4total.value,
    espacoMagia5total: HTMLespacoMagia5total.value,
    espacoMagia6total: HTMLespacoMagia6total.value,
    espacoMagia7total: HTMLespacoMagia7total.value,
    espacoMagia8total: HTMLespacoMagia8total.value,
    espacoMagia9total: HTMLespacoMagia9total.value,
    listaMagiaPreparada: HTMLlistaMagiaPreparada.value,
    listaMagiaNivel: HTMLlistaMagiaNivel.value,
    listaMagiaNome: HTMLlistaMagiaNome.value,
    listaMagiaTempo: HTMLlistaMagiaTempo.value,
    listaMagiaDistancia: HTMLlistaMagiaDistancia.value,
    listaMagiaComponentes: HTMLlistaMagiaComponentes.value,
    listaMagiaDuracao: HTMLlistaMagiaDuracao.value,
    listaMagiaRital: HTMLlistaMagiaRital.value,
    listaMagiaConcentracao: HTMLlistaMagiaConcentracao.value,
    listaMagiaReferencia: HTMLlistaMagiaReferencia.value,
    listaMagiaEscola: HTMLlistaMagiaEscola.value,
    listaMagiaMateriais: HTMLlistaMagiaMateriais.value,
    listaMagiaDescricao: HTMLlistaMagiaDescricao.value,
    contatos: HTMLcontatos.value,
    anotacoes: HTMLanotacoes.value,
  };

  try {
    const resposta = await fetch("https://dndptbr.vercel.app/ficha/atualizar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(Ficha),
    });

    const data = await resposta.json();
    if (resposta.ok) {
      alert(data.msg);
    } else {
      alert(data.msg);
    }
  } catch (err) {
    alert("Erro ao se cadastrar", error);
  }
}
