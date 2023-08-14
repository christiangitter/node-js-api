### Node.js Sample API

## Prerequirements
1. install [Node.js](https://nodejs.org/de)
2. install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
3. install [Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=de-de&gl=de)
4. install [vscode](https://code.visualstudio.com/)
5. install [postman](https://www.postman.com/downloads/)

To create a node.js web application you need to create a folder in your file system.<br>
open your Terminal, navigate to the created folder and init a node.js application.
<br>
Type `npm init -y`
<br>
To install express type `npm install express`
<br>
open the projekt in vscode with `code .`
<br>
extend the package.json with `"start": "node index.js"` to let the `index.js` run automaticaly.
<br>
create a file called `index.js`
<br>
to run the web application type `npm start`
<br>
to handle body content in the requests we need to install the body-parser by typing `npm install body-parser`