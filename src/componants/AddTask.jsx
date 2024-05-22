import React, { Component } from 'react'

export default class AddTask extends Component {
  state = {
    text:"",                                 //cette variable ou chaine de caractère vide permettra de détecter le texte qui sera entré dans le champ input
  }

 handleSubmit = (e) =>{                          //ici c'est la fonction responsable de ne pas permettre au browser de se rafraichir lorsqu'on ajoute une tache au formulaire 
 e.preventDefault();
 this.state.text.trim() === ""                  //trim() permet de retirer l'espace dans l'input et permet de limiter le nombre de caractère à faire entrer
 ? alert("this field shouldn't be ampty")
 :this.props.add(this.state.text)                //voici comment on appel le props dans une classe base component/ici j'ai fait appel au props "add"
 }
 handleChange = (e) =>{                          //ici c'est la fonction responsable d'ajouter un changement à valeur de l'input dans le state
  this.setState({text: e.target.value});
  }
  render() {
    return (
      <div>
        <h1>WAZE POPO</h1>
        <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/bw/512px/1f914.png" alt="imoji"></img>
        <form action='' onSubmit={this.handleSubmit }>
        <input type='text' className="todo" value={this.state.text } onChange={this.handleChange }/>             {/*forcer l'input à avoir la valeur de la variable Text(chaine de caractère vide) */}
        <button className ="btn" type='submit'>Ajouter</button>   
        </form>
      </div>
    )
  }
}
