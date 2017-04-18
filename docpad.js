module.exports = {

  prompts: false,
  plugins: {
    less: {
      referencesOthers: true,
      lessOptions: {
        compress: true,
        sourceMap: {
          sourceMapFileInline: true
        }
      }
    }
  },


  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "INSITER",
      description: "Inside the Web - Teresina - PI",
      date: "10 de Junho de 2017",
      // If your event is free, just comment this line
      price: "$50",
      venue: "Auditório do Sebrae",
      address: "Av. Campos Sáles, 1046 - Centro (Norte), Teresina - PI, 64000-300",
      city: "Teresina",
      state: "Piauí"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
      text: "Comprar ticket",
      link: "https://www.eventbrite.com.br/e/insiter-tickets-33716234164?aff=efbevent",
      advice: "Vagas limitadas!"
    },

    // Site info
    site: {
      theme: "default",
      url: "http://insiter.github.io/insiter.io/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      // 'about',
      // 'location',
      // 'speakers',
      // 'schedule',
      // 'sponsors',
      // 'partners',
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Programação",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Daniel Romero",
        photo: "https://avatars0.githubusercontent.com/u/444911?v=3&s=460",
        bio: "Desenvolvedor, escritor técnico, palestrante e atualmente trabalha com práticas DevOps.",
        company: "Linux Foundation",
        link: {
          href: "https://infoslack.pro/",
          text: "@infoslack"
        },
        presentation: {
          title: "Unikernels e o futuro da infraestrutura imutável",
          description: "Eles serão substituídos por hypervisors do tipo bare metal, otimizados de forma específica para o hardware e o deploy de nossas aplicações será feito através de um único arquivo binário. Nesta talk, veremos o que são Unikernels, os motivos de serem rápidos, seguros e que oportunidades ele reserva para o futuro.",
          time: "10h00"
        }
      },
      {
        name: "Fabio Akita",
        photo: "https://avatars2.githubusercontent.com/u/2840?v=3&s=460",
        bio: "É co-fundador da boutique de software Codeminer 42. Desde 2008 também é co-organizador da Rubyconf Brasil junto com a Locaweb. Ativista de Ruby on Rails desde 2006, publicou o primeiro livro do assunto. Já realizou quase 200 palestras pelo Brasil e pelo mundo. Trabalha como programador desde o começo dos anos 90 e passou por todas as principais tecnologias do mercado nesse período. Publica artigos no blog akitaonrails.com desde 2006",
        company: "Codeminer 42",
        link: {
          href: "http://www.akitaonrails.com/",
          text: "@akitaOnRails"
        },
        presentation: {
          title: "Introducing Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Gabriel Sobrinho",
        photo: "https://avatars2.githubusercontent.com/u/26460?v=3&s=460",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Hite",
        link: {
          href: "http://gabrielsobrinho.com/",
          text: "@sobrinho"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      },
      {
        name: "Jean Carlo",
        photo: "https://avatars3.githubusercontent.com/u/353504?v=3&s=460",
        bio: "Sou graduado em Ciências da Computação pela federal do Rio Grande do Sul e trabalho com desenvolvimento de projetos de internet já há algum tempo. Passei um bom tempo mergulhado em desenvolvimento Ruby on Rails na Codeminer42, em seguida pelo Grupo RBS e por uma Start-up desenvolvendo Go e Android. Atualmente, faço parte da equipe de webmedia da Globo.com.",
        company: "Globo.com",
        link: {
          href: "http://jcemer.com/",
          text: "@jcemer"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Dmitry Rocha",
        photo: "https://avatars1.githubusercontent.com/u/53300?v=3&s=460",
        bio: "Desenvolvedor, escritor técnico, palestrante e atualmente trabalha com práticas DevOps.",
        company: "Codeminer 42",
        link: {
          href: "https://github.com/dmitryrck",
          text: "@dmitryrck"
        },
        presentation: {
          title: "Unikernels e o futuro da infraestrutura imutável",
          description: "Eles serão substituídos por hypervisors do tipo bare metal, otimizados de forma específica para o hardware e o deploy de nossas aplicações será feito através de um único arquivo binário. Nesta talk, veremos o que são Unikernels, os motivos de serem rápidos, seguros e que oportunidades ele reserva para o futuro.",
          time: "10h00"
        }
      },
      {
        name: "Matias Leidemer",
        photo: "https://avatars1.githubusercontent.com/u/10559?v=3&s=460",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Stickermule",
        link: {
          href: "http://www.leidemer.com/",
          text: "@matiasleidemer"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Thiago Alves",
        photo: "https://avatars0.githubusercontent.com/u/5190217?v=3&s=460",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Codeminer 42",
        link: {
          href: "https://twitter.com/taltk9",
          text: "@taltk9"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Assets path
    getAssets: function() {
      return "assets";
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
