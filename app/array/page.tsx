export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Array and loops</h1>

      <article>
        <h2>Array</h2>
        <p>
          Array is a built-in data structure that allows you to store and
          organize multiple values of any type in a single variable. It is a
          container that can hold a fixed number of items, and each item is
          referred to as an element. The elements in an array are ordered and
          can be accessed by their index, which is a numerical value starting
          from 0 for the first element.
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let fruits = ["apple", "banana", "orange"];`}</code>
        </pre>
        <p>
          In this example, <strong>fruits</strong> is an array that contains
          three elements:
          {` "apple", "banana", and "orange"`}.
        </p>
        <p>
          Arrays in JavaScript are dynamic, meaning you can add or remove
          elements from them at any time. You can access elements in an array
          using their index. For example, to access the first element of the{' '}
          <strong>fruits</strong> array, you would use{' '}
          <strong>fruits[0]</strong>, which would give you the value {`"apple"`}
          .
        </p>
      </article>
      <article>
        <h2>Loop</h2>
        <p>
          In JavaScript, you can use various types of loops to iterate over the
          elements of an array.
        </p>
        <h3>for loop</h3>
        <p>
          The <strong>for loop</strong> is a general-purpose loop that allows
          you to execute a block of code a certain number of times. You can use
          it to iterate over an array by utilizing the array&#39;s length and
          accessing elements using their indices. Here&#39;s an example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}</code>
        </pre>
        <h3>for...of loop</h3>
        <p>
          The <strong>for...of loop</strong> is a more concise loop introduced
          in ES6 (ECMAScript 2015). It provides a simpler syntax for iterating
          over iterable objects, including arrays. With the for...of loop, you
          don&#39;t need to deal with indices. Here&#39;s an example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(fruit);
}`}</code>
        </pre>
        <p>
          This loop will iterate over each element in the{' '}
          <strong>fruits</strong> array and print its value. The{' '}
          <strong>fruit</strong> variable takes the value of each element in
          each iteration.
        </p>
        <h3>For...await loop</h3>
        <p>
          The <strong>for...await loop</strong> is used for asynchronous
          iteration, especially when dealing with promises or async/await
          functions. It allows you to iterate over an array of promises or other
          async iterable objects. Here&#39;s an example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`async function asyncOperation(item) {
  // Perform asynchronous operation
}

let items = [1, 2, 3];

