function valider() {
   var nom=document.getElementById("last-name").value
   var prenom=document.getElementById("first-name").value
   var commentaire=document.getElementById("message").value
   if(nom != "" && prenom != "" && commentaire != "" ) {
      document.getElementById("error-message").style.display ="none";      
      const encadrement=document.createElement("div")
      encadrement.classList.add("flex","space-x-4","text-sm","text-gray-500")
      const sousEncadrement=document.createElement("div")
      sousEncadrement.classList.add("flex-1","py-10")
      const nomPrenom=document.createElement("h3")
      nomPrenom.classList.add("font-medium","text-gray-900")
      const message=document.createElement("div")
      message.classList.add("prose","prose-sm","mt-4","max-w-none","text-gray-500")
      const textNomPrenom=document.createTextNode(nom+ " " +prenom)
      const textCommentaire=document.createTextNode(commentaire)
      const commentList=document.getElementById("comment-list")
      commentList.appendChild(encadrement)
      encadrement.appendChild(sousEncadrement)
      sousEncadrement.appendChild(nomPrenom)
      sousEncadrement.appendChild(message)
      nomPrenom.appendChild(textNomPrenom)
      message.appendChild(textCommentaire)
      document.getElementById("last-name").value="";
      document.getElementById("first-name").value="";
      document.getElementById("message").value="";
  
   }
   else{
      document.getElementById("error-message").style.display ="block";
   }

  }
 
