# GraphQL (With Some Relay)

---

## GraphQL is...

* ...a spec <!-- .element: class="fragment" data-fragment-index="1" -->
* ...a "Query Language" <!-- .element class="fragment" data-fragment-index="2" -->
* ...a query engine <!-- .element class="fragment" data-fragment-index="3" -->

Note: As a spec it is meant to be technology agnostic. Yes there is an official
npm package maintained by facebook, but the spec can be applied to .net as
well.

----

### This...

```json
query {
  stories {
    id,
    text
  }
}
```

----

### Returns this...

```json
{
  "data": {
    "stories": [
      {
        "id": "325143",
        "text": "asdfadsfasdf"
      },
      {
        "id": "320542",
        "text": "dsf;lajhsfla"
      }
    ]
  }
}
```

Note: The simple json structure makes it easy to understand what we're pulling
down. This isn't to say we have separate endpoints for pulling down different
pieces of information, but rather combine everything into a single endpoint.
In short, GraphQL describe a way to build an application specific query
engine.

---

## Design Principles

* Hierarchical
* Product-centric
* Strongly Types
* Client-Specified Queries
* Introspective

----

### Hierarchical

> The query is shaped like the data it returns

Note: With the household profile, we are composed of different sections. Each
section asks for different pieces of data, which leads into the second
principle.

----

### Product-Centric

> GraphQL is unappologetically driven by the requirements of views

Note: We're not referring to the data we get back, but the query itself. We
define what we get back when we ask for the household members section. We
let these needs drive the design of our GraphQL schema.

----

### Strongly Typed

> ...and the server can make certain guarantees about the shape and nature of
the response

Note: When we ask for a to-do list, we know we are getting back a to-do list,
no "if"s, "and"s or "but"s about it. We know what properties our to-do list
will have, and what the properties of those properties are (if any).

----

### Client-Specified Queries

> A GraphQL query, on the other hand, returns exactly what the client asks for.

Note: Software changes. Our requirements will steadily grow, and naturally so
will our queries. We could make a new query or extend our existing one. Take a
feature availability query, for example. We start off asking if medicare is
enabled, but now we want the AEP dates and the FFM sync. Will these extensions
affect our existing queries? No. We still only get back the bits of information
we asked for without the new content.

----

### Introspective

> [Introspection] serves as a powerful platform for building commons tools and
client software libraries

Note: When we create a service we (or the platform) generates a manifest file.
With introspection, developers have a way to ask QraphQL directly what the
schema looks like and develop independently.

---

## Security Concerns

Note: The GraphQL itself is safe, but keep in mind this is only for the parsing
of the query itself. It is still possible to transmit sensitive information
over the wire, so it is important to ensure the channel is secure. Another
to keep an eye on are the resolve functions, as it is still possible to inject
bad data into resolve queries.
