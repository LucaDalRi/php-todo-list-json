const { createApp } = Vue

createApp({
    data() {
        return {
            urlApi: './api.php',
            toDoArr: [],
        }
    },

    methods: {



    },

    created() {
        axios
            .get(this.urlApi)
            .then((response) => {
                console.log(response.data),
                this.toDoArr = response.data,
                console.log(this.toDoArr)
            });


    }

}).mount('#app')
