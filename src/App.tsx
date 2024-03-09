import { Copyright } from './components/Copyright';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/NavBar';
import { Todos } from './components/Todos';
import { useTodos } from './hooks/useTodos';

const App: React.FC = () => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos,
  } = useTodos();

  return (
    <>
        <Navbar />
      <div className="todoapp">
        <Header saveTodo={handleSave} />
        <Todos
          removeTodo={handleRemove}
          setCompleted={handleCompleted}
          setTitle={handleUpdateTitle}
          todos={filteredTodos}
        />
        <Footer
          handleFilterChange={handleFilterChange}
          completedCount={completedCount}
          activeCount={activeCount}
          filterSelected={filterSelected}
          onClearCompleted={handleClearCompleted}
        />
      </div>
      <Copyright />
    </>
  );
};

export default App;
