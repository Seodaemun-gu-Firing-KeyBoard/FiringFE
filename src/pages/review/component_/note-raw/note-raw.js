import React  from "react";
import './note-raw.scss';
import { useState, useEffect } from "react";

function NoteRaw (props) {

    const [ state, setState ] = useState(
        {
            title:'',
            text:'',
            subject:'후기작성',
            noteNum: -1,
            action: () => console.log('Action이 존재하지 않습니다.'),
            close: () => console.log('Close가 존재하지 않습니다.')
        }
    );
    const { title, text } = state;
    
    //수정할 때, 이전 내용 기억하는 거 구현 (바뀐 내용은 onChange에서 구현함)
    useEffect(() => { // useEffect 적용!
        setState({
            ...state, // 이런 형태를 Spread Operator 라고 합니다.
            title: props.title,
            text: props.text,
        })
        console.log('렌더링이 완료되었습니다!');
        console.log({
          title,
          text,
        });
      }, []);
    const onChange = e =>{
        const {value,name} = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const execute = () => {
        props.action(state.title, state.text, props.noteNum);
        
        props.close();
    };

    return (
        <>
            <div id="note-what-for">
                <span>{props.subject}</span>
                <span onClick={props.close}>나가기</span>
            </div>
            <div id="note-from">
                <input
                    id="note-title"
                    name="title"
                    type="text"
                    placeholder="제목을 입력하세요."
                    value={title}
                    onChange={onChange}
                    className="radius"
                />
                <br />
                <textarea
                    id="note-text"
                    name="text"
                    placeholder="텍스트 입력하세요."
                    value={text}
                    onChange={onChange}
                    className="radius"
                />
            </div>
            <div id="add-or-change-note-button">
                <button onClick={execute}>작성하기</button>
            </div>
        </>
    )

}

export default NoteRaw;