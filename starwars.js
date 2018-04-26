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
    })

    let filmes = resposta.results;
    let escolha = $("#movies > ul");
    for(var film of filmes)
    {
      $("escolha").append($("li"));
    }

      console.log(resposta.results);
    }
  }
);
