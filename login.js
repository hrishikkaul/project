import React from "react"
import { Container } from "react-bootstrap"
const AUTH_URL=" https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read_private%20user-library-read20%user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function login() {
    return (
        <Container>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>LOGIN WITH SPOTIFY</a>
        </Container>

    )
}