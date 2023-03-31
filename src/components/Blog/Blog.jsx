import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col gap-5 my-10">
      <div>
        <h1 className="text-3xl font-bold">
          1. What's the difference between Prop Vs State?
        </h1>
        <p className="text-lg mt-3">
          <span className="font-semibold">State: </span>
          State is managed within the component. State can be changed(mutable).
          State is controlled by the react components.
        </p>
        <p className="text-lg mt-3">
          <span className="font-semibold">Props: </span>
          Props gets passed to the components. Prop is read only, can not be
          changed(immutable). Prop is controlled by whoever renders the
          components.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">2. How does useState work?</h1>
        <p className="text-lg mt-3">
          useState is React Hook that allows you to add state to a functional
          component. It returns an array with two values: the current state and
          a function to update it. The Hook takes an initial state value as an
          argument and returns an updated state value whenever the setter
          function is called.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">
          3. What's Purpose of useEffect other than fetching data?
        </h1>
        <p className="text-lg mt-3">
          The useEffect in react js allows you to perform side effects in your
          components. The react useEffect examples of side effects include
          retrieving data, direct DOM updates, and timers. The second argument
          is optional.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">4. How does React work?</h1>
        <p className="text-lg mt-3">
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
