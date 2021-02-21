<template>
  <header>
    <nav class="navigation">
      <div>
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div class="navigation__dropdown">
        <select class="browser-default language">
          <option value="EN">EN</option>
          <option value="PL">PL</option>
        </select>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navigation'
};
</script>

<style scoped>
nav {
    width:100%;
    height:4rem;
    background: var(--grey);
}
.navigation {
  display: flex;
  justify-content: space-between;
}
.navigation__dropdown {
  display: flex;
  align-items: center;
}

.language {
  display: block;
  background-color: transparent;
  border: none;
}
</style>
