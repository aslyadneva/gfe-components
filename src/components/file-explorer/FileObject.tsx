import { useState } from "react";
import FileList from "./FileList";
import type { FileData } from "./FileExplorer";
import styles from "./FileExplorer.module.css";

export const FileObject = ({
  file,
  level,
}: Readonly<{ file: FileData; level: number }>) => {
  const [expanded, setExpanded] = useState(false);
  const { children: fileChildren, name } = file;

  // If the children field is present, the item is a directory.
  const isDirectory = Boolean(fileChildren);

  const classStylesButton = `${styles["file-item-button"]} ${
    isDirectory ? styles["file-item-button--directory"] : ""
  }`;

  return (
    <li className={styles["file-item"]}>
      <button
        className={classStylesButton}
        onClick={() => {
          if (!isDirectory) return;
          setExpanded(!expanded);
        }}
      >
        <span>{name}</span>
        {isDirectory && <>[{expanded ? "-" : "+"}]</>}
      </button>
      {fileChildren && fileChildren.length > 0 && expanded && (
        <FileList fileList={fileChildren} level={level + 1} />
      )}
    </li>
  );
};
