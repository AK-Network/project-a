<script lang="ts">
  import type { Snippet } from "svelte";
  import "../app.css";
    import Toaster from "$lib/components/Toaster.svelte";

  let { children }: { children: Snippet } = $props();
</script>

<Toaster>
  <hgroup>
    <h1>Project A</h1>
    <h2>web version</h2>
  </hgroup>
  <main>
    {@render children()}
  </main>
</Toaster>


