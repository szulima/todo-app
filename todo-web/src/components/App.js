import { useEffect } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { Switch, Route } from "react-router-dom";
import { tasksState, userIdState, loadingState } from "../atoms";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";

export default function App() {
  const setTasks = useSetRecoilState(tasksState);
  const [userId, setUserId] = useRecoilState(userIdState);
  const setLoading = useSetRecoilState(loadingState);

  async function doesUserExist() {
    setLoading(true);
    const endpoint = `https://gorest.co.in/public-api/users/${userId}`;
    const responsePromise = await fetch(endpoint);
    const data = await responsePromise.json();
    return data.code;
  }

  async function createNewUser() {
    const endpoint = `https://gorest.co.in/public-api/users`;
    const promise = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "e24613527fa0a33f38c3f650049c4bd6876276dd89530c4ab3dbe590576bfaf9",
      },
      body: JSON.stringify({
        name: "Jaheira",
        gender: "Female",
        email: "jaheira2@bg.com",
        status: "Active",
      }),
    });
    const dataObject = await promise.json();
    console.log("newly created user id", dataObject.data.id);
    setUserId((userId) => dataObject.data.id);
    console.log("userId value was changed to: ", userId);
  }

  async function fetchTasks() {
    console.log("fetch tasks user id ", userId);
    setLoading(true);
    const endpoint = `https://gorest.co.in/public-api/users/${userId}/todos`;
    const response = await fetch(endpoint);
    const { data } = await response.json();
    setTasks(data);
    setLoading(false);
  }

  useEffect(() => {
    async function fetchData() {
      const code = await doesUserExist();
      if (code === 404) await createNewUser();
      await fetchTasks();
    }
    fetchData();
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
