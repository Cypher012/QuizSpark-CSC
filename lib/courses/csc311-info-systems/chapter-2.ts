import { QuestionV2 } from "@/lib/quiz-types";

export const csc311Chapter2: QuestionV2[] = [
  {
    "id": "csc311_001",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is data in the context of information systems?",
    "options": [
      "Processed and organized facts",
      "Raw facts that when organized may be transformed into information",
      "A collection of related files",
      "A group of programs that manipulate information"
    ],
    "correctAnswer": 1,
    "explanation": "Data consists of raw facts, and when organized may be transformed into information. It is a necessity for almost any enterprise to carry out its business."
  },
  {
    "id": "csc311_002",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a database?",
    "options": [
      "A single file containing records",
      "A collection of data organized to meet users' needs",
      "A program that processes data",
      "A hardware device for storing data"
    ],
    "correctAnswer": 1,
    "explanation": "A database is a collection of data organized to meet users' needs."
  },
  {
    "id": "csc311_003",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a Database Management System (DBMS)?",
    "options": [
      "A collection of raw data",
      "A hardware component for data storage",
      "A group of programs that manipulate the database and provide an interface between the database and users",
      "A network protocol for data transfer"
    ],
    "correctAnswer": 2,
    "explanation": "A Database Management System (DBMS) is a group of programs that manipulate the database and provide an interface between the database and the user of the database or other application programs."
  },
  {
    "id": "csc311_004",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In the hierarchy of data, what is the basic building block of information?",
    "options": [
      "Field",
      "Record",
      "Character",
      "File"
    ],
    "correctAnswer": 2,
    "explanation": "Character is the basic building block of information, represented by a byte."
  },
  {
    "id": "csc311_005",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "A character in database terminology is represented by a:",
    "options": [
      "Bit",
      "Byte",
      "Word",
      "Block"
    ],
    "correctAnswer": 1,
    "explanation": "A character is the basic building block of information, represented by a byte."
  },
  {
    "id": "csc311_006",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a field in database terminology?",
    "options": [
      "A collection of related files",
      "A collection of related records",
      "A group of characters",
      "A single character"
    ],
    "correctAnswer": 2,
    "explanation": "A field is a group of characters."
  },
  {
    "id": "csc311_007",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a record in database terminology?",
    "options": [
      "A collection of related fields",
      "A collection of related files",
      "A group of characters",
      "A collection of integrated databases"
    ],
    "correctAnswer": 0,
    "explanation": "A record is a collection of related fields."
  },
  {
    "id": "csc311_008",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a file in database terminology?",
    "options": [
      "A group of characters",
      "A collection of related fields",
      "A collection of related records",
      "A collection of integrated databases"
    ],
    "correctAnswer": 2,
    "explanation": "A file is a collection of related records."
  },
  {
    "id": "csc311_009",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "A database can be defined as:",
    "options": [
      "A collection of related fields",
      "A collection of related records",
      "A collection of integrated and related files",
      "A group of characters"
    ],
    "correctAnswer": 2,
    "explanation": "A database is a collection of integrated and related files."
  },
  {
    "id": "csc311_010",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is the correct hierarchy of data from smallest to largest?",
    "options": [
      "Field → Character → Record → File → Database",
      "Character → Field → Record → File → Database",
      "Record → Field → Character → File → Database",
      "Database → File → Record → Field → Character"
    ],
    "correctAnswer": 1,
    "explanation": "The correct hierarchy from smallest to largest is: Character → Field → Record → File → Database."
  },
  {
    "id": "csc311_011",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is an entity in database terminology?",
    "options": [
      "A characteristic of a person or thing",
      "A generalized class of people, places, or things for which data are collected, stored, and maintained",
      "A field used to identify records",
      "A collection of related records"
    ],
    "correctAnswer": 1,
    "explanation": "An entity is a generalized class of people, places, or things (objects) for which data are collected, stored, and maintained. E.g., Customer, Employee."
  },
  {
    "id": "csc311_012",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is an example of an entity?",
    "options": [
      "Customer name",
      "Employee ID",
      "Customer",
      "Date of birth"
    ],
    "correctAnswer": 2,
    "explanation": "Customer is an example of an entity. An entity is a generalized class of people, places, or things. Customer name would be an attribute."
  },
  {
    "id": "csc311_013",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is an attribute in database terminology?",
    "options": [
      "A generalized class of objects",
      "A characteristic of an entity",
      "A collection of related files",
      "A database management program"
    ],
    "correctAnswer": 1,
    "explanation": "An attribute is a characteristic of an entity; something the entity is identified by. E.g., Customer name, Employee name."
  },
  {
    "id": "csc311_014",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is an example of an attribute?",
    "options": [
      "Employee",
      "Customer",
      "Product",
      "Employee name"
    ],
    "correctAnswer": 3,
    "explanation": "Employee name is an example of an attribute. It is a characteristic of the Employee entity."
  },
  {
    "id": "csc311_015",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a key in database terminology?",
    "options": [
      "A characteristic of an entity",
      "A field or set of fields in a record that is used to identify the record",
      "A generalized class of objects",
      "A collection of related files"
    ],
    "correctAnswer": 1,
    "explanation": "A key is a field or set of fields in a record that is used to identify the record, typically uniquely identifying it."
  },
  {
    "id": "csc311_016",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In the traditional approach to data management:",
    "options": [
      "A pool of related data is shared by multiple applications",
      "Separate files are created and stored for each application program",
      "Data redundancy is eliminated",
      "All applications use a centralized database"
    ],
    "correctAnswer": 1,
    "explanation": "In the traditional approach, separate files are created and stored for each application program."
  },
  {
    "id": "csc311_017",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is data redundancy?",
    "options": [
      "The accuracy of data in a file",
      "Duplication of data in separate files",
      "A method of data backup",
      "The speed of data retrieval"
    ],
    "correctAnswer": 1,
    "explanation": "Data redundancy refers to the duplication of data in separate files, which is a drawback of the traditional approach."
  },
  {
    "id": "csc311_018",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is data integrity?",
    "options": [
      "The speed of data processing",
      "The degree to which the data in any one file is accurate",
      "The amount of data stored",
      "The duplication of data"
    ],
    "correctAnswer": 1,
    "explanation": "Data integrity refers to the degree to which the data in any one file is accurate. Lack of data integrity is a drawback of the traditional approach."
  },
  {
    "id": "csc311_019",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Program-data dependence refers to:",
    "options": [
      "Programs that can work with any data format",
      "A situation where program and data organized for one application are incompatible with those organized differently for another application",
      "Programs that are independent of data",
      "Data that can be used by any program"
    ],
    "correctAnswer": 1,
    "explanation": "Program-data dependence is a situation in which program and data organized for one application are incompatible with programs and data organized differently for another application."
  },
  {
    "id": "csc311_020",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is NOT a drawback of the traditional approach?",
    "options": [
      "Data redundancy",
      "Lack of data integrity",
      "Program-data dependence",
      "Improved data sharing"
    ],
    "correctAnswer": 3,
    "explanation": "Improved data sharing is not a drawback; it is actually an advantage of the database approach. The drawbacks of the traditional approach include data redundancy, lack of data integrity, and program-data dependence."
  },
  {
    "id": "csc311_021",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In the database approach:",
    "options": [
      "Separate files are created for each application",
      "A pool of related data is shared by multiple application programs",
      "Each program maintains its own data files",
      "Data redundancy is increased"
    ],
    "correctAnswer": 1,
    "explanation": "In the database approach, a pool of related data is shared by multiple application programs. Each application uses a collection of data that is either joined or related in the database."
  },
  {
    "id": "csc311_022",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is an advantage of the database approach?",
    "options": [
      "Increased data redundancy",
      "Reduced data integrity",
      "Reduced data redundancy",
      "Increased program-data dependence"
    ],
    "correctAnswer": 2,
    "explanation": "Reduced data redundancy is an advantage of the database approach."
  },
  {
    "id": "csc311_023",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is NOT an advantage of the database approach?",
    "options": [
      "Improved data integrity",
      "Easier modification and updating",
      "Increased vulnerability",
      "Better access to data and information"
    ],
    "correctAnswer": 2,
    "explanation": "Increased vulnerability is a disadvantage, not an advantage, of the database approach."
  },
  {
    "id": "csc311_024",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which is a disadvantage of the database approach?",
    "options": [
      "Improved strategic use of corporate data",
      "Standardization of data access",
      "Relatively high cost of purchasing and operating a DBMS",
      "Data and program independence"
    ],
    "correctAnswer": 2,
    "explanation": "Relatively high cost of purchasing and operating a DBMS in a mainframe operating environment is a disadvantage of the database approach."
  },
  {
    "id": "csc311_025",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is a disadvantage of the database approach?",
    "options": [
      "Shared data and information resources",
      "Better overall protection of the data",
      "Increased cost of specialized staff",
      "A framework for program development"
    ],
    "correctAnswer": 2,
    "explanation": "Increased cost of specialized staff is a disadvantage of the database approach."
  },
  {
    "id": "csc311_026",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is planned data redundancy?",
    "options": [
      "Accidental duplication of data",
      "A way of organizing data in which the logical database design is altered so that certain data entities are combined",
      "Elimination of all data duplication",
      "A method of data encryption"
    ],
    "correctAnswer": 1,
    "explanation": "Planned data redundancy is a way of organizing data in which the logical database design is altered so that certain data entities are combined to improve database performance."
  },
  {
    "id": "csc311_027",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a data model?",
    "options": [
      "A physical storage device",
      "A map or diagram of entities and their relationships",
      "A type of database software",
      "A backup of the database"
    ],
    "correctAnswer": 1,
    "explanation": "A data model is a map or diagram of entities and their relationships."
  },
  {
    "id": "csc311_028",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is enterprise data modeling?",
    "options": [
      "Data modeling done for a single department",
      "Data modeling done at the level of the entire organization",
      "Data modeling for small businesses only",
      "Data modeling for personal use"
    ],
    "correctAnswer": 1,
    "explanation": "Enterprise data modeling is data modeling done at the level of the entire organization."
  },
  {
    "id": "csc311_029",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is an Entity-Relationship (ER) diagram?",
    "options": [
      "A physical diagram of hardware components",
      "A data model that uses basic graphical symbols to show the organization of and relationships between data",
      "A flowchart of program logic",
      "A network topology diagram"
    ],
    "correctAnswer": 1,
    "explanation": "An Entity-Relationship (ER) diagram is a data model that uses basic graphical symbols to show the organization of and relationships between data."
  },
  {
    "id": "csc311_030",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In planned data redundancy, which of the following may occur?",
    "options": [
      "All data is deleted",
      "Some data attributes are repeated in more than one data entity to improve database performance",
      "No data is stored",
      "Data is encrypted"
    ],
    "correctAnswer": 1,
    "explanation": "In planned data redundancy, some data attributes are repeated in more than one data entity to improve database performance."
  },
  {
    "id": "csc311_031",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "The hierarchical database model organizes data in:",
    "options": [
      "A two-dimensional table structure",
      "A top-down, or inverted tree structure",
      "A network structure with many-to-many relationships",
      "A flat file structure"
    ],
    "correctAnswer": 1,
    "explanation": "The hierarchical database model is a data model in which data are organized in a top-down, or inverted tree structure."
  },
  {
    "id": "csc311_032",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is the network data model?",
    "options": [
      "A model that uses two-dimensional tables",
      "An expansion of the hierarchical database model with an owner-member relationship in which a member may have many owners",
      "A model where data is organized in a simple list",
      "A model used only for internet applications"
    ],
    "correctAnswer": 1,
    "explanation": "The network data model is an expansion of the hierarchical database model with an owner-member relationship in which a member may have many owners."
  },
  {
    "id": "csc311_033",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is the relational data model?",
    "options": [
      "A model that organizes data in a tree structure",
      "A model with owner-member relationships",
      "A way of organizing and structuring data using tables called relations",
      "A model used only for multimedia data"
    ],
    "correctAnswer": 2,
    "explanation": "The relational data model is a way of organizing and structuring data using tables called relations. All data elements are placed in two-dimensional tables."
  },
  {
    "id": "csc311_034",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In a relational database, data is organized in:",
    "options": [
      "Tree structures",
      "Network structures",
      "Two-dimensional tables called relations",
      "Linear lists"
    ],
    "correctAnswer": 2,
    "explanation": "In the relational data model, all data elements are placed in two-dimensional tables, called relations, that are the logical equivalent of files."
  },
  {
    "id": "csc311_035",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is the most widely used database model in modern database systems?",
    "options": [
      "Hierarchical model",
      "Network model",
      "Relational model",
      "Flat file model"
    ],
    "correctAnswer": 2,
    "explanation": "The relational data model is the most widely used model in modern database systems (MySQL, SQL Server, Oracle)."
  },
  {
    "id": "csc311_036",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is an example of a relational database management system?",
    "options": [
      "Microsoft Word",
      "MySQL",
      "Adobe Photoshop",
      "Microsoft PowerPoint"
    ],
    "correctAnswer": 1,
    "explanation": "MySQL is an example of a relational database management system. Oracle and SQL Server are also examples."
  },
  {
    "id": "csc311_037",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is 'selecting' in relational database terminology?",
    "options": [
      "Data manipulation that eliminates columns in a table",
      "Data manipulation that eliminates rows according to certain criteria",
      "Data manipulation that combines two or more tables",
      "Relating tables together"
    ],
    "correctAnswer": 1,
    "explanation": "Selecting is data manipulation that eliminates rows according to certain criteria."
  },
  {
    "id": "csc311_038",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is 'projecting' in relational database terminology?",
    "options": [
      "Data manipulation that eliminates rows",
      "Data manipulation that eliminates columns in a table",
      "Data manipulation that combines tables",
      "Creating new tables"
    ],
    "correctAnswer": 1,
    "explanation": "Projecting is data manipulation that eliminates columns in a table."
  },
  {
    "id": "csc311_039",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is 'joining' in relational database terminology?",
    "options": [
      "Data manipulation that eliminates rows",
      "Data manipulation that eliminates columns",
      "Data manipulation that combines two or more tables",
      "Deleting data from tables"
    ],
    "correctAnswer": 2,
    "explanation": "Joining is data manipulation that combines two or more tables."
  },
  {
    "id": "csc311_040",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What does 'linking' mean in relational databases?",
    "options": [
      "Deleting tables",
      "Relating tables in a relational database together",
      "Creating new databases",
      "Backing up data"
    ],
    "correctAnswer": 1,
    "explanation": "Linking means relating tables in a relational database together."
  },
  {
    "id": "csc311_041",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a schema in database terminology?",
    "options": [
      "A subset of the database",
      "A description of the entire database and its logical structure",
      "A single table",
      "A backup file"
    ],
    "correctAnswer": 1,
    "explanation": "A schema is a description of the entire database, i.e., the overall logical structure of the entire database (the blueprint of a whole database)."
  },
  {
    "id": "csc311_042",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "A schema can be described as:",
    "options": [
      "A user-specific view of the database",
      "The blueprint of a whole database",
      "A single record in a table",
      "A type of data redundancy"
    ],
    "correctAnswer": 1,
    "explanation": "A schema is the blueprint of a whole database, describing the overall logical structure of the entire database."
  },
  {
    "id": "csc311_043",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a subschema?",
    "options": [
      "The entire database structure",
      "A file containing a description of a subset of the database accessible to a particular user",
      "A backup of the database",
      "A type of network topology"
    ],
    "correctAnswer": 1,
    "explanation": "A subschema is a file that contains a description of a subset of the database and identifies which users can perform modifications on the data items in that subset. It is a user-specific view of the database."
  },
  {
    "id": "csc311_044",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "A subschema is also known as:",
    "options": [
      "The blueprint of a whole database",
      "A user-specific view of the database",
      "The physical storage structure",
      "A data dictionary"
    ],
    "correctAnswer": 1,
    "explanation": "A subschema is a subset of the database schema accessible to a particular user, also called a user-specific view of the database."
  },
  {
    "id": "csc311_045",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a data dictionary?",
    "options": [
      "A collection of related records",
      "A detailed description of all data used in the database",
      "A type of database model",
      "A programming language"
    ],
    "correctAnswer": 1,
    "explanation": "A data dictionary is a detailed description of all data used in the database. It describes metadata, that is, data about data."
  },
  {
    "id": "csc311_046",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "A data dictionary describes:",
    "options": [
      "Network configurations",
      "Metadata - data about data",
      "Hardware specifications",
      "User passwords"
    ],
    "correctAnswer": 1,
    "explanation": "A data dictionary describes metadata, that is, data about data - what data exists, what each data means, where it is stored, and how it is used."
  },
  {
    "id": "csc311_047",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is NOT a feature of a data dictionary?",
    "options": [
      "Provides a standard definition of terms and data elements",
      "Assists programmers in designing and writing programs",
      "Increases data redundancy",
      "Reduces data redundancy"
    ],
    "correctAnswer": 2,
    "explanation": "Increasing data redundancy is NOT a feature of a data dictionary. Data dictionaries actually help reduce data redundancy."
  },
  {
    "id": "csc311_048",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is a feature of a data dictionary?",
    "options": [
      "Slower program development",
      "Increased data redundancy",
      "Faster program development",
      "Decreased data reliability"
    ],
    "correctAnswer": 2,
    "explanation": "Faster program development is a feature of a data dictionary."
  },
  {
    "id": "csc311_049",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is the Logical Access Path (LAP)?",
    "options": [
      "The physical storage location of data",
      "When an application requires information from the DBMS",
      "The network route for data transfer",
      "A type of database model"
    ],
    "correctAnswer": 1,
    "explanation": "Logical Access Path (LAP) is when an application requires information from the DBMS."
  },
  {
    "id": "csc311_050",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is the Physical Access Path (PAP)?",
    "options": [
      "When an application requires information",
      "A logical view of data",
      "When the DBMS accesses a storage device to retrieve data",
      "A network protocol"
    ],
    "correctAnswer": 2,
    "explanation": "Physical Access Path (PAP) is when the DBMS accesses a storage device to retrieve data."
  },
  {
    "id": "csc311_051",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is SQL?",
    "options": [
      "A hardware component",
      "A standard language used to create, manage, and manipulate relational databases",
      "A network protocol",
      "An operating system"
    ],
    "correctAnswer": 1,
    "explanation": "SQL (Structured Query Language) is a standard language used to create, manage, and manipulate relational databases."
  },
  {
    "id": "csc311_052",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Where was SQL invented?",
    "options": [
      "Microsoft Research",
      "IBM's Almaden Research Centre",
      "Google Labs",
      "Apple Research"
    ],
    "correctAnswer": 1,
    "explanation": "SQL was 'invented' at IBM's Almaden Research Centre (San Jose, CA) in the 1970s."
  },
  {
    "id": "csc311_053",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In which decade was SQL invented?",
    "options": [
      "1960s",
      "1970s",
      "1980s",
      "1990s"
    ],
    "correctAnswer": 1,
    "explanation": "SQL was invented at IBM's Almaden Research Centre in the 1970s."
  },
  {
    "id": "csc311_054",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What does the SQL command 'SELECT * FROM EMPLOYEE' do?",
    "options": [
      "Deletes all records from EMPLOYEE table",
      "Selects all columns from the EMPLOYEE table",
      "Creates a new EMPLOYEE table",
      "Updates the EMPLOYEE table"
    ],
    "correctAnswer": 1,
    "explanation": "SELECT * FROM EMPLOYEE selects all ('*') columns from the EMPLOYEE table."
  },
  {
    "id": "csc311_055",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is Data Definition Language (DDL)?",
    "options": [
      "Commands used to manipulate data",
      "A collection of instructions and commands used to define and describe data and data relationships in a specific database",
      "Commands used for transaction control",
      "Commands used for access control"
    ],
    "correctAnswer": 1,
    "explanation": "Data Definition Language (DDL) is a collection of instructions and commands used to define and describe data and data relationships in a specific database."
  },
  {
    "id": "csc311_056",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is a function of DDL?",
    "options": [
      "Insert data into tables",
      "Create database objects",
      "Grant user permissions",
      "Commit transactions"
    ],
    "correctAnswer": 1,
    "explanation": "DDL functions include creating database objects, altering database structures, dropping/deleting objects, renaming objects, and truncating tables."
  },
  {
    "id": "csc311_057",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is NOT a DDL function?",
    "options": [
      "Create database objects",
      "Alter database structures",
      "Insert data into tables",
      "Drop/delete objects"
    ],
    "correctAnswer": 2,
    "explanation": "Inserting data into tables is a DML (Data Manipulation Language) function, not a DDL function."
  },
  {
    "id": "csc311_058",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is Data Manipulation Language (DML)?",
    "options": [
      "Commands used to define database structures",
      "Commands used to manipulate the data in a database",
      "Commands used to control access",
      "Commands used for backup"
    ],
    "correctAnswer": 1,
    "explanation": "Data Manipulation Language (DML) consists of commands that are used to manipulate the data in a database."
  },
  {
    "id": "csc311_059",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following are categories of SQL?",
    "options": [
      "DDL, DML, DCL, TCL",
      "CREATE, DROP, ALTER, SELECT",
      "INSERT, UPDATE, DELETE, SELECT",
      "GRANT, REVOKE, COMMIT, ROLLBACK"
    ],
    "correctAnswer": 0,
    "explanation": "The categories of SQL are DDL (Data Definition Language), DML (Data Manipulation Language), DCL (Data Control Language), and TCL (Transaction Control Language)."
  },
  {
    "id": "csc311_060",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is concurrency control?",
    "options": [
      "A method of data encryption",
      "A method of dealing with a situation where two or more people need to access the same record at the same time",
      "A backup procedure",
      "A network configuration"
    ],
    "correctAnswer": 1,
    "explanation": "Concurrency control is a method of dealing with a situation in which two or more people need to access the same record in a database at the same time."
  },
  {
    "id": "csc311_061",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is a popular DBMS for end users?",
    "options": [
      "Microsoft Word",
      "Microsoft Access",
      "Microsoft Excel",
      "Microsoft PowerPoint"
    ],
    "correctAnswer": 1,
    "explanation": "Microsoft Access is a popular Database Management System for end users."
  },
  {
    "id": "csc311_062",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is NOT a DBMS selection criterion?",
    "options": [
      "Database size",
      "Number of concurrent users",
      "Color of the interface",
      "Cost"
    ],
    "correctAnswer": 2,
    "explanation": "DBMS selection criteria include database size, number of concurrent users, performance, integration, features, the vendor, and cost. Color of interface is not a criterion."
  },
  {
    "id": "csc311_063",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a distributed database?",
    "options": [
      "A database stored on a single computer",
      "A database in which the actual data may be spread across several smaller databases connected via telecommunications devices",
      "A database that is not connected to any network",
      "A database backup system"
    ],
    "correctAnswer": 1,
    "explanation": "A distributed database is a database in which the actual data may be spread across several smaller databases connected via telecommunications devices."
  },
  {
    "id": "csc311_064",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a data warehouse?",
    "options": [
      "A physical building for storing computers",
      "A relational database management system designed specifically to support management decision making",
      "A backup storage device",
      "A network server"
    ],
    "correctAnswer": 1,
    "explanation": "A data warehouse is a relational database management system designed specifically to support management decision making."
  },
  {
    "id": "csc311_065",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "A data warehouse is the current evolution of:",
    "options": [
      "Operating Systems",
      "Decision Support Systems (DSSs)",
      "Network Systems",
      "Programming Languages"
    ],
    "correctAnswer": 1,
    "explanation": "A data warehouse is the current evolution of Decision Support Systems (DSSs)."
  },
  {
    "id": "csc311_066",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is a data mart?",
    "options": [
      "A large enterprise-wide data warehouse",
      "A subset of a data warehouse for small and medium-size businesses or departments within larger companies",
      "A data backup system",
      "A type of database model"
    ],
    "correctAnswer": 1,
    "explanation": "A data mart is a subset of a data warehouse for small and medium-size businesses or departments within larger companies."
  },
  {
    "id": "csc311_067",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is NOT a step in designing a customer data warehouse?",
    "options": [
      "Sharply define your goals and objectives",
      "Choose the software that best fits your goals",
      "Skip the planning phase",
      "Measure results"
    ],
    "correctAnswer": 2,
    "explanation": "Developing a plan is an important step, not skipping it. Steps include: defining goals, choosing software, determining who/what should be in the database, developing a plan, and measuring results."
  },
  {
    "id": "csc311_068",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is data mining?",
    "options": [
      "Extracting physical minerals from the ground",
      "The automated discovery of patterns and relationships in a data warehouse",
      "Deleting old data from databases",
      "Creating new databases"
    ],
    "correctAnswer": 1,
    "explanation": "Data mining is the automated discovery of patterns and relationships in a data warehouse."
  },
  {
    "id": "csc311_069",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is a data mining application?",
    "options": [
      "Word processing",
      "Market segmentation",
      "Photo editing",
      "Video streaming"
    ],
    "correctAnswer": 1,
    "explanation": "Market segmentation is a data mining application. Others include customer queries, fraud detection, direct marketing, market basket analysis, and trend analysis."
  },
  {
    "id": "csc311_070",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is NOT a data mining application?",
    "options": [
      "Fraud detection",
      "Direct marketing",
      "Video editing",
      "Trend analysis"
    ],
    "correctAnswer": 2,
    "explanation": "Video editing is not a data mining application. Data mining applications include market segmentation, customer queries, fraud detection, direct marketing, market basket analysis, and trend analysis."
  },
  {
    "id": "csc311_071",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is OLAP?",
    "options": [
      "Online Application Processing",
      "On-Line Analytical Processing",
      "Offline Analysis Program",
      "Online Access Protocol"
    ],
    "correctAnswer": 1,
    "explanation": "OLAP stands for On-Line Analytical Processing, which provides access to multidimensional databases with managerially useful display techniques."
  },
  {
    "id": "csc311_072",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "OLAP provides:",
    "options": [
      "Bottom-up, discovery-driven analysis",
      "Access to multidimensional databases providing managerially useful display techniques",
      "Data backup services",
      "Network connectivity"
    ],
    "correctAnswer": 1,
    "explanation": "OLAP provides access to multidimensional databases providing managerially useful display techniques."
  },
  {
    "id": "csc311_073",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Data warehouse and OLAP provide:",
    "options": [
      "Bottom-up, discovery-driven analysis",
      "Top-down, query-driven analysis",
      "Random analysis",
      "No analysis capabilities"
    ],
    "correctAnswer": 1,
    "explanation": "Data warehouse and OLAP provide top-down, query-driven analysis."
  },
  {
    "id": "csc311_074",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Data mining provides:",
    "options": [
      "Top-down, query-driven analysis",
      "Bottom-up, discovery-driven analysis",
      "No analysis capabilities",
      "Only data storage"
    ],
    "correctAnswer": 1,
    "explanation": "Data mining provides bottom-up, discovery-driven analysis, unlike data warehouse and OLAP which provide top-down, query-driven analysis."
  },
  {
    "id": "csc311_075",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is ODBC?",
    "options": [
      "Online Database Connection",
      "Open Database Connectivity",
      "Offline Data Backup Control",
      "Object Database Configuration"
    ],
    "correctAnswer": 1,
    "explanation": "ODBC stands for Open Database Connectivity, which is a set of standards that ensures software can be used with any ODBC-compliant database."
  },
  {
    "id": "csc311_076",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What does ODBC ensure?",
    "options": [
      "Data is encrypted",
      "Software written to comply with ODBC standards can be used with any ODBC-compliant database",
      "Data is automatically backed up",
      "Networks are secure"
    ],
    "correctAnswer": 1,
    "explanation": "ODBC is a set of standards that ensures software written to comply with these standards can be used with any ODBC-compliant database."
  },
  {
    "id": "csc311_077",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is an Object-Relational Database Management System (ORDBMS)?",
    "options": [
      "A DBMS that can only handle text data",
      "A DBMS capable of manipulating audio, video, and graphical data",
      "A DBMS that only works offline",
      "A DBMS for backup purposes only"
    ],
    "correctAnswer": 1,
    "explanation": "An Object-Relational Database Management System (ORDBMS) is a DBMS capable of manipulating audio, video, and graphical data."
  },
  {
    "id": "csc311_078",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is hypertext?",
    "options": [
      "A method that allows users to search and manipulate alphanumeric data in an unstructured way",
      "A method for storing multimedia data",
      "A network protocol",
      "A database backup system"
    ],
    "correctAnswer": 0,
    "explanation": "Hypertext allows users to search and manipulate alphanumeric data in an unstructured way."
  },
  {
    "id": "csc311_079",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is hypermedia?",
    "options": [
      "A method for storing text only",
      "A method that allows businesses to search and manipulate multimedia forms of data",
      "A type of network",
      "A programming language"
    ],
    "correctAnswer": 1,
    "explanation": "Hypermedia allows businesses to search and manipulate multimedia forms of data."
  },
  {
    "id": "csc311_080",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is spatial data technology?",
    "options": [
      "Technology for audio processing",
      "Use of an object-relational database to store and access data according to the location it describes",
      "Technology for video streaming",
      "Technology for text processing"
    ],
    "correctAnswer": 1,
    "explanation": "Spatial data technology is the use of an object-relational database to store and access data according to the location it describes and to permit spatial queries and analysis."
  },
  {
    "id": "csc311_081",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In planned data redundancy, summary totals are:",
    "options": [
      "Always calculated from elemental data",
      "Carried in the data records rather than calculated from elemental data",
      "Never stored",
      "Deleted automatically"
    ],
    "correctAnswer": 1,
    "explanation": "In planned data redundancy, summary totals are carried in the data records rather than calculated from elemental data to improve performance."
  },
  {
    "id": "csc311_082",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "The difference between the hierarchical and network database models is:",
    "options": [
      "Hierarchical uses tables, network uses trees",
      "In the network model, a member may have many owners",
      "Network model uses two-dimensional tables",
      "They are exactly the same"
    ],
    "correctAnswer": 1,
    "explanation": "The network data model is an expansion of the hierarchical database model with an owner-member relationship in which a member may have many owners."
  },
  {
    "id": "csc311_083",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Relations in a relational database are the logical equivalent of:",
    "options": [
      "Characters",
      "Fields",
      "Records",
      "Files"
    ],
    "correctAnswer": 3,
    "explanation": "In the relational data model, all data elements are placed in two-dimensional tables, called relations, that are the logical equivalent of files."
  },
  {
    "id": "csc311_084",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which database model uses owner-member relationships?",
    "options": [
      "Relational model",
      "Hierarchical model",
      "Network model",
      "Flat file model"
    ],
    "correctAnswer": 2,
    "explanation": "The network data model uses owner-member relationships in which a member may have many owners."
  },
  {
    "id": "csc311_085",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is a DDL function?",
    "options": [
      "SELECT",
      "INSERT",
      "TRUNCATE",
      "UPDATE"
    ],
    "correctAnswer": 2,
    "explanation": "TRUNCATE (truncate tables) is a DDL function. DDL functions include create, alter, drop/delete, rename, and truncate."
  },
  {
    "id": "csc311_086",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which SQL category is used to control access permissions?",
    "options": [
      "DDL",
      "DML",
      "DCL",
      "TCL"
    ],
    "correctAnswer": 2,
    "explanation": "DCL (Data Control Language) is used to control access permissions to the database."
  },
  {
    "id": "csc311_087",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which SQL category is used to manage transactions?",
    "options": [
      "DDL",
      "DML",
      "DCL",
      "TCL"
    ],
    "correctAnswer": 3,
    "explanation": "TCL (Transaction Control Language) is used to manage transactions in the database."
  },
  {
    "id": "csc311_088",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Microsoft Access is an example of:",
    "options": [
      "A word processor",
      "A spreadsheet application",
      "A database management system",
      "A presentation software"
    ],
    "correctAnswer": 2,
    "explanation": "Microsoft Access is a popular Database Management System for end users."
  },
  {
    "id": "csc311_089",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Lotus Approach 98 is an example of:",
    "options": [
      "An operating system",
      "A database management system",
      "A programming language",
      "A network protocol"
    ],
    "correctAnswer": 1,
    "explanation": "Lotus Approach 98 is mentioned as one of the popular Database Management Systems for end users."
  },
  {
    "id": "csc311_090",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is a DBMS selection criterion?",
    "options": [
      "Performance",
      "Color scheme",
      "Font type",
      "Icon design"
    ],
    "correctAnswer": 0,
    "explanation": "Performance is one of the DBMS selection criteria. Others include database size, number of concurrent users, integration, features, vendor, and cost."
  },
  {
    "id": "csc311_091",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is a data mining application?",
    "options": [
      "Market basket analysis",
      "Word processing",
      "Email management",
      "Calendar scheduling"
    ],
    "correctAnswer": 0,
    "explanation": "Market basket analysis is a data mining application used to discover purchasing patterns."
  },
  {
    "id": "csc311_092",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Customer queries is an application of:",
    "options": [
      "Word processing",
      "Data mining",
      "Network configuration",
      "Video editing"
    ],
    "correctAnswer": 1,
    "explanation": "Customer queries is one of the data mining applications listed."
  },
  {
    "id": "csc311_093",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Fraud detection is an application of:",
    "options": [
      "Data entry",
      "Data backup",
      "Data mining",
      "Data deletion"
    ],
    "correctAnswer": 2,
    "explanation": "Fraud detection is one of the data mining applications."
  },
  {
    "id": "csc311_094",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "OLAP is now used to:",
    "options": [
      "Delete data from databases",
      "Store and deliver data warehouse information",
      "Create network connections",
      "Write programs"
    ],
    "correctAnswer": 1,
    "explanation": "OLAP is now used to store and deliver data warehouse information."
  },
  {
    "id": "csc311_095",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What information does a data dictionary contain about a data element?",
    "options": [
      "Only the name of the data element",
      "Description, other names, value range, data type, and positions",
      "Only the data type",
      "Only the value range"
    ],
    "correctAnswer": 1,
    "explanation": "A data dictionary contains detailed information including data element name, description, other names, value range, data type, and positions/columns."
  },
  {
    "id": "csc311_096",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What does the term 'metadata' mean?",
    "options": [
      "Data that is deleted",
      "Data about data",
      "Data that is encrypted",
      "Data that is compressed"
    ],
    "correctAnswer": 1,
    "explanation": "Metadata is data about data. A data dictionary describes metadata - what data exists, what each data means, where it is stored, and how it is used."
  },
  {
    "id": "csc311_097",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which advantage of the database approach refers to easier modification and updating?",
    "options": [
      "Data redundancy",
      "Program-data dependence",
      "Data and program independence",
      "Increased vulnerability"
    ],
    "correctAnswer": 2,
    "explanation": "Data and program independence is an advantage that allows for easier modification and updating in the database approach."
  },
  {
    "id": "csc311_098",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following best describes the difference between a schema and a subschema?",
    "options": [
      "A schema is for users, a subschema is for administrators",
      "A schema describes the entire database, a subschema describes a subset accessible to a particular user",
      "They are the same thing",
      "A subschema is larger than a schema"
    ],
    "correctAnswer": 1,
    "explanation": "A schema describes the entire database (blueprint of whole database), while a subschema describes a subset of the database accessible to a particular user (user-specific view)."
  },
  {
    "id": "csc311_099",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Inprise (formerly Borland) dBASE is an example of:",
    "options": [
      "An operating system",
      "A programming language",
      "A database management system",
      "A network protocol"
    ],
    "correctAnswer": 2,
    "explanation": "Inprise (formerly Borland) dBASE is mentioned as one of the popular Database Management Systems for end users."
  },
  {
    "id": "csc311_100",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "The 'vendor' is one of the criteria for:",
    "options": [
      "Network selection",
      "DBMS selection",
      "Operating system selection",
      "Hardware selection"
    ],
    "correctAnswer": 1,
    "explanation": "The vendor is one of the DBMS selection criteria, along with database size, number of concurrent users, performance, integration, features, and cost."
  },
  {
    "id": "csc311_101",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Direct marketing is an application of:",
    "options": [
      "Network administration",
      "Data mining",
      "System backup",
      "Hardware maintenance"
    ],
    "correctAnswer": 1,
    "explanation": "Direct marketing is one of the data mining applications."
  },
  {
    "id": "csc311_102",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Trend analysis is an application of:",
    "options": [
      "Word processing",
      "Spreadsheet",
      "Data mining",
      "Presentation software"
    ],
    "correctAnswer": 2,
    "explanation": "Trend analysis is one of the data mining applications."
  },
  {
    "id": "csc311_103",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "The first step in designing a customer data warehouse is to:",
    "options": [
      "Choose the software",
      "Sharply define your goals and objectives",
      "Measure results",
      "Install the database"
    ],
    "correctAnswer": 1,
    "explanation": "The first step in designing a customer data warehouse is to sharply define your goals and objectives before you build the warehouse."
  },
  {
    "id": "csc311_104",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is an advantage of the database approach?",
    "options": [
      "Increased vulnerability",
      "Higher cost of specialized staff",
      "Standardization of data access",
      "Higher operating costs"
    ],
    "correctAnswer": 2,
    "explanation": "Standardization of data access is an advantage of the database approach."
  },
  {
    "id": "csc311_105",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Oracle is an example of:",
    "options": [
      "A hierarchical database",
      "A network database",
      "A relational database management system",
      "A flat file database"
    ],
    "correctAnswer": 2,
    "explanation": "Oracle is mentioned as an example of a relational database management system, along with MySQL and SQL Server."
  },
  {
    "id": "csc311_106",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "SQL Server is an example of:",
    "options": [
      "A hierarchical database",
      "A network database",
      "A relational database management system",
      "An object-oriented database"
    ],
    "correctAnswer": 2,
    "explanation": "SQL Server (SQL) is mentioned as an example of a relational database management system."
  },
  {
    "id": "csc311_107",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In the WHERE clause of SQL, what is the purpose?",
    "options": [
      "To specify which tables to use",
      "To specify conditions for filtering records",
      "To create new tables",
      "To delete databases"
    ],
    "correctAnswer": 1,
    "explanation": "The WHERE clause in SQL specifies conditions for filtering records. For example, WHERE JOB_CLASSIFICATION = 'C2' filters records where the job classification equals C2."
  },
  {
    "id": "csc311_108",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What does a key field uniquely identify?",
    "options": [
      "A database",
      "A file",
      "A record",
      "A character"
    ],
    "correctAnswer": 2,
    "explanation": "A key is a field or set of fields that uniquely identifies the record."
  },
  {
    "id": "csc311_109",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following simplifies database modification?",
    "options": [
      "Data redundancy",
      "Data dictionary",
      "Data deletion",
      "Data corruption"
    ],
    "correctAnswer": 1,
    "explanation": "One of the features of a data dictionary is that it simplifies database modification."
  },
  {
    "id": "csc311_110",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What increases data reliability?",
    "options": [
      "Data redundancy",
      "Data corruption",
      "Data dictionary",
      "Data deletion"
    ],
    "correctAnswer": 2,
    "explanation": "One of the features of a data dictionary is that it increases data reliability."
  },
  {
    "id": "csc311_111",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In a relational database, what operation would you use to get specific columns from a table?",
    "options": [
      "Selecting",
      "Projecting",
      "Joining",
      "Linking"
    ],
    "correctAnswer": 1,
    "explanation": "Projecting is the data manipulation operation that eliminates columns in a table, effectively getting specific columns."
  },
  {
    "id": "csc311_112",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "In a relational database, what operation would you use to filter rows based on criteria?",
    "options": [
      "Projecting",
      "Selecting",
      "Joining",
      "Linking"
    ],
    "correctAnswer": 1,
    "explanation": "Selecting is the data manipulation operation that eliminates rows according to certain criteria."
  },
  {
    "id": "csc311_113",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "What is the purpose of the 'integration' criterion in DBMS selection?",
    "options": [
      "To determine the color of the interface",
      "To evaluate how well the DBMS works with other systems",
      "To count the number of users",
      "To measure database size"
    ],
    "correctAnswer": 1,
    "explanation": "Integration is a DBMS selection criterion that evaluates how well the DBMS integrates with other systems and applications."
  },
  {
    "id": "csc311_114",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Data is described as a necessity for:",
    "options": [
      "Entertainment purposes only",
      "Almost any enterprise to carry out its business",
      "Personal hobbies",
      "Social media only"
    ],
    "correctAnswer": 1,
    "explanation": "Data is described as a necessity for almost any enterprise to carry out its business."
  },
  {
    "id": "csc311_115",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "A DBMS provides an interface between:",
    "options": [
      "Hardware and software only",
      "The database and the user or other application programs",
      "Networks and servers",
      "Printers and monitors"
    ],
    "correctAnswer": 1,
    "explanation": "A DBMS provides an interface between the database and the user of the database or other application programs."
  },
  {
    "id": "csc311_116",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following represents the correct relationship?",
    "options": [
      "Entity contains attributes",
      "Attribute contains entities",
      "Key contains entities",
      "Character contains fields"
    ],
    "correctAnswer": 0,
    "explanation": "An entity has attributes. For example, the entity 'Customer' has attributes like 'Customer name' and 'Customer ID'."
  },
  {
    "id": "csc311_117",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "The database approach provides a framework for:",
    "options": [
      "Hardware development",
      "Program development",
      "Network configuration",
      "Operating system design"
    ],
    "correctAnswer": 1,
    "explanation": "One of the advantages of the database approach is that it provides a framework for program development."
  },
  {
    "id": "csc311_118",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Better overall protection of the data is an advantage of:",
    "options": [
      "The traditional approach",
      "The database approach",
      "The flat file approach",
      "The manual approach"
    ],
    "correctAnswer": 1,
    "explanation": "Better overall protection of the data is an advantage of the database approach."
  },
  {
    "id": "csc311_119",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Shared data and information resources is an advantage of:",
    "options": [
      "The traditional approach",
      "Program-data dependence",
      "The database approach",
      "Data redundancy"
    ],
    "correctAnswer": 2,
    "explanation": "Shared data and information resources is an advantage of the database approach."
  },
  {
    "id": "csc311_120",
    "course": "CSC 311",
    "chapter": "Chapter 2",
    "text": "Which of the following is TRUE about entities and records?",
    "options": [
      "Entities and records are completely unrelated",
      "Each entity instance typically corresponds to a record in a database",
      "Records cannot store entity data",
      "Entities are smaller than characters"
    ],
    "correctAnswer": 1,
    "explanation": "In the diagram showing keys and attributes, entities correspond to records in the database. Each instance of an entity is stored as a record."
  }
];

export default csc311Chapter2;
