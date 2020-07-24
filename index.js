const pageOnload = '/cards.json'
const yourUrlGet = '/cards.json'
const yourPhone = 'x-xxx-xxx-xx-xx'

const cards = new Vue ({
    el:"#id",
    data:{  
        items: []
    },
    mounted() {
        axios.get(pageOnload).then(response => {
        this.items = response.data 
        })
    },
    methods: {
        load() {
            const btn = $('#load')
            const spin = btn.find('div') 
            btn.attr('disabled', true)
            spin.css('display','inline-block')
            setTimeout(() => {
                axios.get(yourUrlGet).then(response => {
                for(let i in response.data){
                    this.items.push(response.data[i]) 
                }
                    btn.attr('disabled', false)
                    spin.css('display','none')         
                })
            }, 1000)
        }
    }
})               

$('#call').on('click', function(){
    alert(`Phone ${yourPhone}`)
})
