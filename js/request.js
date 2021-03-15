document.getElementById('flightNum').addEventListener('keyup',function(e){
    if(e.keyCode==13){
        
        $('#onsubmit').click()
        }
        else if(e.keyCode==27){
            var value = confirm('do you want to exit?')

            console.log(value);
            if(value ==true){
                window.open('https://i.ytimg.com/vi/82P9_HUnGIg/maxresdefault.jpg')
            }
            else if(value==false){alert('kdot')}
            
        }
    })
document.getElementById('ppNum').addEventListener('keyup',function(e){
        if(e.keyCode==13){
            
            $('#onsubmit').click()
            }else if(e.keyCode==27){
            
            var value = confirm('do you want to exit?')
         
            console.log(value)
            if (value == true){
                window.open('https://i.ytimg.com/vi/82P9_HUnGIg/maxresdefault.jpg')
            }
            else if (value == false){alert('kdot')}
            }
            
        })

document.getElementById('fullName').addEventListener('keyup',function(e){
            if(e.keyCode==13){
                
                $('#onsubmit').click()
                }
                else if(e.keyCode==27){
                    var value = confirm('do you want to exit?')
                    console.log(value)
            if (value == true){
                window.open('https://i.ytimg.com/vi/82P9_HUnGIg/maxresdefault.jpg')
            }
            else if (value == false){alert('kdot')}
                }
            })

//oncancel
$('#oncancel').click(function(){
        var value = confirm('are you sure you want to cancel?')
        if (value == true){
            window.open('https://i.ytimg.com/vi/82P9_HUnGIg/maxresdefault.jpg')
        }
        else if (value == false){alert('kdot')}
                
})


var enter = document.getElementById('notes');
    enter.addEventListener('keyup', function(e){
        if(e.keyCode==13){
            $('#onsubmit').click()
        }
        else if(e.keyCode==27){
            var value = confirm('do you want to exit?')
            console.log(value)
    if (value == true){
        window.open('https://i.ytimg.com/vi/82P9_HUnGIg/maxresdefault.jpg')
    }
    else if (value == false){alert('kdot')}
        }
    })

$('#onsubmit').click(function(){
    
var flightNum =  $('#flightNum').val();
var ppNum = $('#ppNum').val();
var fullName = $('#fullName').val();
var notes = $('#notes').val();

validate (flightNum,ppNum,fullName,notes)

})

function validate(flightNum,ppNum,fullName,notes){

        if (!flightNum||!ppNum||!fullName|| !notes){
            alert('empty fields')
        }
        else{
           promiseAll()
           alert(flightNum + ppNum+fullName+notes)
        }

}

function promiseAll(){
    Promise.all([recordAll()])
}

function recordAll(){

    return new Promise(resolve=>{
        $.ajax({
            method:'post',
            url: 'controllers/datacontrollers.php',
            data : {
            flightNum: flightNum.value,
            ppNum:  ppNum.value,
            fullName: fullName.value,
            notes: notes.value,
            trigger: 2
        },
            success: (response)=>{
                var hammer = JSON.parse(response)
                if (hammer.statuscode == 200){
                    alert('successfully added');
                    // window.location.href = 'http://localhost/bcis';
                    window.open('https://i.pinimg.com/originals/83/bd/37/83bd37fe1bb51a53b2b60b9e8a2533d5.jpg')
                    console.log(response)
                }
            }

        }
        ).then(response=>console.log(response))   
        
    })
    
}


