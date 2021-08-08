let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (values of buttons) {
    values.addEventListener('click', (e) => {
       let buttonText = e.target.innerText;     
            if (buttonText == 'X') {
                buttonText = '*';
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else if (buttonText == 'AC') {
                screenValue = "";
                screen.value = screenValue;
            }
            else if (buttonText ==='BACK') {
                var len =screenValue.length;
                screenValue=screenValue.slice(0,len-1);
                screen.value = screenValue;
            }
            else if (buttonText == '=') {         
               result = eval(screenValue);         
                if(result==Infinity)
                {
                    screen.value="Error";
                }
                
                
               else if(result!=null)       
                {
                   
if(buttonText!='=')
{
    
        screenValue=screenValue+buttonText;
    screen.value=screenValue;
             
}

else{
screen.value=result;
}
                }
            }
            
            else {
                screenValue =screenValue+ buttonText;
                screen.value = screenValue;
            }
    })
}