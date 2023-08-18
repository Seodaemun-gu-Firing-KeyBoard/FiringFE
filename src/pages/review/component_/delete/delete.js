import React, {Component} from "react";
import './delete.scss';
import axios from 'axios';

class Delete extends Component{
    execute = () => {
        this.props.action(this.props.number);
        // console.log(this.props)
        // console.log(this.props.id)
        // console.log(this.props.title);

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