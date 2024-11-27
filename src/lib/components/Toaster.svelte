<script module>
  let message = $state("Change this default message");
  let error = $state(false);
  let toast: HTMLElement;

  export const showToast = (
    _message: string,
    options: ToastOptions = {}
  ) => {
    message = _message;
    if(options.type === 'error') error = true
    toast.showPopover();
    setTimeout(() => {
      toast.hidePopover();
    }, options.duration ?? 3000);
  };
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();

  type ToastOptions = {
    type?: 'info'| 'error';
    duration?: number;
  };
</script>

{@render children()}

<div id="toatPopover" bind:this={toast} popover="manual" class:error>
  <span>{message}</span>
</div>

<style>
  #toatPopover {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #191919;
    border-radius: 8px;
    margin: auto 1rem 1rem auto;
    padding: .5rem 1rem;

    &.error {
      border-color: #ff6b6b;
      color: #ffa9a9;
    }
  }
</style>
