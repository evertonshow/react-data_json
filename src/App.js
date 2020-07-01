import React from "react";
import Component from "../src/components/Component";

function App() {
  let data = {
    card_banner: "usuario_banner.png",
    card_solar: "usuario.png",
    card_pin: "pin.png",
    card_text: [
      {
        title: "PROJETO INTREGAÇÃO DE EMPRESAS ",
        description: "identificacao"
      },
      {
        title: "patrocinador : Anexus"
      },
      {
        title: "Visualizar circulo :",
        link: "/",
        target: "_self",
        color: "#7a2789",
        description: " processando"
      }
    ],

    carrousel: [
      {
        image: "carrousel1.jpg",
        link: "/",
        target: "_self"
      },
      {
        image: "carrousel2.jpg",
        link: "/",
        target: "_self"
      },
      {
        image: "carrousel3.jpg",
        link: "/",
        target: "_self"
      },
      {
        image: "carrousel4.jpg",
        link: "/",
        target: "_self"
      },
      {
        image: "carrousel5.jpg",
        link: "/",
        target: "_self"
      },
      {
        image: "carrousel6.jpg",
        link: "/",
        target: "_self"
      },
      {
        image: "carrousel7.jpg",
        link: "/",
        target: "_self"
      },
      {
        image: "carrousel8.jpg",
        link: "/",
        target: "_self"
      }
    ],

    card_image: [
      {
        link: "/",
        target: "_self",
        image: "star.png"
      }
    ],
    card_image2: [
      {
        link: "/",
        target: "_self",
        image: "atria.png"
      }
    ],
    description: "Star",

    description2: "Atria",

    card_description: [
      {
        description: "Resumo dos Contratos",
        color: "#7a2789"
      }
    ],
    card_demonstrative: [
      {
        image: "fal fa-handshake fa-3x",
        iconColor: "#afaeae",
        color: "#6a6e7e",
        title: "Contratos Ativos",
        description: 2,
        font: "normal 20px bold Helvetica,Arial,sans-serif"
      },
      {
        image: "fas fa-sort-amount-up fa-3x",
        iconColor: "#afaeae",
        color: "#6a6e7e",
        title: "Modulos",
        description: 4,
        font: "normal 20px bold Helvetica,Arial,sans-serif"
      },
      {
        image: "fal fa-funnel-dollar fa-3x",
        iconColor: "#afaeae",
        color: "#6a6e7e",
        title: "Saldo Atual",
        description: "550,00",
        font: "normal 20px bold Helvetica,Arial,sans-serif"
      }
    ],

    card_people: [
      {
        background: "#8e248e",
        border: "#8e248e",
        image: "fal fa-user-crown fa-2x",
        header: "Ptos Pessoais",
        h_description: 2,
        color: "#fff",
        link: "/",
        target: "_self",
        icon: "fal fa-search-plus",
        title: "Expansao",
        description: 0,
        title1: "Geracao",
        description2: 0
      },

      {
        background: "#009cd5",
        border: "#009cd5",
        image: "fal fa-users-crown fa-2x",
        header: "Pts Grupos",
        h_description: 103.45,
        color: "#fff",
        link: "/",
        target: "_self",
        icon: "fal fa-search-plus",
        title: "Expansao",
        description: 103.45,
        title1: "Geracao",
        description2: 0
      },

      {
        background: "#d99e38",
        border: "#d99e38",
        image: "fal fa-bullseye-arrow fa-2x",
        header: "Pts de Qualificacao",
        h_description: 2,
        color: "#fff",
        link: "/",
        target: "_self",
        icon: "fal fa-search-plus",
        title: "VPM",
        description: 0
      }
    ],

    card_demonstrative2: [
      {
        image: "fal fa-handshake fa-3x",
        iconColor: "#afaeae",
        color: "#6a6e7e",
        title: "VPN",
        description: 0,
        font: "normal 20px bold Helvetica,Arial,sans-serif"
      },
      {
        image: "fas fa-sort-amount-up fa-3x",
        iconColor: "#afaeae",
        color: "#6a6e7e",
        title: "Posição No Ranking",
        description: 8,
        font: "normal 20px bold Helvetica,Arial,sans-serif"
      },
      {
        image: "fal fa-funnel-dollar fa-3x",
        iconColor: "#afaeae",
        color: "#6a6e7e",
        title: "Prévia De Bonus",
        description: "R$ 5.550,00",
        font: "normal 20px bold Helvetica,Arial,sans-serif"
      }
    ],

    card_result: [
      {
        title: "Resumo Da Matriz",
        image: "teste.png",
        color: "#5b5856",
        font: "normal 16px bold Helvetica,Arial,sans-serif",
        background: "#f4f7fa",
        description: "Quantidades de Membros:",
        membros: 0,
        colorNumber: "#24b02e",
        description2: "Total De Membros Ativos:"
      }
    ],

    theader: [
      {
        background: "#009cd5",
        color: "#fff",
        title: "Nível"
      },
      {
        background: "#009cd5",
        color: "#fff",
        title: "Novos"
      },
      {
        background: "#009cd5",
        color: "#fff",
        title: "Total"
      },
      {
        background: "#009cd5",
        color: "#fff",
        title: "Isentos"
      },
      {
        background: "#009cd5",
        color: "#fff",
        title: "Ativos"
      },
      {
        background: "#009cd5",
        color: "#fff",
        title: "Ptos Expansão"
      }
    ],

    tbody: [
      [1, 0, 2, 0, 2, 5],
      [1, 0, 2, 0, 2, 5],
      [1, 0, 2, 0, 2, 5],
      [1, 0, 2, 0, 2, 5]
    ],

    footer: [
      {
        logo: "by-anexus.png",
        link: "/",
        target: "_blank",
        background: "#f7f5f9",
        color: "#1bb0ce"
      }
    ],

    register: [
      {
        link: "/",
        image: "fas fa-user fa-2x",
        description: "DADOS PESSOAIS",
        target: "_blank",
        color: "#6a6e7e"
      },
      {
        link: "/",
        image: "fas fa-lock fa-2x",
        description: "SENHA DE ACESSO",
        target: "_blank",
        color: "#6a6e7e"
      },
      {
        link: "/",
        image: "fas fa-user-plus fa-2x",
        description: "SEGUNDO TITULAR",
        target: "_blank",
        color: "#6a6e7e"
      },
      {
        link: "/",
        image: "fas fa-university fa-2x",
        description: "DADOS DE RECEBIMENTO",
        target: "_blank",
        color: "#6a6e7e"
      }
    ],

    form: [
      {
        label: "Primeiro Nome",
        type: "text",
        placeholder: "Erik",
        color: "#b8b3b3",
        background: "#eee"
      },
      {
        label: "Sobrenome",
        type: "text",
        placeholder: "Teixeira",
        color: "#b8b3b3",
        background: "#eee"
      }
    ],

    formLabel: [
      {
        label: "Link de Indicação",
        description: "https://anexus.com.br",
        color: "#b8b3b3"
      },
      {
        label: "Usuário Ex:(Erik)",
        placeholder: "Anexus",
        color: "#b8b3b3"
      }
    ],

    formInput: [
      {
        label: "Data de Nascimento",
        placeholder: "26/08/1981",
        background: "#eee",
        color: "#b8b3b3"
      }
    ],

    form1: [
      {
        label: "CPF",
        placeholder: "070.408.546-89",
        color: "#b8b3b3",
        background: "#eee"
      },
      {
        label: "Rg",
        placeholder: "40439678",
        color: "#b8b3b3",
        background: "#eee"
      }
    ],

    form2: [
      {
        label: "Sexo",
        color: "#b8b3b3",
        background: "#eee",
        option: "Masculino",
        option1: "Feminino",
        option2: "Outro"
      },
      {
        label: "Estado Civil",
        color: "#b8b3b3",
        background: "#eee",
        option: "Casado(a)",
        option1: "Solteiro(a)",
        option2: "Divorciado(a)",
        option3: "Conjugue(a)"
      }
    ],

    formText: [
      {
        label: "Nacionalidade",
        placeholder: "Brasileira",
        color: "#b8b3b3",
        background: "#eee",
        type: "text"
      }
    ],

    button: [
      {
        background: "#337ab7",
        color: "#fff",
        description: "Alterar",
        type: "submit"
      }
    ]
  };
  return <Component data={data} />;
}

export default App;
