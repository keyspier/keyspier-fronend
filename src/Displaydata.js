import FileViewer from 'react-file-viewer';

function File() {

    const file = 'C:\Users\kelum\Desktop\Keylogger\backend\keylogger.docx'
    const type = 'docx'

    return (
        <FileViewer
            fileType={type}
            filePath={file}
         />
         
            
       
    )
   
}



export default File;
