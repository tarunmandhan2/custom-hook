import "./styles.css";
import UsersDetail from "./components/UsersDetail";

export default function App() {
  return (
    <div className="App">
      <h1>17. Create a Custom Hook</h1>
      <h4>Create a custom hook that fetches and caches data from an API.</h4>
      <UsersDetail />
    </div>
  );
}
