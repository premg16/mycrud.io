import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div>
                <Card className="bg-card border-0 p-4 shadow">
                    <Card.Title className="text-center mb-0"><h2>Welcome to CRUD App!</h2></Card.Title>
                    <Card.Body className=" d-flex flex-wrap justify-content-center p-0">
                    </Card.Body>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup" className="text-decoration-none"><h5>Sign Up</h5></Link>
                    </div>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login" className="text-decoration-none"><h5>Log In</h5></Link>
                    </div>
                </Card>
            </div>
        </Container>
    )
}
