import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Group className="mb-12" as={Row}>
                <div className='col-sm-10'>
                    <Form.Control
                        type='text'
                        name='q'
                        onChange={(e) => setKeyword(e.target.value)}
                        
                    />
                </div>
                <span className='col-sm-2 style'>
                    <Button
                        type='submit'
                        variant='outline-success'
                        className='p-2 fas fa-search'
                        
                    >
                        
                    </Button>
                </span>


            </Form.Group>

        </Form>
    )
}

export default SearchBox
