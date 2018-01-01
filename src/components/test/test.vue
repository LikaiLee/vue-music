<template>
  <div>

  </div>
</template>
<script>
/* eslint-disable */

// import { getLyric } from '@/api/song'
// import axios from 'axios'
import { jsonpRequest } from '@/common/js/jsonpRequest'
export default {
  created() {
    let params = {
      name: "lilikai",
      site: "www.lilikai.tk"
    };
    jsonpRequest(
      "http://127.0.0.1:3000/jsonp",
      params
    ).then((res) => {
      console.log(res)
      const { err, result } = res
      if (err) {
        console.log(err);
        this.serverData.err = JSON.stringify(err);
      } else {
        this.serverData = result;
      }
    });

  }
}
</script>
