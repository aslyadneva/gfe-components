import FileList from "./FileList";

export type FileData = Readonly<{
  id: number;
  name: string;
  children?: ReadonlyArray<FileData>;
}>;

export const FileExplorer = ({ data }: { data: ReadonlyArray<FileData> }) => {
  return (
    <div>
      <p>File Explorer</p>
      <FileList fileList={data} level={1} />
    </div>
  );
};

/*
 FileExplorer > FileList level 1
                > FileObject level 1
                > FileObject level 1
                > FileObject level 1
                  > FileList level 2
                    > FileObject level 2
                    > FileObject level 2
                > FileObject level 1
                  > FileList level 2
                    > FileObject level 2
                    > FileObject level 2
*/
