import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Switch, Route } from "react-router-dom";
import { tasksState } from "../atoms";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";

export default function App() {
  const setTasks = useSetRecoilState(tasksState);
  let userId = 1645;

  // create new user on gorest.co.in if the old one has been removed
  // useEffect(() => {
  //   const endpoint = "https://gorest.co.in/public-api/users";
  //   fetch(endpoint, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization:
  //         "Bearer " +
  //         "e24613527fa0a33f38c3f650049c4bd6876276dd89530c4ab3dbe590576bfaf9",
  //     },
  //     body: JSON.stringify({
  //       name: "Jan Jansen",
  //       gender: "Male",
  //       email: "jjansen@bg.com",
  //       status: "Active",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       userId = data.id;
  //     })
  //     .catch((err) => console.log(err));
  // });

  useEffect(() => {
    async function fetchTasks() {
      const endpoint = `https://gorest.co.in/public-api/users/${userId}/todos`;
      const response = await fetch(endpoint);
      const { data } = await response.json();
      console.log(data);
      setTasks(data);
    }
    fetchTasks();
  }, []);

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
