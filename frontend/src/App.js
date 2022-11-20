// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ModifyDoc } from "./components/ModifyDoc";
import ViewDoc from "./components/ViewDoc";
import { TextControls } from "./components/BoxStyles";
import { TitleFields } from "./components/TitleFields";
function App() {
  return (
    <div className="App">
      <div>Hello World</div>
      {/* <BoxStyles /> */}
      <ModifyDoc />
      <ViewDoc />
      <TitleFields />
      <TextControls />
    </div>
  );
}

export default App;
