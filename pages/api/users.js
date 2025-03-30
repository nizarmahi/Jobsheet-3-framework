export default async function handler(req, res) {
    const { id } = req.query;
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    } else {
        return res.json(user);
    }
}