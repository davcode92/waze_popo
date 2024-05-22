import React from 'react'
import TaskCard from './TaskCard';

export const TaskList = ({tasks,comp,del}) => {                          // ici j'ai utilisé comme props "tasks","comp" pour transmettre respectivement les données de la variable tasks et celles de la fonction handleComplete(éléments contenus dans le composant parent App.js) à TaskList.jsx(composant enfant de App.js)
    console.log(tasks);                                              //console.log(tasks) juste pour vérifier si les données ont bien été transmise à TaskList.jsx
  return (
    <div>
        {tasks.map((todo =>                                          //ici la carte sera dupliquée autant de fois qu'il y'a des éléments dans la variable tasks.
        <TaskCard key={todo.id} todo={todo} comp={comp} del={del}/>              // key est ajouté pour éviter les alertes d'erreurs du navigateur.
                                                                      // j'ai utilisé "todo","comp" comme props pour transmettre respectivement les données de la variable tasks et celles de la fonction handleComplete à TaskCard.jsx composant responsable du template de la carte dupliquée(map) dans le composant TaskList.jsx.
    ))}
    </div>
  )
}
