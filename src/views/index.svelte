<script>
import CopyToClipBoard from "../lib/CopyToClipboard/CopyToClipBoard.svelte";
//console.log("CopyToClipBoard", CopyToClipBoard);
import DepthEffect from "../lib/DepthEffect/DepthEffect.svelte";
import ShuffleText from "../lib/ShuffleText/ShuffleText.svelte";

const currentRoute = null;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!--  svelte-ignore a11y-invalid-attribute-->
<!-- <DepthEffect /> -->
<!-- <main>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Album example</h1>
        <p class="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <p>
          <a href="/" class="btn btn-primary my-2">Main call to action</a>
          <a href="/" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#55595c"></rect
              ><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text
              ></svg>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#55595c"></rect
              ><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text
              ></svg>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#55595c"></rect
              ><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text
              ></svg>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#55595c"></rect
              ><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text
              ></svg>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#55595c"></rect
              ><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text
              ></svg>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#55595c"></rect
              ><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text
              ></svg>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#55595c"></rect
              ><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text
              ></svg>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#55595c"></rect
              ><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text
              ></svg>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              ><title>Placeholder</title><rect
                width="100%"
                height="100%"
                fill="#55595c"></rect
              ><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text
              ></svg>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"
                    >Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main> -->
<main>
  <!-- <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div> -->
  <h1>MASKING TAPE JS - SVELTE-COMPONENTS</h1>

  <div class="card p-2 mt-3">
    <h2>CLIPBOARD COMPONENT</h2>
    <input type="text" value="Hello World" id="myInput" /><br />
    <CopyToClipBoard target="#myInput" caption="Copied:caption">
      <button>COPY TO CLIPBOARD</button>
    </CopyToClipBoard>
  </div>
  <div class="card p-2 mt-3">
    <h2>ShuffleText Effect</h2>
    <ShuffleText delay="1000"><h1>Wolfgang</h1></ShuffleText>
    <ShuffleText delay="1250"><h2>Mozart</h2></ShuffleText>
  </div>
  <!-- <div class="card p-2">
    <h1>Depth Effect</h1>
    <DepthEffect />
  </div> -->
  <!-- 
  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p> -->
</main>
