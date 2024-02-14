import ProjectsSidebar from "./assets/components/ProjectsSidebar.jsx";
import NewProject from "./assets/components/NewProject.jsx";
import NoProjectSelected from "./assets/components/NoProjectSelected.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
