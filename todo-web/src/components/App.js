import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Switch, Route } from "react-router-dom";
import { tasksState, userIdState, loadingState } from "../atoms";
import HomePage from "../pages/HomePage";
import TaskPage from "../pages/TaskPage";

export default function App() {
  const setTasks = useSetRecoilState(tasksState);
  const setUserId = useSetRecoilState(userIdState);
  const setLoading = useSetRecoilState(loadingState);

  async function doesUserExist() {
    setLoading(true);
    const endpoint = `https://gorest.co.in/public-api/users?email=minscandboo@bg.com`;
    const responsePromise = await fetch(endpoint);
    const dataObject = await responsePromise.json();
    const oldUser = dataObject.data[0] ? dataObject.data[0] : null;
    return oldUser;
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
        name: "Minsc",
        gender: "Male",
        email: "minscandboo@bg.com",
        status: "Active",
      }),
    });
    const dataObject = await promise.json();
    const newUser = dataObject.data;
    return newUser;
  }

  async function fetchTasks(user) {
    setLoading(true);
    const endpoint = `https://gorest.co.in/public-api/users/${user.id}/todos`;
    const response = await fetch(endpoint);
    const { data } = await response.json();
    setTasks(data);
    setLoading(false);
  }

  useEffect(() => {
    async function fetchData() {
      let user = await doesUserExist();
      if (!user) user = await createNewUser();
      await fetchTasks(user);
      setUserId(user.id);
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
          <TaskPage />
        </Route>
      </Switch>
    </>
  );
}
