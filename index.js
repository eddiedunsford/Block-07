//Use the script tag to link js file to html file
<script src="./index.html"></script>

// Step 1: Create the message string
let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Step 2: Create and assign three variables with different arithmetic operations
let code1 = 5 + 5;  
let code2 = 20 * 2;  
let code3 = 40 - 1;   

// Step 3: Concatenate the message with the vault codes
let fullMessage = `${message} \nCode 1: ${code1} \nCode 2: ${code2} \nCode 3: ${code3}`;

// Step 4: Display the message using a popup dialog box
alert(fullMessage);
