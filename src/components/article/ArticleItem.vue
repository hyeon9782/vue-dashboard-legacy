<template>
  <article class="article-item">
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface Article {
  id: number
  title: string
  content: string
}

export default defineComponent({
  name: 'ArticleItem',
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true
    }
  }
})
</script>

<style>
.article-item {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}
</style>
