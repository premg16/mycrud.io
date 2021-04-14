import React, { useState } from "react"
import { Button, Modal, Form, ButtonGroup, Accordion } from "react-bootstrap";
import { FcExpand, FcFullTrash } from "react-icons/fc";
import { Link } from "react-router-dom";
import { database } from "../../firebase";

export default function Folder({ folder }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    database.folders.doc(`${folder.id}`).update({
      name: name,
      updatedAt: database.getCurrentTimestamp(),
    })
    setName("")
    closeModal()
  }

  function handleDelete() {
    database.folders.doc(`${folder.id}`).delete()
    //   database.folders.where('parentId', '==', folder.id).get().then((querySnapshot) => {
    //     querySnapshot.docs.forEach((doc) => {
    //         console.log(doc.data())
    //     })
    // })
  }
  return (
    <>
      <Button
        to={{
          pathname: `/folder/${folder.id}`,
          state: { folder: folder }
        }}
        as={Link}
        className="bg-transparent border-0 text-truncate w-100 text-left text-dark rounded p-2 m-1"
      >
        <img src="https://img.icons8.com/color/20/000000/folder.png" alt="folder" className="mr-2" />
        {folder.name}
      </Button>
        <Button onClick={openModal} className="d-none d-sm-block shadow-sm m-1  bg-rename border-0"><img src="https://img.icons8.com/color/20/000000/rename.png" alt="rename" /></Button>
        <Modal show={open} onHide={closeModal}>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group>
                <Form.Label>ReName Folder</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
            </Button>
              <Button variant="success" type="submit">
                Update Folder
            </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        <Button onClick={handleDelete} className="d-none d-sm-block shadow-sm m-1  mr-2 bg-trash border-0" alt="Delete"><FcFullTrash /></Button>
      <Accordion defaultActiveKey="1" className="d-block d-sm-none m-2 border-0 shadow-sm p-0 bg-transparent rounded" style={{ maxWidth: "42px" }}>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <FcExpand />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <ButtonGroup className="d-flex flex-wrap bg-fb shadow rounded h-100 " style={{ maxWidth: "42px", zIndex: "999" }}>
            <Button onClick={openModal} className="shadow-sm bg-rename border-0 mt-1 rounded"><img src="https://img.icons8.com/color/18/000000/rename.png" alt="rename" /></Button>
            <Modal show={open} onHide={closeModal}>
              <Form onSubmit={handleSubmit}>
                <Modal.Body>
                  <Form.Group>
                    <Form.Label>Rename Folder</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={closeModal}>
                    Close
            </Button>
                  <Button variant="success" type="submit">
                    Update Folder
            </Button>
                </Modal.Footer>
              </Form>
            </Modal>
            <Button onClick={handleDelete} className="shadow-sm bg-trash border-0 rounded mt-1 " alt="Delete"><FcFullTrash /></Button>
          </ButtonGroup>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
}
