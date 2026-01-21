
function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <p>Please log in.</p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="name" style={{ width: '120px', textAlign: 'right', marginRight: '10px' }}>Name:</label>
                    <input type="text" id="name" name="name" required style={{ flex: 1 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="dob" style={{ width: '120px', textAlign: 'right', marginRight: '10px' }}>Date of Birth:</label>
                    <input type="text" id="dob" name="dob" placeholder="DD/MM/YYYY" required style={{ flex: 1 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="email" style={{ width: '120px', textAlign: 'right', marginRight: '10px' }}>Email:</label>
                    <input type="email" id="email" name="email" required style={{ flex: 1 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
                    <input type="checkbox" id="newsletter" name="newsletter" />
                    <label htmlFor="newsletter">Interested in receiving personalised mails</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
