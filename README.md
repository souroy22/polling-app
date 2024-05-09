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
