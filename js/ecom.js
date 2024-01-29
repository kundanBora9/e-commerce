$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

i=0
        arr=new Array("black","green","orange","yellow","blue","red")
        function graphic()
        {
            d = new Date()
            Hours=d.getHours();
            Min=d.getMinutes();
            Sec=d.getSeconds();
            ttime= Hours + ":"+ Min + ":"+Sec;
            {
                document.getElementById('hello').innerHTML=ttime;
                document.getElementById('hello').style.color=arr[i];
                i++;
                if(i==5)
                {
                    i=0
                }
            }
        }


    



