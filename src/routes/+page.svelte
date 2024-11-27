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
        showToast(`latitude: ${latitude} | longitude: ${longitude}`, {duration: 50000})
      },
      (error) => {
        showToast("Error fetching location", {type: 'error'})
        console.error(error)
      },
    );
  }}>Use my Location</button
>
