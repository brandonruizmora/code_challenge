# Code Challenge

<br>
 
![image](https://user-images.githubusercontent.com/63265996/166119415-300a6043-ea8f-447e-ad1e-860ea65933aa.png)

### Dependencies:
- Express -> Create API
- Jest -> Unit testing
- SuperTest -> Testing API

### Components design:
```mermaid
flowchart LR
  subgraph BACKEND
    direction TB
    subgraph LIB
        direction LR
        A[Reader] --> B[StudentService] --> C[StudentController]
    end
    subgraph EXPRESS
        direction TB
        D[Server]
    end
  end
  JSON --> BACKEND --> API
  LIB --> EXPRESS
  ```
