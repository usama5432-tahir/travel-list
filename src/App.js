import React, { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} />
      <Stats />
    </div>
  );
}
function Logo() {
  return (
    <div className="">
      <h1>Far Away </h1>
    </div>
  );
}

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity,setQuantity] =useState(1);
 
  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return ;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    console.log(newItem);


  }
  return (
  
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
      {Array.from({ length: 1000 }, (_, i) => i + 1).map((num) => (
       <option  key={num}>
          {num}
         </option>
        ))}
      </select>
      <input type="text" placeholder="item..."  onChange={(e)=>setDescription(e.target.value)}/>
      <button>Add</button>
    </form>
    
    
  );
}

function PackingList({items}){
  return( 
    <div className="">
    <ul className="list">   
       {items.map((item) => <Item item={item} key={item.id} />)}
    </ul>
    </div>
  )

}
function Item({item}){
  return(
    <>
    <li><span style={item.packed?{textDecoration:"line-through"}: {}}>{item.quantity} {item.description}</span>
    <button>❌</button></li>
    </>  
    );  
}
function Stats(){
  return(
    <footer className="stats">
      <em>You have X items on your list, and you already packed X(X%)</em>
    </footer>
  )

}

export default App;
