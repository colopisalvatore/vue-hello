const { createApp } = Vue;

createApp({
    data() {
        return {
            title:"Hello World",
            img:"./assets/logo.png"
        }
    }
}).mount('#app')