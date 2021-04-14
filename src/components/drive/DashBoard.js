import React from "react"
import { Container } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import Folder from "./Folder"
import Files from "./Files"
import NavbarComponent from "./Navbar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"

export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

  return (
    <>
      <NavbarComponent />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          
        </div>

        {childFolders.length > 0 && (
          <div>
            <h5>Folders</h5>
            <div className="d-flex flex-wrap border-0 mb-2 mt-2">
              {childFolders.map(childFolder => (
                <div
                  key={childFolder.id}
                  style={{ minWidth: "200px", maxHeight: "54px" }}
                  className="d-flex flex-row col-12 col-sm-1 bg-fb rounded pl-0 pr-0 ml-sm-2 mb-2 bg-button"
                >
                  <Folder folder={childFolder} />
                </div>
              ))}
            </div>
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0}
        {childFiles.length > 0 && (
          <div> <h5>Files</h5>
            <div className="d-flex flex-wrap">
              {childFiles.map(childFile => (
                <div
                  key={childFile.id}
                  className="p-1 col-12 col-sm-4"
                >
                  <Files file={childFile} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  )
}