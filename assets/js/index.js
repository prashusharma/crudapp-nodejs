


console.log("akASH CHANDRA");
$("#add-user").submit(function(event){
    alert("Data inserted successfully");
})

if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a .delete");
    $ondelete.click(function(){
        var id = $(this).attr(data-id)

        var request={
            "url": `http://localhost:3000/api/user/${data-id}`,
            "method":"Delete",
        }
        if(confirm("do you really want to delete ?")){
            $.ajax(request).done(function(response){
                alert("User deleted successfully !")
                location.reload;
            })
        }
    })
}