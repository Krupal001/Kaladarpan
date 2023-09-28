
function val()
{
    let uname = document.getElementById("username").value; 
    let password = document. getElementById("password").value; 
    
    if(uname=='admin' && password == 'admin')
     {
        window.location.assign("home.html");
        
     }
    else 
    {
        alert("username and password not matched");
    }
    

}
