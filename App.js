  import React from 'react';
  import ReactDOM from 'react-dom/client'
  // const heading=React.createElement("h1",{id:"heading"},"hello world form React");
  const root=ReactDOM.createRoot(document.getElementById("root"));
      // <div id="parent">
      //      <div id="child1">
      //         <h1></h1>
      //         <h2></h2>
      //      </div>
      //      <div id="child2">
      //         <h1></h1>
      //         <h1></h1>
      //      </div>
      // </div>
  const parent=React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child",key: "child1"},
          [React.createElement("h1",{key:"h1a"},"i am an h1 tag"),
           React.createElement("h2",{key:"h2a"},"i am an h2 tag")]
        ),
        React.createElement("div",{id:"child",key: "child2"},
          [React.createElement("h1",{key:"h1b"},"i am an h1 tag"),
            React.createElement("h2",{key:"h2b"},"i am an h2 tag")]
        )
        ]

  );
  root.render(parent);