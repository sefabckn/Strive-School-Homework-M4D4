import Form from 'react-bootstrap/Form'
import { Component } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import CommentList from './CommentList'
import AddComment from './AddComment'
class CommentArea extends Component{
      
    
    state={
            comment:[]
        }
     
        componentDidMount = async()=> {
            const url = 'https://striveschool-api.herokuapp.com/api/comments/'
            try {
                let response = await fetch(url, {
                    method:'POST',
                    Headers:{
                        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTU0M2FhY2FhMjAwMTU1MmExOWYiLCJpYXQiOjE2Mzk2NjAwNTAsImV4cCI6MTY0MDg2OTY1MH0.kzzMEzPXMFjMn5qalpWf4YmQi3NqsCbPAkKnGcOkBZU",
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
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Add Comment</Form.Label>
                                        <Form.Control 
                                        as="textarea" 
                                        rows={3}
                                        type='text'
                                        value={this.state.comment}
                                        onChange={e => this.setState({comment: e.target.value})}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Rate</Form.Label>
                                        <Form.Control as="select"
                                        value={this.state.comment}
                                        onChange={e => this.setState({comment:e.target.value })}
                                        >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Button variant='success' type='submit'>Send Comment</Button>
                            </Form>
                        </Row>
                        <Row>
                            <CommentList comments={this.state.comment}/>
                            <AddComment />
                        </Row>
                    </Container>
                </>
            )
        }
}
export default CommentArea