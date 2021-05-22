import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";

export default function App() {
  // // get tasks
  // useEffect(() => {
  //   const endpoint = "https://gorest.co.in/public-api/users/1940/todos";
  //   fetch(endpoint)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/:id">
          <ItemPage />
        </Route>
      </Switch>
    </>
  );
}
