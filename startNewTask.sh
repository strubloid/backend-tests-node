#!/bin/bash

# Function to create the directory and files based on the provided name
create_new_task() {
  
    # First argument: variable name (required)
    if [[ -z "$1" ]]; then
        read -p "[What is the name of the task?]:" TASKNAME
    else
        TASKNAME=$1
    fi

    # Load all the existing folders in the src directory and get the last number
    last_number=$(ls src | grep -E '^[0-9]{2}-' | tail -n 1 | cut -d '-' -f 1)

    # Increment the last number by 1, ensuring it is always two digits
    last_number=$((10#$last_number + 1))

    ## ensuring that we have 2 digit number
    last_number=$(printf "%02d" $last_number)

    ## we create the new folder with the number plus the taskname
    mkdir -p "src/${last_number}-${TASKNAME}"

    ## we add 3 files (task, problem and task to do) into the folder
    touch "src/${last_number}-${TASKNAME}/${TASKNAME}.ts"
    touch "src/${last_number}-${TASKNAME}/problem.txt"
    touch "src/${last_number}-${TASKNAME}/task.ts"

    TASKNAME_CAPITALIZED=$(echo "$TASKNAME" | sed 's/\b\([a-z]\)/\u\1/g')

    ## we add the placeholder for the task.ts file
    taskContent=$(cat <<EOF
    import { solution } from "./${TASKNAME}";
    export function task${TASKNAME_CAPITALIZED}() {
        return solution();    
    }
EOF
)
    ## we write in the task.ts file the content of the taskContent variable
    echo "$taskContent" > "src/${last_number}-${TASKNAME}/task.ts"
    

    ## we add the placeholder for the main file
    mainContent=$(cat <<EOF
    export function solution() {
    }
EOF
)
    ## we write in the main file the content of the mainContent variable
    echo "$mainContent" > "src/${last_number}-${TASKNAME}/${TASKNAME}.ts"

    # loading the src/index.ts
    indexFile="src/index.ts"
    indexContent=$(cat "$indexFile")

    # we add the import as first line of the file
    newImport="import { task${TASKNAME_CAPITALIZED} } from \"./${last_number}-${TASKNAME}/task\";"
    indexContent="$newImport"$'\n'"$indexContent"

    ## we add the comment at the last line
    comment="// task ${last_number}"

    ## we add the call of the imported task to the main file
    newCall="task${TASKNAME_CAPITALIZED}()"

    ## we add to the final content of the file
    finalContent="$indexContent"$'\n'$'\n'"$comment"$'\n'"$newCall"

    ## we update the index.ts
    echo "$finalContent" > "$indexFile"

}

create_new_task $@