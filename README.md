A three-phase interactive visualization built with D3.js to display and explore data about programming languages, their paradigms, creators, and influences. The dataset is provided in JSON format and includes both a smaller and a larger file with structured information about various programming languages.
- Render each programming language from the JSON file along with its first paradigm.
- Enhance the display to show up to three paradigms per language. Implement an on-click event to display the language's creator and year of creation.
- On hover, highlight the language by bolding its name and giving it a yellow background.
- Shift all influenced languages slightly to the right.
- Shift all influencing languages slightly to the left.
  
Usage:

The code as provided cannot be use in the browser as if they were standalone HTML pages on the filesystem. You need to install a little trivial webserver, with
the files for the project served.

If you already have `python3` installed, then that little trivial webserver is easily obtained. Start up this webserver with the folllwing Python command (i.e., on a shell command line): 

```
python3 -m http.server -d <dirname> 8080
```

where `dirname` is the pathname to the root of the code/page to be executed/rendered in the browser. 

To view the `index.html` in the browser, use the following URL:

`localhost:8080/index.html`

