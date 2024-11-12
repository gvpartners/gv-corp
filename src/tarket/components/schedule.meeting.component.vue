<script>
let types = {
  text: 1,
  number: 2,
  password: 3,
  email: 4,
}
export default {
  name: 'ScheduleMeeting',
  props: {
    delay: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
      types: types,
      formData: {
        name: {
          texto: "Nombre Completo",
          type: types.text,
          value: "",
        },
        age: {
          texto: "Edad",
          type: types.number,
          value: null,
        },
        phone: {
          texto: "Telefono",
          type: types.number,
          value: null,
        }
      }
    }
  }
}
</script>

<template>
  <div class="flex-row schedule-meeting center gap-4 margin-auto">
    <div class="text">
      <h1 v-motion-slide-visible-once-top :duration="500" :delay="delay">Agenda una reunión</h1>
      <div class="margin-2 flex-col gap-075" >
        <div v-for="(field, index) in formData">
          <div v-if="field.type === types.text">
            <FloatLabel v-motion-slide-visible-once-bottom :duration="500" :delay="delay + 100">
              <InputText id="nombre" v-model="field.value"></InputText>
              <label for="nombre" style="transform: translate(5px, 0)">{{field.texto}}</label>
            </FloatLabel>
          </div>
          <div v-if="field.type === types.number">
            <FloatLabel v-motion-slide-visible-once-bottom :duration="500" :delay="delay + 100">
              <InputNumber id="edad" v-model="field.value"></InputNumber>
              <label for="edad" style="transform: translate(5px, 0)">{{field.texto}}</label>
            </FloatLabel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>