<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";

  const routes = [
    { path: "/", label: "Dashboard" },
    { path: "/heroes", label: "Heroes" },
  ];

  let active: string;

  import Dashboard from "./pages/Dashboard/Dashboard.svelte";
  import Hero from "./pages/Hero.svelte";
  import HeroesList from "./pages/List/HeroesList.svelte";
</script>

<Router>
  <main id="app-container">
    <h1>Tour of Heroes</h1>
    <ul id="navbar">
      {#each routes as route}
        <li>
          <Link
            class={active === route.path ? "active" : undefined}
            to={route.path}
            getProps={(props) => {
              const { isCurrent, location } = props;
              if (isCurrent) {
                active = location.pathname;
              }
              return props;
            }}
          >
            {route.label}
          </Link>
        </li>
      {/each}
    </ul>

    <Route path="/">
      <Dashboard />
    </Route>

    <Route path="/heroes">
      <HeroesList />
    </Route>

    <Route path="/hero/:id">
      <Hero />
    </Route>
  </main>
</Router>
