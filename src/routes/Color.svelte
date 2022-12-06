<script>
    export let name;
    export let color;

    if (!color) {
        color = name.toLowerCase();
    }

    const style = `background-color: ${color}`;
</script>

{#if typeof name !== 'undefined' && typeof color !== 'undefined'}
<span class="color">
    <span class="color-box" aria-hidden="true" {style}></span>
    <span class="color-name"><slot>{name}</slot></span>
</span>
{:else}
<span>some rando color</span>
{/if}

<style>
    .color {
        font-family: monospace;
        padding: 2px 4px;
        border-radius: var(--border-radius);
    }
    .color:hover {
        background: var(--black-0);
        color: var(--white)
    }
    .color:hover > .color-box {
        border-color: var(--white)
    }
    .color-box {
        position: relative;
        top: 1px;
        display: inline-block;
        border-radius: var(--border-radius);
        width: .85em;
        height: .85em;
        border: 1px solid var(--gray-50);
    }
    .color-name {
        margin-left: -3px;
    }
</style>