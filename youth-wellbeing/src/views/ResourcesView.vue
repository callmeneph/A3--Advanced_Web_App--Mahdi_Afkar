<template>
  <h2 class="mb-4">Helpful Resources</h2>
  <div class="row g-3">
    <div class="col-md-6 col-lg-4" v-for="r in resources" :key="r.title">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">{{ r.title }}</h5>
          <p class="card-text">{{ r.desc }}</p>
          <a :href="r.url" target="_blank" class="btn btn-outline-primary btn-sm">Open</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const resources = [
  { title: 'Headspace', desc: 'Support for young people.', url: 'https://headspace.org.au/' },
  { title: 'Beyond Blue', desc: 'Mental health info & support.', url: 'https://www.beyondblue.org.au/' },
  { title: 'Lifeline', desc: '24/7 crisis support: 13 11 14', url: 'https://www.lifeline.org.au/' },
]
</script>
