# Shell Scripting
### What is  a Scripting :
1. list of commands that can be interpreted at run time
2. commands can be entered interactively
3. Scripting languages are interpreted at runtime
4. Slower to run faster to develop

### widley used to Automate Processess
1. Automates : ETL Jobs, file backups and archiving
2. Used for nearly any computational tasks


#### Shell Script - Executable text file with an interpreter directive 
    a.k.a 'shebamg' directive:

    #!interpreter [optional-arg]

    1. 'interpreter'- path to an executable program
    2. 'optional-arg' - single argument string

### hello word example

    $ touch hello_world.sh
    $ echo '#! /bin/bash' >> hello_world.sh   -> (>> is used append output to file)  
    $echo 'echo hello world' >> hello_world.sh -> (to append hello world string)  

    $chmod +x hello_world.sh -> make the file excutable by all users
    $ls -l hello_world.sh -> to check the permissions

    $ ./hello_world.sh -> to excute script file

# Filters, Pipes, and Variables

#### Filters are shell commands, which :
1. Take input from standard input
2. Send output to standard output
3. Transform input data into output data
4. Examples are wc, cat, more,head,sort,grep

#### |  -  Pipe command
    1. for Chaining filter commands (command1 | command2)
    2. output of command1 is input of command2
    3. pipe is stands for pipeline (ex $ls | sort -> to sord dirs in pwd)
    
#### Shell Variables:
    1. Scope limited to shell that created
    2. $set -> is used to list all variables
    3. $set | head -4 -> to list first 4 ststem variables
    4. $Var_name=value -> to define shell variable (No Space Around '=')
    5. example
        > $GREETINGS="HELLO Aruna"
        > $echo $GREETINGS -> (to display varibles)
        > $echo $VAR1 $VAR2 VAR3 -> you chan echo multiple variables
        > $unset var_name -> to delete variable

## Environment Variables :
* Environment Variables are just like shell variables with extended scope 
* you can extend any shell variable into environment variable  by $ export var_name

    1. $ env -> used to list all environment variables  
    2. $ GREETING="Hello Aruna " ->creating variable     
    3. $ export GREETING -> Making it as env variable  
    4. $ env | grep "GREE" -> finding and displying greeting var using regualar exp

# Using Features of the bash shell

### MetaCharacters :
    1. # -precedes a comment
    2. ; -command separator (ex : $echo Hello; whoami)
    3. * -filename expansion wildcard (ex ls /bin/sam* -> return list file name starting with sam)
    4. ? -single character wildcard in filename expansion 
    (ex: ls /bin/*ash -> return list all obj in /bin directory having a single char in place of ? mark ex: /bin/bash /bin/dash)
    5. \ -escape unique chars interpretation (ex: $ echo "\$1 Each" o/p : $1 Each ) Basicaly a escape character
    6. " " -interpret literally, but evalute meta characters
        Ex: $echo "$1 Each" -> O/P Each
            $echo '$1 Each' -> O/P $1 Each
    
# I/O Redirection :
Input/Output Redirection refers to a set of features used for redirecting.

    1. > is used to Redirect o/p to file its also create file if its does't exists also overrides content if file exists
    2. >> you can avoide overriding by appending
    3.  2> -Redirect Standered error to file
    4. 2>> to Append the error message
    5. < -redirect file contents to standerd input

# Command Substitution
 Replace the command with its output
 $(command) or \`command`

 ex: Store o/p of pwd command in var here
 > \$ here=$(pwd)

 > $ echo $here -> will print PWD  

# Command Line Arguments:
* Command Line Arguments  are arguments used by program arguments specified on the command line  
* A way to Pass arguments to a shell scripts
* Usage:  

        1. $ ./myBashScript.sh arg1 arg2
        2. Batch Mode : Commands run sequentialy (command1; command2 Note: commnad2 runs after command1 completed excution)
        3. Concurrent Mode : Commands run in Parallel (ex: command1 & command2 )
        