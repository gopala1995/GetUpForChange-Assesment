import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { SignUpPage } from "./components/SignUpPage";
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <SignUpPage/> */}
      {/* Checking the code is commited or not */}
      <LoginPage />
    </div>
  );
}

export default App;
