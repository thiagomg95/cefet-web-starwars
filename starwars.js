// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

let textosDeAbertura = [];

$.ajax(
  {
    url: 'https://swapi.co/api/films/',
    method: 'GET',
    success: function(resposta) 
        {
            resposta.results.sort(function(a,b)
                {
                  if(a.episode_id<b.episode_id)
                  {
                    return -1;
                  }
                  else if(a.episode_id == b.episode_id)
                  {
                    return 0;
                  }
                  else
                  {
                    return 1;
                  }
                }
            );

    let filmes = resposta.results;

    for (var filme of filmes)
    {
        $("ul").append  ("<li id=\'episode"+ filme.episode_id + "\' data-episode-url=\"http://swapi.co/api/films/"+filme.episode_id +"/\">Episode "+filme.episode_id+ ": "+ filme.title + "</li> ");
        textosDeAbertura[filme.episode_id] = "Episode " + filme.episode_id + "\n" + filme.title.toUpperCase() + "\n\n" + filme.opening_crawl;
    }

    if (localStorage.getItem('historico') != null)
      {
        $("pre").html(textosDeAbertura[ localStorage.getItem('historico') ]);
      }
        
    }
  }
);

$('#movies').on('click', 'li', function(e) 
    {
        let string = this.getAttribute("id");
        string = string.substring(7);
        $("pre").html(textosDeAbertura[string]);

        localStorage.setItem('historico', string);
    }
);
