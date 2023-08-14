import React,{Component} from "react";
import styled from 'styled-components';
import NoteList from "./component_/note-list/note-list";
import ModalPage from './component_/modal/modal';
//import ModalContainer from "./component_/modal/modalcontainer";
import NoteRaw from './component_/note-raw/note-raw';
const Container = styled.div`
  height: 820px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AppDiv = styled.div`
    height: 100%;
    width: 100%;
    border: 2px #808080 solid;
    border-radius: 30px;
    padding: 60px;
`;
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  div > button {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem;
    transition: 0.25s;
    color: #7fccde;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #7fccde;
      color: white;
    }
  }
`;
class Review extends Component{
    state = {
        notes: [
          // {date:new Date(),text:'1',title:'dd',edited:false},
          // {date:new Date(),text:'2',title:'vv',edited:false}
        ],
        modalToogle : false
      };

      toogleModal = () => {
        this.setState({
          modalToogle: !this.state.modalToogle
          // 버튼 누를 때마다 false/true 반전!
        });
      };
      createNote = (title,text) =>{
        this.setState({
          notes : [...this.state.notes, {title, text, date: new Date(), edited: false}]
        });
      };
      changeNote = (title,text,number) =>{
        this.setState({
          notes : this.state.notes.map((note,index)=>(index===number ? {...note,title,text,edited:true} : note))
        });
      };
      deleteNote = number =>{
        this.setState({
          notes : this.state.notes.filter((note,index)=>(index===number ? false : true))
        });
      };

    render(){
        return(
            <Container>
                {this.state.modalToogle && (
                    <ModalPage>
                          <NoteRaw action={this.createNote} close={this.toogleModal} />
                    </ModalPage>
                )}
                <AppDiv id="app">
                    <SearchBar>
                        <div>
                            <h1>[후기]</h1>
                        </div>
                        <div>
                            <button onClick={this.toogleModal}>후기 작성</button>
                            <div id="search-bar" />
                        </div>
                    </SearchBar>
                    <NoteList 
                      notes={this.state.notes}
                      changeNote={this.changeNote} 
                      deleteNote={this.deleteNote} 
                    />
                </AppDiv>
            </Container>
        )
    }
}

export default Review;