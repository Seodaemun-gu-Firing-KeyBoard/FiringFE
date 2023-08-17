import React,{Component} from "react";
import styled from 'styled-components';
import NoteList from "./component_/note-list/note-list";
import ModalPage from './component_/modal/modal';
import NoteRaw from './component_/note-raw/note-raw';
import axios from 'axios';


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
    border: 1px solid #7fccde;
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
        notes: [],
        modalToogle : false,
        //임의로 loc_id 설정
        loc_id : 1,
        user_id :2
    };
    //리뷰data 다 가져오고 장소에 대한 필터링은 note.js에서!
    //근데 작성하기 누르면 정보가 잘 가는데 새로고침해야 get을 다시 해옴 . 처음에 한번만 함
    loadNotes = async () => {
      axios
        .get("http://localhost:3005/notes")
        .then(({ data }) => {
          this.setState({ 
            notes: data
          });
        })
        .catch(e => {  // API 호출이 실패한 경우
          console.error(e);  // 에러표시
        });
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
    componentDidMount(){
      this.loadNotes();
    }

    render(){
      const { notes } = this.state;
      console.log(notes);
      
        return(
            <Container>
                {this.state.modalToogle && (
                    <ModalPage>
                          <NoteRaw action={this.createNote} close={this.toogleModal} 
                          loc_id={this.state.loc_id} user_id ={this.state.user_id}
                          />
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
                      notes={notes}
                      changeNote={this.changeNote} 
                      deleteNote={this.deleteNote}
                      loc_id={this.state.loc_id} 
                    />
                </AppDiv>
            </Container>
        )
    }
}

export default Review;