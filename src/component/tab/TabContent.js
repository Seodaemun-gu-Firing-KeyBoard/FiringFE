import styled from 'styled-components';
import Reserve from '../../pages/reserve/reserve';
import Review from '../../pages/review/review';

let TabContentTitle=styled.div`
    font-size: 30px;
    font-weight : bold;
    background: whilte;
    margin-top: 40px
`

function TabContent(props){
    if(props.clickedTab===0){
        return(
            <TabContentTitle>
                <Reserve locmethod={props.locmethod}/>
            </TabContentTitle>)
    }else if(props.clickedTab===1){
        return(
            <TabContentTitle>
                <Review/>
            </TabContentTitle>)
    }
}  
export default TabContent;