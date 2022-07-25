let btn = document.getElementById('button')
        let bulb = document.getElementById('bulb')
        btn.onclick = function onof(){
            if(btn.textContent.includes('On')){
                btn.textContent = 'Turn Off'
                bulb.src = 'bulb on.jpg'
            }else{
                btn.textContent = 'Turn On'
                bulb.src = 'bulb off image.jpg'
            }
        }