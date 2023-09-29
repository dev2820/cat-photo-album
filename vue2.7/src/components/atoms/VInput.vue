<script setup>
  defineProps(['value']);
  const emit = defineEmits(['input']);

  const onInput = (evt) => {
    emit('input', evt.target.value);
  };

  const omit = (obj, excepts) => {
    return Object.keys(obj)
      .filter((key) => !excepts.includes(key))
      .reduce((acc, key) => {
        return {
          ...acc,
          [key]: obj[key]
        };
      }, {});
  };
</script>

<template>
  <input
    v-bind="omit($attrs, ['value'])"
    v-on="omit($listeners, ['input'])"
    :value="value"
    @input="onInput"
  />
</template>

<style scoped>
  input {
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    border: none;
    color: var(--color-text);
  }
</style>
