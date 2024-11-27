<script lang="ts">
  import { showToast } from '$lib/components/Toaster.svelte'
</script>

<button
  class="as-text"
  onclick={() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Send these coordinates to your backend
        alert(`latitude: ${latitude} | longitude: ${longitude}`)
      },
      (error) => showToast("Error fetching location", {type: 'error'}),
    );
  }}>Use my Location</button
>
