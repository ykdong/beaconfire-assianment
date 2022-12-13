### 1. What is a relational database?
A relational database is a type of database that stores and provides access to data points that are related to one another

### 2. What is data modeling? Can you give an example and explain data modeling in terms of entities and their relationships?
Data modeling is the process of creating a simplified diagram of a software system and the data elements it contains, 
using text and symbols to represent the data and how it flows.

One example is Schema. Is an abstract representation of a data entity that defines its shape and value types

Their relationships will be:
- 1 to 1
- 1 to many
- many to many

###  3. What is a primary key and a foreign key?
Primary key is the column(s) that uniquely identifies a record in a table
Foreign key is the column(s) of one table that are the primary key of another table

### 4. Explain normalization and why it is useful.
Normalization organzing datasets efficiently by splitting them to prevent data redundancy and avoid anomalies(data inconsistencies)

### 5. What is a transaction? Assuming part of it succeeded and another failed, what happens?
Transaction is execution of a set of operations. If successful, all the changes are committed. If error, all changes are reased or rolled back

### 6. Explain ACID.
ACID stands for Atomic, Consistent, Isolated, Durable
Atomic: executed as a single unit and applies all the changes or none at all
Consistent: leaving the data in a consistent state and following all constraints
Isolated: independent from & invisible to other transactions
Durable: permanent after being commited

### 7. What is a non-relational database?
A non-relational database stores data in a non-tabular form, and tends to be more flexible than the tranditional, SQL based, relational database
structures. It does not follow the relational model provided by traditional relational databse management systems

### 8. Explain CAP.
CAP stands for Consistency, Availability, Partition Tolerance
Consistency: all clients see the same, most updated data at any time
Availability: any client that sends a request will receive a response
Partition Tolerance: (required) the system stilll works even when some connections are lost

### 9. What does it mean to have eventual consistency?
"Eventual Consistency" means to have copies of data on multiple machines to get high availabillity and scalability. Thus, changes made to any 
data item on one machine has to be propagated to other replicas
Data replication may not be instantaneous as some copies will be updated ummediately wihle others in due course of time. These copies may be mutually,
but in due course of time, they become consistent

### 10. What is the difference between vertical and horizontal scaling?
Vertical Scaling means upgrade a server with better CPU, more RAM, or more storage space
This method could maintain application architecture. But its expensive, with technological limitations, and with cloud-based restrictions

Horizontal Scaling means distribute the dataset and query load over multiple servers that handle a subset of the overall work
This method is low cost. But will change application architecture. And with more complexity and maintenance

### 11. What are the differences between database scalability techniques like replication, partitioning, and sharding?
Replication: make copies of a master database and host them on separate servers, resulting in "slave" databases. Could read data from any slave, but only write to master
And has the ability of the system to continue operating even during partial failure

Partitioning: splitting datasets into smaller subsets, all on the same server. We couls divide by row or column

Sharding: spreading a dataset across multiple databases that are distributed across multiple servers, none of which communicate with each other

### 12. When would you choose a RDBMS vs NoSQL database?
In general, we should consider an RDBMS if we has multi-row transactions and complex joins. It may case high latency.
NoSQL db avoid RDBMS functions like multi-table joins. A document can be equivalent of rows joined across multiple tables, and consistency is
guaranteed

### 13. What is mongoose? Why would we use it instead of interacting with the native MongoDB shell?
Mongoose is a MongoDB ODM(object Document Mapping) that is designed to work in an asynchronous environment
Mongoose provides extra functionality. 
- Supports promises & callbacks
- Supports data validation
- Support buffer queries until server is connected to MongoDB 
- ^?

### 14. Explain embedded vs reference relationships.
Embedded documents are stored as children inside a parent document. When retrieve the parent document, all embedded documents
will be retrieved. And embeded documents are de-normalized, could retrieve with only one query

Reference documents are stored in a separate collection to their parent document. Therefore, it's possible to retrieve the parent document
without retrieving any of its referenced documents. And reference documents are normalized. Retrieved with subqueries