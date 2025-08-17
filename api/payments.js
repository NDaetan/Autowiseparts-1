module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        // Simulate payment processing
        const success = Math.random() < 0.8; // 80% success rate
        if (success) {
            res.json({ success: true, message: 'Payment successful' });
        } else {
            res.status(400).json({ success: false, message: 'Payment failed' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
