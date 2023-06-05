export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Git Advanced</h1>

      <article>
        <h2>Git basic</h2>
        <p>
          Retorna uma lista com as classes do elemento. Permite adicionar,
          remover e verificar se contém.
        </p>
      </article>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');`}
        </code>
      </pre>
      <h2>ATTRIBUTES</h2>
      <p>Retorna uma array-like com os atributos do elemento.</p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo`}
        </code>
      </pre>
      <h2>GETATTRIBUTE E SETATTRIBUTE</h2>
      <p>
        Métodos que retornam ou definem de acordo com o atributo selecionado
      </p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo`}
        </code>
      </pre>
      <h2>READ ONLY VS WRITABLE</h2>
      <p>
        Existem propriedades que não permitem a mudança de seus valores, essas
        são considerados Read Only, ou seja, apenas leitura.
      </p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only`}
        </code>
      </pre>
    </div>
  );
}
