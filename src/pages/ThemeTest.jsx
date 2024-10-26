import React from "react";

const ThemeTest = () => {
  return (
    <div className="bg-base-100 text-neutral min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold text-primary">
          Welcome to DaisyUI Theme Testing
        </h1>
        <p className="mt-4 text-secondary">
          This is a sample page to test the "sunset-serenity" theme.
        </p>
        <div className="divider"></div>

        <div className="mt-4">
          <button className="btn btn-link p-4">Link</button>
          <div className="join join-vertical lg:join-horizontal p-4">
            <button className="btn join-item">Button</button>
            <button className="btn btn-neutral join-item">Neutral</button>
            <button className="btn btn-primary join-item">Primary</button>
            <button className="btn btn-secondary join-item">Secondary</button>
            <button className="btn btn-ghost join-item">Ghost</button>
            <button className="btn btn-accent join-item">Accent</button>
          </div>
          <div className="join join-vertical lg:join-horizontal p-4">
            <button className="btn btn-info join-item">Info</button>
            <button className="btn btn-success join-item">Success</button>
            <button className="btn btn-warning join-item">Warning</button>
            <button className="btn btn-error join-item">Error</button>
          </div>
        </div>

        <div className="divider"></div>

        <div role="alert" className="alert mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>This is a neutral alert!</span>
        </div>
        <div className="alert alert-info mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>This is an info alert!</span>
        </div>
        <div className="alert alert-success mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>This is a success alert!</span>
        </div>
        <div className="alert alert-warning mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>This is a warning alert!</span>
        </div>
        <div className="alert alert-error mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>This is an error alert!</span>
        </div>

        <div className="mt-4">
          <ul className="steps">
            <li className="step step-primary">Step 1</li>
            <li className="step">Step 2</li>
            <li className="step">Step 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeTest;
