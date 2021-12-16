
import { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component{
      
    state={
            comment:[]
        }
     
        componentDidMount = async()=> {
            const url = 'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin
            try {
                let response = await fetch(url, {
                    headers:{
                        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTU0M2FhY2FhMjAwMTU1MmExOWYiLCJpYXQiOjE2Mzk2NzA5NTgsImV4cCI6MTY0MDg4MDU1OH0.2arpVcs1d-tkqAMe4dcItH6V77qYy3AqdowbSSb_6_I",
                    }
                })
                if(response.ok){
                    let commentData = await response.json()
                    this.setState({comment:commentData,})
                }
            } catch (error) {
                <Alert>{error}</Alert>
            }
        }

        render(){
            return(
                <> <Container>
                        
                        <Row>
                            <CommentList commentDisplay = {this.state.comment}/>
                            <AddComment asin={this.props.asin}/>
                        </Row>
                    </Container>
                </>
            )
        }
}
export default CommentArea