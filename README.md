# FW-backend-Assignment
In this project I have created a file-based data-store for performing CRD(Create, Read, Delete) operations on the student details provided in a key-value format. 
The student id which is a string is taken as the key whose size is capped at 32 chars. 
A JSON object is taken as the value whose size is capped at 16KBs. It can be dynamic and heterogeneous. 
The file is stored in the specified path or it takes a default file path on the system. 
Input for create operation : file_path, key, value, time-to-live(Integer). 
If create is invoked for a key which is in existance, then error message is thrown. 
The property 'time-to-live' specifies the time till which the file exists. The time is specified in milliseconds. Once it exceeds the time limit, the file is automatically deleted. Hence read and delete operations performed on that key throws an error message. 
If 'time-to-live' is specified as 0(zero), then it will exist forever until any delete operation is performed on it. 
Input for read operation : file_path, key. 
Input for delete operation : file_path,key. 
It is ensured that read or delete operation doesnot takes place if the specified key is absent in the datastore. If so, then appropriate error messages are thrown. 


COMMAND TO RUN CREATE OPERATION: node test create path-name key value time-to-live
COMMAND TO RUN READ OPERATION  : node test read path-name key 
COMMAND TO RUN DELETE OPERATION: node test delete path-name key

NOTE:Here 'path-name', 'key', 'value' and 'time-to-live' are custom values given at run-time
