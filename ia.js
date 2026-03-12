let database = {};

fetch("database.json")
.then(res => res.json())
.then(data => database = data);

function responderIA(pergunta){

 let texto = pergunta.toLowerCase();

 for(let item in database){

  if(texto.includes(item)){

   let s = database[item];

   return `
   <strong>${s.nome}</strong><br><br>

   <strong>Para que serve:</strong><br>
   ${s.serve}<br><br>

   <strong>Como tomar:</strong><br>
   ${s.tomar}<br><br>

   <strong>Fontes naturais:</strong><br>
   ${s.fontes}
   `;
  }
 }

 return "Não encontrei essa vitamina ou mineral. Tente pesquisar pelo nome.";
}
