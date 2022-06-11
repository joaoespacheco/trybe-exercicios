import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const arrayTeste = ['React', 'Jest', 'Node.js']

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
    <>
      <Header />
    <ol>
      Lista de ferramentas:
      {arrayTeste.map((elemento) => Task(elemento))}
    </ol>
    <h1>Lista de conteúdos</h1>
    <Content />
    <Footer />
    </>
  );
}

export default App;
