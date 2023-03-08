
import './App.css';
import PostForm from './components/post';
import REVIEW from './components/REVIEW.js';
import Details from './components/get';
import TodoItem from './components/update';
import EmpDelete from './components/delete';



function App() {
  return (
    <div className="App">
      {/* <REVIEW/> */}
      <Details/>
      <PostForm/>
      <TodoItem/>
      <EmpDelete/>
    </div>
  );
}

export default App;
