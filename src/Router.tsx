import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark}></Coin>
        </Route>
        <Route path="/">
          <Coins toggleDark={toggleDark}></Coins>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
