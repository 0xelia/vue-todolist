const tasks = [
    {
        text:'Go to the market',
        done: false
    },
    {
        text: 'Feed the Pyton',
        done: true
    },
    {
        text:'Fight the dragon',
        done: false
    },
    {
        text:'Find the ring',
        done: true
    },
    {
        text:'Walk the dog',
        done: false
    }
]

const app = new Vue({
    el: '#root',
    data: {
        tasks: tasks,
        className: 'todo',
        newTask: '',
    },
    methods: {
        checked(task){
            task.done = !task.done
            console.log(task.done)
        },
        addTask(){
            if(this.newTask.trim() !== ''){
                tasks.push({
                    text: this.newTask,
                    done: false
                })
                this.newTask = ''
            }
        },
        test(){
            console.log('press')
        }
    }
})

console.log(app.tasks)