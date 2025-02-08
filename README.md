# Document Cookie JS

## Introduction
Document cookie management library inspired by CodeIgniter Cookie

## Installation
- Download: [cookie.min.js](https://raw.github.com/arxcode40/cookie-js/main/dist/cookie.min.js)
- Include into your project
    ```html
    <script src="cookie.min.js"></script>
    ```

## Available Functions
### Set a cookie
```javascript
cookie.set(name, value, options = {})
```
#### Parameters
- **name** (`string`) – Cookie name
- **value** (`string`) – Cookie value
- **options** (`object`) – Cookie options (optional)
  - **domain** (`string`) – Cookie domain (usually: .yourdomain.com)
  - **expire** (`number`) – Number of seconds until expiration. If set to 0 the cookie will only last as long as the browser is open (default: 0)
  - **httpOnly** (`boolean`) – Whether to hide the cookie from JavaScript (default: false)
  - **maxAge** (`number`) – Cookie maximum age
  - **partitioned** (`boolean`) – Indicates that the cookie should be stored using partitioned storage (default: false)
  - **path** (`string`) – Cookie path (default: '/')
  - **sameSite** (`string`) – The value for the SameSite cookie parameter
  - **secure** (`boolean`) – Whether to only send the cookie through HTTPS (default: false)
#### Return type
`void`

### Get a cookie
```javascript
cookie.get(name)
```
#### Parameters
- **name** (`string`) – Cookie name
#### Returns
The cookie value or null if not found
#### Return type
`any`

### Delete a cookie
```javascript
cookie.delete(name, options = {})
```
#### Parameters
- **name** (`string`) – Cookie name
- **options** (`object`) – Cookie options (optional)
  - **domain** (`string`) – Cookie domain (usually: .yourdomain.com)
  - **path** (`string`) – Cookie path (default: '/')
#### Return type
`void`

### Checks if a cookie exists
```javascript
cookie.has(name, ?value = null)
```
#### Parameters
- **name** (`string`) – Cookie name
- **value** (`string|null`) – Cookie value (optional)
#### Return type
`boolean`