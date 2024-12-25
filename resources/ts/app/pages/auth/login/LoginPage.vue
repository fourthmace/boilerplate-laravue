<template>
  <VaLayout class="h-screen bg-[var(--va-background-secondary)]">
    <template #left>
      <a
        class="bg-primary h-full flex items-center justify-center"
        style="width: 35vw"
        aria-label="Visit homepage"
      >
        <VuesticLogo :height="28" start="#FFF" />
      </a>
    </template>
    <template #content>
      <main class="h-full flex items-center justify-center mx-auto max-w-[420px]">
        <VaForm ref="form">
          <h1 class="font-semibold text-4xl mb-4">Log in</h1>
          <p class="text-base mb-4 leading-5">
            New to Vuestic?
            <a class="font-semibold text-primary">Sign up</a>
          </p>
          <VaInput
            class="mb-4"
            label="Email"
            type="email"
          />
          <VaValue :default-value="false">
            <VaInput
              class="mb-4"
              label="Password"
            >
              <template #appendInner>
                <VaIcon
                  class="cursor-pointer"
                  color="secondary"
                />
              </template>
            </VaInput>
          </VaValue>

          <div class="auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <VaCheckbox class="mb-2 sm:mb-0" label="Keep me signed in on this device" />
            <a class="mt-2 sm:mt-0 sm:ml-1 font-semibold text-primary">
              Forgot password?
            </a>
          </div>

          <div class="flex justify-center mt-4">
            <VaButton class="w-full"> Login</VaButton>
          </div>
        </VaForm>
      </main>
    </template>
  </VaLayout>
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: 0,
    };
  },
};
</script>
