<template>
  <div>

  </div>
</template>
<script>
import { getLyric } from '@/api/song'
export default {
  created() {
    getLyric('003OUlho2HcRHC')
  }
}
</script>
