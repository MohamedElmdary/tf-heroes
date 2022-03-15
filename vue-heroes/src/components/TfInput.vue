<template>
  <div class="input">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "TfInput",
})
export default class TfInput extends Vue {
  @Prop({ required: true }) public label!: string;
  @Prop({ required: true }) public value!: string;
  @Prop({ default: false }) public disabled!: boolean;
}
</script>
