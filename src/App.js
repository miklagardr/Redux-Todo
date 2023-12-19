import SearchBar from "./components/searchBar";
import SearchFilter from "./components/searchFilter"; 
import TodoList from "./components/TodoList"



function App() {
  return (
   
    <div className="container">
      <div className="bg-gray-200 h-24  py-5 items-center justify-center flex  ">
        <h1 className="text-6xl  font-bold bg-gradient-to-r text-transparent bg-clip-text from-red-600 to-blue-300  ">
          TODO LIST
        </h1>
      </div>
      <SearchBar />
      <SearchFilter />
      <TodoList />
    </div>
  
  );
}

export default App;
