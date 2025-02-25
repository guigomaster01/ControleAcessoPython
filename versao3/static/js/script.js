document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formRegistro");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Para evitar o recarregamento da página

        const formData = new FormData(form); // Coleta os dados do formulário
        
        fetch("/registrar", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao registrar dados");
            }
            return response.json();
        })
        .then(data => {
            alert(data.message); // Alerta de sucesso
            window.location.href = "/"; // Recarrega a página
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Ocorreu um erro ao salvar o registro.");
        });
    });
});

// Lista de funcionários (#TODO: Colocar em um banco de dados posteriormente)
const funcionarios = [
    { registro: 48834, nome: "ADEILDO AGNELLO" },
    { registro: 48939, nome: "AIRTON PEDROSO DE SOUZA NETO" },
    { registro: 48748, nome: "ALESSANDRO GABRIEL DA SILVA" },
    { registro: 48511, nome: "ALEX ALESSANDRO FERREIRA DE ALMEIDA" },
    { registro: 48908, nome: "ALEXANDRE EZEQUIEL FERREIRA" },
    { registro: 48548, nome: "ALINE CRISTINA CAMPOS" },
    { registro: 48953, nome: "ALTAMIR MARTINS JUNIOR" },
    { registro: 48870, nome: "AMAURI PEREIRA" },
    { registro: 48815, nome: "AMILTON DIAS DOMINGUES" },
    { registro: 48626, nome: "AMINADABE CUSTODIO DE MELO" },
    { registro: 48958, nome: "ANA CAROLINA ALVES" },
    { registro: 48906, nome: "ANA NAJORE DENISOVAS LOPES" },
    { registro: 48289, nome: "ANDRE MONARI" },
    { registro: 48911, nome: "ANTONIO MARCOS CORREA" },
    { registro: 48957, nome: "ANTONIO MARCOS DOS SANTOS" },
    { registro: 48827, nome: "ANTONIO RICARDO DA SILVA" },
    { registro: 48090, nome: "AUDREY FRANCINE SANCHES DE SOUSA" },
    { registro: 48861, nome: "BRENDO NATALINO FELIPE DO NASCIMENTO" },
    { registro: 48859, nome: "BRUNO GUSTAVO CARDOSO DE GOES" },
    { registro: 48937, nome: "CAMILA GABRIELA ANTUNES DE SOUZA ALBIERO" },
    { registro: 48333, nome: "CELSO APARECIDO CEZARIO" },
    { registro: 48898, nome: "CELSO FLAVULATARI BACHETTA" },
    { registro: 48469, nome: "CIBELE CRISTINA JACINTO" },
    { registro: 48286, nome: "CLAUDINEA RODRIGUES SANTOS ANDRADE" },
    { registro: 48952, nome: "CLAUDIO FRANCISCO DE LIMA" },
    { registro: 48621, nome: "CLAUDIO PEREIRA RODRIGUES" },
    { registro: 48267, nome: "CLAUDIO ROBERTO DE JESUS DOMINGUES" },
    { registro: 48847, nome: "CLEBER CORREA DE OLIVEIRA" },
    { registro: 48888, nome: "CRISTIANE DE FATIMA FARIAS" },
    { registro: 48710, nome: "DANIEL JOSE FERNANDES" },
    { registro: 48851, nome: "DANIEL SOARES DE ANDRADE" },
    { registro: 48627, nome: "DARCI JOSE DE OLIVEIRA" },
    { registro: 48574, nome: "DARLI MENDES DO NASCIMENTO" },
    { registro: 48360, nome: "DAVI MUNIZ DOS SANTOS" },
    { registro: 48280, nome: "DENER DE SOUZA" },
    { registro: 48912, nome: "DIANA RESENDE OLIVEIRA" },
    { registro: 48829, nome: "DIJALMA DONIZETI XAVIER" },
    { registro: 48876, nome: "DJALMA ROBERTO FIGUEIREDO DA SILVA" },
    { registro: 48583, nome: "DONALDES ALQUESAR DOS SANTOS JUNIOR" },
    { registro: 48248, nome: "DOUGLAS DANIEL PEREIRA" },
    { registro: 48607, nome: "EDELIO DE SOUZA BARROS" },
    { registro: 48860, nome: "EDILBERTO DOS SANTOS" },
    { registro: 48361, nome: "EDINALDO DIAS DUARTE" },
    { registro: 48376, nome: "EDSON APARECIDO FERRAZ DOS SANTOS" },
    { registro: 48294, nome: "EDSON BAPTISTA" },
    { registro: 48869, nome: "EDSON SOARES DA SILVA" },
    { registro: 48865, nome: "EDUARDO NONATO DOS SANTOS" },
    { registro: 48556, nome: "ELIEZER DA SILVA VALENCIO" },
    { registro: 48266, nome: "ELISEU DOS SANTOS" },
    { registro: 48297, nome: "EVANDRO CORREA DE ALMEIDA" },
    { registro: 48897, nome: "EVERTON RODRIGUES DE ARRUDA" },
    { registro: 48857, nome: "EZEQUIEL MOTA" },
    { registro: 48904, nome: "FABIANA CIGHETTI SEABRA DE SALLES" },
    { registro: 48538, nome: "FABIO BATISTA DE SOUZA" },
    { registro: 48793, nome: "FABIO GOMES DE SOUZA" },
    { registro: 48868, nome: "FABIO JOSE PEREIRA" },
    { registro: 48618, nome: "FRANCISCO ELIESIO MESQUITA" },
    { registro: 48964, nome: "GABRIEL DIAS DA SILVA" },
    { registro: 48909, nome: "GABRIELA CAMARGO" },
    { registro: 48920, nome: "GILBERTO DOMINGUES VIEIRA" },
    { registro: 48864, nome: "GILBERTO GIL DE OLIVEIRA" },
    { registro: 48563, nome: "GILBERTO MACIEL DE ANDRADE" },
    { registro: 48822, nome: "GILIARD DOMINGUES VIEIRA" },
    { registro: 48825, nome: "GILMAR VIANI BARBOSA" },
    { registro: 48281, nome: "GILSON PEREIRA RODRIGUES" },
    { registro: 48962, nome: "GIOVANA DE LIMA RIBEIRO MENDES" },
    { registro: 48371, nome: "GISELE ROSA CIPRIANO" },
    { registro: 48959, nome: "GUSTAVO EUDOXIO PEREIRA DA SILVA" },
    { registro: 48831, nome: "HILVAM JOSE CORREIA" },
    { registro: 48945, nome: "HILVAM JOSE CORREIA JUNIOR" },
    { registro: 48207, nome: "ISAIAS TIAGO DOS SANTOS" },
    { registro: 48907, nome: "ISAQUE ESTAUSIA" },
    { registro: 48839, nome: "ISAQUEL VIEIRA BORBA" },
    { registro: 48903, nome: "ISRAEL ALVES MOREIRA DAS NEVES" },
    { registro: 48927, nome: "IVAN ROMUALDO DE LIMA" },
    { registro: 48929, nome: "IZAIAS GABRIEL DA SILVA" },
    { registro: 48629, nome: "JANE CRISTINA DE LIMA" },
    { registro: 48347, nome: "JOAO BATISTA FRANCO PRESTES" },
];

// Captura os elementos do formulário
const inputRegistro = document.getElementById("registro");
const inputNome = document.getElementById("nome");

// Evento para buscar o nome ao digitar o registro
inputRegistro.addEventListener("input", function () {
    const registroDigitado = parseInt(this.value); // Converte para número
    const funcionario = funcionarios.find(f => f.registro === registroDigitado);
    
    if (funcionario) {
        inputNome.value = funcionario.nome; // Preenche automaticamente
    } else {
        inputNome.value = ""; // Limpa se não encontrar
    }
});