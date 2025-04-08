import Link from 'next/link';

export default function UserDetail({ user }) {
    if (!user) return <p>User tidak ditemukan.</p>;

    return (
        <div>
            <h1>Detail Pengguna</h1>
            <p><strong>Nama:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <Link href="/users">
                ← Kembali ke daftar pengguna
            </Link>
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map(user => ({
        params: { id: user.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
}
