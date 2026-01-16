import type { FileData } from "./FileExplorer";
import { FileObject } from "./FileObject";
import styles from "./FileExplorer.module.css";

const FileList = ({
  fileList,
  level,
}: Readonly<{
  fileList: ReadonlyArray<FileData>;
  level: number;
}>) => {
  // only get items that have a children properety
  const directories = fileList.filter((item) => item.children);

  // only get items that don't have a children property
  const nonDirectories = fileList.filter((item) => !item.children);

  const items = [...directories, ...nonDirectories];

  return (
    <ul className={styles["file-list"]}>
      {items.map((item) => (
        <FileObject key={item.id} file={item} level={level} />
      ))}
    </ul>
  );
};

export default FileList;
