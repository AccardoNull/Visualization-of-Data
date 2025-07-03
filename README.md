
The code as provided cannot be use in the browser as if they were standalone HTML pages on the filesystem. You need to install a little trivial webserver, with
the files for the project served.

If you already have `python3` installed, then that little trivial webserver is easily obtained. Start up this webserver with the folllwing Python command (i.e., on a shell command line): 

```
python3 -m http.server -d <dirname> 8080
```

where `dirname` is the pathname to the root of the code/page to be executed/rendered in the browser. 

To view the `index.html` in the browser, use the following URL:

`localhost:8080/index.html`

