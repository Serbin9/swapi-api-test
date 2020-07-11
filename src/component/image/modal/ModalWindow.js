import React, { Component } from 'react'

class ModalWindow extends Component {
    state{
        
    }
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
    }
    handleKeyDown=({key}=>{
        if(key==="Escape"){
            this.propps.onClose()
        }
    })
    componentWillMount() {
        window.removeEventListener("keydown", this.handleKeyDown);
      }
    closeByClick=({target, currentTarget})=>{
        if(target===currentTarget){
            this.props.onClose()
        }
    }
    
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ModalWindow;