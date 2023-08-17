import React, {Component} from 'react';
import './note-list.scss';
import Note from './note/note';

//review.js로 부터 받아온 예약 페이지의 loc_id(장소)에 따른 리뷰 작성 내용
class NoteList extends Component{
    static defaultProps = {
        notes : []
    };
 
    render(){
        const notelistReturn = notes => {
            return notes.map((note,index) => {
                if(note.loc_id==this.props.loc_id)
                    return (
                        <Note 
                            key={index} 
                            noteNum={index} 
                            title={note.title} 
                            text={note.text} 
                            date={note.date} 
                            edited={note.edited}
                            changeNote={this.props.changeNote}
                            deleteNote={this.props.deleteNote}
                            id={note.id}
                        />
                    );
            });
        };
        

        return(
            <div id="note-list-container">
                <div id="note-list">{notelistReturn(this.props.notes)}</div>
            </div>
        );
    }
}

export default NoteList;