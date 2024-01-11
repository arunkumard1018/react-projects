# informational Commands
> $id  -> return  user or group id  
> $whoami  -> return current user  
> $id -u  -> return current user id  
> $id -u -n -> return user name coresponding user id

> $uname -> return os information  
> $uname -s -r  -> return os name and version ifo  
> $uname -v --> to view more detailed information  

> $df -> to show disk usage  (to monitor disk usage or to check available space)  
> $df -h ~  -> to view the all diskes mounted in your home directory  

> $ps -> Process status running process (monitor or manage running process)  
> $ps -e -> to view all running process regardless of whih user started them  
> $top -> table of process - Task Manager (to monitor System performrnce )  
> $top -n -3 -> top 3 commands  

> $echo -> use to print given input and variables  
> $echo "Hello Arun"  
> $echo $PATH -> to print path variable of system

> $date -> to print today date  
> $date "-%j day of %Y"  
> $date "+It's %A, the %j day of %Y!"


# Handling files
### Navigation commands  
> $ls   -> to list all dirs  
> $ls -l   -> which will show child files and dirs with more longer details  
> $pwd -> to get current working dirs  
> $cd (dir name/absolute path) -> is used to change dir  
> $cd .. -> to navigate immedite parent dir  
> $find . -name "a.txt or any pattern you wanto search"   -> will list all dirs that pattern presents  
> $find . -iname "a.txt or any pattern you wanto search" -> form case insentive

### management commands
> $mkdir (dir name) -> to create new dir  
> $rm (file name) -> to remove file  
> $rm -r (dirname) -> remove dir along with all its child objects  
> $rmdir (empty dir name) -> to remove empty dirs  
> $touch (filename) -> to create file  
> $touch a.txt b.txt c.txt -> to create multiple files if file already present its last modified date update to current date  

> $cp -> copy a file or directory to destination  
> $cp /source/file /dest/filenameyouwant  
> $cp /source/filename /dest/ -> to keep same file name  
> $cp -r /source/file /dest/ -> to copy entire directory(recursive copy)  

> $mv /source/file /dest/ -> to move files
> $mv /source/dir/ /dest/ -> to move dirs


> $chmod -> to change file permissons
#### example  
> $ls -l my_script.txt -> my_script.txt list file details include permission details and  lets assume file has only read and write permission not exceutable permission

> $./my_script.txt -> thorw permission denide because file has not permited to excute   

> $+X my_script.txt -> changing permission to excute "+X idicate excutable"  

> $./my_script.txt -> will excute success fuly


# viewing file

> $cat file_name -> to view all the  content in file  
> $more file_name -> to view the contents page by page  
> $head -n file_name -> to print first n lines  
> $tail -n file_name -> to print last n lines  
> $wc file_name -> to print the eord count in file  o/p (N_lines, N_Words, N_chars -include newline chars )  
> $wc -l file_name -> return lines count  
> $wc -w file_name -> return words count
> $wc -c file_name -> return chars count


### Usefull commands for wrangling text files

> $sort file_name -> to sort Alphabiticaly by line by line  
> $sort -r  file_name -> to sort reverse Alphabiticaly by line by line  
> $uniq file_name -> remove the duplicate line (Note : only conseqative duplicate lines)  
> $grep regularExpression file_name -> global regular expression print (returns lines in a file matching pattern)  

> $cut -c 2-9 file_name -> to cut and extract a section from each line from 2 nd char to 9th char  

> example if file.txt conatins Arun Kumar  
> $ cut -d ' ' -f2 file.txt -> return ssecond filed exactly cutting at space o/p Kumar
> $paste first_name.txt last_name.txt dob.txt -> displayes in table format by default  tab saperated  
> $paste -d "," first_name.txt last_name.txt dob.txt -> displayes in table format  ,(comma) saperated 

# Networking Commands

> $hostname  -> to print host name  
> $hostname -i  -> to print ip adress of host name  
> $ifconfig -> (Interface configuration ) - display or configure the system network interfaces  
> $ifconfig eth0 -> to dislay ethernet info of eth0   
> $ping www.google.co.in -> to test nw conectivity  
> $ping -c 5 www.google.co.in -> to test by transmiting 5 packets  

> $curl -> (client url ) transfer data to and from URLs  
> $curl www.google.co.in -o google.txt -> to write data into text file from url

> $wget http://www.w3.org/tr/png/sample-iso.txt -> to dowenload files from url  

# file Archiving and compressing
### Archiving 
1. Store rearly used iformation and preserve it
2. are collection of data files and directories stored as a single file
3. make the collection more portable and serve as a backup incase of loss or corruption

### Compression
1. reducing file size by reducing information redundancy
2. preserve storage space, speed up data transfer,and reduces bandwidth load

> $tar -> tape archiver archive and extract files  
> $tar -cf nots.tar nots -> nots.tar is dest file name and nots the dir we want to archive  
> $tar -czf nots.tar.gz nots -> nots.tar is dest file name and nots the dir we want to archive  and compress  
> $tar -tf nots.tar -> tp list all files in archived file nots  
> $tar -xf nots.tar nots -> to  extract/unpack/dearchive file nots is dest dir (its optional)  
> $tar -xzf nots.tar.gz nots t-> extract and decompress file  
> $ls -R to files present recursively  

> $zip (compress and bundle it)
> $tar (bundle and compresss it)

> $zip -r Nots.zip nots -> to compress the files and directories to an archive  
> $unzip Nots.zip dest_optional -> to decompress/unzip the files and directories archive 