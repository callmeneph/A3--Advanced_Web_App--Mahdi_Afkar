<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container">
      <RouterLink to="/" class="navbar-brand fw-bold">Wellbeing</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="nav" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><RouterLink class="nav-link" to="/resources">Resources</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link" to="/checkin">Check-in</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link" to="/mine">My History</RouterLink></li>
        </ul>

        <div class="d-flex gap-2">
          <RouterLink class="btn btn-outline-primary btn-sm" to="/signin">Sign in</RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <main class="container py-4">
    <RouterView />
  </main>
</template>
