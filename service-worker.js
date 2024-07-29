self.addEventListener('notificatinclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://localhost:44396/')
    );
});
