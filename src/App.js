const Pet = ({name, animal, bread}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, bread),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Neko",
      animal: "Cat",
      bread: "black",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      bread: "white",
    }),
    React.createElement(Pet, {
      name: "Alex",
      animal: "Dog",
      bread: "orange",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
