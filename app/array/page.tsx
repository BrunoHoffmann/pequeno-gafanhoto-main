export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Array and loops in JS</h1>

      <article>
        <h2>Array</h2>
        <p>
          É um grupo de valores geralmente relacionados. Servem para guardarmos
          diferentes valores em uma única variável.
        </p>
      </article>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox`}
        </code>
      </pre>
      <h2>MÉTODOS E PROPRIEDADES DE UMA ARRAY</h2>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3`}
        </code>
      </pre>
      <h2>FOR LOOP</h2>
      <p>Fazem algo repetidamente até que uma condição seja atingida.</p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console`}
        </code>
      </pre>
      <h2>WHILE LOOP</h2>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console`}
        </code>
      </pre>
      <h2>ARRAYS E LOOPS</h2>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}`}
        </code>
      </pre>
      <h2>BREAK</h2>
      <p>
        O loop irá parar caso encontro e palavra <strong>break</strong>
      </p>
      <pre className="bg-slate-100  text-black">
        <code>
          {`var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}`}
        </code>
      </pre>
      <h2>FOREACH</h2>
      <p>
        forEach é um método que executa uma função para cada item da Array. É
        uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
      </p>
      <pre className="bg-slate-100  text-black">
        <code>
          {`var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente`}
        </code>
      </pre>
      <h2>NÃO SE CONFUNDA COM A SINTAXE</h2>
      <pre className="bg-slate-100  text-black">
        <code>
          {`var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}`}
        </code>
      </pre>
    </div>
  );
}
