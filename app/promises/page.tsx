export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Promises</h1>
      <ul>
        <li>
          In the world of JavaScript, asynchronous operations play a crucial
          role in building responsive and efficient web applications. However,
          handling asynchronous tasks can sometimes be challenging and lead to
          complex and error-prone code. That&#39;s where JavaScript promises
          come to the rescue. Promises provide a clean and intuitive way to
          manage asynchronous operations and handle their results. In this blog
          post, we will delve into the world of JavaScript promises, exploring
          their purpose, syntax, and the benefits they offer.
        </li>
      </ul>
      <article>
        <h2>What are Promises?</h2>
        <p>
          Promises in JavaScript are objects that represent the eventual
          completion (or failure) of an asynchronous operation. They serve as
          placeholders for future results and simplify working with asynchronous
          code. Here&#39;s an example:
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
