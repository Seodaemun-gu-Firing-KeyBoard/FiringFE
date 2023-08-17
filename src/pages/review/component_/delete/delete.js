import React, {Component} from "react";
import './delete.scss';
import axios from 'axios';

class Delete extends Component{
    // deleteNotes = async () => {
    //     axios
    //       .delete( 
    //         "http://localhost:3005/notes"
    //         // {data: {
    //         //     "title": this.props.title,
    //         //     "text": this.props.text,
    //         //     "id": this.props.id,
    //         //     "user_id": this.props.user_id,
    //         //     "loc_id": this.props.loc_id
    //         // }}
    //         ) 
    //       .catch(e => {  // API 호출이 실패한 경우
    //         console.error(e);  // 에러표시
    //       });
    //   };
    execute = () => {
        this.props.action(this.props.number);
        console.log(this.props)
        console.log(this.props.id)
        console.log(this.props.title);

        this.deleteBoard();
        this.props.close();
    };
    deleteBoard = async () => {
        if (window.confirm('게시글을 삭제하시겠습니까?')) {
          await axios.delete(` http://localhost:3005/notes/${this.props.id}`).then((res) => {
            alert('삭제되었습니다.');
          });
        }
      };
    render = () =>(
        <>
            <div id="memo-what-for">
                <span>메모 삭제</span>
            </div>
            <div>메모를 삭제 하시겠습니까?({this.props.title})</div>
            <div id="memo-button">
                <button onClick={this.execute}>삭제하기</button>
            </div>
        </>
    );
}

export default Delete;