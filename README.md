# Code Challenge

<br>
 
![image](https://user-images.githubusercontent.com/63265996/166120264-ec3e7b2f-6877-4df4-8a5a-5ab12f47eec7.png)

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
