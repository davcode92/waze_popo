import React from 'react'

const TaskCard = ({todo,comp,del}) => {                                                             // j'ai utilisé "todo","comp" comme props pour transmettre respectivement les données de la variable tasks et celles de la fonction handleComplete à TaskCard.jsx
  return (
    <div>
    <h4 id={todo.isDone ? "Comp" : "Uncomp"}>{todo.action}</h4>                                 {/*ici j'utilise une condition avec le booléen en donnant 2 id "Comp"(pour que le css souligne le texte si la tache est complete(true)) et "Uncomp"(pour que le texte soit en vert si l'action est incomplete(false))*/}
    <button className='edit-btn' onClick={()=>comp(todo.id)}>{todo.isDone ? "Retour" : "Complet"}</button>                   {/*ici j'utilise une condition avec le booléen pour afficher "undo" si la tache est déjà effectuée(true) si non "complete" si la tache n'est pas encore effectuée(false),en réalité "undo et complete" ont pour role de changer le css du texte|onclick={()=>comp()} permettent de rendre le clic du boutton fonctionnel|todo.id va selectionner un id spécifique de la carte(un élément contenu dans tasks) que nous cliquerons,ensuite l'id passera dans App.js */}    
    <button className='delete-btn ' onClick={()=> del(todo.id)}>{todo.isDone}Suprimer</button>                                                                     {/*pour éffacer le texte(la tache )*/}
    </div>
  )
}

export default TaskCard 