for await (let item of items) {
  await asyncOperation(item);
}`}</code>
        </pre>
        <p>
          In this example, the <strong>for...await loop</strong> iterates over
          an array of items and performs an asynchronous operation on each item.
        </p>
        <h3>for...in</h3>
        <p>
          The <strong>for...in loop</strong> is used to iterate over the
          properties of an object. While it can technically be used with arrays,
          it is generally recommended to use other loop structures for arrays.
          The <strong>for...in loop</strong>
          iterates over the enumerable properties of an object, which includes
          array indices and additional properties added to the array object.
          Here&#39;s an example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let fruits = ['apple', 'banana', 'orange'];

for (let index in fruits) {
  console.log(fruits[index]);
}`}</code>
        </pre>

        <h3>while</h3>
        <p>
          The <strong>while loop</strong> allows you to repeatedly execute a
          block of code as long as a specified condition is true. You can use it
          to iterate over an array by combining it with a variable that keeps
          track of the current index. Here&#39;s an example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let fruits = ['apple', 'banana', 'orange'];
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}`}</code>
        </pre>
        <h3>do...while</h3>
        <p>
          The <strong>do...while loop</strong> is similar to the while loop, but
          it guarantees that the block of code is executed at least once before
          checking the condition. Here&#39;s an example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let fruits = ['apple', 'banana', 'orange'];
let i = 0;

do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);`}</code>
        </pre>
        <p>
          This do...while loop will iterate over the fruits array and print each
          element&#39;s value.
        </p>
        <h3>forEach</h3>
        <p>
          Arrays in JavaScript have a built-in <strong>forEach</strong> method,
          which allows you to iterate over the elements of an array and execute
          a callback function for each element. The forEach method provides a
          simpler and more expressive way to loop over arrays. Here&#39;s an
          example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function(fruit) {
  console.log(fruit);
});`}</code>
        </pre>
        <p>
          The <strong>forEach</strong> method takes a callback function as an
          argument, which is executed for each element in the array. The fruit
          parameter in the example represents the current element in each
          iteration.
        </p>
        <h3>map</h3>
        <p>
          The <strong>map</strong> method is a higher-order function available
          for arrays in JavaScript. It allows you to iterate over an array and
          create a new array based on the transformation of each element. The{' '}
          <strong>map</strong> method applies a provided callback function to
          each element and returns a new array with the results. Here&#39;s an
          example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let numbers = [1, 2, 3];

let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers);  // Output: [2, 4, 6]`}</code>
        </pre>
        <p>
          In this example, the <strong>map</strong> method is used to create a
          new array
          <strong>(doubledNumbers)</strong> where each element is multiplied by
          2.
        </p>
        <h3>filter</h3>
        <p>
          The <strong>filter</strong> method is another higher-order function
          for arrays. It allows you to iterate over an array and create a new
          array containing only the elements that pass a certain condition
          specified by a callback function. Here&#39;s an example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);  // Output: [2, 4]`}</code>
        </pre>
        <p>
          In this example, the <strong>filter</strong> method is used to create
          a new array
          <strong>(evenNumbers)</strong> that contains only the even numbers
          from the original array.
        </p>
        <h3>find</h3>
        <p>
          The find method is an array method in JavaScript that returns the
          first element in the array that satisfies a given condition specified
          by a callback function. It stops the iteration once the condition is
          met and returns the found element. If no element satisfies the
          condition, it returns undefined. Here&#39;s an example usage of the
          find method:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let numbers = [1, 2, 3, 4, 5];

let foundNumber = numbers.find(function(number) {
  return number > 3;
});

console.log(foundNumber);  // Output: 4`}</code>
        </pre>
        <p>
          In this example, the find method searches for the first number greater
          than 3 in the array and returns it. The callback function checks the
          condition {`number > 3`} for each element until it finds a match.
        </p>
        <h3>reduce</h3>
        <p>
          The reduce method is a powerful higher-order function that allows you
          to iterate over an array and accumulate a single value based on the
          elements of the array. It applies a provided callback function to each
          element, taking the previously accumulated value and the current
          element as arguments. Here&#39;s an example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0);

console.log(sum);  // Output: 15`}</code>
        </pre>
        <p>
          In this example, the <strong>reduce</strong> method is used to
          calculate the sum of all the numbers in the array.
        </p>
        <h3>some</h3>
        <p>
          The <strong>some</strong> method is an array method that tests whether
          at least one element in the array satisfies a given condition
          specified by a callback function. It returns true if any element
          passes the condition; otherwise, it returns false. Here&#39;s an
          example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let numbers = [1, 2, 3, 4, 5];

let hasEvenNumber = numbers.some(function(number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber);  // Output: true`}</code>
        </pre>
        <p>
          In this example, the some method checks if there is at least one even
          number in the array.
        </p>
        <h3>every</h3>
        <p>
          The <strong>every</strong> method is similar to the some method, but
          it tests whether all elements in the array satisfy a given condition
          specified by a callback function. It returns true if all elements pass
          the condition; otherwise, it returns false. Here&#39;s an example:
        </p>
        <pre className="bg-slate-100  text-black">
          <code>{`let numbers = [2, 4, 6, 8, 10];

let allEvenNumbers = numbers.every(function(number) {
  return number % 2 === 0;
});

console.log(allEvenNumbers);  // Output: true`}</code>
        </pre>
        <p>
          In this example, the <strong>every</strong> method checks if all
          numbers in the array are even.
        </p>
      </article>
    </div>
  );
}
