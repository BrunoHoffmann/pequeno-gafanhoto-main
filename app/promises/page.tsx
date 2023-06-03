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
          {`const fetchData = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = 'Hello, Promises!';
    resolve(data); // Resolving the promise with the data
  }, 2000);
});

fetchData.then((data) => {
  console.log(data); // Output: Hello, Promises!
});`}
        </code>
      </pre>
      <h2>Promise States and Lifecycle</h2>
      <p>
        Promises have three states: pending, fulfilled, and rejected. They start
        in the pending state and can transition to either fulfilled (when the
        operation is successful) or rejected (when an error occurs). Here&#39;s
        an example showcasing promise states and handling errors:
      </p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    resolve('Success!');
  } else {
    reject(new Error('Failure!'));
  }
});

promise
  .then((result) => {
    console.log(result); // Output: Success!
  })
  .catch((error) => {
    console.error(error); // Output: Error: Failure!
  });`}
        </code>
      </pre>
      <h2>Chaining Promises</h2>
      <p>
        Promises can be chained together to perform sequential asynchronous
        operations. Each then method in the chain handles the result of the
        previous promise. Here&#39;s an example:
      </p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { name: 'John Doe', age: 25 };
      resolve(user);
    }, 1000);
  });
};

const processData = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      user.isAdmin = true;
      resolve(user);
    }, 1000);
  });
};

fetchUserData()
  .then(processData)
  .then((user) => {
    console.log(user); // Output: { name: 'John Doe', age: 25, isAdmin: true }
  });`}
        </code>
      </pre>
      <h2>Promise Composition</h2>
      <p>
        Promises can be composed using Promise.all and Promise.race methods.
        Promise.all waits for all promises to resolve, while Promise.race waits
        for the first promise to resolve or reject. Here&#39;s an example:
      </p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { name: 'John Doe', age: 25 };
      resolve(user);
    }, 1000);
  });
};

const fetchPostData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = { title: 'JavaScript Promises', likes: 10 };
      resolve(post);
    }, 1500);
  });
};

Promise.all([fetchUserData(), fetchPostData()])
  .then(([user, post]) => {
    console.log(user, post);
    // Output: { name: 'John Doe', age: 25 } { title: 'JavaScript Promises', likes: 10 }
  });`}
        </code>
      </pre>
      <p>
        In this example, we have two functions, <strong>fetchUserData</strong>{' '}
        and <strong>fetchPostData</strong>, which return promises that resolve
        with user and post data, respectively. We use{' '}
        <strong>Promise.all</strong> to wait for both promises to resolve, and
        the <strong>.then</strong> method to handle the results as an array
        <strong>[user, post]</strong>. Finally, we log the user and post data to
        the console.
      </p>
    </div>
  );
}
