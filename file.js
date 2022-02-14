export function say(user){
  alert(`Hello ${user}!`);
}

<div class="container">

  <!-- Option : Accordion -->
  <div class="accordion" id="accord">
    <div class="accordion-item">
      <h1 class="accordion-header" id="accord1">
        <button type="button" name="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#acc1">Premier accordion</button>
      </h1>
      <div class="accordion-collapse collapse" id="acc1" aria-labelledby="accord1" data-bs-parent="#accord">
        <div class="accordion-body">
          Exemple de accordion, kjdbjksdbjvbkvdbkjskdkj;bkdbvk, ijdkbvbv
          kjsdbcdsbvkjdbjdb klovhdobsvdbvds ocbdsjbsbvdjbdbvbldsb sobsdj
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h1 class="accordion-header" id="accord2">
        <button type="button" name="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#acc2">Premier accordion</button>
      </h1>
      <div class="accordion-collapse collapse" id="acc2" aria-labelledby="accord2" data-bs-parent="#accord">
        <div class="accordion-body">
          Exemple de accordion, kjdbjksdbjvbkvdbkjskdkj;bkdbvk, ijdkbvbv
          kjsdbcdsbvkjdbjdb klovhdobsvdbvds ocbdsjbsbvdjbdbvbldsb sobsdj
        </div>
      </div>
    </div>
  </div>

  <!-- Option :Les alertes -->
  <div class="alert alert-success" role="alert">
    <h4>Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>

  <!-- Option : Badge , bouton notifications -->
  <div class="badge position-relative">
    <button type="button" name="button" class="btn btn-outline-primary">New</button>
    <span class="badge rounded-pill bg-danger top-10 start-90 translate-middle position-absolute">99+</span>
  </div>

  <!-- Groupes de boutons -->
  <div class="btn-toolbar mb-3 justify-content-between" role="toolbar" aria-label="toolbar">
    <div class="btn-group" role="group" aria-label="group">
      <button type="button" name="button" class="btn btn-outline-secondary">First</button>
      <button type="button" name="button" class="btn btn-outline-secondary">second</button>
      <button type="button" name="button" class="btn btn-outline-secondary">third</button>
        <!-- Menu deroulant -->
        <button type="button" name="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown">Menu deroulant</button>
        <ul class="dropdown-menu">
          <li class="dropdown-item">Menu1</li>
          <li class="dropdown-item">Menu2</li>
          <li class="dropdown-item">Menu3</li>
        </ul>
    </div>

      <!-- champs groupe -->
      <div class="input-group">
        <span class="input-group-text">@</span>
        <input type="text" name="" aria-label="input" class="form-control" aria-describedby="input">
      </div>

      <!-- mini navigation -->
      <nav class="breadcrumb" style="--bs-breadcrumb-divider:'';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">breadcrumb one</li>
          <li class="breadcrumb-item">breadcrumb Deux</li>
        </ol>
      </nav>

      <!-- Les cartes : card -->
      <div class="card-group">
        <div class="card">
          <img src="images/design.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="images/code.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="images/grab-a-coffee.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

      <!-- Les carousels -->
      <div class="carousel slide" data-bs-ride="carousel" id="carou">
        <div class="carousel-indicators">
          <button type="button" name="button" data-bs-target="#carou" data-bs-slide-to="0" aria-label="slide 1" class="active" aria-current="true"></button>
          <button type="button" name="button" data-bs-target="#carou" data-bs-slide-to="1" aria-label="slide 2"></button>
          <button type="button" name="button" data-bs-target="#carou" data-bs-slide-to="2" aria-label="slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/grab-a-coffee.jpg" alt="" class="w-100 d-block">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/code.jpg" alt="" class="w-100 d-block">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/design.jpg" alt="" class="w-100 d-block">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <button type="button" name="button" class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carou">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
          <button type="button" name="button" class="carousel-control-next" data-bs-slide="next" data-bs-target="#carou">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
        </div>
      </div>


  </div>
</div>
