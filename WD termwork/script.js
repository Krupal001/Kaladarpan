let i=1,j=1;
$("#search-btn").click((e)=>{
    if(i==1)
    {
        $(".search-form").css("right","2rem");
        i++;
    }
    else{
        $(".search-form").css("right","-110%");
        i--;
    }
    });

    $(".brands").mouseenter(function () { 
        if(i==1){
            $(".dropdown_menu").css("display","block");
            i++;
            }
            else{
                $(".dropdown_menu").css("display","none");
                i--;
            }
    });

    $(".categories").mouseenter(function () { 
        if(j==1){
            $(".category_menu").css("display","block");
            j++;
            }
            else{
                $(".category_menu").css("display","none");
                j--;
            }
    });

    