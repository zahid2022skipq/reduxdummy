import "./App.css";
import AccountInfo from "./Components/AccountInfo";
import History from "./Components/History";
import DepositContainer from "./Components/DepositContainer";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div
          style={{
            flexDirectionon: "row",
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AccountInfo />
          <History />
        </div>
        <div
          style={{
            marginLeft: "20px",
            backgroundColor: "none",
          }}
        >
          <DepositContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
