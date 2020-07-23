const yourUrlGet = '/test.html'

const cards = new Vue ({
    el:"#id",
    data:{  
        items: []
    },
    mounted() {
        axios.get("/cards.json").then(response => {
        this.items = response.data 
        })
    },
    
})

$('#load').on('click', function() { 
    const btn = $(this)
    const spin = btn.find('div') 
    $.ajax({
        url: yourUrlGet,
        type: "GET",
        // data: "data",
        // datatype: "datatype" 
        beforeSend: function(){
            btn.attr('disabled', true)
            spin.css('display','inline-block')
        },
        success: function (response) {
            setTimeout(() => {
                btn.attr('disabled', false)
                spin.css('display','none')
                $('.load-div').before(response)
            }, 1000)
        },
        error: function(){
            alert('err')
        }
    })
})
