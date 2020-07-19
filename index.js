
new Vue ({
    el:"#id",
    data:{  
        items: []
    },
    mounted() {
        axios.get("/cards.json").then(response => {
        this.items = response.data
        })
    }
})
