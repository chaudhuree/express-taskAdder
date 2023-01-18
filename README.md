run on terminal:

```
  PORT=6000 node app.js
```

> this will run this app on port 6000

**difference between put and patch**

- The <b>PUT</b> method is used to completely replace the existing document in the database with the new data being sent in the request. This means that all fields in the existing document will be overwritten with the new data.

- The <b>PATCH</b> method, on the other hand, is used to partially update a document, rather than replacing it entirely. This means that only the fields specified in the request will be updated, while the rest of the fields in the document will remain unchanged.

<b><u>in case of put use this(uncomment is controller update function) :</u></b>

<h2>and must remove the default added functionality from schema</h2>

```
  overwrite: true
```
