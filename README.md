---
title: My Project
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.23"
---

# My Project

Base URLs:

# Authentication

# Default

## POST Sign Up

POST /api/v1/auth/signup

> Body Parameters

```json
{
  "name": "Test",
  "username": "testing@gmail.com",
  "password": "password"
}
```

### Params

| Name | Location | Type   | Required | Description |
| ---- | -------- | ------ | -------- | ----------- |
| body | body     | object | no       | none        |

> Response Examples

> 200 Response

```json
{
  "user": {
    "name": "string",
    "username": "string"
  },
  "token": "string"
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline      |

### Responses Data Schema

HTTP Status Code **200**

| Name        | Type   | Required | Restrictions | Title | description |
| ----------- | ------ | -------- | ------------ | ----- | ----------- |
| » user      | object | true     | none         |       | none        |
| »» name     | string | true     | none         |       | none        |
| »» username | string | true     | none         |       | none        |
| » token     | string | true     | none         |       | none        |

## GET Get Reccords

GET /api/v1/record/DATABASE_1

### Params

| Name          | Location | Type   | Required | Description |
| ------------- | -------- | ------ | -------- | ----------- |
| sortBy        | query    | string | no       | none        |
| sortOrder     | query    | string | no       | none        |
| searchValue   | query    | string | no       | none        |
| page          | query    | string | no       | none        |
| Authorization | header   | string | no       | none        |

> Response Examples

> 200 Response

```json
{
  "records": [
    {
      "name": "string",
      "userEmail": "string",
      "userPhone": "string",
      "slug": "string"
    }
  ],
  "totalCount": 0
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline      |

### Responses Data Schema

HTTP Status Code **200**

| Name         | Type     | Required | Restrictions | Title | description |
| ------------ | -------- | -------- | ------------ | ----- | ----------- |
| » records    | [object] | true     | none         |       | none        |
| »» name      | string   | true     | none         |       | none        |
| »» userEmail | string   | true     | none         |       | none        |
| »» userPhone | string   | true     | none         |       | none        |
| »» slug      | string   | true     | none         |       | none        |
| » totalCount | integer  | true     | none         |       | none        |

## POST Create A Question

POST /api/v1/questions/create

> Body Parameters

```json
{
  "title": "Whats my name?"
}
```

### Params

| Name | Location | Type   | Required | Description |
| ---- | -------- | ------ | -------- | ----------- |
| body | body     | object | no       | none        |

> Response Examples

> 200 Response

```json
{
  "text": "string",
  "options": ["string"],
  "id": "string"
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline      |

### Responses Data Schema

HTTP Status Code **200**

| Name      | Type     | Required | Restrictions | Title | description |
| --------- | -------- | -------- | ------------ | ----- | ----------- |
| » text    | string   | true     | none         |       | none        |
| » options | [string] | true     | none         |       | none        |
| » id      | string   | true     | none         |       | none        |

## POST Add Option

POST /api/v1/questions/663ca2af463cdb0bfc6d704a/options/create

> Body Parameters

```json
{
  "text": "Sourav Roy"
}
```

### Params

| Name | Location | Type   | Required | Description |
| ---- | -------- | ------ | -------- | ----------- |
| body | body     | object | no       | none        |

> Response Examples

> 200 Response

```json
{}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Success     | Inline      |

### Responses Data Schema

## POST Sign IN

POST /api/v1/auth/signin

> Body Parameters

```json
{
  "username": "testing@gmail.com",
  "password": "password"
}
```

### Params

| Name | Location | Type   | Required | Description |
| ---- | -------- | ------ | -------- | ----------- |
| body | body     | object | no       | none        |

> Response Examples

> 200 Response

```json
{
  "user": {
    "name": "string"
  },
  "token": "string"
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline      |

### Responses Data Schema

HTTP Status Code **200**

| Name    | Type   | Required | Restrictions | Title | description |
| ------- | ------ | -------- | ------------ | ----- | ----------- |
| » user  | object | true     | none         |       | none        |
| »» name | string | true     | none         |       | none        |
| » token | string | true     | none         |       | none        |

## POST Create Record

POST /api/v1/record/create

> Body Parameters

```json
{
  "name": "New Test",
  "userEmail": "userEmail@gmail.com",
  "userPhone": "8777644039",
  "database": "DATABASE_1"
}
```

### Params

| Name          | Location | Type   | Required | Description |
| ------------- | -------- | ------ | -------- | ----------- |
| Authorization | header   | string | no       | none        |
| body          | body     | object | no       | none        |

> Response Examples

> 400 Response

```json
{
  "error": "string",
  "missingFields": ["string"]
}
```

### Responses

| HTTP Status Code | Meaning                                                          | Description | Data schema |
| ---------------- | ---------------------------------------------------------------- | ----------- | ----------- |
| 400              | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | Bad Request | Inline      |

### Responses Data Schema

HTTP Status Code **400**

| Name            | Type     | Required | Restrictions | Title | description |
| --------------- | -------- | -------- | ------------ | ----- | ----------- |
| » error         | string   | true     | none         |       | none        |
| » missingFields | [string] | true     | none         |       | none        |

## GET Get All Questions

GET /api/v1/questions

> Response Examples

> 200 Response

```json
{}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Success     | Inline      |

### Responses Data Schema

## POST Add Vote

POST /options/663ca84c24bb8a7b42a58bad/add_vote

> Response Examples

> 200 Response

```json
{}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Success     | Inline      |

### Responses Data Schema

## DELETE Delete Question

DELETE /api/v1/questions/663ca83824bb8a7b42a58ba7

> Response Examples

> 200 Response

```json
{}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Success     | Inline      |

### Responses Data Schema

## DELETE Delete Option

DELETE /api/v1/options/663caab6bb541c61a4cc0c2b

> Response Examples

> 200 Response

```json
{
  "message": "string"
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline      |

### Responses Data Schema

HTTP Status Code **200**

| Name      | Type   | Required | Restrictions | Title | description |
| --------- | ------ | -------- | ------------ | ----- | ----------- |
| » message | string | true     | none         |       | none        |

## GET Get Question By ID

GET /api/v1/questions/663caaa5bb541c61a4cc0c29

> Response Examples

> 200 Response

```json
{
  "id": "string",
  "title": "string",
  "options": [
    {
      "id": "string",
      "text": "string",
      "votes": 0,
      "link_to_vote": "string"
    }
  ]
}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OK          | Inline      |

### Responses Data Schema

HTTP Status Code **200**

| Name            | Type     | Required | Restrictions | Title | description |
| --------------- | -------- | -------- | ------------ | ----- | ----------- |
| » id            | string   | true     | none         |       | none        |
| » title         | string   | true     | none         |       | none        |
| » options       | [object] | true     | none         |       | none        |
| »» id           | string   | true     | none         |       | none        |
| »» text         | string   | true     | none         |       | none        |
| »» votes        | integer  | true     | none         |       | none        |
| »» link_to_vote | string   | true     | none         |       | none        |

# Data Schema

<h2 id="tocS_Tag">Tag</h2>

<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": 1,
  "name": "string"
}
```

### Attribute

| Name | Type           | Required | Restrictions | Title | Description |
| ---- | -------------- | -------- | ------------ | ----- | ----------- |
| id   | integer(int64) | false    | none         |       | Tag ID      |
| name | string         | false    | none         |       | Tag Name    |

<h2 id="tocS_Category">Category</h2>

<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": 1,
  "name": "string"
}
```

### Attribute

| Name | Type           | Required | Restrictions | Title | Description   |
| ---- | -------------- | -------- | ------------ | ----- | ------------- |
| id   | integer(int64) | false    | none         |       | Category ID   |
| name | string         | false    | none         |       | Category Name |

<h2 id="tocS_Pet">Pet</h2>

<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 1,
  "category": {
    "id": 1,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": ["string"],
  "tags": [
    {
      "id": 1,
      "name": "string"
    }
  ],
  "status": "available"
}
```

### Attribute

| Name      | Type                        | Required | Restrictions | Title | Description      |
| --------- | --------------------------- | -------- | ------------ | ----- | ---------------- |
| id        | integer(int64)              | true     | none         |       | Pet ID           |
| category  | [Category](#schemacategory) | true     | none         |       | group            |
| name      | string                      | true     | none         |       | name             |
| photoUrls | [string]                    | true     | none         |       | image URL        |
| tags      | [[Tag](#schematag)]         | true     | none         |       | tag              |
| status    | string                      | true     | none         |       | Pet Sales Status |

#### Enum

| Name   | Value     |
| ------ | --------- |
| status | available |
| status | pending   |
| status | sold      |
