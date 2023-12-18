import Vanta from '~/components/Vanta.vue';
export default Vanta;
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('v-vanta', Vanta);
}