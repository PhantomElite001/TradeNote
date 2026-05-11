CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250),
    email VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    phone VARCHAR(20) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES Users(id)
);

CREATE TABLE Jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    customer_id INT NOT NULL,
    description VARCHAR(550),
    status ENUM(
        'PENDING',
        'IN_PROGRESS',
        'COMPLETED'
    ),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES Users(id),

    FOREIGN KEY (customer_id)
        REFERENCES Customers(id)
);

CREATE TABLE Transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,
    customer_id INT NOT NULL,
    job_id INT NULL,

    type ENUM(
        'SALE',
        'PAYMENT'
    ) NOT NULL,

    description VARCHAR(550),

    amount DECIMAL(10,2) NOT NULL,

    status ENUM(
        'PENDING',
        'COMPLETED',
        'FAILED'
    ),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES Users(id),

    FOREIGN KEY (customer_id)
        REFERENCES Customers(id),

    FOREIGN KEY (job_id)
        REFERENCES Jobs(id)
);