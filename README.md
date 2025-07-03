
The code as provided cannot be use in the browser as if they were standalone HTML pages on the filesystem. You need to install a little trivial webserver, with
the files for the project served.

If you already have `python3` installed, then that little trivial webserver is easily obtained. Start up this webserver with the folllwing Python command (i.e., on a shell command line): 

```
python3 -m http.server -d <dirname> 8080
```

where `dirname` is the pathname to the root of the code/page to be executed/rendered in the browser. 

To view the `index.html` in the browser, use the following URL:

`localhost:8080/index.html`


* Use either `Firefox` or `Chrome`.
* Find the `Developer Tools` in the browser as you will want to make good use the various tools it provides for working with JavaScript and the DOM.
* Most `Developer Tools` plugins have a `Network` tab, and this almost always has something like `Disable cache`. Ensure the network cache is disabled when developing code -- without doing this, you will get very frustrated when changes to your code are not reflected in the browser (i.e if the cache is still enabled, then cached versions of your scripts will be reloaded and reloaded without your changes).

