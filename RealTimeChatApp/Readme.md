3. Real-time chat apps
Node.JS is perfect for developing real-time messenger applications. Everything from sending messages to displaying them to noting the timestamps and displaying receipts can be seamlessly handled using the Node.JS framework – and all of this without the user having to refresh the page. If you’ve used any chat platform – Facebook, WhatsApp, and Instagram – you’ll know exactly what we’re talking about.
The powerful Event API present in Node.JS emits “listener” events that are emitted by event handlers. Because of this powerful functionality, Node makes it easier to implement push notifications and server-side events in IM and other real-time chats.

If you're using socket.io v3 you might get "Access to XMLHttpRequest has been blocked by CORS policy” error.
To fix that you have to pass {  cors: { origin: "http://localhost: <yourport>", methods: ["GET", "POST"] } } as the second
argument when you invoke socketio method.
