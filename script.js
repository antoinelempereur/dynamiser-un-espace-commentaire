function valider() {
   var nom=document.getElementById("last-name").value
   var prenom=document.getElementById("first-name").value
   var commentaire=document.getElementById("message").value
   if(nom != "" && prenom != "" && commentaire != "" ) {
      document.getElementById("error-message").style.display ="none";
      document.getElementById("comment-list").innerHTML=`<div class="flex space-x-4 text-sm text-gray-500">
      <div class="flex-1 py-10 ">
        <h3 class="font-medium text-gray-900">`+nom+" "+prenom+`</h3>
        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
          <p>`+commentaire+`</p>
        </div>
      </div>
    </div>`;
    document.getElementById("last-name").value="";
    document.getElementById("first-name").value="";
    document.getElementById("message").value="";
   }
   else{
      document.getElementById("error-message").style.display ="block";
   }
   
  }
 
 