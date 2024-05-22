import "./App.css";
import React, { Component } from "react";
import { TaskList } from "./componants/TaskList";
import AddTask from "./componants/AddTask";
import Footer from "./componants/Footer";

export default class App extends Component {                               //App.js est un "Functional based component(rafce)",je l'ai transformé en class based compnant(rcc) pour utiliser le "state"(seulement utiliser in class compnant(rcc))
  state = {                                                               // state: est un mot clef qui signifie que nous aurons des données dynamiques que nous pourons changer aucours du temps.
    tasks: [                                                             // tasks:variable(tableau) contenant des données qui seront transmises dans "Tasklist.jsx".
      {id: Math.random(), action: "Les Etudes", isDone: true },         //ici le booléen est "true"pour montrer que l'utilisateur a complété le module HTML.
      {id: Math.random(), action: "En Couple", isDone: true  },        //ici le booléen est "true" pour montrer que l'utilisateur a complété le module CSS.
      {id: Math.random(), action: "Les Nguembés",isDone: false },      //ici le booléen est "false" pour montrer que l'utilisateur n'a pas complété le module Hooks.
      {id: Math.random(), action: "Chômage", isDone: false},     //ici le booléen est "false" pour montrer que l'utilisateur n'a pas complété le module Redux.
    ], 
  };
  
  handleComplete = (TaskID) => {                                      //ici j'ai crée la fonction responssable de changer la valeur du state en utilisant la methode "setState" et le booléen "isDone"(true si l'utilisateur a complété le module et false si l'utilisateur n'a pas complété le module).
  this.setState( {                                                    // TaskID est le paramettre générale qui permettra à la fonction de cibler l'id spécifique de chaque module de la variable "tasks" afin de modifier son booléen "isDone".
  tasks: this.state.tasks.map((el) =>                                       // map permettra de modifier la valeur d'un élément contenu dans l'objet "state".
    el.id === TaskID ? {...el, isDone : !el.isDone} : el              // si el.id est égale à TaskID(élément spécifique contenu dans tasks sur lequel l'utilisateur va cliquer),l'action de cet élément sera rependue(...el) et une nouvelle valeur(isDone) opposée(!el.isDone) à la précédente lui sera attribuée ou bien si ce n'est pas l'élément qui a le meme id(el.id === TaskID),l'élément sera renvoyé tel qu'il est sans etre modifié. 
  ),
  })                                                     
        
  }
  handleAdd = (text) => {                                         //cette fonction permettra de modifier le tableau(variable)Tasks afin d'ajouter un nouvel objet qui n'est autre que le texte(tache)ajouté à l'input
   const newTodo = {id: Math.random(), action: text,isDone:false};
   this.setState({tasks:[...this.state.tasks,newTodo]})            //ici j'ai crée un nouveau table qui porte tjrs le nom tasks,qui va remplacer l'ancien tableau tasks pour y ajouter un nouveau objet au nom de newTodo
  };

  handlDelete = (TaskID) => {                                        //ici j'ai crée la fonction responssable de suprimer des taches contenues dans la variable tasks
    this.setState( {                                                    
    tasks: this.state.tasks.filter((el) =>                            //filter permettra de selectionner un élément différent de TaskID afin de permettre à la fonction de le suprimer.
      el.id !== TaskID                         
),
    })                                                     
          
    }
  
  
  render() {
    return <div className="App">
    <AddTask add={this.handleAdd}/>
    <TaskList tasks={this.state.tasks} comp={this.handleComplete} del={this.handlDelete}/>               {/*ici j'ai utilisé (tasks={this.state.tasks}) comme "props" pour transmettre les données de la variable tasks(élément contenu dans le composant parent App.js) à TaskList.jsx(composant enfant de App.js) et j'ai également utilisé comp={this.state.handleComplete} comme "props" pour transmettre les données de la fonction handleComplete au composant TaskList et del={this.handlDelete} pour éffacer les taches */}
    <Footer />
    </div>;
  }
}
