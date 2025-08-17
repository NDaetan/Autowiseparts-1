const orders = require('../../server/models/Order');

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    switch (req.method) {
        case 'GET':
            res.json(orders);
            break;
        case 'POST':
            const newOrder = {
                id: orders.length + 1,
                ...req.body,
            };
            orders.push(newOrder);
            res.status(201).json(newOrder);
            break;
        default:
            res.status(405).json({ message: 'Method not allowed' });
    }
};
