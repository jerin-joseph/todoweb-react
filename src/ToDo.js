import React,{Component} from 'react';
import './ToDo.css';


class ToDo extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[],
            currText:""
        }
        
    }

    handleAdd = ()=>{
        //alert("clicked")
        //alert(this.state.currText.trim().length)
        if(this.state.currText.trim().length==0){
            alert("Input cannot be empty. Try again.")
            return;
        }
        let curritems=this.state.items;
        curritems.push(this.state.currText);
        this.setState({items:curritems});
        console.log(this.state.items);
        this.setState({currText:""})
        document.getElementById("txtinput").value=""
        
    }

    handleText = (e)=>{
        //console.log(e.target.value);
        this.setState({currText:e.target.value});
    }

    handleDelete = (k)=>{
        if(!window.confirm("Are you Sure?")){
            return;
        }
        let curritems=this.state.items;
        curritems.splice(k,1);
        this.setState({items:curritems})
    }

    render(){
        

        return(
            <div>
                <input type="text" id="txtinput" placeholder="WhatToDo" onChange={this.handleText}></input> <button onClick={this.handleAdd}>Add</button>
            
                <table>
                    <tbody>
                    { this.state.items.map((item,k)=>{
                        return( 
                            <tr>
                                <td>{k+1}. {item} </td>
                                <td> <button onClick={()=>{this.handleDelete(k)}}>Delete</button> </td> 
                            </tr>
                        
                        )
                    })}
                    </tbody>
                </table>
                


            </div>

        );
    }
}

export default ToDo;