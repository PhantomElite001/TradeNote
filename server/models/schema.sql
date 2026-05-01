CREATE TABLE Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250),
    email VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL,
    bought BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Customers(
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    phone VARCHAR(20) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES Users(id)
);

CREATE TABLE Credits(
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    amount INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Transactions(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    customer_id INT NOT NULL,
    description VARCHAR(550),
    amount INT,
    status ENUM('PAID', 'UNPAID','INCOMPLETE'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES Users(id),
    FOREIGN KEY(customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    customer_id INT NOT NULL,
    credit_id INT NOT NULL,
    made_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES Users(id),
    FOREIGN KEY(customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY(credit_id) REFERENCES Credits(id)
);

CREATE TABLE Jobs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    description VARCHAR(550),
    status ENUM('COMPLETED','PENDING','INCOMPLETE'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES Users(id)
);