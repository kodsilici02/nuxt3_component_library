<template>
  <div v-html="code"></div>
</template>

<script setup>
import { getHighlighter } from 'shiki';

const fetchCode = async () => {
  const response = await fetch('/assets/raws/example.txt');
  return response.text();
};

const highlightCode = async () => {
  const raw = await fetchCode();

  const highlighter = await getHighlighter({
    themes: ['material-theme-darker'],
    langs: ['vue'] // Change this according to the language of your code
  });

  return highlighter.codeToHtml(raw, {
    lang: 'vue', // Change this according to the language of your code
    theme: 'material-theme-darker'
  });
};

const code = await highlightCode();
</script>

<style lang="scss" scoped></style>
