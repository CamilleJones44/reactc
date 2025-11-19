const items = ['Apples', 'Bananas', 'Cherries'];

function Header({ title }) {

  
  return <h1>{title}</h1>;
}



function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (

      <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {

  
  return (
    <div>
      <Header title="My Grocery List" />

        <List items={items} />

     
      <List items={items} />
    </div>
  );
}

export default App;
