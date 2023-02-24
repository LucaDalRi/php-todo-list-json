const { createApp } = Vue

createApp({
    data() {
        return {
            urlApi: './api.php',
            urlSaver: './todoSaver.php',
            toDoArr: [],
            newTodo: {
                task: '',
                done: false,
            }
        }
    },

    methods: {
        addTodo() {
            axios
                .post(this.urlSaver, {
                    toDoArr: this.newTodo
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(response);
                    console.log('newtodo', this.newTodo);
                    this.toDoArr.push({task: this.newTodo.task, done: this.newTodo.done});
                })
        }

    },

    created() {
        axios
            .get(this.urlApi)
            .then((response) => {
                this.toDoArr = response.data
            });


    }

}).mount('#app')
