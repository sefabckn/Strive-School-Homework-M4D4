import { ListGroup } from "react-bootstrap"
const CommentList = ({comments})=>{

    <>
        <ListGroup>
            <ListGroup.Item>{comments.comment}</ListGroup.Item>
        </ListGroup>
    
    
    
    </>
}


export default CommentList