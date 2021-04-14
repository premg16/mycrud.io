import React from "react"
import { Accordion, Button, ButtonGroup, Card } from "react-bootstrap"
import { FcFullTrash, FcDownload, FcDocument, FcExpand } from "react-icons/fc";
import { storage, database } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"

export default function Files({ file }) {
    const { currentUser } = useAuth()

    function handleDelete() {
        storage.ref(`/files/${currentUser.uid}/${file.path}`)
            .delete(file)
        database.files.doc(`${file.id}`).delete()
    }

    return (
        <Card className="d-flex flex-row p-1 border-0 bg-card text-dark shadow-sm justify-content-between" style={{ maxHeight: "64px" }}>
            <Card.Body className="d-flex text-truncate text-center p-0">
                <div className="m-2 p-1"><FcDocument className="mb-1 mr-1 " />{file.name}</div>
            </Card.Body >
            <div className="d-none d-sm-block m-2 border-0 bg-transparent p-0" style={{ minWidth: "88px" }}>
                <Button onClick={handleDelete} className="btn btn-xl  shadow-sm mr-2 bg-trash border-0" alt="Delete"><FcFullTrash /></Button>
                <Button href={file.url} target="_blank" rel="noreferrer" className="btn btn-xl  shadow-sm bg-download border-0" alt="Download" download><FcDownload /></Button>
            </div>
            <Accordion defaultActiveKey="1" className="d-block d-sm-none m-2 border-0 bg-transparent rounded shadow-sm p-0" style={{ maxWidth: "42px" }}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <FcExpand />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <ButtonGroup className="d-flex flex-wrap bg-transparent shadow " style={{ maxWidth: "42px", zIndex: "1" }}>
                        <Button onClick={handleDelete} className="shadow-sm bg-trash border-0 rounded mt-1 " alt="Delete"><FcFullTrash /></Button>
                        <Button href={file.url} target="_blank" rel="noreferrer" className="shadow-sm bg-download border-0 mt-1 rounded" alt="Download" download><FcDownload /></Button>
                    </ButtonGroup>
                </Accordion.Collapse>
            </Accordion>
        </Card >
    );
}
