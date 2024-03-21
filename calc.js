var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
          btntext= e.target.innerText;
           
            
            if(btntext=='x')
            {
                btntext='*';
            }

            if(btntext=='÷')
            {
                btntext='/';
            }
            screen.value+=btntext;
        });
    }

    function sin()
    {
        screen.value=Math.sin(screen.value);
    }

    function cos()
    {
        screen.value=Math.cos(screen.value);
    }

    function tan()
    {
        screen.value=Math.tan(screen.value);
    }

    function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

    function log()
    {
        screen.value=Math.log(screen.value,2);
    }

    function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }

    function pi()
    {
        screen.value=3.14159265359;
    }
    
    function e()
    {
        screen.value=2.718281882846;
    }

    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
         f=f*i;   
        }
        
        i=i-i;

        screen.value=f;
    }

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
