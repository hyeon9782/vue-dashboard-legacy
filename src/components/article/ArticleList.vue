<template>
  <div class="article-list">
    <ArticleItem v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ArticleItem from './ArticleItem.vue'

interface Article {
  id: number
  title: string
  content: string
}
export default defineComponent({
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    articles: {
      type: Array as PropType<Article>,
      required: true
    }
  }
})
</script>

<style>
.article-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
