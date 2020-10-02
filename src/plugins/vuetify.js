import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#247BA0",
                secondary: "#FFE066",
                accent: "#70C1B3",
                error: "#F25F5C",
            },
        },
    },
});
