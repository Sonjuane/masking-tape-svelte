<script>
  import { Router } from "svelte-router-spa";
  import routes from "virtual:generated-pages-svelte";

  const routePaths = routes.map((item) => item.name);
  console.log("routes", routePaths, routes[0].component);

  // const comps = import.meta.glob("./lib/**/*.**/");
  // Object.keys(comps).forEach((item) => {
  //   var filename = item
  //     .substring(item.lastIndexOf("/") + 1)
  //     .replace(".svelte", "");

  //   console.log("item", filename);
  //   console.log("comps[item]", comps[item]);
  // });
  // // for (let item of Ob) {

  // // }
  // console.log("comps", comps);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!--  svelte-ignore a11y-invalid-attribute-->
<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>
<Router {routes} />

<style lang="scss">
  // @import "./scss/bootstrap.custom.scss";
</style>
