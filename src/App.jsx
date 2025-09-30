import MyNavComponent from "./components/MyNavComponent";
import MyFooterComponent from "./components/MyFooterComponent";
import WelcomeComponent from "./components/MyAlertComponent";
import AllTheBooksComponent from "./components/AllTheBooks";
import "./App.css";

function App() {
  return (
    <>
      <MyNavComponent />
      <WelcomeComponent />
      <AllTheBooksComponent />
      <MyFooterComponent />
    </>
  );
}

export default App;
