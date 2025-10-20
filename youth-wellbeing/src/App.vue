<template>
  <nav class="navbar navbar-light bg-light px-3">
    <RouterLink to="/" class="navbar-brand">Wellbeing</RouterLink>
    <div class="d-flex gap-3">
      <RouterLink to="/resources">Resources</RouterLink>
      <RouterLink to="/checkin">Check-in</RouterLink>
      <RouterLink to="/me/checkins">My History</RouterLink>
      <RouterLink to="/admin">Admin</RouterLink>
      <RouterLink to="/signin">Sign in</RouterLink>
    </div>
  </nav>
  <RouterView />
</template>

<style>
a { text-decoration:none }
.navbar a.router-link-exact-active { font-weight:700 }
</style>
