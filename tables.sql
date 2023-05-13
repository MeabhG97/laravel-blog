INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES (NULL, 'Dave Harrison', 'dave@gmail.com', NULL, '$2y$10$SS7vdy1VEJnQD4g3b3H9AOaMYyJl0/PD/xH0NXb8NDzflpUdSDdOK', NULL, '2023-05-11 10:09:20', '2023-05-11 10:09:20');
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES (NULL, 'Harry Hughes', 'harry@gmail.com', NULL, '$2y$10$SS7vdy1VEJnQD4g3b3H9AOaMYyJl0/PD/xH0NXb8NDzflpUdSDdOK', NULL, '2023-05-11 10:09:20', '2023-05-11 10:09:20');
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES (NULL, 'Michelle Kent', 'michelle@gmail.com', NULL, '$2y$10$SS7vdy1VEJnQD4g3b3H9AOaMYyJl0/PD/xH0NXb8NDzflpUdSDdOK', NULL, '2023-05-11 10:09:20', '2023-05-11 10:09:20');
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES (NULL, 'Alexa Styles', 'alexa@gmail.com', NULL, '$2y$10$SS7vdy1VEJnQD4g3b3H9AOaMYyJl0/PD/xH0NXb8NDzflpUdSDdOK', NULL, '2023-05-11 10:09:20', '2023-05-11 10:09:20');
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES (NULL, 'Spike Donnelly', 'spike@gmail.com', NULL, '$2y$10$SS7vdy1VEJnQD4g3b3H9AOaMYyJl0/PD/xH0NXb8NDzflpUdSDdOK', NULL, '2023-05-11 10:09:20', '2023-05-11 10:09:20');

