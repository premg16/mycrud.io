import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../../hooks/useFolder";

export default function FolderBreadcrumbs({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) path = [...path, ...currentFolder.path];
  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{ className: "bg-transparent pl-0 m-0" }}
    >
      {path.map((folder, index) => (
        <Breadcrumb.Item
          key={folder.id}
          linkAs={Link}
          linkProps={{
            to: {
              pathname: folder.id ? `/folder/${folder.id}` : "/dashboard",
              state: { folder: { ...folder, path: path.slice(1, index) } },
            },
            style: {textDecoration:"none", color:"primary"}
          }}
          className="text-truncate d-inline-block text-danger"
          style={{ maxWidth: "150px" }}
        >
            <img src="https://img.icons8.com/color/20/000000/folder-tree.png" alt="folder-tree"className="mr-2 mb-1"/>
          {folder.name}
        </Breadcrumb.Item>
      ))}
      {currentFolder && (
        <Breadcrumb.Item
          className="text-truncate d-inline-block pr-2 pl-0 text-success"
          style={{ maxWidth: "200px" }}
          active
        >
          <img src="https://img.icons8.com/color/20/000000/opened-folder.png" alt="opened-folder" className="mr-2 mb-1"/>
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
