<template>
  <div>
    <div id="editor" ref="editor"></div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/zenburn.css'
import CodeMirror from 'codemirror'
export default {
  data () {
    return {
      article: ''
    }
  },
  mounted () {
    const editor = CodeMirror(this.$refs.editor, {
      theme: 'zenburn'
    })
    console.log(editor)
  }
}
</script>

<style>
#editor {
  width: 100%;
  height: 100vh;
}
</style>