INSERT INTO `posts` (`id`, `slug`, `title`, `description`, `image_path`, `created_at`, `updated_at`, `user_id`) VALUES (NULL, 'post-one', 'So you want to be a web developer? ', 'So you want to be a web developer? Congratulations, you have chosen a rewarding and challenging career path that will allow you to express your creativity and solve real-world problems. But before you dive into the world of web development, there are some things you should know.

First of all, web development is not just about writing code. It\'s also about designing user interfaces, testing and debugging, deploying and maintaining websites, and collaborating with other developers and clients. You will need to learn a variety of skills and tools, such as HTML, CSS, JavaScript, frameworks, libraries, databases, APIs, version control, and more. Don\'t worry if this sounds overwhelming. You don\'t have to learn everything at once. You can start with the basics and gradually build up your knowledge and experience.

Secondly, web development is not a one-size-fits-all profession. There are different types of web developers, such as front-end developers, back-end developers, full-stack developers, and web designers. Each type has its own responsibilities and requirements. For example, front-end developers focus on the visual and interactive aspects of a website, while back-end developers handle the data and logic behind the scenes. Full-stack developers can do both front-end and back-end development, while web designers create the layout and aesthetics of a website. Depending on your interests and goals, you can choose to specialize in one type or become a jack-of-all-trades.

Thirdly, web development is not a static field. It is constantly evolving and changing with new technologies and trends. You will need to keep up with the latest developments and best practices in the industry. You will also need to adapt to different projects and clients\' needs. You will never get bored or run out of things to learn in web development. But you will also face challenges and frustrations along the way. You will encounter bugs, errors, deadlines, feedbacks, and sometimes difficult clients. You will need to have patience, perseverance, and problem-solving skills to overcome these obstacles.

Finally, web development is not a solo endeavor. It is a collaborative and social activity that involves working with other people. You will need to communicate effectively with your teammates and clients. You will need to share your ideas and opinions, listen to others\' feedbacks and suggestions, and compromise when necessary. You will also need to network with other web developers and join online communities where you can learn from each other, exchange tips and resources, and find opportunities.

So you want to be a web developer? Great! You have made a wise decision that will open up many doors for you in the future. But remember that web development is not easy. It takes hard work, dedication, passion, and curiosity to succeed in this field. If you are ready to embark on this journey, I wish you all the best. And remember to have fun along the way!', 'webdev.jpg', '2023-05-11 10:10:24', '2023-05-11 10:10:24', '1');


INSERT INTO `posts` (`id`, `slug`, `title`, `description`, `image_path`, `created_at`, `updated_at`, `user_id`) VALUES (NULL, 'post-two', 'Program with STRIDE! App security tips for programmers', "Hi everyone, welcome to my blog! Today I'm going to share with you some app security tips for programmers, using a simple but powerful framework called STRIDE. STRIDE stands for Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege. These are the six main types of threats that you should consider when designing and developing your app.

Let's go through each one of them and see how you can use STRIDE to identify and mitigate them.

Spoofing: This is when an attacker pretends to be someone or something else, such as a user, a device, or a network. For example, an attacker could spoof your app's login page and trick users into entering their credentials. To prevent spoofing, you should use strong authentication mechanisms, such as passwords, biometrics, or tokens. You should also encrypt your communication channels and verify the identity of your endpoints.

Tampering: This is when an attacker modifies or damages your app's data or code, either in transit or at rest. For example, an attacker could tamper with your app's database and change the prices of your products. To prevent tampering, you should use integrity checks, such as checksums, digital signatures, or hashes. You should also use encryption and access control to protect your data and code from unauthorized changes.

Repudiation: This is when an attacker denies performing an action or a user denies receiving a service. For example, an attacker could repudiate sending a malicious message or a user could repudiate making a purchase. To prevent repudiation, you should use logging and auditing mechanisms, such as timestamps, receipts, or certificates. You should also use non-repudiation techniques, such as digital signatures or blockchain.

Information disclosure: This is when an attacker gains access to your app's sensitive information, such as personal data, business secrets, or credentials. For example, an attacker could exploit a vulnerability in your app and leak your users' email addresses. To prevent information disclosure, you should use encryption and access control to protect your data from unauthorized access. You should also use data minimization and anonymization techniques to reduce the amount of data you collect and store.

Denial of service: This is when an attacker prevents your app from functioning properly or providing service to your users. For example, an attacker could flood your app with requests and overload your server. To prevent denial of service, you should use throttling and caching mechanisms to limit and optimize your app's resource consumption. You should also use load balancing and redundancy techniques to distribute and backup your app's workload.

Elevation of privilege: This is when an attacker gains more privileges or access than they are supposed to have. For example, an attacker could exploit a bug in your app and gain admin rights. To prevent elevation of privilege, you should use the principle of least privilege and assign the minimum permissions required for each role or task. You should also use input validation and output sanitization techniques to prevent code injection attacks.

As you can see, STRIDE is a handy tool for programmers who want to make their apps more secure. By using STRIDE, you can identify the potential threats that your app faces and apply the appropriate countermeasures to mitigate them. I hope you found this blog post useful and informative. If you have any questions or feedback, feel free to leave a comment below. Thanks for reading and happy coding!", 'cybersec.jpeg', '2023-05-11 10:10:38', '2023-05-11 10:10:38', '2');


INSERT INTO `posts` (`id`, `slug`, `title`, `description`, `image_path`, `created_at`, `updated_at`, `user_id`) VALUES (NULL, 'post-three', 'Top 5 HTML tags ', '
Hello, fellow web developers! Today I\'m going to share with you my top 5 HTML tags that I use all the time. These tags are not only useful, but also fun to play with. Let\'s get started!

1. <marquee>: This tag makes your text scroll across the screen like a news ticker. It\'s great for adding some movement and dynamism to your website. You can also change the direction, speed, and behavior of the scrolling text with some attributes. For example, <marquee direction="up" behavior="alternate">This text will bounce up and down</marquee>.

2. <blink>: This tag makes your text blink on and off like a neon sign. It\'s perfect for drawing attention to something important or urgent. You can also combine it with other tags like <font> or <span> to change the color and size of the blinking text. For example, <blink><font color="red" size="5">This text is very important</font></blink>.

3. <audio>: This tag allows you to embed audio files in your web page. You can also control the playback with some attributes like autoplay, loop, and controls. You can use this tag to add some background music, sound effects, or voice recordings to your website. For example, <audio src="song.mp3" autoplay loop controls>This is a song</audio>.

4. <iframe>: This tag allows you to embed another web page within your web page. You can use this tag to display content from other websites, such as videos, maps, or social media posts. You can also adjust the size and appearance of the embedded web page with some attributes like width, height, and frameborder. For example, <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315" frameborder="0">This is a video</iframe>.

5. <canvas>: This tag allows you to draw graphics on your web page using JavaScript. You can use this tag to create animations, games, charts, or art on your website. You can also manipulate the pixels and colors of the graphics with some methods and properties. For example, <canvas id="myCanvas" width="200" height="200">This is a canvas</canvas><script>var c = document.getElementById("myCanvas");var ctx = c.getContext("2d");ctx.fillStyle = "blue";ctx.fillRect(50, 50, 100, 100);</script>.

These are my top 5 HTML tags that I love to use. I hope you enjoyed this blog post and learned something new. If you have any questions or comments, feel free to leave them below. Thanks for reading!', 'html.jpg', '2023-05-11 10:10:38', '2023-05-11 10:10:38', '3');


INSERT INTO `posts` (`id`, `slug`, `title`, `description`, `image_path`, `created_at`, `updated_at`, `user_id`) VALUES (NULL, 'post-four', 'MySQL vs MongoDB ', "Are you confused about which database to use for your next web project? Do you want to know the pros and cons of MySQL and MongoDB? Well, look no further, because in this blog post, I will compare these two popular database systems and help you decide which one is best for you.

MySQL is a relational database management system (RDBMS) that uses tables and rows to store data. It is one of the oldest and most widely used databases in the world. It supports structured query language (SQL) for data access and manipulation. MySQL is great for applications that need complex queries, transactions, and data integrity.

MongoDB is a non-relational database management system (NoSQL) that uses documents and collections to store data. It is one of the newest and most popular databases in the world. It supports MongoDB query language (MQL) for data access and manipulation. MongoDB is great for applications that need flexibility, scalability, and performance.

MySQL and MongoDB differ in many ways, such as:

- Data model: MySQL uses a fixed schema with predefined data types, while MongoDB uses a dynamic schema with flexible data types.
- Data storage: MySQL stores data in tables and rows, while MongoDB stores data in collections and documents.
- Data query: MySQL uses SQL, which is a declarative language that specifies what data to retrieve, while MongoDB uses MQL, which is an imperative language that specifies how to retrieve data.
- Data consistency: MySQL enforces referential integrity and ACID properties, which ensure data consistency and reliability, while MongoDB does not enforce these rules, which allow for faster and easier data updates.
- Data scalability: MySQL scales vertically, which means adding more resources to a single server, while MongoDB scales horizontally, which means adding more servers to a cluster.

The answer to which one you should choose depends on your application requirements and preferences. Here are some general guidelines:

- Choose MySQL if you need complex queries, transactions, and data integrity.
- Choose MongoDB if you need flexibility, scalability, and performance.

Of course, these are not hard-and-fast rules. You can also use both databases in the same application, depending on the use case. For example, you can use MySQL for your user authentication and billing system, and use MongoDB for your product catalog and recommendation system.

MySQL and MongoDB are both powerful and popular database systems that have their own strengths and weaknesses. You should evaluate your application needs and preferences before choosing one over the other. I hope this blog post has helped you understand the differences between MySQL and MongoDB and make an informed decision. Happy coding!", 'data.jpg', '2023-05-11 10:10:38', '2023-05-11 10:10:38', '4');


INSERT INTO `posts` (`id`, `slug`, `title`, `description`, `image_path`, `created_at`, `updated_at`, `user_id`) VALUES (NULL, 'post-five', '2023 CodeMaestro competition results ', "Hello, fellow coders! I'm sure you're all eager to find out who won the 2023 CodeMaestro competition, the ultimate challenge for programmers of all levels and languages. Well, the results are in, and I'm here to announce the top three winners who impressed the judges with their creativity, efficiency and elegance. Drum roll, please...

🥉 Third place goes to Alice Smith, who wrote a Python script that can generate hilarious memes based on any topic. Her code was praised for its simplicity, readability and humor. She wins a $500 Amazon gift card and a lifetime subscription to Codecademy Pro.

🥈 Second place goes to Bob Jones, who created a Java app that can analyze any piece of music and compose a new song in the same style. His code was admired for its complexity, originality and musicality. He wins a $1000 Apple gift card and a one-year membership to Spotify Premium.

🥇 And the grand prize goes to... Charlie Lee, who developed a C++ program that can solve any Sudoku puzzle in less than a second. His code was applauded for its speed, accuracy and elegance. He wins a $2000 Google gift card and a brand new MacBook Pro.

Congratulations to the winners and thank you to all the participants for showing your amazing skills and passion for coding. Stay tuned for the next CodeMaestro competition in 2024!", 'competition.jpg', '2023-05-11 10:10:38', '2023-05-11 10:10:38', '5');