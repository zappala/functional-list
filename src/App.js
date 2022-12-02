import { useState } from 'react';


function App() {
  // useState hook to keep track of state
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  // handle a new item
  const handleNewItem = (event) => {
    // make sure we don't submit the form to the server
    event.preventDefault();
    const id = items.length
    items.push({ id: id, title: name });
    // make a copy of the list so React state updates properly
    const newList = [...items];
    setItems(newList);
    // clear the input box
    setName('');
  }

  return (
    <div>
      <ItemList items={items} />
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleNewItem}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Add an item
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)} placeholder="item" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

function ItemList({ items }) {
  return (

    <div className="container mb-5 w-1/2">

      <ul className="flex flex-col p-4">
        {items.map(item => (
          <li className="border-gray-400 mb-2" key={item.id}>
            <div className="rounded-md p-4 select-none cursor-pointer bg-gray-300 hover:bg-blue-200 hover:shadow-lg">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">{item.title}</div>

              </div>
            </div>
          </li>

        ))}
      </ul>

    </div>
  )
}

export default App;
